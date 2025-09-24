'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CountdownTimer from '@/components/CountdownTimer'
import SponsorCarousel from '@/components/SponsorCarousel'
import SponsorSpotlight from '@/components/SponsorSpotlight'
import { useState } from 'react'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{image: string, title: string} | null>(null)

  // Disable animations in Lambda environment
  const disableAnimations = process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS === 'true'
  
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
            src="/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
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

      {/* Upcoming Events Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 max-w-4xl mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  🎉 Upcoming Festivals | আসন্ন উৎসব 🎉
                </h2>
                <p className="text-lg text-gray-600">
                  Join us for our traditional Bengali festivals and community celebrations!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
                    alt="Durga Puja 2025 - Bengali Society of Melbourne"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Durga Puja 2025</h3>
                    <p className="text-sm opacity-90">September 27-28, 2025</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Sep 27-28
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/kalipooja-2025/kaalipooja-2025.jpeg"
                    alt="Kali Puja & Deepavali 2025 - BSM Celebration"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Kali Puja & Deepavali</h3>
                    <p className="text-sm opacity-90">October 19, 2025 | 6PM - 11PM</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Oct 19
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/events" 
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors shadow-xl"
                >
                  View All Events | সব অনুষ্ঠান
                </Link>
                <Link 
                  href="/membership" 
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-600 hover:text-white transition-colors"
                >
                  Join BSM | যোগ দিন
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About BSM | আমাদের সম্পর্কে
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

      {/* Durga Puja Countdown */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <CountdownTimer 
              targetDate="2025-09-27T18:00:00+10:00"
              eventName="Durgotsav 2025"
              eventNameBengali="দুর্গোৎসব ২০২৫"
            />
          </motion.div>
        </div>
      </section>

      {/* Durga Puja 2025 Itinerary - Prominent Display */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                🎉 Durgotsav 2025 Itinerary 🎉
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দুর্গোৎসব ২০২৫ কার্যক্রম
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                Join us for Melbourne's grandest Bengali cultural celebration! Two days of traditional festivities, cultural performances, and community bonding.
              </p>
            </div>

            {/* Itinerary Image */}
            <motion.div
              className="relative max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-2xl p-4 cursor-pointer group hover:shadow-3xl transition-all duration-300"
                onClick={() => setSelectedImage({ 
                  image: '/durga pooja-itenary/iternary-pooja.jpeg', 
                  title: 'Durgotsav 2025 Complete Itinerary' 
                })}
              >
                <div className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden">
                  <Image
                    src="/durga pooja-itenary/iternary-pooja.jpeg"
                    alt="Durgotsav 2025 Complete Itinerary - Bengali Society of Melbourne"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    🔍 Click to view full size
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                📅 September 27-28, 2025 | Melbourne
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Two days of authentic Bengali culture, delicious traditional food, mesmerizing performances, and spiritual celebrations. 
                Don't miss Melbourne's most anticipated cultural event of the year!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/events/durgotsav" 
                  className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-50 transition-colors shadow-lg"
                >
                  View Full Event Details →
                </Link>
                <Link 
                  href="/membership" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
                >
                  Join BSM Community
                </Link>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Festivals | আমাদের উৎসব
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
                image: '/saraswatipooja/484723908_674928888396859_4255503182297146288_n.jpg',
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Gallery | কমিউনিটি গ্যালারি
            </h2>
            <p className="text-xl text-gray-600">
              Memories from our cultural celebrations and community events
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: '/communityphotos/20221008_131557-scaled.jpg', title: 'Durga Puja 2022' },
              { image: '/communityphotos/20221008_1438212-scaled.jpg', title: 'Cultural Performance' },
              { image: '/communityphotos/PA094485-scaled.jpg', title: 'Community Gathering' },
              { image: '/communityphotos/IMG-1544.jpg', title: 'Festival Celebration' }
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage({ image: photo.image, title: photo.title })}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.title}</p>
                </div>
                <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔍 Click to view
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Valued Partners | আমাদের মূল্যবান অংশীদার
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              These businesses don't just sponsor events - they invest in our community's future. Their partnership enables us to keep our cultural traditions alive while building a stronger, more connected Bengali community in Melbourne.
            </p>
          </motion.div>

          {/* Sponsor Grid with Enhanced Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: '/sponsors/findmyrealestate.jpeg',
                name: 'Find My Real Estate',
                tagline: 'Your trusted real estate partner',
                tier: 'Platinum Partner',
                benefits: ['Free property appraisal', 'Reduced commission rates'],
                website: 'https://www.findmyrealestate.com.au'
              },
              {
                image: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg',
                name: 'Ratul Biswas Finance',
                tagline: 'Expert mortgage solutions',
                tier: 'Platinum Partner',
                benefits: ['Free consultation', 'Exclusive rates for BSM'],
                website: 'https://www.a-f-s.au'
              },
              {
                image: '/sponsors/asa-wealth-management.jpeg',
                name: 'ASA Wealth Management',
                tagline: 'Financial planning excellence',
                tier: 'Gold Partner',
                benefits: ['Free portfolio review', 'Financial seminars'],
                website: 'https://asawealth.com.au'
              },
              {
                image: '/sponsors/solar-1.jpeg',
                name: 'Cosmic Renewable Energy',
                tagline: 'Sustainable solar energy solutions',
                tier: 'Gold Partner',
                benefits: ['10% discount on installations', 'Free energy consultation'],
                website: 'https://www.cosmicrenewableenergy.com.au'
              },
              {
                image: '/sponsors/choicerealesate.jpeg',
                name: 'Choice Estate Agent',
                tagline: 'Your first choice for real estate',
                tier: 'Silver Partner',
                benefits: ['Special property management rates', 'Priority listings'],
                website: 'https://choiceestateagent.com.au'
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
              }
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-gray-50 p-4">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                  <p className="text-gray-600 mb-4">{sponsor.tagline}</p>

                  {sponsor.description && (
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {sponsor.description}
                    </p>
                  )}

                  {sponsor.benefits && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-green-700 mb-2">BSM Member Benefits:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {sponsor.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {sponsor.website && sponsor.website !== '#' && (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Follow Us on Facebook | ফেসবুকে আমাদের ফলো করুন
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Cultural Community | আমাদের সাংস্কৃতিক সম্প্রদায়ে যোগ দিন
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
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative bg-white rounded-xl p-4 max-w-6xl max-h-[95vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-xl font-bold shadow-lg"
            >
              ✕
            </button>
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
            </div>
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="text-center mt-4 text-gray-500 text-sm">
              Click outside or press the ✕ to close
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}