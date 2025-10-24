import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand } from '@aws-sdk/lib-dynamodb';
import * as bcrypt from 'bcryptjs';
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
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email and password required' }),
      };
    }

    // Query user by email
    const command = new QueryCommand({
      TableName: TABLES.members,
      IndexName: 'GSI1',
      KeyConditionExpression: 'GSI1PK = :email AND GSI1SK = :sk',
      ExpressionAttributeValues: {
        ':email': `EMAIL#${email.toLowerCase()}`,
        ':sk': 'MEMBER'
      }
    });

    const result = await docClient.send(command);
    const member = result.Items?.[0];

    if (!member || !member.passwordHash) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid credentials' }),
      };
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, member.passwordHash);

    if (!isValidPassword) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid credentials' }),
      };
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

    console.log('Member signed in successfully:', member.memberId);

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

  } catch (error) {
    console.error('Signin error:', error);
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
