import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';
import { BsmAuthLambdaStack } from './bsm-auth-lambda-stack';

interface BsmHybridStackProps extends cdk.StackProps {
  authStack: BsmAuthLambdaStack;
}

export class BsmHybridStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BsmHybridStackProps) {
    super(scope, id, props);

    const domainName = 'bsm.org.au';

    // Import existing Route 53 hosted zone
    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'BsmHostedZone', {
      hostedZoneId: 'Z05508463UT55PLIJEJ8C',
      zoneName: domainName,
    });

    // Create S3 bucket for static website hosting
    const websiteBucket = new s3.Bucket(this, 'BsmWebsiteBucket', {
      bucketName: `bsm-website-hybrid-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: false,
    });

    // Import existing SSL certificate
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'BsmCloudFrontCert',
      'arn:aws:acm:us-east-1:066043264852:certificate/2353c861-70de-4905-98e6-e483f219cc9c'
    );

    // CloudFront function for clean URLs
    const urlRewriteFunction = new cloudfront.Function(this, 'BsmUrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Don't rewrite API routes
    if (uri.startsWith('/api/')) {
        return request;
    }

    // Handle root path
    if (uri === '/') {
        request.uri = '/index.html';
        return request;
    }

    // Add .html for clean URLs (if no extension)
    if (!uri.includes('.')) {
        request.uri = uri + '.html';
    }

    return request;
}
      `),
    });

    // Origin Access Identity for S3
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OAI', {
      comment: 'OAI for bsm.org.au static website'
    });

    websiteBucket.grantRead(originAccessIdentity);

    // Get API Gateway domain from the auth stack
    const apiDomain = `${props.authStack.apiUrl.split('//')[1].split('/')[0]}`;

    // Create CloudFront distribution with multiple origins
    const distribution = new cloudfront.Distribution(this, 'BsmDistribution', {
      certificate: certificate,
      domainNames: [domainName, `www.${domainName}`],

      // Default behavior: S3 static content
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket, {
          originAccessIdentity: originAccessIdentity,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        compress: true,
        functionAssociations: [{
          function: urlRewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },

      // API behavior: Route to Lambda via API Gateway
      additionalBehaviors: {
        '/api/*': {
          origin: new origins.HttpOrigin(apiDomain, {
            protocolPolicy: cloudfront.OriginProtocolPolicy.HTTPS_ONLY,
          }),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.HTTPS_ONLY,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED, // Don't cache API responses
          originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER,
        },
      },

      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
      enableLogging: false, // Disable to save costs
      comment: 'BSM Hybrid Distribution (S3 + Lambda)',
    });

    // Route53 records
    new route53.ARecord(this, 'BsmAliasRecord', {
      zone: hostedZone,
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(distribution)
      ),
    });

    new route53.ARecord(this, 'BsmWwwAliasRecord', {
      zone: hostedZone,
      recordName: `www.${domainName}`,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.CloudFrontTarget(distribution)
      ),
    });

    // Outputs
    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID',
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
    });

    new cdk.CfnOutput(this, 'WebsiteBucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 bucket for static website content',
    });

    new cdk.CfnOutput(this, 'WebsiteUrl', {
      value: `https://${domainName}`,
      description: 'Website URL',
    });
  }
}
