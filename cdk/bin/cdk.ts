#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BsmS3V2Stack } from '../lib/bsm-s3-v2-stack';

const app = new cdk.App();

// S3 + CloudFront stack V2 (clean deployment without BucketDeployment)
new BsmS3V2Stack(app, 'BsmWebsiteS3V2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-southeast-2' // Sydney region for Melbourne
  },
});