'use client'

import { useEffect, useRef } from 'react'
import { GooglePlace, GoogleAutocompleteOptions } from '@/types/google-maps'

export const useGooglePlaces = (
  onPlaceSelect: (place: GooglePlace) => void,
  options: GoogleAutocompleteOptions = {}
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<unknown>(null)

  useEffect(() => {
    if (!inputRef.current) return

    const initAutocomplete = () => {
      if (window.google && window.google.maps && window.google.maps.places && inputRef.current) {
        try {
          const defaultOptions = {
            componentRestrictions: { country: 'AU' },
            fields: ['formatted_address', 'geometry', 'place_id'],
            types: ['address']
          }

          if (!window.google?.maps?.places?.Autocomplete) return
          
          autocompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            { ...defaultOptions, ...options }
          )

          const autocomplete = autocompleteRef.current as { 
            addListener: (event: string, callback: () => void) => void
            getPlace: () => GooglePlace 
          }

          autocomplete.addListener('place_changed', () => {
            try {
              const place = autocomplete.getPlace()
              if (place && place.formatted_address) {
                onPlaceSelect(place)
              }
            } catch (error) {
              console.log('Place selection error:', error)
            }
          })
        } catch (error) {
          console.log('Autocomplete initialization error:', error)
        }
      }
    }

    // Wait for Google Maps to be fully loaded
    const waitForGoogle = () => {
      return new Promise<void>((resolve) => {
        console.log('Waiting for Google Maps API...', {
          google: !!window.google,
          maps: !!(window.google && window.google.maps),
          places: !!(window.google && window.google.maps && window.google.maps.places)
        })
        
        if (window.google && window.google.maps && window.google.maps.places) {
          console.log('Google Maps API ready!')
          resolve()
        } else {
          let attempts = 0
          const checkInterval = setInterval(() => {
            attempts++
            console.log(`Checking Google Maps API... Attempt ${attempts}`, {
              google: !!window.google,
              maps: !!(window.google && window.google.maps),
              places: !!(window.google && window.google.maps && window.google.maps.places)
            })
            
            if (window.google && window.google.maps && window.google.maps.places) {
              console.log('Google Maps API loaded after', attempts, 'attempts')
              clearInterval(checkInterval)
              resolve()
            }
            
            // Stop trying after 50 attempts (5 seconds)
            if (attempts >= 50) {
              console.warn('Google Maps API failed to load after 5 seconds')
              clearInterval(checkInterval)
              resolve()
            }
          }, 100)
        }
      })
    }

    waitForGoogle().then(() => {
      console.log('Initializing autocomplete...')
      setTimeout(initAutocomplete, 100) // Small delay to ensure everything is ready
    })

    return () => {
      if (autocompleteRef.current && window.google?.maps?.event) {
        try {
          window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
        } catch (error) {
          console.log('Cleanup error:', error)
        }
      }
    }
  }, [onPlaceSelect, options])

  return inputRef
}