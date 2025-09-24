#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BsmS3Stack } from '../lib/bsm-s3-stack';

const app = new cdk.App();

// S3 + CloudFront stack (production architecture)
new BsmS3Stack(app, 'BsmWebsiteS3', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-southeast-2' // Sydney region for Melbourne
  },
});