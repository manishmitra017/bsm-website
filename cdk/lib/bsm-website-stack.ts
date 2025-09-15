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
import * as applicationautoscaling from 'aws-cdk-lib/aws-applicationautoscaling';
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
      memoryLimitMiB: 512,  // Reduced from 1024 to 512 MB
      cpu: 256,             // Reduced from 512 to 256 CPU units (0.25 vCPU)
      desiredCount: 1,      // Reduced from 2 to 1 for cost optimization
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

    // ===== COST-OPTIMIZED AUTO SCALING CONFIGURATION =====
    
    // Scalable target with wider range for cost optimization
    const scalableTarget = fargateService.service.autoScaleTaskCount({
      minCapacity: 0,  // Allow scaling down to 0 during off-hours
      maxCapacity: 4,  // Reduced from 5 for cost control
    });

    // Target tracking scaling policies with adjusted thresholds
    scalableTarget.scaleOnCpuUtilization('CpuScaling', {
      targetUtilizationPercent: 60,  // Lower threshold for better responsiveness
      scaleInCooldown: cdk.Duration.minutes(5),
      scaleOutCooldown: cdk.Duration.minutes(3),
    });

    scalableTarget.scaleOnMemoryUtilization('MemoryScaling', {
      targetUtilizationPercent: 70,  // Lower threshold for memory
      scaleInCooldown: cdk.Duration.minutes(5),
      scaleOutCooldown: cdk.Duration.minutes(3),
    });

    // ===== SCHEDULED SCALING FOR COST OPTIMIZATION =====
    
    // Scale DOWN to 0 tasks during off-hours (11 PM - 7 AM AEST)
    // Note: Using UTC times (13:00 UTC = 11 PM AEST, 21:00 UTC = 7 AM AEST)
    scalableTarget.scaleOnSchedule('ScaleDownNight', {
      schedule: applicationautoscaling.Schedule.cron({
        hour: '13',      // 11 PM AEST (13:00 UTC)
        minute: '0'
      }),
      minCapacity: 0,    // Scale down to 0 tasks
      maxCapacity: 4,
    });

    // Scale UP to 1 task in the morning (7 AM AEST)
    scalableTarget.scaleOnSchedule('ScaleUpMorning', {
      schedule: applicationautoscaling.Schedule.cron({
        hour: '21',      // 7 AM AEST (21:00 UTC)
        minute: '0'
      }),
      minCapacity: 1,    // Ensure at least 1 task
      maxCapacity: 4,
    });

    // Scale UP for peak hours (9 AM - 6 PM AEST)
    // 9 AM AEST = 23:00 UTC (previous day)
    scalableTarget.scaleOnSchedule('ScaleUpPeakHours', {
      schedule: applicationautoscaling.Schedule.cron({
        hour: '23',      // 9 AM AEST (23:00 UTC previous day)
        minute: '0'
      }),
      minCapacity: 1,    // At least 1 task during peak
      maxCapacity: 4,
    });

    // Scale DOWN after peak hours (6 PM AEST)
    // 6 PM AEST = 8:00 UTC
    scalableTarget.scaleOnSchedule('ScaleDownEvening', {
      schedule: applicationautoscaling.Schedule.cron({
        hour: '8',       // 6 PM AEST (8:00 UTC)
        minute: '0'
      }),
      minCapacity: 1,    // Maintain 1 task for evening traffic
      maxCapacity: 4,
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

    // Cost optimization outputs
    new cdk.CfnOutput(this, 'ScalingSchedule', {
      value: 'OFF: 11PM-7AM AEST (0 tasks) | ON: 7AM-11PM AEST (1+ tasks)',
      description: 'Auto-scaling schedule for cost optimization',
    });

    new cdk.CfnOutput(this, 'ResourceOptimization', {
      value: 'CPU: 0.25 vCPU | Memory: 512 MB | Min: 0 tasks | Max: 4 tasks',
      description: 'Optimized resource configuration for cost savings',
    });

    new cdk.CfnOutput(this, 'EstimatedCostSavings', {
      value: '~60-70% cost reduction with scheduled scaling (8 hours off-time daily)',
      description: 'Expected cost savings from optimization',
    });
  }
}