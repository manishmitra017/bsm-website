# BSM Website - Bengali Society of Melbourne

A beautiful, responsive website for the Bengali Society of Melbourne built with Next.js and deployed on AWS.

## 🌐 Live Website
**https://bsmmelbourne.org**

## 🏗️ Project Structure

```
bsm/
├── frontend/          # Next.js application
│   ├── src/app/      # App router pages
│   ├── src/components/ # React components
│   ├── public/       # Static assets and images
│   └── Dockerfile    # Container configuration
├── cdk/              # AWS CDK infrastructure
│   ├── lib/          # CDK stack definitions
│   └── bin/          # CDK app entry point
└── deploy.sh         # Deployment script
```

## 🚀 Quick Start

### Prerequisites
- AWS CLI configured with appropriate permissions
- Docker Desktop running
- Node.js 20+ installed
- AWS CDK CLI installed globally: `npm install -g aws-cdk`

### Deploy to Production
```bash
./deploy.sh
```

This will build and deploy your website to https://bsmmelbourne.org

## 📋 Features

### ✅ Current Features (Frontend)
- **Responsive Design**: Mobile-first Bengali cultural theme
- **Event Management**: Durga Puja, Kali Puja, Saraswati Puja, Pohela Boishakh
- **Photo Gallery**: Community photos with lightbox functionality
- **Membership System**: Google Maps integration, multiple membership types
- **Volunteering**: Blood donation and tree plantation sections
- **Contact Form**: SES-powered email with auto-reply
- **Donations**: Bank details and tax-deductible information
- **Bilingual Support**: English and Bengali content

### 🔄 Future Features (Backend)
- User authentication and profiles
- Event registration and management
- Payment processing for donations
- Member management system
- CMS for content management
- Admin dashboard

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Maps**: Google Maps API
- **Fonts**: Noto Sans Bengali
- **Deployment**: AWS ECS with Docker

### Infrastructure
- **Framework**: Next.js 15 with React 19 and TypeScript
- **Styling**: Tailwind CSS 4 with Bengali cultural theme
- **Deployment**: AWS CDK with:
  - ECS Fargate containers
  - Application Load Balancer
  - Route53 DNS management
  - Auto-managed SSL certificates
  - Auto-scaling (1-5 instances)

## 🌐 Live Website
**https://bsmmelbourne.org**

## 📦 Environment Variables

Key environment variables (see `.env.example` for complete list):

```bash
# Frontend
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
NEXT_PUBLIC_SITE_URL=https://bsmmelbourne.org
NEXT_PUBLIC_CONTACT_EMAIL=info@bsm.org.au

# AWS
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=ap-southeast-2

# Backend (Future)
DATABASE_URL=your-database-url
API_BASE_URL=http://localhost:8000
```

## 🚀 Deployment

### Prerequisites
- AWS Account with proper permissions
- Docker installed and running
- AWS CLI configured
- Domain configured in Route 53

### Deployment Commands
```bash
# From project root
./deploy.sh dev        # Deploy to development
./deploy.sh production # Deploy to production

# Or from frontend directory
npm run deploy:dev
npm run deploy:prod
```

### Infrastructure Components
- **ECS Service**: Auto-scaling containerized application
- **VPC**: Secure networking with public/private subnets
- **Load Balancer**: SSL termination and traffic distribution
- **CloudFront**: Global CDN for performance
- **Lambda**: Serverless contact form handler
- **SES**: Professional email delivery

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm install
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Docker Development
```bash
cd frontend
npm run docker:build # Build Docker image
npm run docker:run   # Run container locally
```

## 📞 Support

### Technical Support
- **Repository**: Create issues on GitHub
- **AWS Issues**: Use AWS Support Center
- **Deployment**: Check CloudWatch logs

### Content Updates
- **BSM Committee**: info@bsm.org.au
- **Technical Changes**: Through GitHub issues

---

**Last Updated**: August 2025  
**Version**: 2.0.0  
**License**: Private - Bengali Society of Melbourne