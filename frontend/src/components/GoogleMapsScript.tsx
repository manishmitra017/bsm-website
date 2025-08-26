'use client'

import Script from 'next/script'

export default function GoogleMapsScript() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  // Debug logging
  console.log('Google Maps API Key status:', {
    hasKey: !!apiKey,
    keyLength: apiKey?.length || 0,
    keyStart: apiKey?.substring(0, 10) || 'NOT_FOUND',
    environment: process.env.NODE_ENV
  });

  return (
    <Script
      id="google-maps"
      strategy="lazyOnload"
      src={`https://maps.googleapis.com/maps/api/js?key=${apiKey || 'API_KEY_NOT_FOUND'}&libraries=places`}
      onLoad={() => {
        console.log('Google Maps API loaded successfully');
      }}
      onError={(e) => {
        console.error('Failed to load Google Maps API:', e);
        console.error('API Key used:', apiKey?.substring(0, 10) || 'NOT_FOUND');
      }}
    />
  )
}