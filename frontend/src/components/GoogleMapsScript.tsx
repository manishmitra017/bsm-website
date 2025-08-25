'use client'

import Script from 'next/script'

export default function GoogleMapsScript() {
  return (
    <Script
      id="google-maps"
      strategy="lazyOnload"
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'API_KEY_NOT_FOUND'}&libraries=places`}
      onLoad={() => {
        console.log('Google Maps API loaded successfully');
      }}
      onError={(e) => {
        console.error('Failed to load Google Maps API:', e);
      }}
    />
  )
}