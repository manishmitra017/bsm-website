import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ecr from 'aws-cdk-lib/aws-ecr';
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
      domainName: 'bsmmelbourne.org',
    });

    // Create SSL certificate
    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: 'bsmmelbourne.org',
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    // Create Fargate service with Application Load Balancer
    const fargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'BsmWebsite', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('../frontend', {
          file: 'Dockerfile',
        }),
        containerPort: 3000,
        environment: {
          NODE_ENV: 'production',
          NEXT_PUBLIC_SITE_URL: 'https://bsmmelbourne.org',
          NEXT_PUBLIC_SITE_NAME: 'Bengali Society of Melbourne',
          NEXT_PUBLIC_CONTACT_EMAIL: 'info@bsm.org.au',
          NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          PORT: '3000',
        },
      },
      memoryLimitMiB: 1024,
      cpu: 512,
      desiredCount: 2,
      publicLoadBalancer: true,
      domainZone: hostedZone,
      domainName: 'bsmmelbourne.org',
      certificate: certificate,
      redirectHTTP: true, // Redirect HTTP to HTTPS
    });

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
      description: 'Load Balancer DNS Name',
    });

    // Output the domain URL
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: `https://bsmmelbourne.org`,
      description: 'BSM Website URL',
    });
  }
}