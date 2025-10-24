import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import * as bcrypt from 'bcryptjs';

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'ap-southeast-2' });
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: { removeUndefinedValues: true },
  unmarshallOptions: { wrapNumbers: false }
});

const TABLES = {
  members: process.env.DYNAMODB_TABLE_NAME || 'bsm-members-prod'
};

// Generate unique member ID
async function generateMemberId(): Promise<string> {
  const year = new Date().getFullYear();
  const prefix = `BSM${year}`;

  const command = new ScanCommand({
    TableName: TABLES.members,
    FilterExpression: 'begins_with(memberId, :prefix) AND SK = :sk',
    ExpressionAttributeValues: {
      ':prefix': prefix,
      ':sk': 'PROFILE'
    }
  });

  const result = await docClient.send(command);
  const members = result.Items || [];

  if (members.length === 0) {
    return `${prefix}001`;
  }

  const sequences = members
    .map(m => parseInt(m.memberId.replace(prefix, '')))
    .filter(n => !isNaN(n));

  const maxSequence = Math.max(...sequences);
  const nextSequence = (maxSequence + 1).toString().padStart(3, '0');

  return `${prefix}${nextSequence}`;
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
    const { email, password, firstName, lastName, phone, recaptchaToken } = body;

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
      if (recaptchaSecret) {
        try {
          const recaptchaResponse = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
            }
          );

          const recaptchaData = await recaptchaResponse.json();

          if (!recaptchaData.success || recaptchaData.score < 0.5) {
            console.warn('reCAPTCHA failed:', recaptchaData);
            return {
              statusCode: 400,
              headers,
              body: JSON.stringify({ error: 'reCAPTCHA verification failed' }),
            };
          }

          console.log('reCAPTCHA passed. Score:', recaptchaData.score);
        } catch (recaptchaError) {
          console.error('reCAPTCHA verification error:', recaptchaError);
          // Continue anyway if reCAPTCHA service is down
        }
      }
    }

    // Validation
    if (!email || !password || !firstName || !lastName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
        }),
      };
    }

    // Check if user exists
    const checkCommand = new QueryCommand({
      TableName: TABLES.members,
      IndexName: 'GSI1',
      KeyConditionExpression: 'GSI1PK = :email AND GSI1SK = :sk',
      ExpressionAttributeValues: {
        ':email': `EMAIL#${email.toLowerCase()}`,
        ':sk': 'MEMBER',
      },
    });

    const existingUser = await docClient.send(checkCommand);
    if (existingUser.Items && existingUser.Items.length > 0) {
      return {
        statusCode: 409,
        headers,
        body: JSON.stringify({ error: 'Email already exists' }),
      };
    }

    // Generate member ID
    const memberId = await generateMemberId();

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    const now = new Date().toISOString();

    // Create member profile
    const memberProfile = {
      PK: `MEMBER#${memberId}`,
      SK: 'PROFILE',
      memberId,
      email: email.toLowerCase(),
      emailVerified: true, // Auto-verify in production, change to false if implementing email verification
      passwordHash,
      firstName,
      lastName,
      phone: phone || '',
      membershipType: 'SINGLE',
      membershipStatus: 'PENDING',
      joinedDate: now,
      createdAt: now,
      updatedAt: now,
      authProvider: 'EMAIL',
      isAdmin: false,
      GSI1PK: `EMAIL#${email.toLowerCase()}`,
      GSI1SK: 'MEMBER'
    };

    const putCommand = new PutCommand({
      TableName: TABLES.members,
      Item: memberProfile
    });

    await docClient.send(putCommand);

    console.log('Member created successfully:', memberId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        memberId,
        message: 'Account created successfully'
      }),
    };

  } catch (error) {
    console.error('Signup error:', error);
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
