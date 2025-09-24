/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for S3 deployment or standalone for Lambda
  output: process.env.BUILD_STATIC === 'true' ? 'export' :
          (process.env.NODE_ENV === 'production' && (process.env.BUILD_STANDALONE === 'true' || process.env.BUILD_LAMBDA === 'true') ? 'standalone' : undefined),
  
  // Disable static optimization for problematic pages during build
  trailingSlash: false,
  
  // Enable experimental features (Next.js 15 has server actions enabled by default)
  experimental: {
    // Server actions are enabled by default in Next.js 15
  },
  
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
    // Disable image optimization for static export and standalone mode
    unoptimized: process.env.BUILD_STATIC === 'true' || process.env.BUILD_STANDALONE === 'true',
  },
  
  // Environment variables - Next.js automatically loads .env files from parent directories
  env: {
    CUSTOM_KEY: 'BSM_WEBSITE',
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
  
  // Security headers (disabled for static export)
  ...(process.env.BUILD_STATIC !== 'true' && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://maps.googleapis.com https://api.web3forms.com;",
            },
          ],
        },
      ];
    },

    // Rewrites for API routes
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
      ];
    },
  }),
};

module.exports = nextConfig;