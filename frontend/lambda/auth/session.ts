import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production';

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
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
    // Extract token from Authorization header
    const authHeader = event.headers?.Authorization || event.headers?.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'No token provided' }),
      };
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as any;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        user: {
          id: decoded.id,
          email: decoded.email,
          name: decoded.name,
          memberId: decoded.memberId,
          membershipStatus: decoded.membershipStatus,
          membershipType: decoded.membershipType,
          isAdmin: decoded.isAdmin
        }
      }),
    };

  } catch (error) {
    console.error('Session validation error:', error);

    if (error instanceof jwt.TokenExpiredError) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Token expired' }),
      };
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Invalid token' }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}
