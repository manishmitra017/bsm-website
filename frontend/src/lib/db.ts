/**
 * Database Client Configuration
 *
 * Provides DynamoDB client that works with both local and production environments.
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  QueryCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand
} from '@aws-sdk/lib-dynamodb';

const isLocal = process.env.USE_LOCAL_DYNAMODB === 'true';

// Create DynamoDB client
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || 'ap-southeast-2',
  ...(isLocal && {
    endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
    credentials: {
      accessKeyId: 'local',
      secretAccessKey: 'local'
    }
  })
});

// Create Document client for easier JSON operations
export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertClassInstanceToMap: true
  },
  unmarshallOptions: {
    wrapNumbers: false
  }
});

// Table names
export const TABLES = {
  members: process.env.DYNAMODB_TABLE_NAME || 'bsm-members-local',
  adminLogs: process.env.DYNAMODB_ADMIN_LOGS_TABLE || 'bsm-admin-logs-local'
};

// Export command types for use in API routes
export {
  PutCommand,
  GetCommand,
  QueryCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand
};
