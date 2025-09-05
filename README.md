# Bengali Society of Melbourne (BSM) Website

A modern, bilingual website for the Bengali Society of Melbourne built with Next.js 15, TypeScript, and deployed on AWS using CDK with automated GitHub Actions deployment.

## 🌐 Live Website

- **Primary:** https://bsm.org.au
- **WWW:** https://www.bsm.org.au
- **SSL Secured:** HTTPS with auto-renewal via AWS Certificate Manager

## 🏗️ Project Structure

```
bsm/
├── frontend/                    # Next.js 15 application
│   ├── src/app/                # App router pages
│   │   ├── about/             # About page with leadership info
│   │   ├── events/            # Event management pages
│   │   ├── gallery/           # Photo gallery with lightbox
│   │   ├── membership/        # Membership forms and info
│   │   └── volunteering/      # Blood donation & tree plantation
│   ├── src/components/        # React components
│   │   ├── Header.tsx         # Navigation with bilingual support
│   │   ├── Footer.tsx         # Contact and social links
│   │   └── ui/               # Reusable UI components
│   ├── public/               # Static assets and images
│   ├── Dockerfile           # Container configuration
│   └── package.json         # Dependencies and scripts
├── cdk/                      # AWS CDK infrastructure
│   ├── lib/                  # CDK stack definitions
│   │   └── bsm-website-stack.ts # Main infrastructure stack
│   ├── bin/                  # CDK app entry point
│   └── package.json          # CDK dependencies
├── .github/workflows/        # GitHub Actions CI/CD
│   └── deploy.yml           # Automated deployment pipeline
├── deploy.sh                # Local deployment script
└── DEPLOYMENT.md            # Deployment setup guide
```

## 🚀 Quick Start

### Prerequisites
- AWS CLI configured with appropriate permissions
- Docker Desktop running
- Node.js 18+ installed
- AWS CDK CLI installed globally: `npm install -g aws-cdk`
- GitHub repository with secrets configured (for automated deployment)

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd bsm

# Setup environment variables
cp frontend/.env.example frontend/.env.local
# Edit frontend/.env.local with your API keys

# Install dependencies and run
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000

### Automated Deployment (Recommended)

**GitHub Actions automatically deploys on push to main branch**

1. **Configure GitHub Secrets:**
   ```
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

2. **Deploy:**
   ```bash
   git push origin main
   ```

   The GitHub Actions workflow will:
   - Build the Next.js application
   - Create Docker container
   - Deploy infrastructure via CDK
   - Update ECS service
   - Configure SSL certificates
   - Set up Route 53 DNS

### Manual Deployment

1. **First time setup:**
   ```bash
   # Copy deployment template
   cp deploy.sh.template deploy.sh
   
   # Edit deploy.sh and replace with your actual values:
   # NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your_google_maps_api_key"
   # AWS_ACCESS_KEY_ID="your_aws_access_key"
   # AWS_SECRET_ACCESS_KEY="your_aws_secret_key"
   ```

2. **Deploy:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

Deployment takes ~5-10 minutes. First-time SSL certificate validation may take up to 30 minutes.

## 🔑 Environment Variables

### Required API Keys

1. **Google Maps API** (for membership address autocomplete):
   - Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   - Enable APIs: Maps JavaScript API, Places API, Geocoding API
   - Create API key and restrict to your domains:
     - `localhost:*` (development)
     - `bsm.org.au` (production)
     - `www.bsm.org.au` (production)

2. **AWS Credentials** (for deployment):
   - IAM user with permissions for:
     - ECS (Fargate)
     - ECR (Docker registry)
     - Route53 (DNS management)
     - Certificate Manager (SSL)
     - Application Load Balancer
     - VPC and networking

### Environment Files
- `frontend/.env.local` - Local development (gitignored)
- `frontend/.env.example` - Template showing required variables
- `deploy.sh` - Production deployment with embedded keys (gitignored)
- `deploy.sh.template` - Safe template for sharing
- **GitHub Secrets** - For automated deployment pipeline

### GitHub Repository Secrets
Configure these in your repository settings → Secrets and variables → Actions:
```
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## 📋 Features

### ✅ Current Features

#### **Frontend Application**
- **🎨 Responsive Design**: Mobile-first Bengali cultural theme with Tailwind CSS
- **🎉 Event Management**: Durga Puja, Kali Puja, Saraswati Puja, Pohela Boishakh with image galleries
- **📸 Photo Gallery**: Community photos with Framer Motion lightbox functionality
- **👥 Membership System**: 
  - Google Maps API integration for address autocomplete
  - Multiple membership types (Individual, Family, Student, Life)
  - Web3Forms integration for submissions
