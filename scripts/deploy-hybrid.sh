#!/bin/bash

# BSM Hybrid Deployment Script
# Deploys S3 + Lambda + CloudFront architecture
# Cost: ~$5/month

set -e

echo "🚀 BSM Hybrid Deployment Script"
echo "================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check prerequisites
echo "📋 Step 1: Checking prerequisites..."

if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI not installed${NC}"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not installed${NC}"
    exit 1
fi

if ! command -v cdk &> /dev/null; then
    echo -e "${RED}❌ AWS CDK not installed. Run: npm install -g aws-cdk${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All prerequisites met${NC}"
echo ""

# Step 2: Generate NEXTAUTH_SECRET if not exists
echo "🔐 Step 2: Checking environment variables..."

if [ -z "$NEXTAUTH_SECRET" ]; then
    echo -e "${YELLOW}⚠️  NEXTAUTH_SECRET not set, generating...${NC}"
    export NEXTAUTH_SECRET=$(openssl rand -base64 32)
    echo "export NEXTAUTH_SECRET=$NEXTAUTH_SECRET" >> ~/.bashrc
    echo -e "${GREEN}✅ Generated NEXTAUTH_SECRET${NC}"
fi

echo ""

# Step 3: Install CDK dependencies
echo "📦 Step 3: Installing CDK dependencies..."
cd cdk
npm install
echo -e "${GREEN}✅ CDK dependencies installed${NC}"
echo ""

# Step 4: Bootstrap CDK (if needed)
echo "🏗️  Step 4: Bootstrapping CDK..."
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION="ap-southeast-2"

if ! aws cloudformation describe-stacks --stack-name CDKToolkit --region $AWS_REGION &> /dev/null; then
    echo "Bootstrapping CDK for account $AWS_ACCOUNT in region $AWS_REGION..."
    cdk bootstrap aws://$AWS_ACCOUNT/$AWS_REGION
    echo -e "${GREEN}✅ CDK bootstrapped${NC}"
else
    echo -e "${GREEN}✅ CDK already bootstrapped${NC}"
fi

echo ""

# Step 5: Deploy Auth Lambda Stack
echo "🚀 Step 5: Deploying Auth Lambda Stack..."
echo "This creates DynamoDB tables, Lambda functions, and API Gateway"
echo "⏱️  Estimated time: 5-10 minutes"
echo ""

read -p "Deploy BsmAuthLambda stack? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    cdk deploy BsmAuthLambda --require-approval never
    echo -e "${GREEN}✅ Auth Lambda Stack deployed${NC}"
else
    echo -e "${YELLOW}⚠️  Skipped Auth Lambda Stack deployment${NC}"
fi

echo ""

# Step 6: Test Lambda Functions
echo "🧪 Step 6: Testing Lambda Functions..."

# Get API URL from CloudFormation output
API_URL=$(aws cloudformation describe-stacks \
    --stack-name BsmAuthLambda \
    --query 'Stacks[0].Outputs[?OutputKey==`ApiGatewayUrl`].OutputValue' \
    --output text \
    --region $AWS_REGION)

echo "API Gateway URL: $API_URL"

# Test signup
echo "Testing signup endpoint..."
SIGNUP_RESPONSE=$(curl -s -X POST ${API_URL}api/auth/signup \
    -H "Content-Type: application/json" \
    -d '{
        "email": "test@bsm.org.au",
        "password": "Test123!@#",
        "firstName": "Test",
        "lastName": "User",
        "phone": "0400000000"
    }')

if echo "$SIGNUP_RESPONSE" | grep -q "success"; then
    echo -e "${GREEN}✅ Signup endpoint working${NC}"
else
    echo -e "${YELLOW}⚠️  Signup test response: $SIGNUP_RESPONSE${NC}"
fi

echo ""

# Step 7: Deploy Hybrid Stack
echo "🌐 Step 7: Deploying Hybrid Stack (S3 + CloudFront)..."
echo "This creates the complete website infrastructure"
echo "⏱️  Estimated time: 15-20 minutes (CloudFront is slow)"
echo ""

read -p "Deploy BsmHybridStack? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    cdk deploy BsmHybridStack --require-approval never
    echo -e "${GREEN}✅ Hybrid Stack deployed${NC}"
else
    echo -e "${YELLOW}⚠️  Skipped Hybrid Stack deployment${NC}"
    exit 0
fi

echo ""

# Step 8: Build and deploy frontend
echo "📦 Step 8: Building and deploying frontend..."

cd ../frontend

# Build static site
echo "Building Next.js static export..."
BUILD_STATIC=true npm run build

# Get bucket name
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name BsmHybridStack \
    --query 'Stacks[0].Outputs[?OutputKey==`WebsiteBucketName`].OutputValue' \
    --output text \
    --region $AWS_REGION)

echo "S3 Bucket: $BUCKET_NAME"

# Upload to S3
echo "Uploading to S3..."
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json"

aws s3 sync out/ s3://$BUCKET_NAME/ \
    --exclude "*" \
    --include "*.html" \
    --include "*.json" \
    --cache-control "public, max-age=0, must-revalidate"

echo -e "${GREEN}✅ Frontend uploaded to S3${NC}"

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name BsmHybridStack \
    --query 'Stacks[0].Outputs[?OutputKey==`DistributionId`].OutputValue' \
    --output text \
    --region $AWS_REGION)

aws cloudfront create-invalidation \
    --distribution-id $DISTRIBUTION_ID \
    --paths "/*" > /dev/null

echo -e "${GREEN}✅ CloudFront cache invalidated${NC}"
echo ""

# Step 9: Summary
echo "======================================"
echo "🎉 Deployment Complete!"
echo "======================================"
echo ""
echo "📊 Stack Outputs:"
echo "  - Website URL: https://bsm.org.au"
echo "  - API Gateway: $API_URL"
echo "  - Distribution ID: $DISTRIBUTION_ID"
echo "  - S3 Bucket: $BUCKET_NAME"
echo ""
echo "✅ Next Steps:"
echo "  1. Visit https://bsm.org.au"
echo "  2. Click 'Join Us' to test signup"
echo "  3. Sign in with your credentials"
echo "  4. Access member dashboard"
echo ""
echo "💰 Estimated Cost: ~\$5/month"
echo ""
echo "📖 For more info, see: claudedocs/LAMBDA_DEPLOYMENT_GUIDE.md"
echo ""
