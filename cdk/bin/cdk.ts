#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BsmLambdaStack } from '../lib/bsm-lambda-stack';

const app = new cdk.App();

// Lambda-based serverless infrastructure
new BsmLambdaStack(app, 'BsmLambdaStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-southeast-2' // Sydney region for Melbourne
  },
});