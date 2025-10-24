import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as path from 'path';

export class BsmAuthLambdaStack extends cdk.Stack {
  public readonly apiUrl: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ========================================
    // DynamoDB Tables
    // ========================================

    // Members Table
    const membersTable = new dynamodb.Table(this, 'BsmMembersTable', {
      tableName: 'bsm-members-prod',
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Cost-effective for low traffic
      removalPolicy: cdk.RemovalPolicy.RETAIN, // Don't delete data on stack deletion
      pointInTimeRecovery: true, // Enable backups
    });

    // GSI for email lookup
    membersTable.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'GSI1PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'GSI1SK', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    // GSI for Google ID lookup
    membersTable.addGlobalSecondaryIndex({
      indexName: 'GSI2',
      partitionKey: { name: 'GSI2PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'GSI2SK', type: dynamodb.AttributeType.STRING },
      projectionType: dynamodb.ProjectionType.ALL,
    });

    // Admin Logs Table
    const adminLogsTable = new dynamodb.Table(this, 'BsmAdminLogsTable', {
      tableName: 'bsm-admin-logs-prod',
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'SK', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      timeToLiveAttribute: 'ttl', // Auto-delete old logs after 90 days
    });

    // ========================================
    // Lambda Functions
    // ========================================

    const lambdaEnv = {
      DYNAMODB_TABLE_NAME: membersTable.tableName,
      DYNAMODB_ADMIN_LOGS_TABLE: adminLogsTable.tableName,
      AWS_REGION: 'ap-southeast-2',
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || cdk.Fn.base64(cdk.Stack.of(this).stackId),
      RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY || '',
      GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
      NODE_ENV: 'production',
    };

    // Common Lambda configuration
    const lambdaProps = {
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      environment: lambdaEnv,
    };

    // Signup Lambda
    const signupFunction = new lambda.Function(this, 'SignupFunction', {
      ...lambdaProps,
      functionName: 'bsm-auth-signup',
      handler: 'auth/signup.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../frontend/lambda'), {
        bundling: {
          image: lambda.Runtime.NODEJS_18_X.bundlingImage,
          command: [
            'bash', '-c',
            'npm install && npm run build && cp -r dist/* /asset-output/'
          ],
        },
      }),
    });

    // Signin Lambda
    const signinFunction = new lambda.Function(this, 'SigninFunction', {
      ...lambdaProps,
      functionName: 'bsm-auth-signin',
      handler: 'auth/signin.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../frontend/lambda'), {
        bundling: {
          image: lambda.Runtime.NODEJS_18_X.bundlingImage,
          command: [
            'bash', '-c',
            'npm install && npm run build && cp -r dist/* /asset-output/'
          ],
        },
      }),
    });

    // Session Lambda
    const sessionFunction = new lambda.Function(this, 'SessionFunction', {
      ...lambdaProps,
      functionName: 'bsm-auth-session',
      handler: 'auth/session.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../frontend/lambda'), {
        bundling: {
          image: lambda.Runtime.NODEJS_18_X.bundlingImage,
          command: [
            'bash', '-c',
            'npm install && npm run build && cp -r dist/* /asset-output/'
          ],
        },
      }),
    });

    // Google OAuth Lambda
    const googleOAuthFunction = new lambda.Function(this, 'GoogleOAuthFunction', {
      ...lambdaProps,
      functionName: 'bsm-auth-google-oauth',
      handler: 'auth/google-oauth.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../frontend/lambda'), {
        bundling: {
          image: lambda.Runtime.NODEJS_18_X.bundlingImage,
          command: [
            'bash', '-c',
            'npm install && npm run build && cp -r dist/* /asset-output/'
          ],
        },
      }),
    });

    // Grant DynamoDB permissions
    membersTable.grantReadWriteData(signupFunction);
    membersTable.grantReadWriteData(signinFunction);
    membersTable.grantReadWriteData(googleOAuthFunction);
    membersTable.grantReadData(sessionFunction);
    adminLogsTable.grantWriteData(signupFunction);
    adminLogsTable.grantWriteData(signinFunction);
    adminLogsTable.grantWriteData(googleOAuthFunction);

    // ========================================
    // API Gateway
    // ========================================

    const api = new apigateway.RestApi(this, 'BsmAuthApi', {
      restApiName: 'BSM Authentication API',
      description: 'Authentication API for Bengali Society of Melbourne',
      deployOptions: {
        stageName: 'prod',
        throttlingRateLimit: 100, // Limit to 100 requests per second
        throttlingBurstLimit: 200,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: ['https://bsm.org.au', 'https://www.bsm.org.au'],
        allowMethods: ['GET', 'POST', 'OPTIONS'],
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
          'X-Amz-Security-Token',
        ],
        allowCredentials: true,
      },
    });

    // API routes
    const authResource = api.root.addResource('api').addResource('auth');

    // POST /api/auth/signup
    authResource
      .addResource('signup')
      .addMethod('POST', new apigateway.LambdaIntegration(signupFunction));

    // POST /api/auth/signin
    authResource
      .addResource('signin')
      .addMethod('POST', new apigateway.LambdaIntegration(signinFunction));

    // GET /api/auth/session
    authResource
      .addResource('session')
      .addMethod('GET', new apigateway.LambdaIntegration(sessionFunction));

    // POST /api/auth/google
    authResource
      .addResource('google')
      .addMethod('POST', new apigateway.LambdaIntegration(googleOAuthFunction));

    // Store API URL for CloudFront integration
    this.apiUrl = api.url;

    // ========================================
    // Outputs
    // ========================================

    new cdk.CfnOutput(this, 'ApiGatewayUrl', {
      value: api.url,
      description: 'API Gateway endpoint URL',
      exportName: 'BsmAuthApiUrl',
    });

    new cdk.CfnOutput(this, 'MembersTableName', {
      value: membersTable.tableName,
      description: 'DynamoDB Members table name',
    });

    new cdk.CfnOutput(this, 'ApiGatewayId', {
      value: api.restApiId,
      description: 'API Gateway ID for CloudFront integration',
      exportName: 'BsmAuthApiId',
    });

    new cdk.CfnOutput(this, 'ApiGatewayDomainName', {
      value: `${api.restApiId}.execute-api.${this.region}.amazonaws.com`,
      description: 'API Gateway domain name',
      exportName: 'BsmAuthApiDomain',
    });
  }
}
