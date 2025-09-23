#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BsmWebsiteStack } from '../lib/bsm-website-stack';

const app = new cdk.App();
new BsmWebsiteStack(app, 'BsmWebsiteProd', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-southeast-2' // Sydney region for Melbourne
  },
});