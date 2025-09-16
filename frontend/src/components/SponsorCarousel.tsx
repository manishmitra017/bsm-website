'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SponsorModal from './SponsorModal'

interface Sponsor {
  id: number
  name: string
  logo: string
  logos?: string[]  // For multiple images
  website?: string
  description: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  featured?: boolean
  specialOffer?: string
  contactInfo?: {
    phone?: string
    email?: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Find My Real Estate',
    logo: '/sponsors/findmyrealestate.jpeg',
    website: 'https://www.findmyrealestate.com.au',
    description: 'Your trusted real estate partner in Melbourne - Expert property advice and personalized service',
    tier: 'platinum',
    featured: true,
    specialOffer: 'Special rates for BSM community members',
    contactInfo: {
      phone: '1300 567 424',
      email: 'info@findmyrealestate.com.au'
    },
    socialMedia: {
      facebook: 'https://facebook.com/findmyrealestate',
      instagram: 'https://instagram.com/findmyrealestate'
    }
  },
  {
    id: 2,
    name: 'Ratul Biswas Finance Broker',
    logo: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg',
    website: 'https://www.a-f-s.au',
    description: 'Professional finance and mortgage solutions - Home loans, investment loans, refinancing',
    tier: 'platinum',
    featured: true,
    specialOffer: 'Free consultation for BSM members',
    contactInfo: {
      phone: '0493 229 921',
      email: 'ratul@financebroker.com.au'
    },
    socialMedia: {
      linkedin: 'https://linkedin.com/in/ratulbiswas'
    }
  },
  {
    id: 3,
    name: 'ASA Wealth Management',
    logo: '/sponsors/asa-wealth-management.jpeg',
    website: 'https://asawealth.com.au',
    description: 'Professional wealth management and financial advisory services - Investment planning, superannuation, insurance',
    tier: 'gold',
    featured: true,
    specialOffer: 'Complimentary financial health check for BSM families',
    contactInfo: {
      phone: '03 XXXX XXXX',
      email: 'contact@asawealth.com.au'
    }
  },
  {
    id: 4,
    name: 'Cosmic Renewable Energy',
    logo: '/sponsors/solar-1.jpeg',
    logos: [
      '/sponsors/solar-1.jpeg',
      '/sponsors/solar-2.jpeg',
      '/sponsors/solar-3.jpeg',
      '/sponsors/solar-4.jpeg',
      '/sponsors/solar-6.PNG'
    ],
    website: 'https://www.cosmicrenewableenergy.com.au',
    description: 'Sustainable solar energy solutions for homes and businesses - Complete solar and battery systems',
    tier: 'gold',
    featured: true,
    specialOffer: '10% discount on solar installations for BSM members',
    contactInfo: {
      phone: '1300 SOLAR',
      email: 'info@cosmicrenewableenergy.com.au'
    }
  },
  {
    id: 5,
    name: 'Choice Estate Agent',
    logo: '/sponsors/choicerealesate.jpeg',
    website: 'https://choiceestateagent.com.au',
    description: 'Your first choice for real estate - Ali Afzal, Director & Senior Property Manager',
    tier: 'silver',
    featured: true,
    specialOffer: 'Special property management services for BSM community',
    contactInfo: {
      phone: '0430 857 642',
      email: 'alia@choiceestateagent.com.au'
    }
  },
  {
    id: 6,
    name: 'EquityWise Real Estate',
    logo: '/sponsors/equitywiserealestate.jpeg',
    logos: [
      '/sponsors/equitywiserealestate.jpeg',
      '/sponsors/equitywise-swetha.png'
    ],
    website: 'https://www.equitywisere.com.au',
    description: 'Professional real estate services - Sweta, Director | OIEC, Manor Lakes',
    tier: 'silver',
    featured: true,
    specialOffer: 'Exclusive real estate consultation for BSM members',
    contactInfo: {
      phone: '0466 523 258',
      email: 'sweta@equitywisere.com.au'
    }
  }
]

export default function SponsorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)
  const [currentLogoIndex, setCurrentLogoIndex] = useState<{[key: number]: number}>({})

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused])

  // Auto-rotate logos for sponsors with multiple images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex(prev => {
        const newIndex = {...prev}
        sponsors.forEach((sponsor, idx) => {
          if (sponsor.logos && sponsor.logos.length > 1) {
            const currentIdx = prev[idx] || 0
            newIndex[idx] = (currentIdx + 1) % sponsor.logos.length
          }
        })
        return newIndex
      })
    }, 3000) // Change logo every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
  }

  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            🤝 Our Valued Sponsors | আমাদের মূল্যবান স্পনসর
          </h2>
          <p className="text-white/90">
            Partners who make our cultural celebrations possible
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative h-[400px] md:h-[500px] p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-8 flex flex-col md:flex-row items-center gap-8"
            >
              {/* Sponsor Logo */}
              <div className="flex-1 relative h-48 md:h-64 w-full md:w-auto">
                <div
                  className="relative h-full w-full bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => setSelectedSponsor(sponsors[currentIndex])}
                >
                  <Image
                    src={sponsors[currentIndex].logos
                      ? sponsors[currentIndex].logos![currentLogoIndex[currentIndex] || 0]
                      : sponsors[currentIndex].logo}
                    alt={sponsors[currentIndex].name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    🔍 Click to expand
                  </div>
                </div>
              </div>

              {/* Sponsor Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {sponsors[currentIndex].name}
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  {sponsors[currentIndex].description}
                </p>
                
                {sponsors[currentIndex].specialOffer && (
                  <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
                    <p className="text-green-800 font-semibold">
                      🎁 {sponsors[currentIndex].specialOffer}
                    </p>
                  </div>
                )}

                {sponsors[currentIndex].featured && (
                  <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    ⭐ Featured Partner
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  {sponsors[currentIndex].website && sponsors[currentIndex].website !== '#' && (
                    <a
                      href={sponsors[currentIndex].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Visit Website →
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedSponsor(sponsors[currentIndex])}
                    className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Previous sponsor"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Next sponsor"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 pb-6">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-red-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to sponsor ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Sponsor Detail Modal */}
      {selectedSponsor && (
        <SponsorModal
          sponsor={selectedSponsor}
          onClose={() => setSelectedSponsor(null)}
        />
      )}
    </>
  )
}