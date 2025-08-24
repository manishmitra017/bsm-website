# BSM Frontend

Next.js 15 frontend application for the Bengali Society of Melbourne website.

## Environment Variables

Environment variables are managed at the parent directory level. 

1. Copy the environment template:
   ```bash
   cd ..
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your actual values (Google Maps API key, AWS credentials, etc.)

3. Next.js automatically loads environment variables from parent directories, so no additional configuration needed.

## Development

```bash
npm install
npm run dev
```

## Production

The frontend is deployed using Docker and AWS ECS. See the parent directory's README.md for deployment instructions.

## Key Features

- **Next.js 15** with App Router
- **React 19** with modern features
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Google Maps API** integration
- **Bengali fonts** (Noto Sans Bengali)
- **Responsive design** with mobile-first approach
- **TypeScript** for type safety
- **Contact form** with AWS SES integration

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx     # Homepage
│   ├── about/       # About page
│   ├── events/      # Event pages (Durga Puja, etc.)
│   ├── gallery/     # Photo gallery
│   ├── membership/  # Membership forms
│   ├── donation/    # Donation page
│   ├── volunteering/# Volunteering activities
│   └── contact/     # Contact form
├── components/       # Reusable components
├── hooks/           # Custom hooks (Google Maps)
├── lambda/          # AWS Lambda functions
└── types/           # TypeScript definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy:dev` - Deploy to AWS development
- `npm run deploy:prod` - Deploy to AWS production
