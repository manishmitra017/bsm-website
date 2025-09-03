import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class BsmWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domainName = 'bsm.org.au';

    // Create Route 53 hosted zone
    const hostedZone = new route53.HostedZone(this, 'BsmHostedZone', {
      zoneName: domainName,
      comment: 'BSM Website hosted zone',
    });

    // Create SSL certificate for the domain
    const certificate = new acm.Certificate(this, 'BsmCertificate', {
      domainName: domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

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
      // HTTPS configuration
      domainName: domainName,
      domainZone: hostedZone,
      certificate: certificate,
      protocol: elbv2.ApplicationProtocol.HTTPS,
      redirectHTTP: true,
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

    // Create alias record for www.bsm.org.au pointing to the load balancer
    new route53.ARecord(this, 'BsmWWWAliasRecord', {
      zone: hostedZone,
      recordName: 'www',
      target: route53.RecordTarget.fromAlias(
        new route53Targets.LoadBalancerTarget(fargateService.loadBalancer)
      ),
    });

    // Outputs
    new cdk.CfnOutput(this, 'LoadBalancerDNS', {
      value: fargateService.loadBalancer.loadBalancerDnsName,
      description: 'Load Balancer DNS Name',
    });

    new cdk.CfnOutput(this, 'LoadBalancerHostedZoneId', {
      value: fargateService.loadBalancer.loadBalancerCanonicalHostedZoneId,
      description: 'Load Balancer Hosted Zone ID',
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
  }
}