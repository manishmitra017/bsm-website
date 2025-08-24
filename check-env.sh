#!/bin/bash

# Script to check environment variables
echo "🔍 Checking Environment Variables"
echo "================================="

# Load environment variables
if [ -f .env ]; then
    echo "📋 Loading from .env"
    export $(grep -v '^#' .env | xargs)
elif [ -f .env.local ]; then
    echo "📋 Loading from .env.local"
    export $(grep -v '^#' .env.local | xargs)
fi

echo ""
echo "Environment Variables:"
echo "======================"
echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: ${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:-'❌ NOT SET'}"
echo "NEXT_PUBLIC_SITE_URL: ${NEXT_PUBLIC_SITE_URL:-'❌ NOT SET'}"
echo "NEXT_PUBLIC_SITE_NAME: ${NEXT_PUBLIC_SITE_NAME:-'❌ NOT SET'}"
echo "NEXT_PUBLIC_CONTACT_EMAIL: ${NEXT_PUBLIC_CONTACT_EMAIL:-'❌ NOT SET'}"
echo ""

if [ -n "$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" ] && [ "$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" != "your-google-maps-api-key-here" ]; then
    echo "✅ Google Maps API Key is configured"
else
    echo "❌ Google Maps API Key is missing or using placeholder value"
    echo "   Update your .env.local file with a real API key"
fi