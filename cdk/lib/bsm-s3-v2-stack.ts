import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';

export class BsmS3V2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domainName = 'bsm.org.au';

    // Import existing Route 53 hosted zone
    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'BsmHostedZone', {
      hostedZoneId: 'Z05508463UT55PLIJEJ8C',
      zoneName: domainName,
    });

    // Create S3 bucket for static website hosting (private, accessed via CloudFront)
    const websiteBucket = new s3.Bucket(this, 'BsmWebsiteBucket', {
      bucketName: `bsm-website-static-v2-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: false, // No versioning needed for static content
    });

    // Import existing SSL certificate (already validated in us-east-1)
    const certificate = acm.Certificate.fromCertificateArn(
      this,
      'BsmCloudFrontCert',
      'arn:aws:acm:us-east-1:066043264852:certificate/2353c861-70de-4905-98e6-e483f219cc9c'
    );

    // Create CloudFront function to handle clean URLs
    const urlRewriteFunction = new cloudfront.Function(this, 'BsmUrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Handle root path
    if (uri === '/') {
        request.uri = '/index.html';
        return request;
    }

    // Handle paths without file extension
    if (!uri.includes('.') && !uri.endsWith('/')) {
        request.uri = uri + '.html';
    }

    // Handle directory paths (remove trailing slash and add .html)
    if (uri.endsWith('/') && uri !== '/') {
        request.uri = uri.slice(0, -1) + '.html';
    }

    return request;
}
      `),
    });

    // Create CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'BsmDistribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [{
          function: urlRewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
      },
      // Temporarily commented out - will add after old distribution is removed
      // domainNames: [domainName, `www.${domainName}`],
      certificate: certificate,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 403,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
      defaultRootObject: 'index.html',
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
    });

    // NO BUCKET DEPLOYMENT - Files uploaded via GitHub Actions S3 sync
    // This completely eliminates the custom resource stuck issues

    // Will add Route 53 records after migration
    // new route53.ARecord(this, 'BsmAliasRecord', {
    //   zone: hostedZone,
    //   target: route53.RecordTarget.fromAlias(
    //     new route53Targets.CloudFrontTarget(distribution)
    //   ),
    // });

    // new route53.ARecord(this, 'BsmWWWAliasRecord', {
    //   zone: hostedZone,
    //   recordName: 'www',
    //   target: route53.RecordTarget.fromAlias(
    //     new route53Targets.CloudFrontTarget(distribution)
    //   ),
    // });

    // Outputs for GitHub Actions
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name for GitHub Actions',
    });

    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID for cache invalidation',
    });

    new cdk.CfnOutput(this, 'CloudFrontDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://${domainName}`,
      description: 'Final Website URL',
    });

    new cdk.CfnOutput(this, 'DeploymentMethod', {
      value: 'GitHub Actions with S3 Sync (No Custom Resources)',
      description: 'Deployment approach - eliminates stuck deployment issues',
    });

    new cdk.CfnOutput(this, 'CostOptimized', {
      value: 'S3 + CloudFront: ~$1-5/month',
      description: 'Expected monthly cost',
    });
  }
}