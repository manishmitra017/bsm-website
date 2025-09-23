import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';

export class BsmLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domainName = 'bsm.org.au';

    // Create Route 53 hosted zone
    const hostedZone = new route53.HostedZone(this, 'BsmHostedZone', {
      zoneName: domainName,
      comment: 'BSM Website hosted zone',
    });

    // Create SSL certificate for the domain (for CloudFront - must be in us-east-1)
    const certificate = new acm.Certificate(this, 'BsmCertificate', {
      domainName: domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    // Create Lambda function for Next.js app
    const nextjsLambda = new lambda.Function(this, 'BsmNextjsLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'lambda.handler',
      code: lambda.Code.fromDockerBuild('../frontend', {
        file: 'Dockerfile.lambda',
      }),
      memorySize: 1024, // Start with 1GB, can be optimized later
      timeout: cdk.Duration.seconds(30),
      environment: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_SITE_URL: 'https://bsm.org.au',
        NEXT_PUBLIC_SITE_NAME: 'Bengali Society of Melbourne',
        NEXT_PUBLIC_CONTACT_EMAIL: 'info@bsm.org.au',
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        SES_FROM_EMAIL: 'noreply@bsm.org.au',
        // AWS_REGION is automatically set by Lambda runtime
      },
    });

    // Add SES permissions to the Lambda function
    nextjsLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: [
          'ses:SendEmail',
          'ses:SendRawEmail',
        ],
        resources: [
          `arn:aws:ses:${this.region}:${this.account}:identity/*`,
        ],
      })
    );

    // Create API Gateway
    const api = new apigateway.RestApi(this, 'BsmApi', {
      restApiName: 'BSM Website API',
      description: 'API Gateway for BSM Next.js Lambda function',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'X-Amz-Date', 'Authorization', 'X-Api-Key'],
      },
      binaryMediaTypes: ['*/*'], // Support binary content
    });

    // Create Lambda integration with proxy
    const lambdaIntegration = new apigateway.LambdaIntegration(nextjsLambda, {
      proxy: true,
    });

    // Add proxy resource to handle ALL paths (including root)
    api.root.addProxy({
      defaultIntegration: lambdaIntegration,
      anyMethod: true,
    });

    // Create CloudFront distribution for better performance and caching
    const distribution = new cloudfront.Distribution(this, 'BsmDistribution', {
      defaultBehavior: {
        origin: new origins.RestApiOrigin(api),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED, // Disable caching for dynamic content
        originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER,
      },
      domainNames: [domainName, `www.${domainName}`],
      certificate: certificate,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100, // Use only North America and Europe for cost optimization
    });

    // Create DNS records
    new route53.ARecord(this, 'BsmAliasRecord', {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(distribution)
      ),
    });

    new route53.ARecord(this, 'BsmWWWAliasRecord', {
      zone: hostedZone,
      recordName: 'www',
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(distribution)
      ),
    });

    // Outputs
    new cdk.CfnOutput(this, 'ApiGatewayUrl', {
      value: api.url,
      description: 'API Gateway URL',
    });

    new cdk.CfnOutput(this, 'CloudFrontUrl', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'CloudFront Distribution URL',
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://${domainName}`,
      description: 'BSM Website URL with SSL certificate',
    });

    new cdk.CfnOutput(this, 'WWWWebsiteURL', {
      value: `https://www.${domainName}`,
      description: 'BSM Website WWW URL with SSL certificate',
    });

    new cdk.CfnOutput(this, 'CertificateArn', {
      value: certificate.certificateArn,
      description: 'SSL Certificate ARN',
    });

    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: hostedZone.hostedZoneId,
      description: 'Route 53 Hosted Zone ID',
    });

    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', hostedZone.hostedZoneNameServers || []),
      description: 'Route 53 Name Servers (update your domain registrar)',
    });

    new cdk.CfnOutput(this, 'LambdaFunction', {
      value: nextjsLambda.functionName,
      description: 'Lambda function name',
    });

    new cdk.CfnOutput(this, 'CostOptimization', {
      value: 'Lambda: Pay per request | Memory: 1GB | Timeout: 30s | CloudFront: Global CDN',
      description: 'Serverless architecture for cost optimization',
    });

    new cdk.CfnOutput(this, 'EstimatedCostSavings', {
      value: '~80-90% cost reduction vs ECS Fargate with pay-per-request pricing',
      description: 'Expected cost savings from Lambda migration',
    });
  }
}