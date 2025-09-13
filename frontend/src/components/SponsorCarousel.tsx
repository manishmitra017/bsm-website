'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Sponsor {
  id: number
  name: string
  logo: string
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
    website: 'https://www.cosmicrenewableenergy.com.au',
    description: 'Sustainable solar energy solutions for homes and businesses - Complete solar and battery systems',
    tier: 'silver',
    featured: true,
    specialOffer: '10% discount on solar installations for BSM members'
  },
  {
    id: 5,
    name: 'Cosmic Renewable Energy',
    logo: '/sponsors/solar-2.jpeg',
    website: 'https://www.cosmicrenewableenergy.com.au',
    description: 'Leading solar panel installation and maintenance services',
    tier: 'silver'
  },
  {
    id: 6,
    name: 'Cosmic Renewable Energy',
    logo: '/sponsors/solar-3.jpeg',
    website: 'https://www.cosmicrenewableenergy.com.au',
    description: 'Complete solar and battery storage solutions',
    tier: 'bronze'
  }
]

export default function SponsorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'from-gray-400 to-gray-600'
      case 'gold': return 'from-yellow-400 to-yellow-600'
      case 'silver': return 'from-gray-300 to-gray-500'
      case 'bronze': return 'from-orange-400 to-orange-600'
      default: return 'from-gray-200 to-gray-400'
    }
  }

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'platinum': return '💎'
      case 'gold': return '🏆'
      case 'silver': return '🥈'
      case 'bronze': return '🥉'
      default: return '🎖️'
    }
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
                <div className={`absolute -top-2 -left-2 bg-gradient-to-r ${getTierColor(sponsors[currentIndex].tier)} text-white px-3 py-1 rounded-full text-sm font-bold z-10`}>
                  {getTierBadge(sponsors[currentIndex].tier)} {sponsors[currentIndex].tier.toUpperCase()}
                </div>
                <div 
                  className="relative h-full w-full bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => setSelectedSponsor(sponsors[currentIndex])}
                >
                  <Image
                    src={sponsors[currentIndex].logo}
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
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSponsor(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className={`inline-block bg-gradient-to-r ${getTierColor(selectedSponsor.tier)} text-white px-4 py-2 rounded-full text-sm font-bold mb-3`}>
                  {getTierBadge(selectedSponsor.tier)} {selectedSponsor.tier.toUpperCase()} SPONSOR
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedSponsor.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSponsor(null)}
                className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <div 
              className="relative h-48 mb-6 bg-gray-50 rounded-xl p-4 cursor-pointer group hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                // Create a temporary image modal
                const imageModal = document.createElement('div')
                imageModal.className = 'fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4'
                imageModal.onclick = () => document.body.removeChild(imageModal)
                
                const imageContainer = document.createElement('div')
                imageContainer.className = 'relative bg-white rounded-xl p-4 max-w-4xl max-h-[90vh] overflow-hidden'
                imageContainer.onclick = (e) => e.stopPropagation()
                
                const closeBtn = document.createElement('button')
                closeBtn.innerHTML = '✕'
                closeBtn.className = 'absolute top-4 right-4 z-10 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-xl font-bold shadow-lg'
                closeBtn.onclick = () => document.body.removeChild(imageModal)
                
                const title = document.createElement('h3')
                title.textContent = selectedSponsor.name
                title.className = 'text-2xl font-bold text-gray-900 text-center mb-4'
                
                const imageDiv = document.createElement('div')
                imageDiv.className = 'relative w-full h-[70vh] flex items-center justify-center bg-gray-50 rounded-lg'
                
                const img = document.createElement('img')
                img.src = selectedSponsor.logo
                img.alt = selectedSponsor.name
                img.className = 'max-w-full max-h-full object-contain'
                
                imageDiv.appendChild(img)
                imageContainer.appendChild(closeBtn)
                imageContainer.appendChild(title)
                imageContainer.appendChild(imageDiv)
                imageModal.appendChild(imageContainer)
                document.body.appendChild(imageModal)
              }}
            >
              <Image
                src={selectedSponsor.logo}
                alt={selectedSponsor.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔍 Click to expand
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              {selectedSponsor.description}
            </p>

            {selectedSponsor.specialOffer && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-green-800 mb-2">🎁 Special Offer for BSM Members</h4>
                <p className="text-green-700">{selectedSponsor.specialOffer}</p>
              </div>
            )}

            {selectedSponsor.contactInfo && (
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">📞 Contact Information</h4>
                <div className="space-y-2">
                  {selectedSponsor.contactInfo.phone && (
                    <p className="text-gray-700">
                      <span className="font-semibold">Phone:</span>{' '}
                      <a href={`tel:${selectedSponsor.contactInfo.phone}`} className="text-blue-600 hover:underline">
                        {selectedSponsor.contactInfo.phone}
                      </a>
                    </p>
                  )}
                  {selectedSponsor.contactInfo.email && (
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href={`mailto:${selectedSponsor.contactInfo.email}`} className="text-blue-600 hover:underline">
                        {selectedSponsor.contactInfo.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}

            {selectedSponsor.socialMedia && (
              <div className="flex gap-3 mb-6">
                {selectedSponsor.socialMedia.facebook && (
                  <a
                    href={selectedSponsor.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {selectedSponsor.socialMedia.instagram && (
                  <a
                    href={selectedSponsor.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                  </a>
                )}
                {selectedSponsor.socialMedia.linkedin && (
                  <a
                    href={selectedSponsor.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}

            <div className="flex gap-3">
              {selectedSponsor.website && selectedSponsor.website !== '#' && (
                <a
                  href={selectedSponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Visit Website →
                </a>
              )}
              <Link
                href="/sponsorship"
                className="flex-1 border-2 border-red-600 text-red-600 text-center py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Become a Sponsor
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}