- **🤝 Volunteering Sections**: 
  - Blood donation coordination
  - Tree plantation initiatives
- **📞 Contact System**: Web3Forms integration for contact and membership forms
- **💰 Donations**: Bank details and tax-deductible information display
- **🌐 Bilingual Support**: Complete English and Bengali content
- **👔 Leadership Section**: Current BSM committee members with contact information
- **📱 Mobile Optimization**: Touch-friendly navigation and responsive layouts

#### **Infrastructure & DevOps**
- **🚀 Automated Deployment**: GitHub Actions CI/CD pipeline
- **🔒 HTTPS & SSL**: AWS Certificate Manager with automatic renewal
- **🌍 DNS Management**: Route 53 hosted zone with domain configuration
- **⚡ Auto-scaling**: ECS Fargate with 1-5 instances based on demand
- **🏗️ Infrastructure as Code**: Complete AWS CDK setup
- **🐳 Containerization**: Docker-based deployment with optimized images
- **📊 Monitoring**: CloudWatch logging and metrics

### 🔄 Planned Features
- **User Authentication**: Member login and profile management
- **Event Registration**: Online event booking and management
- **Payment Integration**: Secure donation and membership payment processing
- **Admin Dashboard**: Content management and member administration
- **Newsletter System**: Email marketing and community updates
- **Mobile App**: React Native companion application

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router and React 19
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom Bengali cultural theme
- **Animations**: Framer Motion for smooth interactions
- **Maps Integration**: Google Maps API with Places autocomplete
- **Typography**: Noto Sans Bengali for authentic Bengali text rendering
- **Forms**: Web3Forms for contact and membership submissions
- **Image Optimization**: Next.js built-in Image component with lazy loading

### Backend & Infrastructure
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: AWS ECS Fargate for serverless containers
- **Load Balancing**: Application Load Balancer with SSL termination
- **DNS Management**: Route 53 hosted zone with custom domain
- **SSL Certificates**: AWS Certificate Manager with automatic DNS validation
- **Auto-scaling**: ECS service scaling (1-5 instances based on CPU/memory)
- **Infrastructure as Code**: AWS CDK with TypeScript
- **Container Registry**: Amazon ECR for Docker image storage
- **Networking**: Custom VPC with public/private subnets

### CI/CD Pipeline
- **Version Control**: Git with GitHub
- **Automation**: GitHub Actions workflows
- **Build Process**: Multi-stage Docker builds with caching
- **Deployment**: Automated CDK deployment on push to main
- **Environment Management**: GitHub Secrets for secure credential storage

### Development Tools
- **Package Manager**: npm with package-lock.json for consistent installs
- **Code Quality**: ESLint with Next.js configuration and TypeScript rules
- **Build Tool**: Next.js built-in bundler with SWC compiler
- **Runtime Environment**: Node.js 18+ (GitHub Actions uses Node 18)
- **Type Checking**: TypeScript with strict mode enabled
- **Version Control**: Git with conventional commit messages

## 📦 Complete Environment Configuration

### Frontend Variables (.env.local)
```bash
# Google Maps Integration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://bsm.org.au
NEXT_PUBLIC_SITE_NAME="Bengali Society of Melbourne"
NEXT_PUBLIC_CONTACT_EMAIL=info@bsm.org.au

# Form Integration
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-key
```

### AWS Deployment Variables
```bash
# AWS Account Configuration
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
AWS_REGION=ap-southeast-2
CDK_DEFAULT_ACCOUNT=066043264852
CDK_DEFAULT_REGION=ap-southeast-2

# Domain Configuration
DOMAIN_NAME=bsm.org.au
```

## 🚀 Deployment Architecture

### Infrastructure Components

#### **Core Services**
- **ECS Fargate Service**: Serverless containerized application hosting
- **Application Load Balancer**: HTTPS termination and traffic distribution
- **Route 53 Hosted Zone**: DNS management for bsm.org.au
- **AWS Certificate Manager**: Automatic SSL certificate with DNS validation
- **Amazon ECR**: Private Docker container registry
- **VPC**: Secure networking with public subnets across multiple AZs

#### **Auto-scaling Configuration**
- **Target Tracking**: CPU-based scaling (70% threshold)
- **Instance Range**: 1-5 Fargate tasks
- **Health Checks**: Load balancer health monitoring
- **Rolling Updates**: Zero-downtime deployments

