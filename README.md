# Bangiya Sanskritik Manch Melbourne (BSM)

A modern, responsive website for Bangiya Sanskritik Manch Melbourne (BSM) - a non-profit organization dedicated to preserving and promoting Bengali culture in Melbourne, Australia. Built with Next.js and TypeScript.

## Project Structure

```
bsm/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   │   ├── about/       # About page
│   │   │   ├── contact/     # Contact page
│   │   │   ├── events/      # Events pages (Durga Puja, Kali Puja, etc.)
│   │   │   └── api/         # API routes
│   │   ├── components/      # Reusable components (Header, Footer)
│   │   └── public/          # Static assets (images, logos)
│   └── package.json
├── context_portal/          # Context management system (ConPort)
│   ├── alembic/            # Database migrations
│   └── logs/               # Application logs
├── run_all.sh              # Development server startup script
├── deploy.sh               # Production deployment script
├── ecosystem.config.js     # PM2 configuration
└── README.md
```

## Features

- **Modern Design**: Clean, professional design for cultural organization
- **Responsive Layout**: Fully responsive design that works on all devices
- **Event Pages**: Dedicated pages for cultural events (Durga Puja, Kali Puja, Saraswati Puja, etc.)
- **Photo Gallery**: Showcase of community events and activities
- **Contact Forms**: Integrated contact form for inquiries
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Bengali Culture Focus**: Content tailored to Bengali cultural preservation

## Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React** for UI components
- **Lucide React** for icons

### Context Management
- **ConPort** for project context and decision tracking
- **SQLite** database with Alembic migrations
- **Full-text search** capabilities for decisions and custom data

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Run Development Server

**Option 1: Using the run script (Recommended)**
```bash
./run_all.sh
```

**Option 2: Manual setup**
```bash
cd frontend
npm install
npm run dev
```

The development server will start on http://localhost:3000 (or next available port).

### Available Scripts

- `./run_all.sh` - Start development server with port management
- `npm run dev` - Start Next.js development server
- `npm run build` - Build the frontend for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- `/` - Homepage with hero section, upcoming events, and about section
- `/about` - Organization information and mission
- `/events` - Main events page with cultural celebrations
- `/events/durgotsav` - Durga Puja celebrations
- `/events/kalipuja-deepavali` - Kali Puja and Diwali celebrations
- `/events/saraswati-puja` - Saraswati Puja celebrations
- `/events/pohela-boishakh` - Bengali New Year celebrations
- `/events/christmas-new-year` - Christmas and New Year events
- `/contact` - Contact form and organization details

## API Endpoints

- `POST /api/contact` - Submit contact form
- Additional API routes can be added as needed

## Customization

### Adding Photos
Replace placeholder content with actual photos:
1. Add images to `frontend/public/` directory (organized in subfolders)
2. Update image references in React components
3. Replace placeholder gradient backgrounds with actual images

### Content Updates
- Update event information in respective event pages
- Modify organization details in `/about` page
- Customize contact information in `/contact` page
- Add new event pages as needed

### Styling
- Tailwind CSS classes can be modified throughout components
- Color scheme uses cultural-appropriate colors - update in components as needed

## Deployment

### Production Deployment (PM2 + nginx)
```bash
./deploy.sh
```

### Manual Deployment
```bash
cd frontend
npm install
npm run build
npm start
```

### Environment Variables

Create `.env.local` file in frontend directory if needed:
```
# Optional: Custom port for development
PORT=3000
```

## Context Portal (ConPort)

The project includes a context management system for:
- Architectural decision tracking
- Progress logging
- System pattern documentation
- Custom data storage
- Full-text search capabilities

Migrations are managed through Alembic in the `context_portal/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Bangiya Sanskritik Manch Melbourne.