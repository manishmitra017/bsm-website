'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Volunteering() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // All volunteering photos
  const allPhotos = [
    '/volunteering/1.jpg',
    '/volunteering/2.jpg',
    '/volunteering/3.jpg',
    '/volunteering/4.jpg',
    '/volunteering/5.jpg',
    '/volunteering/6.jpg',
    '/volunteering/7.jpg',
    '/volunteering/8.jpg',
    '/volunteering/20220731_110928-768x1024.jpg',
    '/volunteering/20220731_113206-768x1024.jpg',
    '/volunteering/20240728_104604-768x1024.jpg',
    '/volunteering/20240728_105939-1024x768.jpg',
    '/volunteering/20240728_112319-1024x768.jpg'
  ]

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(allPhotos.indexOf(imageSrc))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % allPhotos.length
    setSelectedIndex(nextIndex)
    setSelectedImage(allPhotos[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? allPhotos.length - 1 : selectedIndex - 1
    setSelectedIndex(prevIndex)
    setSelectedImage(allPhotos[prevIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-red-50">
        <div className="absolute inset-0">
          <Image
            src="/volunteering/20240728_112319-1024x768.jpg"
            alt="BSM Volunteering - Community Service Activities"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight">
              Volunteering
              <span className="block text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                স্বেচ্ছাসেবা
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-green-700 leading-relaxed">
              Making a difference through community service, environmental care, and saving lives together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Community Service
              <span className="block text-green-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের কমিউনিটি সেবা
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BSM is committed to serving the wider Melbourne community through various volunteer initiatives that make a real difference in people's lives and the environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg text-gray-600 space-y-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Why We Volunteer</h3>
                <p>
                  Since our establishment in 2012, BSM has believed that true community building goes beyond cultural celebrations. 
                  We actively engage in volunteer work that serves the broader Melbourne community and contributes to a better society.
                </p>
                <p>
                  Our volunteering initiatives reflect our core values of compassion, environmental responsibility, and community service. 
                  Through blood donation camps and tree plantation programs, we demonstrate our commitment to both saving lives and 
                  protecting the environment for future generations.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএম বিশ্বাস করে যে প্রকৃত কমিউনিটি গঠন কেবল সাংস্কৃতিক উৎসবের মধ্যে সীমাবদ্ধ নয়। আমরা স্বেচ্ছাসেবামূলক 
                    কাজে সক্রিয়ভাবে অংশগ্রহণ করি যা ব্যাপক মেলবোর্ন কমিউনিটি এবং একটি উন্নত সমাজের জন্য অবদান রাখে।
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/volunteering/20240728_104604-768x1024.jpg"
                  alt="BSM volunteers participating in community service"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blood Donation Camps
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                রক্তদান শিবির
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Rolling up Sleeves and Saving Lives" - Our annual blood donation initiative since 2016
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">🩸</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-800">Life-Saving Initiative</h3>
                      <p className="text-red-600">Since 2016 - Celebrating BSM's 5th Year</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg">
                    BSM began organizing annual blood donation camps in 2016 to celebrate our 5th year of establishment. 
                    This noble cause quickly became a cherished tradition that brings our community together for saving lives.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">How We Organize:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Annual blood donation camps organized every year</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Group appointments coordinated with Australian Red Cross</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Community members enthusiastically participate</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Part of our commitment to serve the broader community</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    '/volunteering/1.jpg',
                    '/volunteering/2.jpg',
                    '/volunteering/3.jpg',
                    '/volunteering/4.jpg'
                  ].map((photo, index) => (
                    <motion.div
                      key={index}
                      className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      whileHover={{ y: -5 }}
                      onClick={() => openLightbox(photo)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={photo}
                          alt={`Blood Donation Camp ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-3xl">🔍</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center bg-red-600 text-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Next Blood Donation Camp</h3>
              <p className="text-red-100 mb-6">
                Every donation saves up to 3 lives. Be part of this noble cause and make a difference in someone's life.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tree Plantation Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tree Plantation Initiative
              <span className="block text-green-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বৃক্ষরোপণ উদ্যোগ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Environmental stewardship and sustainability through community tree planting since 2018
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    '/volunteering/20220731_110928-768x1024.jpg',
                    '/volunteering/20220731_113206-768x1024.jpg',
                    '/volunteering/20240728_105939-1024x768.jpg',
                    '/volunteering/20240728_112319-1024x768.jpg'
                  ].map((photo, index) => (
                    <motion.div
                      key={index}
                      className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      whileHover={{ y: -5 }}
                      onClick={() => openLightbox(photo)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={photo}
                          alt={`Tree Plantation ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-3xl">🔍</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-800">Environmental Responsibility</h3>
                      <p className="text-green-600">Partnership with Wyndham City Council</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg">
                    Since 2018, BSM has been actively participating in Wyndham City Council's Tree Plantation initiative, 
                    demonstrating our commitment to environmental stewardship and sustainability.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Environmental Impact:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Contributes to expanding green spaces in Melbourne</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Enhances biodiversity and wildlife habitats</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Helps mitigate climate change effects</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span>Creates a positive environmental legacy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm font-medium">
                      "This initiative exemplifies BSM's commitment to environmental responsibility and our role as a positive force in the community."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center bg-green-600 text-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Environmental Mission</h3>
              <p className="text-green-100 mb-6">
                Help us create a greener Melbourne. Every tree planted contributes to a healthier environment for future generations.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Become a Volunteer
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Volunteering Photos Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Volunteering in Action
              <span className="block text-blue-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                স্বেচ্ছাসেবায় কর্মী
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our community members in action, making a difference through volunteer work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/volunteering/5.jpg',
              '/volunteering/6.jpg',
              '/volunteering/7.jpg',
              '/volunteering/8.jpg',
              '/volunteering/20240728_104604-768x1024.jpg',
              '/volunteering/20240728_105939-1024x768.jpg'
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(photo)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={photo}
                    alt={`BSM Volunteering Activity ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-4xl">🔍</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Make a Difference with BSM
              <span className="block text-blue-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিএসএম-এর সাথে পরিবর্তন আনুন
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our volunteering initiatives and be part of positive change in Melbourne's community and environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Enlarged volunteering image"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {selectedIndex + 1} of {allPhotos.length}
            </div>
          </div>

          {/* Mobile Instructions */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-sm text-center md:hidden">
            <p>Swipe or tap arrows to navigate • Tap outside to close</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}