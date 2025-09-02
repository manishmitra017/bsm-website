'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // All photos combined for lightbox navigation
  const allPhotos = [
    // Durga Puja photos
    '/durgapooja-2023/20231029_122948-768x1024.jpg',
    '/durgapooja-2023/20231029_161210-1024x768.jpg', 
    '/durgapooja-2023/20231029_162550-1024x768.jpg',
    '/durgapooja-2023/2-scaled.jpg',
    '/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg',
    // Kali Puja photos
    '/kalipooja-2023/1-min.jpg',
    '/kalipooja-2023/2-min.jpg',
    '/kalipooja-2023/3-min.jpg',
    '/kalipooja-2023/4-min-1.jpg',
    '/kalipooja-2023/5-min-1.jpg',
    '/kalipooja-2023/6-min.jpg',
    '/kalipooja-2023/7-min-1.jpg',
    '/kalipooja-2023/8-min-1.jpg',
    '/kalipooja-2023/9-min-1.jpg',
    '/kalipooja-2023/10-min-1.jpg',
    // Saraswati Puja photos
    '/saraswatipooja/484723908_674928888396859_4255503182297146288_n.jpg',
    '/saraswatipooja/482245011_674928638396884_430187257159668509_n.jpg',
    '/saraswatipooja/482246795_674928861730195_7681626211387078032_n.jpg',
    '/saraswatipooja/484902584_674928981730183_4879967772399001889_n.jpg',
    '/saraswatipooja/485008173_674928991730182_2174511964673968281_n.jpg',
    // Pohela Boishakh photos
    '/pahelaboishak/484347968_674863851736696_6373890908421337640_n.jpg',
    '/pahelaboishak/482987675_674770235079391_8646617153893484712_n.jpg',
    '/pahelaboishak/484150150_674770198412728_2551067466827483558_n.jpg',
    '/pahelaboishak/484954444_674770388412709_8188530502447723768_n.jpg',
    '/pahelaboishak/484802793_674770178412730_8432989062571235324_n.jpg',
    // Volunteering photos
    '/Volunteering/20240728_105939-1024x768.jpg',
    '/Volunteering/20240728_104604-768x1024.jpg',
    '/Volunteering/20220731_113206-768x1024.jpg',
    '/Volunteering/20220731_110928-768x1024.jpg',
    '/Volunteering/1.jpg',
    '/Volunteering/2.jpg',
    '/Volunteering/3.jpg',
    '/Volunteering/4.jpg',
    '/Volunteering/5.jpg',
    '/Volunteering/6.jpg',
    '/Volunteering/7.jpg',
    '/Volunteering/8.jpg',
    // Community photos
    '/communityphotos/20221007_224153-scaled.jpg',
    '/communityphotos/20221008_115837-scaled.jpg',
    '/communityphotos/20221008_131557-scaled.jpg',
    '/communityphotos/20231029_125732-scaled.jpg',
    '/communityphotos/20231111_225013-scaled.jpg',
    '/communityphotos/IMG-1305-scaled.jpg',
    '/communityphotos/IMG-1544.jpg',
    '/communityphotos/PA094485-scaled.jpg',
    '/communityphotos/IMG-1546.jpg',
    '/communityphotos/IMG-1549.jpg',
    '/communityphotos/PA094531-scaled.jpg'
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
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20221007_224153-scaled.jpg"
            alt="Bengali Society of Melbourne Gallery"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight">
              Photo Gallery
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                ফটো গ্যালারি
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              Memories from our vibrant Bengali festivals and community celebrations in Melbourne
            </p>
          </motion.div>
        </div>
      </section>

      {/* BSM Event Gallery */}
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
              Our Celebrations | আমাদের উৎসব
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visual journey through BSM's rich cultural celebrations and community events
            </p>
          </motion.div>

          {/* Durga Puja Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Durga Puja | দুর্গা পূজা
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                '/durgapooja-2023/20231029_122948-768x1024.jpg',
                '/durgapooja-2023/20231029_161210-1024x768.jpg', 
                '/durgapooja-2023/20231029_162550-1024x768.jpg',
                '/durgapooja-2023/2-scaled.jpg',
                '/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg'
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
                      alt={`Durga Puja Celebration ${index + 1}`}
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

          {/* Kali Puja Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-purple-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Kali Puja & Deepavali | কালী পূজা ও দীপাবলি
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                '/kalipooja-2023/1-min.jpg',
                '/kalipooja-2023/2-min.jpg',
                '/kalipooja-2023/3-min.jpg',
                '/kalipooja-2023/4-min-1.jpg',
                '/kalipooja-2023/5-min-1.jpg',
                '/kalipooja-2023/6-min.jpg',
                '/kalipooja-2023/7-min-1.jpg',
                '/kalipooja-2023/8-min-1.jpg',
                '/kalipooja-2023/9-min-1.jpg',
                '/kalipooja-2023/10-min-1.jpg'
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
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Kali Puja Celebration ${index + 1}`}
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
          </div>

          {/* Community Events Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-green-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Community Events | কমিউনিটি ইভেন্ট
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                '/communityphotos/20221007_224153-scaled.jpg',
                '/communityphotos/20221008_115837-scaled.jpg',
                '/communityphotos/20221008_131557-scaled.jpg',
                '/communityphotos/20231029_125732-scaled.jpg',
                '/communityphotos/20231111_225013-scaled.jpg',
                '/communityphotos/IMG-1305-scaled.jpg',
                '/communityphotos/IMG-1544.jpg',
                '/communityphotos/PA094485-scaled.jpg'
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
                      alt={`BSM Community Event ${index + 1}`}
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

          {/* Saraswati Puja Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-yellow-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Saraswati Puja | সরস্বতী পূজা
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                '/saraswatipooja/484723908_674928888396859_4255503182297146288_n.jpg',
                '/saraswatipooja/482245011_674928638396884_430187257159668509_n.jpg',
                '/saraswatipooja/482246795_674928861730195_7681626211387078032_n.jpg',
                '/saraswatipooja/484902584_674928981730183_4879967772399001889_n.jpg',
                '/saraswatipooja/485008173_674928991730182_2174511964673968281_n.jpg'
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
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Saraswati Puja Celebration ${index + 1}`}
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
          </div>

          {/* Pohela Boishakh Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pohela Boishakh | পহেলা বৈশাখ
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                '/pahelaboishak/484347968_674863851736696_6373890908421337640_n.jpg',
                '/pahelaboishak/482987675_674770235079391_8646617153893484712_n.jpg',
                '/pahelaboishak/484150150_674770198412728_2551067466827483558_n.jpg',
                '/pahelaboishak/484954444_674770388412709_8188530502447723768_n.jpg',
                '/pahelaboishak/484802793_674770178412730_8432989062571235324_n.jpg'
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
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Pohela Boishakh Celebration ${index + 1}`}
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
          </div>

          {/* Volunteering Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Community Volunteering | কমিউনিটি স্বেচ্ছাসেবা
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                '/Volunteering/20240728_105939-1024x768.jpg',
                '/Volunteering/20240728_104604-768x1024.jpg',
                '/Volunteering/20220731_113206-768x1024.jpg',
                '/Volunteering/20220731_110928-768x1024.jpg',
                '/Volunteering/1.jpg',
                '/Volunteering/2.jpg',
                '/Volunteering/3.jpg',
                '/Volunteering/4.jpg',
                '/Volunteering/5.jpg',
                '/Volunteering/6.jpg',
                '/Volunteering/7.jpg',
                '/Volunteering/8.jpg'
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
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Community Volunteering ${index + 1}`}
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
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These moments capture the essence of our Bengali community in Melbourne - from traditional pujas to cultural celebrations, each event brings us closer together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/events" 
                className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                View Our Events →
              </Link>
              <Link 
                href="/membership" 
                className="inline-flex items-center border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Join BSM Community
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
                alt="Enlarged gallery image"
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