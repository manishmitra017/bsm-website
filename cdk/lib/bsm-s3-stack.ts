import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as s3deployment from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export class BsmS3Stack extends cdk.Stack {
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
      bucketName: `bsm-website-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // Import existing SSL certificate (CloudFront requires us-east-1)
    // We'll need to create a certificate in us-east-1 for CloudFront
    const certificate = new acm.DnsValidatedCertificate(this, 'BsmCloudFrontCert', {
      domainName: domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      hostedZone: hostedZone,
      region: 'us-east-1', // CloudFront requires certificates in us-east-1
    });

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
        origin: new origins.S3Origin(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [{
          function: urlRewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
      },
      domainNames: [domainName, `www.${domainName}`],
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
      priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
    });

    // Deploy static files to S3
    new s3deployment.BucketDeployment(this, 'BsmWebsiteDeployment', {
      sources: [s3deployment.Source.asset('../frontend/out')],
      destinationBucket: websiteBucket,
      distribution: distribution,
      distributionPaths: ['/*'],
    });

    // Route 53 alias records already exist and are working
    // Commenting out to avoid conflicts during deployment
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

    // Outputs
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name',
    });

    new cdk.CfnOutput(this, 'BucketWebsiteURL', {
      value: websiteBucket.bucketWebsiteUrl,
      description: 'S3 Website URL',
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution URL',
    });

    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID',
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://${domainName}`,
      description: 'Final Website URL (after DNS setup)',
    });

    new cdk.CfnOutput(this, 'CostOptimization', {
      value: 'S3 + CloudFront: Pay for storage (~$1-5/month) + CDN requests',
      description: 'Expected monthly cost',
    });

    new cdk.CfnOutput(this, 'PerformanceBenefits', {
      value: 'Global CDN, instant loading, 99.9% uptime, no cold starts',
      description: 'Key advantages over Lambda',
    });
  }
}