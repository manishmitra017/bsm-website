'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AddToCalendar from '@/components/AddToCalendar'
import { useState } from 'react'

import Head from 'next/head'

function AnimatedDurgotsav() {
  const [selectedImage, setSelectedImage] = useState<{image: string, title: string} | null>(null)
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Durgotsav 2025 - Durga Puja Melbourne",
    "description": "Melbourne's grandest Durga Puja celebration by Bengali Society of Melbourne (BSM). Experience authentic Bengali culture, traditional rituals, cultural performances, and community festivities.",
    "startDate": "2025-09-28",
    "endDate": "2025-10-02",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Bengali Society of Melbourne",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Littlecroft Street",
        "addressLocality": "Point Cook",
        "addressRegion": "Victoria",
        "postalCode": "3030",
        "addressCountry": "Australia"
      }
    },
    "image": [
      "https://bsm.org.au/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
    ],
    "organizer": {
      "@type": "Organization",
      "name": "Bengali Society of Melbourne",
      "url": "https://bsm.org.au"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AUD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
            alt="Durgotsav - Bengali Society of Melbourne"
            fill
            className="object-cover opacity-40"
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
            <div className="flex items-center mb-6">
              <Link 
                href="/events" 
                className="text-red-600 hover:text-red-700 font-medium mr-4 flex items-center"
              >
                ← Back to Events
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight">
              Durgotsav
              <span className="block text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দুর্গোৎসব
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-red-700 leading-relaxed font-medium">
              A Triumphant Homecoming
            </p>
            <p className="text-lg sm:text-xl text-orange-600 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              বিজয়ের উৎসব - মা দুর্গার আগমন
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Event Details Panel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-visible"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Durgotsav 2025</h3>
                    <p className="text-red-600 font-medium text-lg" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      দুর্গোৎসব ২০২৫
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-red-600">September 27-28</p>
                    <p className="text-sm text-gray-600">2025</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-600 text-lg">📅</span>
                      <div>
                        <p className="font-semibold text-gray-900">Dates</p>
                        <p className="text-gray-600">September 27-28, 2025</p>
                        <p className="text-sm text-gray-500">Saturday - Sunday</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-600 text-lg">⏰</span>
                      <div>
                        <p className="font-semibold text-gray-900">Timings</p>
                        <p className="text-gray-600">10:00 AM - 11:30 PM</p>
                        <p className="text-sm text-gray-500">Both days</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-600 text-lg">📍</span>
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">Werribee Functions & Events Centre</p>
                        <p className="text-sm text-gray-500">2-10 Bulban Rd, Werribee, VIC 3030</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-600 text-lg">🎭</span>
                      <div>
                        <p className="font-semibold text-gray-900">Experience</p>
                        <p className="text-gray-600">Traditional rituals, cultural performances, community feast</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Save the Date
                    <span className="block text-sm text-gray-600 font-normal">Add this event to your calendar</span>
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                    >
                      Get Involved
                    </Link>
                    <AddToCalendar 
                      event={{
                        title: "Durgotsav 2025 - BSM Melbourne",
                        description: "Join us for the grand Durga Puja celebration featuring traditional rituals, cultural performances, community feast, and immersion ceremony. Celebrate the victory of good over evil with Melbourne's Bengali community.",
                        startDate: "2025-09-27T10:00:00+10:00",
                        endDate: "2025-09-28T23:30:00+10:00",
                        location: "Werribee Functions & Events Centre, 2-10 Bulban Rd, Werribee, VIC 3030, Australia"
                      }}
                      buttonClassName="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors text-center flex items-center space-x-2"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Durga Puja 2025 Itinerary */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                📋 Complete Event Itinerary 📋
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সম্পূর্ণ অনুষ্ঠানের কার্যক্রম
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                Detailed schedule for two days of Durgotsav 2025 - Click to view the complete itinerary
              </p>
            </div>

            {/* Itinerary Image */}
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div 
                className="relative bg-white rounded-2xl shadow-2xl p-6 cursor-pointer group hover:shadow-3xl transition-all duration-300"
                onClick={() => setSelectedImage({ 
                  image: '/durga pooja-itenary/iternary-pooja.jpeg', 
                  title: 'Durgotsav 2025 Complete Event Itinerary' 
                })}
              >
                <div className="relative h-[500px] md:h-[700px] lg:h-[800px] rounded-xl overflow-hidden">
                  <Image
                    src="/durga pooja-itenary/iternary-pooja.jpeg"
                    alt="Durgotsav 2025 Complete Event Itinerary - 2 Days Schedule"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    🔍 Click for Full Size View
                  </div>
                </div>
                
                {/* Event Summary Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div>
                      <h4 className="font-bold text-orange-600 text-lg">Day 1 - Saturday</h4>
                      <p className="text-gray-700 font-medium">Sep 27, 2025</p>
                      <p className="text-sm text-gray-600">Opening & Main Celebrations</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-600 text-lg">Day 2 - Sunday</h4>
                      <p className="text-gray-700 font-medium">Sep 28, 2025</p>
                      <p className="text-sm text-gray-600">Grand Finale</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">📌</span>
                <h3 className="text-xl font-bold text-white">Important Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
                <div>
                  <h4 className="font-semibold mb-2">📍 Venue Details</h4>
                  <p className="text-sm">Werribee Functions & Events Centre</p>
                  <p className="text-sm">2-10 Bulban Rd, Werribee, VIC 3030</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🕰️ Event Timings</h4>
                  <p className="text-sm">Both days: 10:00 AM - 11:30 PM</p>
                  <p className="text-sm">Gates open 30 minutes early</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Festival Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Divine Celebration
                <span className="block text-red-600 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  দিব্য উৎসব
                </span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Durgotsav is a grand celebration honoring the return of Goddess Durga, the embodiment of divine feminine power, 
                  to her own abode after a sojourn at her in-laws' home. Accompanied by her children – Saraswati, Lakshmi, 
                  Kartik, and Ganesha – the festival marks her victory over evil and is a time to seek her blessings.
                </p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-red-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    দুর্গোৎসব হল দেবী দুর্গার বিজয়ের উৎসব। মা দুর্গা তার সন্তানদের নিয়ে - সরস্বতী, লক্ষ্মী, কার্তিক এবং গণেশ - 
                    অশুভ শক্তির বিরুদ্ধে জয়লাভের পর নিজ আবাসে ফিরে আসেন। এই উৎসবে আমরা মায়ের আশীর্বাদ প্রার্থনা করি।
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/communityphotos/20221007_224153-scaled.jpg"
                  alt="Durga Puja Celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BSM's Durgotsav Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BSM's Durgotsav Journey
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিএসএমের দুর্গোৎসবের যাত্রা
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  As the cornerstone of Bengali culture, Durgotsav has been a focal point for the Bengali community in Melbourne 
                  since BSM's inaugural event in 2012. Recognizing the growing Bengali population in the western suburbs, BSM's 
                  pioneering spirit in organizing this festival has solidified its place in the hearts of the community.
                </p>
                <p>
                  BSM's Durgotsav has blossomed into a much-loved annual gathering, fostering a sense of belonging among Bengalis 
                  while also serving as a vibrant bridge connecting diverse cultures within Victoria.
                </p>
                <div className="bg-red-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    Melbourne's Premier Bengali Festival | মেলবোর্নের প্রধান বাঙালি উৎসব
                  </h3>
                  <p className="text-red-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    ২০১২ সাল থেকে বিএসএমের দুর্গোৎসব মেলবোর্নের বাঙালি সম্প্রদায়ের প্রধান সাংস্কৃতিক অনুষ্ঠান হয়ে উঠেছে। 
                    এই উৎসব শুধু বাঙালিদের মধ্যেই নয়, ভিক্টোরিয়ার বিভিন্ন সম্প্রদায়ের মানুষদের মধ্যেও সেতুবন্ধন 
                    তৈরি করেছে।
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Festival Highlights */}
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
              Festival Highlights
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                উৎসবের বিশেষত্ব
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Puja Rituals',
                titleBengali: 'পূজা অনুষ্ঠান',
                icon: '🪔',
                description: 'Traditional worship ceremonies led by experienced priests'
              },
              {
                title: 'Cultural Programs',
                titleBengali: 'সাংস্কৃতিক অনুষ্ঠান',
                icon: '🎭',
                description: 'Dance, music, and theatrical performances by community members'
              },
              {
                title: 'Community Feast',
                titleBengali: 'সকলের ভোজন',
                icon: '🍽️',
                description: 'Traditional Bengali cuisine prepared by volunteers'
              },
              {
                title: 'Immersion Ceremony',
                titleBengali: 'বিসর্জন অনুষ্ঠান',
                icon: '🌊',
                description: 'Farewell ceremony marking the end of celebrations'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{highlight.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-red-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {highlight.titleBengali}
                </p>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Durgotsav 2023 Gallery
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দুর্গোৎসব ২০২৩ ছবির সংগ্রহ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memories from our magnificent Durgotsav celebration in 2023
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: '/durgapooja-2023/20231029_122948-768x1024.jpg',
                alt: 'Durgotsav 2023 - Traditional Puja Rituals'
              },
              {
                src: '/durgapooja-2023/20231029_161210-1024x768.jpg',
                alt: 'Durgotsav 2023 - Community Celebration'
              },
              {
                src: '/durgapooja-2023/20231029_162550-1024x768.jpg',
                alt: 'Durgotsav 2023 - Cultural Programs'
              },
              {
                src: '/durgapooja-2023/Screenshot-2024-07-23-202650-1024x816.png',
                alt: 'Durgotsav 2023 - Festival Highlights'
              }
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/gallery" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View More Photos →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Durgotsav Celebration
              <span className="block text-red-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের দুর্গোৎসবে যোগ দিন
              </span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Experience the joy and devotion of Melbourne's grandest Bengali festival. All are welcome to celebrate with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-block"
              >
                View All Events
              </Link>
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
            className="relative bg-white rounded-xl p-4 max-w-7xl max-h-[95vh] overflow-hidden"
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
            <div className="relative w-full h-[80vh] flex items-center justify-center">
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

export default AnimatedDurgotsav