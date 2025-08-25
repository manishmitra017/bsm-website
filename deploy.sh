#!/bin/bash

# BSM Website Deployment Script
# This script deploys the BSM website to AWS using CDK

set -e  # Exit on any error

echo "🚀 BSM Website Deployment Script"
echo "================================="

# Load environment variables
if [ -f .env ]; then
    echo "📋 Loading environment variables from .env"
    export $(grep -v '^#' .env | xargs)
elif [ -f .env.local ]; then
    echo "📋 Loading environment variables from .env.local"
    export $(grep -v '^#' .env.local | xargs)
else
    echo "⚠️  No .env or .env.local file found"
    echo "   Make sure your NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set"
fi

# Check Google Maps API key
if [ -z "$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" ]; then
    echo "❌ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set!"
    echo "   Please create a .env file with your Google Maps API key:"
    echo "   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key-here"
    exit 1
fi

# Production deployment confirmation
echo "🔴 PRODUCTION DEPLOYMENT - This will deploy to https://bsmmelbourne.org"
read -p "Are you sure you want to deploy to production? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Deployment cancelled"
    exit 1
fi

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &>/dev/null; then
    echo "❌ AWS CLI is not configured or credentials are invalid"
    echo "Please run: aws configure"
    echo "Or set environment variables: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY"
    exit 1
fi

# Check if Docker is running
if ! docker info &>/dev/null; then
    echo "❌ Docker is not running"
    echo "Please start Docker and try again"
    exit 1
fi

# Build the Next.js application
echo "🏗️  Building Next.js application..."
cd frontend
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi
# Clean build to avoid any cached issues
rm -rf .next
# Set NODE_ENV to production and enable standalone for deployment build
export NODE_ENV=production
export BUILD_STANDALONE=true
npm run build

# Deploy using CDK
echo "🌩️  Deploying to AWS using CDK..."
cd ../cdk
if [ ! -d "node_modules" ]; then
    echo "📦 Installing CDK dependencies..."
    npm install
fi

# Build CDK project
echo "🔨 Building CDK project..."
npm run build

# Deploy to AWS
echo "🚀 Deploying infrastructure..."
cdk deploy --require-approval never

echo "✅ Deployment completed successfully!"
echo ""

# Display deployment information
echo "📋 Deployment Information:"
echo "========================="
echo "🌐 Website URL: https://bsmmelbourne.org"
echo "🔒 SSL Certificate: Auto-managed by AWS Certificate Manager"
echo "🌍 CDN: Application Load Balancer with auto-scaling ECS Fargate"
echo "📊 Monitoring: CloudWatch logs and metrics enabled"
echo "🎯 Health Checks: Configured for high availability"

echo ""
echo "🎉 BSM Website is now live at https://bsmmelbourne.org!"
echo ""
echo "Next steps:"
echo "- Visit https://bsmmelbourne.org to verify deployment"
echo "- Website includes Bengali cultural content and photo galleries"
echo "- Auto-scaling is configured (1-5 instances based on traffic)"
echo "- Monitor via AWS Console: ECS → bsm-website-cluster"