#### **Security & Monitoring**
- **HTTPS Redirect**: Automatic HTTP to HTTPS redirection
- **CloudWatch Logs**: Application and infrastructure logging
- **Security Groups**: Restricted inbound/outbound rules
- **IAM Roles**: Least-privilege access for ECS tasks

### Deployment Process

#### **Automated via GitHub Actions (Recommended)**
1. **Trigger**: Push to `main` branch
2. **Build Phase**:
   - Install Node.js dependencies
   - Build Next.js application with production optimizations
   - Create optimized Docker image
3. **Deploy Phase**:
   - Push Docker image to ECR
   - Deploy infrastructure updates via CDK
   - Update ECS service with new task definition
   - Wait for health checks to pass

#### **Manual Deployment**
```bash
# Prerequisites
- AWS CLI configured with deployment permissions
- Docker Desktop running
- CDK CLI installed globally

# Deploy command
chmod +x deploy.sh
./deploy.sh
```

### DNS & SSL Setup
- **Domain**: bsm.org.au (managed via Route 53)
- **SSL Certificate**: Wildcard cert (*.bsm.org.au) with automatic renewal
- **DNS Records**: 
  - A record: bsm.org.au → ALB
  - CNAME record: www.bsm.org.au → bsm.org.au
  - Certificate validation records (managed automatically)

**Note**: Initial SSL certificate validation takes 30-45 minutes for new domains.

## 🔧 Development Workflow

### Local Development Setup
```bash
# Clone and setup
git clone <repository-url>
cd bsm

# Frontend development
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your API keys

npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking
```

### Docker Development
```bash
# Build and test Docker container locally
cd frontend
docker build -t bsm-frontend .
docker run -p 3000:3000 bsm-frontend

# Or use npm scripts
npm run docker:build # Build Docker image
npm run docker:run   # Run container locally
```

### CDK Development
```bash
# Infrastructure development
cd cdk
npm install
npm run build        # Compile TypeScript
cdk synth           # Generate CloudFormation templates
cdk diff            # Show infrastructure changes
cdk deploy          # Deploy infrastructure changes
```

### Code Quality & Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Consistent code formatting
- **Git Hooks**: Pre-commit linting and formatting
- **Component Structure**: Consistent naming and organization
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 👥 Leadership Team

### Current BSM Committee (2024-2025)
- **President**: Miraj Ahmad - 0411 478 147
- **General Secretary**: Jony Saha - 0450 801 113
- **Treasurer**: Dulal Podder - 0404 814 669
- **Assistant Secretary**: Rashedul Islam - 0426 415 533

*Updated leadership information as of September 2025*

## 🔄 Recent Updates

### September 2025
- ✅ **GitHub Actions CI/CD**: Automated deployment pipeline
- ✅ **Route 53 & SSL**: Complete HTTPS setup with certificate automation
- ✅ **Leadership Updates**: Updated General Secretary contact information
- ✅ **Header Navigation**: Fixed "Join Us" button styling issues
- ✅ **Infrastructure**: Enhanced CDK stack with auto-scaling ECS service

### August 2025
- ✅ **Next.js 15 Upgrade**: Latest React 19 and App Router features
- ✅ **Tailwind CSS**: Custom Bengali cultural theme implementation
- ✅ **Bilingual Support**: Complete English/Bengali content integration
- ✅ **Mobile Optimization**: Responsive design across all devices

## 📞 Support & Contact

### Technical Support
- **Repository Issues**: Create detailed bug reports or feature requests
- **Deployment Issues**: Check GitHub Actions logs and CloudWatch
- **Infrastructure Problems**: Review AWS CloudFormation stack events
- **Local Development**: Ensure all prerequisites are installed correctly

### BSM Organization
- **General Inquiries**: info@bsm.org.au
- **Membership**: Contact General Secretary Jony Saha
- **Events & Activities**: Check website events section
- **Volunteering**: Blood donation and tree plantation coordinators

### Project Information
- **Development Team**: Available through GitHub repository
- **Feature Requests**: Submit through GitHub issues with detailed requirements
- **Content Updates**: BSM committee members can request changes via email

---

**Last Updated**: September 2025  
**Current Version**: 2.1.0  
**Next.js Version**: 15.x  
**AWS Region**: ap-southeast-2 (Sydney)  
**License**: Private - Bengali Society of Melbourne  
**Repository**: [GitHub - BSM Website](https://github.com/your-org/bsm)