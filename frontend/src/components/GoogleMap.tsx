'use client'

import { useEffect, useRef } from 'react'

interface GoogleMapProps {
  address: string
  className?: string
  zoom?: number
}

declare global {
  interface Window {
    google?: {
      maps?: {
        Map: new (element: HTMLElement, options: any) => any
        Marker: new (options: any) => any
        Geocoder: new () => {
          geocode: (request: any, callback: (results: any[], status: string) => void) => void
        }
        LatLng: new (lat: number, lng: number) => any
      }
    }
  }
}

export default function GoogleMap({ address, className = '', zoom = 15 }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    const initMap = () => {
      if (!window.google || !mapRef.current) return

      try {
        const geocoder = new window.google.maps.Geocoder()
        
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const location = results[0].geometry.location
            
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

            mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions)

            new window.google.maps.Marker({
              position: location,
              map: mapInstanceRef.current,
              title: 'Bengali Society of Melbourne'
            })
          } else {
            console.log('Geocoding failed:', status)
            // Fallback to Point Cook coordinates (approximate)
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
        // Show a fallback message in the map container
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gray-100 text-gray-500">
              <div class="text-center">
                <p class="text-lg mb-2">🗺️</p>
                <p class="text-sm">Map temporarily unavailable</p>
                <p class="text-xs">7 Littlecroft Street, Point Cook, VIC 3030</p>
              </div>
            </div>
          `
        }
      }
    }

    // Wait for Google Maps to load
    const waitForGoogle = () => {
      return new Promise<void>((resolve) => {
        if (window.google && window.google.maps) {
          resolve()
        } else {
          const checkInterval = setInterval(() => {
            if (window.google && window.google.maps) {
              clearInterval(checkInterval)
              resolve()
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