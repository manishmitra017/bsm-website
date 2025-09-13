'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SponsorSpotlight {
  name: string
  logo: string
  businessType: string
  yearEstablished?: string
  specialization: string[]
  whyBSM: string
  communityImpact: string
  testimonial: string
  contactPerson?: string
  website?: string
  phone?: string
  email?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  offers: string[]
}

const spotlightSponsors: SponsorSpotlight[] = [
  {
    name: 'Find My Real Estate',
    logo: '/sponsors/findmyrealestate.jpeg',
    businessType: 'Real Estate Services',
    yearEstablished: '2015',
    specialization: [
      'Residential Property Sales',
      'Property Management',
      'Investment Advisory',
      'First Home Buyers Support'
    ],
    whyBSM: 'We believe in supporting communities that celebrate culture and bring families together. BSM represents the values we hold dear - unity, tradition, and growth.',
    communityImpact: 'Helped over 50 Bengali families find their dream homes in Melbourne',
    testimonial: '"BSM has given us the opportunity to connect with a vibrant community. We\'re proud to support their cultural initiatives and help families establish roots in Melbourne."',
    contactPerson: 'Director',
    website: 'https://www.findmyrealestate.com.au',
    phone: '1300 567 424',
    email: 'info@findmyrealestate.com.au',
    socialMedia: {
      facebook: 'https://facebook.com/findmyrealestate',
      instagram: 'https://instagram.com/findmyrealestate'
    },
    offers: [
      '🎁 Free property appraisal for BSM members',
      '🏠 Reduced commission rates',
      '📚 Free first-time buyer consultation',
      '🔍 Priority property alerts'
    ]
  },
  {
    name: 'Ratul Biswas Finance Broker',
    logo: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg',
    businessType: 'Financial Services',
    specialization: [
      'Home Loans',
      'Investment Loans',
      'Refinancing',
      'Commercial Loans'
    ],
    whyBSM: 'As a member of the Bengali community myself, I understand the importance of preserving our culture while building financial security in Australia.',
    communityImpact: 'Secured over $20 million in home loans for community members with competitive rates',
    testimonial: '"Supporting BSM is my way of giving back to the community that has given me so much. Together, we\'re building a stronger Bengali presence in Melbourne."',
    website: 'https://www.a-f-s.au',
    phone: '0493 229 921',
    email: 'ratul@financebroker.com.au',
    socialMedia: {
      linkedin: 'https://linkedin.com/in/ratulbiswas'
    },
    offers: [
      '💰 Free loan health check',
      '📊 No-obligation financial consultation',
      '🎯 Exclusive rates for BSM members',
      '📱 24/7 support for urgent queries'
    ]
  },
  {
    name: 'ASA Wealth Management',
    logo: '/sponsors/asa-wealth-management.jpeg',
    businessType: 'Wealth Management & Financial Planning',
    specialization: [
      'Investment Planning',
      'Superannuation Advice',
      'Insurance Solutions',
      'Retirement Planning'
    ],
    whyBSM: 'We believe cultural organizations like BSM play a vital role in maintaining community bonds and passing on heritage to future generations.',
    communityImpact: 'Provided financial literacy workshops to over 200 community members',
    testimonial: '"BSM events bring joy to families and preserve traditions. We\'re honored to support their mission of cultural preservation and community building."',
    website: 'https://asawealth.com.au',
    phone: '03 XXXX XXXX',
    email: 'contact@asawealth.com.au',
    offers: [
      '📈 Complimentary portfolio review',
      '🛡️ Free insurance needs analysis',
      '🎓 Financial planning seminars for BSM',
      '💼 Superannuation optimization consultation'
    ]
  }
]

export default function SponsorSpotlight() {
  const [currentSponsor, setCurrentSponsor] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Rotate spotlight every week (simulated with faster rotation for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSponsor((prev) => (prev + 1) % spotlightSponsors.length)
        setIsVisible(true)
      }, 500)
    }, 30000) // Change every 30 seconds (would be weekly in production)

    return () => clearInterval(interval)
  }, [])

  const sponsor = spotlightSponsors[currentSponsor]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              ⭐ Sponsor Spotlight
            </h2>
            <p className="text-white/90">
              Featured Partner of the Month
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-white font-semibold">
              {currentSponsor + 1} of {spotlightSponsors.length}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Business Info */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <div className="relative h-32 mb-6">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {sponsor.name}
              </h3>
              <p className="text-red-600 font-semibold mb-4">
                {sponsor.businessType}
              </p>
              {sponsor.yearEstablished && (
                <p className="text-gray-600 mb-4">
                  Established: {sponsor.yearEstablished}
                </p>
              )}
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Specializations:</h4>
                <ul className="space-y-2">
                  {sponsor.specialization.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-3">Get in Touch:</h4>
                <div className="space-y-2">
                  {sponsor.website && (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Visit Website
                    </a>
                  )}
                  {sponsor.phone && (
                    <a
                      href={`tel:${sponsor.phone}`}
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {sponsor.phone}
                    </a>
                  )}
                  {sponsor.email && (
                    <a
                      href={`mailto:${sponsor.email}`}
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {sponsor.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Community Impact */}
          <div>
            {/* Why BSM */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">
                Why We Support BSM
              </h4>
              <p className="text-gray-700 italic">
                "{sponsor.whyBSM}"
              </p>
            </div>

            {/* Community Impact */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">
                🌟 Community Impact
              </h4>
              <p className="text-blue-800">
                {sponsor.communityImpact}
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">
                💬 Message to the Community
              </h4>
              <p className="text-gray-700 italic text-lg">
                {sponsor.testimonial}
              </p>
              {sponsor.contactPerson && (
                <p className="text-gray-600 mt-3 text-right">
                  - {sponsor.contactPerson}
                </p>
              )}
            </div>

            {/* Special Offers */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-4 text-lg">
                🎁 Exclusive BSM Member Benefits
              </h4>
              <ul className="space-y-3">
                {sponsor.offers.map((offer, index) => (
                  <li key={index} className="text-green-800">
                    {offer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            {sponsor.socialMedia && (
              <div className="flex gap-3 mt-6 justify-center">
                {sponsor.socialMedia.facebook && (
                  <a
                    href={sponsor.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {sponsor.socialMedia.instagram && (
                  <a
                    href={sponsor.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                  </a>
                )}
                {sponsor.socialMedia.linkedin && (
                  <a
                    href={sponsor.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}