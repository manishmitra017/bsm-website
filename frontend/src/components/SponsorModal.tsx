'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface SponsorModalProps {
  sponsor: {
    id: number
    name: string
    logo: string
    logos?: string[]
    website?: string
    description: string
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
  onClose: () => void
}

export default function SponsorModal({ sponsor, onClose }: SponsorModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImageModal, setShowImageModal] = useState(false)

  const images = sponsor.logos || [sponsor.logo]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
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
              <h3 className="text-3xl font-bold text-gray-900">
                {sponsor.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Image Gallery */}
          <div className="relative h-48 mb-6 bg-gray-50 rounded-xl p-4">
            <div
              className="relative h-full w-full cursor-pointer group"
              onClick={() => setShowImageModal(true)}
            >
              <Image
                src={images[currentImageIndex]}
                alt={sponsor.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔍 Click to expand
              </div>
            </div>

            {/* Image Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-red-600 w-4'
                          : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <p className="text-gray-700 text-lg mb-6">
            {sponsor.description}
          </p>

          {sponsor.specialOffer && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-4 mb-6">
              <h4 className="font-bold text-green-800 mb-2">🎁 Special Offer for BSM Members</h4>
              <p className="text-green-700">{sponsor.specialOffer}</p>
            </div>
          )}

          {sponsor.contactInfo && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h4 className="font-bold text-gray-900 mb-3">📞 Contact Information</h4>
              <div className="space-y-2">
                {sponsor.contactInfo.phone && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href={`tel:${sponsor.contactInfo.phone}`} className="text-blue-600 hover:underline">
                      {sponsor.contactInfo.phone}
                    </a>
                  </p>
                )}
                {sponsor.contactInfo.email && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span>{' '}
                    <a href={`mailto:${sponsor.contactInfo.email}`} className="text-blue-600 hover:underline">
                      {sponsor.contactInfo.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}

          {sponsor.socialMedia && (
            <div className="flex gap-3 mb-6">
              {sponsor.socialMedia.facebook && (
                <a
                  href={sponsor.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
            </div>
          )}

          <div className="flex gap-3">
            {sponsor.website && sponsor.website !== '#' && (
              <a
                href={sponsor.website}
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

      {/* Fullscreen Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="relative bg-white rounded-xl p-4 max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-xl font-bold shadow-lg"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              {sponsor.name} {images.length > 1 && `(${currentImageIndex + 1} of ${images.length})`}
            </h3>

            <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-50 rounded-lg">
              <Image
                src={images[currentImageIndex]}
                alt={sponsor.name}
                fill
                className="object-contain p-4"
              />

              {/* Navigation for multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-red-600 w-8'
                            : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}