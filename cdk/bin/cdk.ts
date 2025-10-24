#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BsmS3V2Stack } from '../lib/bsm-s3-v2-stack';
import { BsmAuthLambdaStack } from '../lib/bsm-auth-lambda-stack';
import { BsmHybridStack } from '../lib/bsm-hybrid-stack';

const app = new cdk.App();

// Option 1: Deploy Auth Lambda + API Gateway separately
// Use this if you want to deploy Lambda first and test it
const authStack = new BsmAuthLambdaStack(app, 'BsmAuthLambda', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-southeast-2' // Sydney region for Melbourne
  },
});

// Option 2: Deploy integrated S3 + Lambda + CloudFront stack
// Use this for production deployment (recommended)
new BsmHybridStack(app, 'BsmHybridStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-southeast-2'
  },
  authStack: authStack,
});

// Old S3 V2 stack (keep for reference, can be removed later)
// new BsmS3V2Stack(app, 'BsmWebsiteS3V2', {
//   env: {
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: 'ap-southeast-2'
//   },
// });