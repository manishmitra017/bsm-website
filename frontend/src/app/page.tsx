'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CountdownTimer from '@/components/CountdownTimer'
import { useState } from 'react'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{image: string, title: string} | null>(null)
  
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bengali Society of Melbourne
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বেঙ্গলি সোসাইটি অফ মেলবোর্ন
              </span>
            </motion.h1>
            
            <motion.div 
              className="bg-red-600 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-lg mb-4 sm:mb-6 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 2012 | ২০১২ সাল থেকে
            </motion.div>

            <motion.p 
              className="text-lg sm:text-xl text-red-700 mb-6 sm:mb-8 leading-relaxed"
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
                    <p className="text-sm opacity-90">September 26-28, 2025</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Sep 26-28
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/kalipooja-2023/1-min.jpg"
                    alt="Kali Puja & Deepavali - BSM Celebration"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Kali Puja & Deepavali</h3>
                    <p className="text-sm opacity-90">October 19, 2025</p>
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
              targetDate="2025-09-26T18:00:00+10:00"
              eventName="Durgotsav 2025"
              eventNameBengali="দুর্গোৎসব ২০২৫"
            />
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
        </div>
      </section>

      {/* Our Proud Sponsors Section */}
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
              Our Proud Sponsors | আমাদের গর্বিত স্পনসর
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              We extend our heartfelt gratitude to our valued sponsors who make our community events and cultural celebrations possible. Their generous support helps us preserve Bengali heritage and strengthen our community bonds across Melbourne.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              আমাদের সম্প্রদায়িক অনুষ্ঠান ও সাংস্কৃতিক উৎসব সম্ভব করে তোলার জন্য আমাদের মূল্যবান স্পনসরদের প্রতি আন্তরিক কৃতজ্ঞতা।
            </p>
          </motion.div>

          {/* Full Sponsor Images */}
          <div className="space-y-12">
            {[
              { 
                image: '/sponsors/findmyrealestate.jpeg', 
                name: 'Find My Real Estate',
                tagline: 'Your trusted real estate partner in Melbourne'
              },
              { 
                image: '/sponsors/Ratul-Biswas-Finance-Broker.jpeg', 
                name: 'Ratul Biswas Finance Broker',
                tagline: 'Professional finance and mortgage solutions'
              },
              { 
                image: '/sponsors/asa-wealth-management.jpeg', 
                name: 'ASA Wealth Management',
                tagline: 'Professional wealth management and financial advisory services'
              }
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                onClick={() => setSelectedImage({ image: sponsor.image, title: sponsor.name })}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  <div className="relative group-hover:bg-gray-50 transition-colors duration-300">
                    <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center p-8">
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        fill
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        🔍 Click to view
                      </div>
                    </div>
                    <div className="p-6 text-center bg-gradient-to-r from-red-50 to-orange-50">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                      <p className="text-gray-600 font-medium">{sponsor.tagline}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
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
              <Link 
                href="/sponsorship" 
                className="bg-white text-red-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-red-50 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Become a Sponsor Today | আজই স্পনসর হন
              </Link>
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
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/bsm2022/photos" 
                data-tabs="timeline" 
                data-width="500" 
                data-height="" 
                data-small-header="false" 
                data-adapt-container-width="false" 
                data-hide-cover="false" 
                data-show-facepile="false"
              >
                <blockquote cite="https://www.facebook.com/bsm2022/photos" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/bsm2022/photos">BSM-Bengali Society of Melbourne</a>
                </blockquote>
              </div>
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
                href="https://www.facebook.com/bsm2022"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Like Our Page | পেজ লাইক করুন
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