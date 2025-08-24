// Centralized Google Maps type definitions

export interface GooglePlace {
  formatted_address?: string
  geometry?: {
    location: {
      lat: () => number
      lng: () => number
    }
  }
  place_id?: string
}

export interface GoogleAutocompleteOptions {
  componentRestrictions?: { country: string }
  fields?: string[]
  types?: string[]
}

declare global {
  interface Window {
    google?: {
      maps?: {
        Map: new (element: HTMLElement, options: Record<string, unknown>) => unknown
        Marker: new (options: Record<string, unknown>) => unknown
        Geocoder: new () => {
          geocode: (request: Record<string, unknown>, callback: (results: unknown[], status: string) => void) => void
        }
        LatLng: new (lat: number, lng: number) => unknown
        places?: {
          Autocomplete: new (
            input: HTMLInputElement,
            options?: GoogleAutocompleteOptions
          ) => {
            addListener: (event: string, callback: () => void) => void
            getPlace: () => GooglePlace
          }
        }
        event?: {
          clearInstanceListeners: (instance: unknown) => void
        }
      }
    }
  }
}

export {}