'use client'

import { useEffect, useRef } from 'react'
import '@/types/google-maps'

interface GoogleMapProps {
  address: string
  className?: string
  zoom?: number
}

export default function GoogleMap({ address, className = '', zoom = 15 }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)

  useEffect(() => {
    console.log('GoogleMap component mounted, API Key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? 'Available' : 'Missing');
    
    const initMap = () => {
      if (!window.google || !mapRef.current) {
        console.log('Google Maps API not ready:', { google: !!window.google, mapRef: !!mapRef.current });
        return;
      }

      try {
        if (!window.google?.maps?.Geocoder) return
        const geocoder = new window.google.maps.Geocoder()
        
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results.length > 0) {
            const result = results[0] as { geometry: { location: unknown } }
            const location = result.geometry.location
            
            const mapOptions = {
              zoom,
              center: location,
              mapTypeId: 'roadmap',
              scrollwheel: false,
              navigationControl: false,
              mapTypeControl: false,
              scaleControl: false,
              draggable: true,
              styles: [
                {
                  featureType: 'administrative',
                  elementType: 'labels.text.fill',
                  stylers: [{ color: '#dc2626' }]
                },
                {
                  featureType: 'landscape',
                  elementType: 'all',
                  stylers: [{ color: '#f2f2f2' }]
                },
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: [{ visibility: 'off' }]
                },
                {
                  featureType: 'road',
                  elementType: 'all',
                  stylers: [{ saturation: -100 }, { lightness: 45 }]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'all',
                  stylers: [{ visibility: 'simplified' }]
                },
                {
                  featureType: 'road.arterial',
                  elementType: 'labels.icon',
                  stylers: [{ visibility: 'off' }]
                },
                {
                  featureType: 'transit',
                  elementType: 'all',
                  stylers: [{ visibility: 'off' }]
                },
                {
                  featureType: 'water',
                  elementType: 'all',
                  stylers: [{ color: '#e74c3c' }, { visibility: 'on' }]
                }
              ]
            }

            if (!window.google?.maps?.Map || !window.google?.maps?.Marker || !mapRef.current) return
            mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions)

            new window.google.maps.Marker({
              position: location,
              map: mapInstanceRef.current,
              title: 'Bengali Society of Melbourne'
            })
          } else {
            console.log('Geocoding failed:', status)
            // Fallback to Point Cook coordinates (approximate)
            if (!window.google?.maps?.LatLng) return
            const pointCookLocation = new window.google.maps.LatLng(-37.8904, 144.7602)
            
            const mapOptions = {
              zoom: 12,
              center: pointCookLocation,
              mapTypeId: 'roadmap',
              scrollwheel: false,
              navigationControl: false,
              mapTypeControl: false,
              scaleControl: false,
              draggable: true
            }

            if (!window.google?.maps?.Map || !window.google?.maps?.Marker || !mapRef.current) return
            mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions)
            
            new window.google.maps.Marker({
              position: pointCookLocation,
              map: mapInstanceRef.current,
              title: 'Bengali Society of Melbourne - Point Cook Area'
            })
          }
        })
      } catch (error) {
        console.log('Map initialization error:', error)
      }
    }

    // Wait for Google Maps to load
    const waitForGoogle = () => {
      return new Promise<void>((resolve) => {
        console.log('Checking Google Maps API...', { google: !!window.google, maps: !!window.google?.maps, places: !!window.google?.maps?.places });
        
        if (window.google && window.google.maps) {
          console.log('Google Maps API ready immediately');
          resolve()
        } else {
          console.log('Waiting for Google Maps API to load...');
          let attempts = 0;
          const checkInterval = setInterval(() => {
            attempts++;
            console.log(`Checking Google Maps API... Attempt ${attempts}`, { google: !!window.google, maps: !!window.google?.maps, places: !!window.google?.maps?.places });
            
            if (window.google && window.google.maps) {
              clearInterval(checkInterval)
              console.log('Google Maps API loaded after', attempts, 'attempts');
              resolve()
            } else if (attempts > 50) { // Stop after 5 seconds
              clearInterval(checkInterval)
              console.error('Google Maps API failed to load after 5 seconds');
              resolve() // Resolve anyway to avoid hanging
            }
          }, 100)
        }
      })
    }

    waitForGoogle().then(() => {
      setTimeout(initMap, 200) // Small delay to ensure everything is ready
    })
  }, [address, zoom])

  return (
    <div
      ref={mapRef}
      className={`w-full h-full min-h-[300px] rounded-lg ${className}`}
      style={{ minHeight: '300px' }}
    />
  )
}