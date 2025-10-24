#!/usr/bin/env node

/**
 * Setup Local DynamoDB Tables
 *
 * Creates the necessary DynamoDB tables for local development.
 * Run this after starting DynamoDB Local with docker-compose.
 *
 * Usage: npm run db:setup-local
 */

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
  CreateTableCommand,
  ListTablesCommand,
  DeleteTableCommand
} = require('@aws-sdk/client-dynamodb');

const ENDPOINT = 'http://localhost:8000';
const REGION = 'ap-southeast-2';

const client = new DynamoDBClient({
  endpoint: ENDPOINT,
  region: REGION,
  credentials: {
    accessKeyId: 'local',
    secretAccessKey: 'local'
  }
});

const TABLES = {
  members: 'bsm-members-local',
  adminLogs: 'bsm-admin-logs-local'
};

async function createMembersTable() {
  const params = {
    TableName: TABLES.members,
    KeySchema: [
      { AttributeName: 'PK', KeyType: 'HASH' },   // Partition key
      { AttributeName: 'SK', KeyType: 'RANGE' }   // Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: 'PK', AttributeType: 'S' },
      { AttributeName: 'SK', AttributeType: 'S' },
      { AttributeName: 'GSI1PK', AttributeType: 'S' },
      { AttributeName: 'GSI1SK', AttributeType: 'S' },
      { AttributeName: 'GSI2PK', AttributeType: 'S' },
      { AttributeName: 'GSI2SK', AttributeType: 'S' }
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'GSI1',
        KeySchema: [
          { AttributeName: 'GSI1PK', KeyType: 'HASH' },
          { AttributeName: 'GSI1SK', KeyType: 'RANGE' }
        ],
        Projection: { ProjectionType: 'ALL' },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        }
      },
      {
        IndexName: 'GSI2',
        KeySchema: [
          { AttributeName: 'GSI2PK', KeyType: 'HASH' },
          { AttributeName: 'GSI2SK', KeyType: 'RANGE' }
        ],
        Projection: { ProjectionType: 'ALL' },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        }
      }
    ],
    BillingMode: 'PROVISIONED',
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };

  await client.send(new CreateTableCommand(params));
  console.log(`✅ Created table: ${TABLES.members}`);
}

async function createAdminLogsTable() {
  const params = {
    TableName: TABLES.adminLogs,
    KeySchema: [
      { AttributeName: 'PK', KeyType: 'HASH' },
      { AttributeName: 'SK', KeyType: 'RANGE' }
    ],
    AttributeDefinitions: [
      { AttributeName: 'PK', AttributeType: 'S' },
      { AttributeName: 'SK', AttributeType: 'S' }
    ],
    BillingMode: 'PROVISIONED',
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };

  await client.send(new CreateTableCommand(params));
  console.log(`✅ Created table: ${TABLES.adminLogs}`);
}

async function listTables() {
  const { TableNames } = await client.send(new ListTablesCommand({}));
  return TableNames || [];
}

async function deleteTableIfExists(tableName) {
  try {
    await client.send(new DeleteTableCommand({ TableName: tableName }));
    console.log(`🗑️  Deleted existing table: ${tableName}`);
    // Wait a bit for deletion to complete
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) {
    if (error.name !== 'ResourceNotFoundException') {
      throw error;
    }
  }
}

async function setup(reset = false) {
  console.log('🚀 Setting up local DynamoDB tables...\n');
  console.log(`📍 Endpoint: ${ENDPOINT}`);
  console.log(`📍 Region: ${REGION}\n`);

  try {
    // Check if DynamoDB Local is running
    const existingTables = await listTables();
    console.log('📋 Existing tables:', existingTables.length > 0 ? existingTables : 'None\n');

    if (reset) {
      console.log('\n🔄 Reset mode enabled - deleting existing tables...\n');
      for (const tableName of Object.values(TABLES)) {
        await deleteTableIfExists(tableName);
      }
    }

    // Create Members table
    if (reset || !existingTables.includes(TABLES.members)) {
      console.log(`📦 Creating ${TABLES.members}...`);
      await createMembersTable();
    } else {
      console.log(`ℹ️  Table ${TABLES.members} already exists`);
    }

    // Create Admin Logs table
    if (reset || !existingTables.includes(TABLES.adminLogs)) {
      console.log(`📦 Creating ${TABLES.adminLogs}...`);
      await createAdminLogsTable();
    } else {
      console.log(`ℹ️  Table ${TABLES.adminLogs} already exists`);
    }

    // List final tables
    const finalTables = await listTables();
    console.log('\n✅ Setup complete!');
    console.log('📋 Available tables:', finalTables);
    console.log('\n💡 You can now run: npm run dev');

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.error('\n❌ Error: Cannot connect to DynamoDB Local');
      console.error('💡 Make sure Docker is running and start DynamoDB Local:');
      console.error('   npm run db:start\n');
    } else if (error.name === 'ResourceInUseException') {
      console.error('\n⚠️  Tables already exist. Use --reset to recreate them:');
      console.error('   npm run db:reset\n');
    } else {
      console.error('\n❌ Error:', error.message);
      console.error(error);
    }
    process.exit(1);
  }
}

// Check for --reset flag
const reset = process.argv.includes('--reset');
setup(reset);
