'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface SponsorBanner {
  id: number
  name: string
  logo: string
  website?: string
  message: string
  ctaText: string
  bgColor: string
}

const sponsorBanners: SponsorBanner[] = [
  {
    id: 1,
    name: 'Find My Real Estate',
    logo: '/sponsors/findmyrealestate.jpeg',
    website: 'https://www.findmyrealestate.com.au',
    message: '🏠 Looking for your dream home? Get expert guidance from trusted real estate professionals',
    ctaText: 'Get Free Property Appraisal',
    bgColor: 'from-blue-600 to-purple-600'
  },
  {
    id: 2,
    name: 'Ratul Biswas Finance',
    logo: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg',
    website: 'https://www.a-f-s.au',
    message: '💰 Need a home loan? Get competitive rates and personalized service',
    ctaText: 'Book Free Consultation',
    bgColor: 'from-green-600 to-teal-600'
  },
  {
    id: 3,
    name: 'ASA Wealth Management',
    logo: '/sponsors/asa-wealth-management.jpeg',
    website: 'https://asawealth.com.au',
    message: '📈 Secure your financial future with professional wealth management',
    ctaText: 'Get Financial Health Check',
    bgColor: 'from-purple-600 to-pink-600'
  },
  {
    id: 4,
    name: 'Cosmic Renewable Energy',
    logo: '/sponsors/solar-1.jpeg',
    website: 'https://www.cosmicrenewableenergy.com.au',
    message: '☀️ Go solar and save! Professional solar installations with BSM member discounts',
    ctaText: 'Get Solar Quote',
    bgColor: 'from-orange-600 to-yellow-600'
  },
  {
    id: 5,
    name: 'Bengal Solicitors',
    logo: '/sponsors/BengalSolicitors.jpeg',
    website: 'https://www.bengalsolicitors.com.au',
    message: '⚖️ Expert property law & conveyancing services. Get practical legal advice in plain language',
    ctaText: 'Book Free Consultation',
    bgColor: 'from-indigo-600 to-blue-600'
  }
]

interface SponsorBannerProps {
  position?: 'top' | 'middle' | 'bottom'
  autoRotate?: boolean
  compact?: boolean
}

export default function SponsorBanner({ 
  position = 'middle', 
  autoRotate = true,
  compact = false 
}: SponsorBannerProps) {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setIsVisible(false)
        setTimeout(() => {
          setCurrentBanner((prev) => (prev + 1) % sponsorBanners.length)
          setIsVisible(true)
        }, 300)
      }, 8000) // Rotate every 8 seconds

      return () => clearInterval(interval)
    }
  }, [autoRotate])

  const banner = sponsorBanners[currentBanner]

  if (compact) {
    // Compact version for sidebars or smaller spaces
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={banner.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-4 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={banner.logo}
                alt={banner.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {banner.name}
              </p>
              <p className="text-xs text-gray-600 mb-2">
                {banner.message.substring(0, 50)}...
              </p>
              {banner.website && (
                <a
                  href={banner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  Learn More →
                </a>
              )}
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-xs text-gray-500">Sponsored</span>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Full banner version
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={banner.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={`relative bg-gradient-to-r ${banner.bgColor} rounded-xl shadow-xl overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Logo */}
            <div 
              className="bg-white rounded-xl p-4 shadow-lg cursor-pointer group hover:shadow-2xl transition-shadow duration-300"
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
                title.textContent = banner.name
                title.className = 'text-2xl font-bold text-gray-900 text-center mb-4'
                
                const imageDiv = document.createElement('div')
                imageDiv.className = 'relative w-full h-[70vh] flex items-center justify-center bg-gray-50 rounded-lg'
                
                const img = document.createElement('img')
                img.src = banner.logo
                img.alt = banner.name
                img.className = 'max-w-full max-h-full object-contain'
                
                imageDiv.appendChild(img)
                imageContainer.appendChild(closeBtn)
                imageContainer.appendChild(title)
                imageContainer.appendChild(imageDiv)
                imageModal.appendChild(imageContainer)
                document.body.appendChild(imageModal)
              }}
            >
              <div className="relative w-32 h-24 md:w-40 md:h-32">
                <Image
                  src={banner.logo}
                  alt={banner.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1 right-1 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔍
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white mb-3">
                ⭐ Featured Sponsor
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {banner.name}
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-4">
                {banner.message}
              </p>
              {banner.website && (
                <a
                  href={banner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {banner.ctaText} →
                </a>
              )}
            </div>

            {/* Special Offer Badge */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              BSM Special
            </div>
          </div>

          {/* Rotation Dots */}
          {autoRotate && (
            <div className="flex justify-center gap-2 mt-6">
              {sponsorBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentBanner 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to sponsor ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// Mini banner for headers or footers
export function SponsorMini() {
  const [currentSponsor, setCurrentSponsor] = useState(0)
  
  const miniSponsors = [
    { name: 'Find My Real Estate', logo: '/sponsors/findmyrealestate.jpeg', website: 'https://www.findmyrealestate.com.au' },
    { name: 'Ratul Biswas Finance', logo: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg', website: 'https://www.a-f-s.au' },
    { name: 'ASA Wealth Management', logo: '/sponsors/asa-wealth-management.jpeg', website: 'https://asawealth.com.au' },
    { name: 'Cosmic Renewable Energy', logo: '/sponsors/solar-1.jpeg', website: 'https://www.cosmicrenewableenergy.com.au' },
    { name: 'Bengal Solicitors', logo: '/sponsors/BengalSolicitors.jpeg', website: 'https://www.bengalsolicitors.com.au' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSponsor((prev) => (prev + 1) % miniSponsors.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const sponsor = miniSponsors[currentSponsor]

  return (
    <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-2 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500 font-medium">Sponsored by:</span>
        <AnimatePresence mode="wait">
          <motion.a
            key={sponsor.name}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-8 h-8">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {sponsor.name}
            </span>
          </motion.a>
        </AnimatePresence>
      </div>
    </div>
  )
}