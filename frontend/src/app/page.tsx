'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CountdownTimer from '@/components/CountdownTimer'
import SponsorCarousel from '@/components/SponsorCarousel'
import SponsorSpotlight from '@/components/SponsorSpotlight'
import { useState, useEffect } from 'react'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Community Gallery photos for lightbox navigation
  const communityPhotos = [
    '/communityphotos/20221008_131557-scaled.jpg',
    '/communityphotos/20221008_1438212-scaled.jpg',
    '/communityphotos/PA094485-scaled.jpg',
    '/communityphotos/IMG-1544.jpg'
  ]

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(communityPhotos.indexOf(imageSrc))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % communityPhotos.length
    setSelectedIndex(nextIndex)
    setSelectedImage(communityPhotos[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? communityPhotos.length - 1 : selectedIndex - 1
    setSelectedIndex(prevIndex)
    setSelectedImage(communityPhotos[prevIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  // Disable animations in Lambda environment
  const disableAnimations = process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS === 'true'

  // Live countdown to Pohela Boishakh 2026 - April 14, 10 AM
  useEffect(() => {
    const targetDate = new Date('2026-04-14T10:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown() // Initial call
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bengali Society of Melbourne",
    "alternateName": "BSM",
    "description": "Bengali Society of Melbourne (BSM) - Melbourne's premier Bengali cultural organization since 2012. Community platform for Bengali cultural heritage and festivals.",
    "url": "https://bsm.org.au",
    "telephone": "0403617375",
    "email": "info@bsm.org.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "Victoria",
      "addressCountry": "AU"
    },
    "foundingDate": "2012",
    "areaServed": "Victoria, Australia",
    "memberOf": "Multicultural Communities of Victoria",
    "sameAs": [
      "https://www.facebook.com/bsm2022",
      "https://www.instagram.com/bsm_aus?igsh=MW5kaDM0NzcyMG9ndg=="
    ],
    "events": ["Durgotsav", "Kalipuja", "Saraswati Puja", "Pohela Boishakh", "Christmas", "New Year"]
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Next Event Banner - Static */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 text-white py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg font-bold">
              🌸 Next Event: Pohela Boishakh 2026 | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>পহেলা বৈশাখ ১৪৩৩</span>
            </span>
            <span className="hidden sm:inline text-base">•</span>
            <span className="text-sm sm:text-base font-bold">
              📅 April 14, 2026 | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>১৪ এপ্রিল ২০২৬</span>
            </span>
            <span className="hidden sm:inline text-base">•</span>
            <Link href="/events" className="text-sm sm:text-base underline hover:text-green-200">
              View All Events →
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <section className="py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={disableAnimations ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: disableAnimations ? 0 : 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <div className="text-white font-bold text-lg sm:text-xl">
                🌟 স্বাগতম Bengali Society of Melbourne 🌟
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a 
                  href="mailto:info@bsm.org.au"
                  className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  ✉️ info@bsm.org.au
                </a>
                <a 
                  href="https://www.facebook.com/bsm2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/bsm_aus?igsh=MW5kaDM0NzcyMG9ndg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-pink-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.195 5.012.369a6.624 6.624 0 0 0-2.394 1.559A6.624 6.624 0 0 0 1.06 4.322C.885 4.83.773 5.404.738 6.352.702 7.299.69 7.706.69 11.327s.013 4.028.048 4.975c.035.948.147 1.522.321 2.03a6.624 6.624 0 0 0 1.559 2.394A6.624 6.624 0 0 0 4.988 22.285c.508.175 1.082.286 2.03.321.947.035 1.354.048 4.975.048s4.028-.013 4.975-.048c.948-.035 1.522-.146 2.03-.321a6.624 6.624 0 0 0 2.394-1.559 6.624 6.624 0 0 0 1.559-2.394c.175-.508.286-1.082.321-2.03.035-.947.048-1.354.048-4.975s-.013-4.028-.048-4.975c-.035-.948-.146-1.522-.321-2.03a6.624 6.624 0 0 0-1.559-2.394A6.624 6.624 0 0 0 19.018.369c-.508-.175-1.082-.286-2.03-.321C16.041.013 15.634 0 12.017 0zm0 2.164c3.604 0 4.032.014 5.456.079.658.03 1.351.143 1.789.236.449.175.901.413 1.29.802.389.389.627.841.802 1.29.093.438.206 1.131.236 1.789.065 1.424.079 1.852.079 5.456s-.014 4.032-.079 5.456c-.03.658-.143 1.351-.236 1.789-.175.449-.413.901-.802 1.29-.389.389-.841.627-1.29.802-.438.093-1.131.206-1.789.236-1.424.065-1.852.079-5.456.079s-4.032-.014-5.456-.079c-.658-.03-1.351-.143-1.789-.236a3.46 3.46 0 0 1-1.29-.802 3.46 3.46 0 0 1-.802-1.29c-.093-.438-.206-1.131-.236-1.789-.065-1.424-.079-1.852-.079-5.456s.014-4.032.079-5.456c.03-.658.143-1.351.236-1.789.175-.449.413-.901.802-1.29.389-.389.841-.627 1.29-.802.438-.093 1.131-.206 1.789-.236 1.424-.065 1.852-.079 5.456-.079zm0 3.678a5.158 5.158 0 1 0 0 10.316 5.158 5.158 0 0 0 0-10.316zm0 8.506a3.348 3.348 0 1 1 0-6.696 3.348 3.348 0 0 1 0 6.696zm6.406-8.845a1.204 1.204 0 1 0 0-2.408 1.204 1.204 0 0 0 0 2.408z"/>
                  </svg>
                  Instagram
                </a>
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">
                Join Our Cultural Community!
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/Durgapooja-2025/durga-pooja-22.jpg"
            alt="Bengali Society of Melbourne - Durga Puja Festival Celebration"
            fill
            className="object-contain sm:object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={disableAnimations ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: disableAnimations ? 0 : 0.8 }}
            >
              Bengali Society of Melbourne
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বেঙ্গলি সোসাইটি অফ মেলবোর্ন
              </span>
            </motion.h1>
            
            <motion.div
              className="text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 inline-block border-l-4 border-red-600 pl-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 2012 | ২০১২ সাল থেকে
            </motion.div>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Melbourne's premier Bengali cultural organization dedicated to preserving our rich heritage and connecting the Bengali community across Victoria. Join us for traditional festivals, cultural events, and community service.
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/membership" 
                  className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-all duration-200 text-center block sm:inline-block shadow-xl"
                >
                  Join Our Community | যোগ দিন
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/events" 
                  className="w-full sm:w-auto border-2 border-red-600 text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 text-center block sm:inline-block"
                >
                  View Events | অনুষ্ঠান দেখুন
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/sponsorship" 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-purple-600 hover:via-purple-700 hover:to-pink-600 transition-all duration-200 text-center block sm:inline-block shadow-xl"
                >
                  Become a Sponsor | স্পনসর হন
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">12+</div>
                <div className="text-red-700 text-xs sm:text-sm">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">1000+</div>
                <div className="text-red-700 text-xs sm:text-sm">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">50+</div>
                <div className="text-red-700 text-xs sm:text-sm">Events Annually</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">100%</div>
                <div className="text-red-700 text-xs sm:text-sm">Cultural Heritage</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent & Upcoming Events */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Pohela Boishakh Countdown */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md text-white py-8 sm:py-10 rounded-3xl shadow-2xl max-w-4xl mx-auto border border-white/20">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  🌸 Countdown to Pohela Boishakh 2026 | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>পহেলা বৈশাখ ১৪৩৩</span>
                </h3>
                <div className="flex justify-center gap-4 sm:gap-10">
                  <div className="flex flex-col items-center bg-white/10 rounded-2xl px-4 sm:px-6 py-3">
                    <span className="text-3xl sm:text-5xl font-bold">{countdown.days}</span>
                    <span className="text-xs sm:text-sm mt-2 opacity-90">Days | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>দিন</span></span>
                  </div>
                  <div className="flex flex-col items-center bg-white/10 rounded-2xl px-4 sm:px-6 py-3">
                    <span className="text-3xl sm:text-5xl font-bold">{countdown.hours}</span>
                    <span className="text-xs sm:text-sm mt-2 opacity-90">Hours | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>ঘণ্টা</span></span>
                  </div>
                  <div className="flex flex-col items-center bg-white/10 rounded-2xl px-4 sm:px-6 py-3">
                    <span className="text-3xl sm:text-5xl font-bold">{countdown.minutes}</span>
                    <span className="text-xs sm:text-sm mt-2 opacity-90">Min | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>মিনিট</span></span>
                  </div>
                  <div className="flex flex-col items-center bg-white/10 rounded-2xl px-4 sm:px-6 py-3">
                    <span className="text-3xl sm:text-5xl font-bold">{countdown.seconds}</span>
                    <span className="text-xs sm:text-sm mt-2 opacity-90">Sec | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>সেকেন্ড</span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Event - Pohela Boishakh */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 max-w-4xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  🌸 Upcoming Festival | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আসন্ন উৎসব</span> 🌸
                </h2>
                <p className="text-lg text-gray-600">
                  Welcome the Bengali New Year with us!
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/pahelaboishak/484347968_674863851736696_6373890908421337640_n.jpg"
                  alt="Pohela Boishakh 2026 - Bengali New Year BSM Celebration"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent flex items-end justify-center pb-6">
                  <div className="text-white text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Pohela Boishakh 2026</h3>
                    <p className="text-lg opacity-90 drop-shadow-md" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>পহেলা বৈশাখ ১৪৩৩ - বাংলা নববর্ষ</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events/pohela-boishakh"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-all duration-200 shadow-xl hover:shadow-2xl"
                >
                  Event Details | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>বিস্তারিত</span>
                </Link>
                <Link
                  href="/membership"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-600 hover:text-white transition-all duration-200"
                >
                  Join BSM | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>যোগ দিন</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About BSM Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              About BSM | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আমাদের সম্পর্কে</span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Bengali Society of Melbourne (BSM), a not-for-profit organisation, is a platform of Bengali community mostly from the sub-continent. Since its inception in 2012, we set forth with the aim to make our newer generations familiar with our rich cultural heritage.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission | আমাদের লক্ষ্য</h3>
              <ul className="text-left text-red-100 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-300 font-bold mr-3">1.</span>
                  Encourage cultural diversity while taking pride in our own culture
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 font-bold mr-3">2.</span>
                  Make BSM an integral part of multicultural communities of Victoria
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 font-bold mr-3">3.</span>
                  Organize traditional Bengali festivals and celebrations
                </li>
                <li className="flex items-start">
                  <span className="text-red-300 font-bold mr-3">4.</span>
                  Engage in community service like blood donation and tree plantation
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bengali Festivals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Festivals | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আমাদের উৎসব</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional Bengali festivals celebrating our rich cultural heritage throughout the year.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Durgotsav',
                titleBengali: 'দুর্গোৎসব',
                icon: '🪔',
                description: 'A triumphant homecoming - The grand celebration honoring Goddess Durga',
                image: '/durgapooja-2023/2-scaled.jpg',
                href: '/events/durgotsav'
              },
              {
                title: 'Kalipuja & Deepavali',
                titleBengali: 'কালীপূজা ও দীপাবলি',
                icon: '🕉️',
                description: 'Festival of Lights - Worship of Goddess Kali with Deepavali celebration',
                image: '/kalipooja-2023/1-min.jpg',
                href: '/events/kalipuja-deepavali'
              },
              {
                title: 'Saraswati Puja',
                titleBengali: 'সরস্বতী পূজা',
                icon: '📚',
                description: 'Worship of the Goddess of Knowledge, Arts, and Learning',
                image: '/saraswati-pooja-2026/Flyer - Join Us for Saraswati Puja 2026 up.jpg',
                href: '/events/saraswati-puja'
              },
              {
                title: 'Pohela Boishakh',
                titleBengali: 'পহেলা বৈশাখ',
                icon: '🌸',
                description: 'Bengali New Year - Celebrating new beginnings and cultural heritage',
                image: '/pahelaboishak/484347968_674863851736696_6373890908421337640_n.jpg',
                href: '/events/pohela-boishakh'
              },
              {
                title: 'Christmas & English New Year',
                titleBengali: 'বড়দিন ও ইংরেজি নববর্ষ',
                icon: '🎄',
                description: 'Multicultural celebration embracing diversity and unity',
                image: '/communityphotos/20231111_225013-scaled.jpg',
                href: '/events/christmas-new-year'
              },
              {
                title: 'Sponsorship',
                titleBengali: 'স্পনসরশিপ',
                icon: '🤝',
                description: 'Supporting our community - Partner with us for cultural events',
                image: '/communityphotos/BSM-Banner-Pull-Up-2023-Facebook-Cover.jpg',
                href: '/sponsorship'
              }
            ].map((festival, index) => (
              <Link key={index} href={festival.href}>
                <motion.div
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={festival.image}
                      alt={festival.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-red-600/80 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl">{festival.icon}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{festival.title}</h3>
                    <p className="text-orange-600 font-medium text-sm mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {festival.titleBengali}
                    </p>
                    <p className="text-gray-600 text-sm">{festival.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Community Gallery | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>কমিউনিটি গ্যালারি</span>
            </h2>
            <p className="text-xl text-gray-600">
              Memories from our cultural celebrations and community events
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {communityPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(photo)}
              >
                <Image
                  src={photo}
                  alt={`Community Photo ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-3xl">🔍</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Full Gallery | সম্পূর্ণ গ্যালারি
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-gray-600 mt-3 text-sm">
              Explore hundreds of photos from our community events and celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Sponsor Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SponsorCarousel />
          </motion.div>
        </div>
      </section>

      {/* Sponsor Spotlight Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SponsorSpotlight />
          </motion.div>
        </div>
      </section>

      {/* Our Proud Sponsors Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Valued Partners | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আমাদের মূল্যবান অংশীদার</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              These businesses don't just sponsor events - they invest in our community's future. Their partnership enables us to keep our cultural traditions alive while building a stronger, more connected Bengali community in Melbourne.
            </p>
          </motion.div>

          {/* Sponsor Grid with Enhanced Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-start">
            {[
              {
                image: '/sponsors/findmyrealestate.jpeg',
                name: 'Find My Real Estate',
                tagline: 'Your trusted real estate partner',
                tier: 'Platinum Partner',
                benefits: ['Free property appraisal', 'Reduced commission rates'],
                website: 'https://www.findmyrealestate.com.au',
                description: 'Find My Real Estate is your trusted property partner in Melbourne, providing expert guidance for residential property sales, management, and investment advisory services. With specialized support for first home buyers and over 50 Bengali families helped to find their dream homes, we combine professional expertise with genuine community understanding.'
              },
              {
                image: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg',
                name: 'Ratul Biswas Finance',
                tagline: 'Expert mortgage solutions',
                tier: 'Platinum Partner',
                benefits: ['Free consultation', 'Exclusive rates for BSM'],
                website: 'https://www.a-f-s.au',
                description: 'As a member of the Bengali community, Ratul Biswas provides professional finance and mortgage solutions including home loans, investment loans, refinancing, and commercial loans. With over $20 million in home loans secured for community members at competitive rates, Ratul offers personalized service with deep understanding of community needs.'
              },
              {
                image: '/sponsors/asa-wealth-management.jpeg',
                name: 'ASA Wealth Management',
                tagline: 'Financial planning excellence',
                tier: 'Gold Partner',
                benefits: ['Free portfolio review', 'Financial seminars'],
                website: 'https://asawealth.com.au',
                description: 'ASA Wealth Management provides professional wealth management and financial planning services including investment planning, superannuation advice, insurance solutions, and retirement planning. With over 200 community members benefiting from financial literacy workshops, we believe in empowering families with smart financial decisions.'
              },
              {
                image: '/sponsors/solar-1.jpeg',
                name: 'Cosmic Renewable Energy',
                tagline: 'Sustainable solar energy solutions',
                tier: 'Gold Partner',
                benefits: ['10% discount on installations', 'Free energy consultation'],
                website: 'https://www.cosmicrenewableenergy.com.au',
                description: 'Cosmic Renewable Energy specializes in sustainable solar energy solutions for homes and businesses, offering complete solar panel installation, battery storage systems, energy efficiency consulting, and maintenance services. With solar systems installed for 30+ community members, we help reduce energy costs by up to 70% while building a greener future.'
              },
              {
                image: '/sponsors/choicerealesate.jpeg',
                name: 'Choice Estate Agent',
                tagline: 'Your first choice for real estate',
                tier: 'Silver Partner',
                benefits: ['Special property management rates', 'Priority listings'],
                website: 'https://choiceestateagent.com.au',
                description: 'Choice Estate Agent, led by Director Ali Afzal, specializes in property sales, property management, investment consultation, and rental services. As part of the community, we understand the importance of finding the right home for Bengali families and have successfully managed over 100 properties with personalized, culturally-sensitive service.'
              },
              {
                image: '/sponsors/equitywiserealestate.jpeg',
                name: 'EquityWise Real Estate',
                tagline: 'Your trusted & local agents',
                tier: 'Silver Partner',
                benefits: ['Fair dealings & honest advice', 'Best practice approach', 'In-depth market knowledge', 'Call 03 9674 5151'],
                website: 'https://www.equitywisere.com.au',
                description: 'Equity Wise Real Estate are your trusted & local agents, helping our clients in making wise decisions when it comes to all things real estate. Make the most of our in-depth market knowledge of your local area coupled with a \'best practice\' approach in getting you outstanding results. We believe in fair dealings, honest & genuine advice when it comes to your most precious asset – Real Estate. For all your buying, selling, property management needs, reach out to us today on 03 9674 5151!'
              },
              {
                image: '/sponsors/subha-aussie-home.png',
                name: 'Aussie Home Loans - Subha Saha',
                tagline: 'Your trusted mortgage broker',
                tier: 'Gold Partner',
                benefits: ['Compare 25+ lenders', 'Free consultation', 'Mobile lending service', 'Call 0413 811 354'],
                website: 'https://www.aussie.com.au/mortgage-broker/subha-saha/',
                description: 'Subha Saha is your dedicated Aussie Home Loans mortgage broker, servicing Melbourne\'s Western Suburbs. With a Bachelor of Banking and Finance from Monash University and MFAA accreditation, Subha specializes in first home buyers, refinancing, investment loans, and commercial lending. Access thousands of loan options from 25+ lenders with expert guidance to make your home loan experience stress-free and achieve the right loan for your needs.'
              },
              {
                image: '/sponsors/BengalSolicitors.jpeg',
                name: 'Bengal Solicitors',
                tagline: 'Expert property law & conveyancing',
                tier: 'Gold Partner',
                benefits: ['Free initial consultation', 'Special conveyancing rates', 'Legal advice in Bengali', 'Call 0430 593 124'],
                website: 'https://www.bengalsolicitors.com.au',
                description: 'Bengal Solicitors is a boutique law firm located in Reservoir, Melbourne, specializing in property law and conveyancing. Rajot Roy, the principal lawyer, provides expert legal services with practical advice in plain language. The firm assists with all stages of property transactions, from purchasing to selling, ensuring clients receive regular communication and personalized service throughout the process.'
              },
              {
                image: '/sponsors/weeribee-mazda.png',
                name: 'Werribee Mazda',
                tagline: 'Your trusted automotive partner in Melbourne\'s West',
                tier: 'Platinum Partner',
                benefits: ['$2000 accessories bonus on eligible vehicles', 'Exceptional service & reliable vehicles', 'Customer-first experience', 'Call 03 9974 5666'],
                website: 'https://www.werribeemazda.com.au',
                description: 'BSM extends its heartfelt gratitude to Werribee Mazda for their generous support of this year\'s Durga Puja celebrations. At Werribee Mazda, you\'ll find more than just cars – you\'ll discover a team dedicated to delivering exceptional service, reliable vehicles, and a customer-first experience. Right now, receive $2000 worth of accessories on eligible vehicle purchases and deliveries by 30th September 2025.'
              },
              {
                image: '/sponsors/werribee-mg.png',
                name: 'Werribee MG',
                tagline: 'Your local MG dealership in Melbourne\'s South West',
                tier: 'Gold Partner',
                benefits: ['10-year warranty on new vehicles', 'Special BSM member pricing', 'Flexible finance options', 'Call 0488 885 279'],
                website: 'https://werribeemg.com.au',
                description: 'Werribee MG is proud to support the Bengali Society of Melbourne. Part of the Werribee Automotive Group, they offer a wide range of MG vehicles including hatchbacks and SUVs. With an industry-leading 10-year warranty and special pricing for BSM members, there\'s never been a better time to meet your very own MG! Visit their showroom at 187-189 Old Geelong Road, Hoppers Crossing.'
              }
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Logo Section with Gradient Background */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 border-b border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  {/* Header with better typography */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{sponsor.name}</h3>
                    <p className="text-gray-600 italic text-sm">{sponsor.tagline}</p>
                  </div>

                  {/* Description - show full text */}
                  {sponsor.description && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {sponsor.description}
                      </p>
                    </div>
                  )}

                  {/* Benefits with improved styling */}
                  {sponsor.benefits && (
                    <div className="mb-6 bg-green-50 rounded-lg p-4 border border-green-100">
                      <p className="text-sm font-bold text-green-800 mb-3 flex items-center">
                        <span className="mr-2">🎁</span>
                        BSM Member Benefits:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        {sponsor.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2 mt-0.5">✓</span>
                            <span className="leading-tight">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Button with improved design */}
                  <div className="flex items-center justify-between">
                    {sponsor.website && sponsor.website !== '#' && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                    <div className="text-xs text-gray-400 font-medium">
                      TRUSTED PARTNER
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Sponsor Benefits Banner */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-blue-100">Active Community Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-blue-100">Annual Events & Programs</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-blue-100">Community Impact</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl p-8 text-white shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                🤝 Join Our Sponsor Family | আমাদের স্পনসর পরিবারে যোগ দিন
              </h3>
              <p className="text-xl mb-6 text-red-50">
                Partner with BSM to showcase your business to Melbourne's vibrant Bengali community and support our cultural heritage preservation efforts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/sponsorship" 
                  className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-50 transition-colors inline-block shadow-lg"
                >
                  Explore Sponsorship Options
                </Link>
                <a 
                  href="mailto:info@bsm.org.au?subject=Sponsorship%20Inquiry" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-red-600 transition-colors inline-block"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Follow Us on Facebook | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>ফেসবুকে আমাদের ফলো করুন</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest events, photos, and community news
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-2xl mx-auto flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Connected with BSM!</h3>
              <p className="text-blue-100 mb-6">
                Follow us on social media for the latest updates on our events, photo galleries, and community news.
              </p>
              <div className="text-4xl mb-4">📱</div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/bsm2022/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View All Photos | সব ছবি দেখুন
              </a>
              <a
                href="https://www.instagram.com/bsm_aus?igsh=MW5kaDM0NzcyMG9ndg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.195 5.012.369a6.624 6.624 0 0 0-2.394 1.559A6.624 6.624 0 0 0 1.06 4.322C.885 4.83.773 5.404.738 6.352.702 7.299.69 7.706.69 11.327s.013 4.028.048 4.975c.035.948.147 1.522.321 2.03a6.624 6.624 0 0 0 1.559 2.394A6.624 6.624 0 0 0 4.988 22.285c.508.175 1.082.286 2.03.321.947.035 1.354.048 4.975.048s4.028-.013 4.975-.048c.948-.035 1.522-.146 2.03-.321a6.624 6.624 0 0 0 2.394-1.559 6.624 6.624 0 0 0 1.559-2.394c.175-.508.286-1.082.321-2.03.035-.947.048-1.354.048-4.975s-.013-4.028-.048-4.975c-.035-.948-.146-1.522-.321-2.03a6.624 6.624 0 0 0-1.559-2.394A6.624 6.624 0 0 0 19.018.369c-.508-.175-1.082-.286-2.03-.321C16.041.013 15.634 0 12.017 0zm0 2.164c3.604 0 4.032.014 5.456.079.658.03 1.351.143 1.789.236.449.175.901.413 1.29.802.389.389.627.841.802 1.29.093.438.206 1.131.236 1.789.065 1.424.079 1.852.079 5.456s-.014 4.032-.079 5.456c-.03.658-.143 1.351-.236 1.789-.175.449-.413.901-.802 1.29-.389.389-.841.627-1.29.802-.438.093-1.131.206-1.789.236-1.424.065-1.852.079-5.456.079s-4.032-.014-5.456-.079c-.658-.03-1.351-.143-1.789-.236a3.46 3.46 0 0 1-1.29-.802 3.46 3.46 0 0 1-.802-1.29c-.093-.438-.206-1.131-.236-1.789-.065-1.424-.079-1.852-.079-5.456s.014-4.032.079-5.456c.03-.658.143-1.351.236-1.789.175-.449.413-.901.802-1.29.389-.389.841-.627 1.29-.802.438-.093 1.131-.206 1.789-.236 1.424-.065 1.852-.079 5.456-.079zm0 3.678a5.158 5.158 0 1 0 0 10.316 5.158 5.158 0 0 0 0-10.316zm0 8.506a3.348 3.348 0 1 1 0-6.696 3.348 3.348 0 0 1 0 6.696zm6.406-8.845a1.204 1.204 0 1 0 0-2.408 1.204 1.204 0 0 0 0 2.408z"/>
                </svg>
                Follow on Instagram | ইনস্টাগ্রাম ফলো
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join Our Cultural Community | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আমাদের সাংস্কৃতিক সম্প্রদায়ে যোগ দিন</span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Be part of Melbourne's vibrant Bengali community. Experience traditional festivals, cultural events, and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Become a Member | সদস্য হন
              </Link>
              <a 
                href="tel:0403617375" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-block"
              >
                📞 Call 0403 617 375
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
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
                alt="Community photo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {selectedIndex + 1} of {communityPhotos.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}