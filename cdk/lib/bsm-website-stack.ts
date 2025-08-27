import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class BsmWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, 'BsmVpc', {
      maxAzs: 2,
      natGateways: 1, // Reduce costs with single NAT gateway
    });

    // Create ECS Cluster
    const cluster = new ecs.Cluster(this, 'BsmCluster', {
      vpc,
      clusterName: 'bsm-website-cluster',
    });

    // Get existing hosted zone
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: 'bsm.org.au',
    });

    // Create SSL certificate
    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: 'bsm.org.au',
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    // Create Fargate service with Application Load Balancer
    const fargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'BsmWebsite', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('../frontend', {
          file: 'Dockerfile',
          buildArgs: {
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
            NEXT_PUBLIC_SITE_URL: 'https://bsm.org.au',
            NEXT_PUBLIC_SITE_NAME: 'Bengali Society of Melbourne',
            NEXT_PUBLIC_CONTACT_EMAIL: 'info@bsm.org.au',
          },
        }),
        containerPort: 3000,
        environment: {
          NODE_ENV: 'production',
          NEXT_PUBLIC_SITE_URL: 'https://bsm.org.au',
          NEXT_PUBLIC_SITE_NAME: 'Bengali Society of Melbourne',
          NEXT_PUBLIC_CONTACT_EMAIL: 'info@bsm.org.au',
          NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          PORT: '3000',
          // AWS SES Configuration
          AWS_REGION: 'ap-southeast-2',
          AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
          AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
          SES_FROM_EMAIL: 'noreply@bsm.org.au',
        },
      },
      memoryLimitMiB: 1024,
      cpu: 512,
      desiredCount: 2,
      publicLoadBalancer: true,
      domainZone: hostedZone,
      domainName: 'bsm.org.au',
      certificate: certificate,
      redirectHTTP: true, // Redirect HTTP to HTTPS
      // Explicitly set platform architecture to x86_64
      platformVersion: ecs.FargatePlatformVersion.VERSION1_4,
      runtimePlatform: {
        cpuArchitecture: ecs.CpuArchitecture.X86_64,
        operatingSystemFamily: ecs.OperatingSystemFamily.LINUX,
      },
    });

    // Add SES permissions to the task role
    (fargateService.taskDefinition.taskRole as iam.Role).addToPolicy(
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

    // Configure health check
    fargateService.targetGroup.configureHealthCheck({
      path: '/',
      healthyHttpCodes: '200',
    });

    // Auto scaling configuration
    const scalableTarget = fargateService.service.autoScaleTaskCount({
      minCapacity: 1,
      maxCapacity: 5,
    });

    scalableTarget.scaleOnCpuUtilization('CpuScaling', {
      targetUtilizationPercent: 70,
    });

    scalableTarget.scaleOnMemoryUtilization('MemoryScaling', {
      targetUtilizationPercent: 80,
    });

    // Output the load balancer URL
    new cdk.CfnOutput(this, 'LoadBalancerDNS', {
      value: fargateService.loadBalancer.loadBalancerDnsName,
      description: 'New Load Balancer DNS Name - Update bsm.org.au A record to point to this',
    });

    // Output the load balancer hosted zone ID for alias record
    new cdk.CfnOutput(this, 'LoadBalancerHostedZoneId', {
      value: fargateService.loadBalancer.loadBalancerCanonicalHostedZoneId,
      description: 'Load Balancer Hosted Zone ID for Route53 alias record',
    });

    // Output the domain URL
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://bsm.org.au`,
      description: 'BSM Website URL (after DNS update)',
    });
  }
}