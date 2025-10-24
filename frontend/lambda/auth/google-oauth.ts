import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import * as jwt from 'jsonwebtoken';

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-southeast-2' });
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: { removeUndefinedValues: true },
  unmarshallOptions: { wrapNumbers: false }
});

const TABLES = {
  members: process.env.DYNAMODB_TABLE_NAME || 'bsm-members-prod'
};

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

// Generate unique member ID
async function generateMemberId(): Promise<string> {
  const year = new Date().getFullYear();
  const prefix = `BSM${year}`;

  // Simple implementation - for production, use atomic counter
  const timestamp = Date.now().toString().slice(-3);
  return `${prefix}${timestamp}`;
}

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { googleToken } = body;

    if (!googleToken) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Google token required' }),
      };
    }

    // Verify Google token
    const googleUserInfoResponse = await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${googleToken}`
    );

    if (!googleUserInfoResponse.ok) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid Google token' }),
      };
    }

    const googleUser = await googleUserInfoResponse.json();

    if (googleUser.aud !== GOOGLE_CLIENT_ID) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid client ID' }),
      };
    }

    const email = googleUser.email.toLowerCase();
    const googleId = googleUser.sub;
    const firstName = googleUser.given_name || '';
    const lastName = googleUser.family_name || '';
    const profilePicture = googleUser.picture || '';

    // Check if user already exists by email
    const checkEmailCommand = new QueryCommand({
      TableName: TABLES.members,
      IndexName: 'GSI1',
      KeyConditionExpression: 'GSI1PK = :email AND GSI1SK = :sk',
      ExpressionAttributeValues: {
        ':email': `EMAIL#${email}`,
        ':sk': 'MEMBER'
      }
    });

    const existingByEmail = await docClient.send(checkEmailCommand);

    if (existingByEmail.Items && existingByEmail.Items.length > 0) {
      const member = existingByEmail.Items[0];

      // Update Google ID if not already set
      if (!member.googleId) {
        // TODO: Update member with Google ID
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          id: member.memberId,
          email: member.email,
          name: `${member.firstName} ${member.lastName}`,
          memberId: member.memberId,
          isAdmin: member.isAdmin || false,
          membershipStatus: member.membershipStatus,
          membershipType: member.membershipType
        },
        JWT_SECRET,
        { expiresIn: '30d' }
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          token,
          user: {
            id: member.memberId,
            email: member.email,
            name: `${member.firstName} ${member.lastName}`,
            memberId: member.memberId,
            membershipStatus: member.membershipStatus,
            membershipType: member.membershipType,
            isAdmin: member.isAdmin || false
          }
        }),
      };
    }

    // Check if user exists by Google ID
    const checkGoogleCommand = new QueryCommand({
      TableName: TABLES.members,
      IndexName: 'GSI2',
      KeyConditionExpression: 'GSI2PK = :googleId AND GSI2SK = :sk',
      ExpressionAttributeValues: {
        ':googleId': `GOOGLE#${googleId}`,
        ':sk': 'MEMBER'
      }
    });

    const existingByGoogle = await docClient.send(checkGoogleCommand);

    if (existingByGoogle.Items && existingByGoogle.Items.length > 0) {
      const member = existingByGoogle.Items[0];

      // Generate JWT token
      const token = jwt.sign(
        {
          id: member.memberId,
          email: member.email,
          name: `${member.firstName} ${member.lastName}`,
          memberId: member.memberId,
          isAdmin: member.isAdmin || false,
          membershipStatus: member.membershipStatus,
          membershipType: member.membershipType
        },
        JWT_SECRET,
        { expiresIn: '30d' }
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          token,
          user: {
            id: member.memberId,
            email: member.email,
            name: `${member.firstName} ${member.lastName}`,
            memberId: member.memberId,
            membershipStatus: member.membershipStatus,
            membershipType: member.membershipType,
            isAdmin: member.isAdmin || false
          }
        }),
      };
    }

    // Create new user account
    const memberId = await generateMemberId();
    const now = new Date().toISOString();

    const memberProfile = {
      PK: `MEMBER#${memberId}`,
      SK: 'PROFILE',
      memberId,
      email,
      emailVerified: true, // Google accounts are verified
      googleId,
      profilePicture,
      firstName,
      lastName,
      phone: '',
      membershipType: 'SINGLE',
      membershipStatus: 'PENDING',
      joinedDate: now,
      createdAt: now,
      updatedAt: now,
      authProvider: 'GOOGLE',
      isAdmin: false,
      GSI1PK: `EMAIL#${email}`,
      GSI1SK: 'MEMBER',
      GSI2PK: `GOOGLE#${googleId}`,
      GSI2SK: 'MEMBER'
    };

    const putCommand = new PutCommand({
      TableName: TABLES.members,
      Item: memberProfile
    });

    await docClient.send(putCommand);

    console.log('Google user created successfully:', memberId);

    // Generate JWT token
    const token = jwt.sign(
      {
        id: memberId,
        email,
        name: `${firstName} ${lastName}`,
        memberId,
        isAdmin: false,
        membershipStatus: 'PENDING',
        membershipType: 'SINGLE'
      },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        token,
        user: {
          id: memberId,
          email,
          name: `${firstName} ${lastName}`,
          memberId,
          membershipStatus: 'PENDING',
          membershipType: 'SINGLE',
          isAdmin: false
        }
      }),
    };

  } catch (error) {
    console.error('Google OAuth error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
}
