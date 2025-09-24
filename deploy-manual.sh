#!/bin/bash

# Manual deployment script to bypass stuck CloudFormation
# Use this until we can recreate the stack fresh

set -e

echo "🚀 Starting manual deployment..."

# Build the frontend
echo "📦 Building frontend..."
cd frontend
BUILD_STATIC=true NODE_ENV=production npm run build

# Get AWS resources
echo "🔍 Getting AWS resource IDs..."
BUCKET_NAME=$(aws s3 ls | grep bsm-website-static | awk '{print $3}')
DISTRIBUTION_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?Aliases.Items[0]=='bsm.org.au'].Id" --output text)

echo "📦 S3 Bucket: $BUCKET_NAME"
echo "☁️ CloudFront Distribution: $DISTRIBUTION_ID"

# Sync files to S3
echo "📤 Uploading files to S3..."
aws s3 sync out/ s3://$BUCKET_NAME/ --delete --exact-timestamps

# Invalidate CloudFront
echo "🔄 Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --query 'Invalidation.Id' --output text)
echo "⏳ Invalidation ID: $INVALIDATION_ID"

echo "✅ Manual deployment completed!"
echo "🌐 Website: https://bsm.org.au"
echo "🌍 WWW: https://www.bsm.org.au"