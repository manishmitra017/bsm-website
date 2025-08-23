'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Events() {
  const festivals = [
    {
      name: 'Durgotsav',
      nameBengali: 'দুর্গোৎসব',
      description: 'A triumphant homecoming - The grand celebration honoring Goddess Durga',
      descriptionBengali: 'মা দুর্গার বিজয়ের উৎসব',
      slug: 'durgotsav',
      image: '/communityphotos/20221007_224153-scaled.jpg',
      color: 'from-red-500 to-orange-500',
      icon: '🪔'
    },
    {
      name: 'Kalipuja & Deepavali',
      nameBengali: 'কালীপূজা ও দীপাবলি',
      description: 'Festival of Lights - Worship of Goddess Kali with Deepavali celebration',
      descriptionBengali: 'আলোর উৎসব - মা কালীর পূজা ও দীপাবলি',
      slug: 'kalipuja-deepavali',
      image: '/communityphotos/20221008_115837-scaled.jpg',
      color: 'from-purple-500 to-pink-500',
      icon: '🕉️'
    },
    {
      name: 'Saraswati Puja',
      nameBengali: 'সরস্বতী পূজা',
      description: 'Worship of the Goddess of Knowledge, Arts, and Learning',
      descriptionBengali: 'জ্ঞান ও শিল্পের দেবী সরস্বতীর পূজা',
      slug: 'saraswati-puja',
      image: '/communityphotos/20231029_125732-scaled.jpg',
      color: 'from-yellow-500 to-orange-500',
      icon: '📚'
    },
    {
      name: 'Pohela Boishakh',
      nameBengali: 'পহেলা বৈশাখ',
      description: 'Bengali New Year - Celebrating new beginnings and cultural heritage',
      descriptionBengali: 'বাংলা নববর্ষ - নতুন সূচনা ও সাংস্কৃতিক ঐতিহ্য',
      slug: 'pohela-boishakh',
      image: '/communityphotos/IMG-1305-scaled.jpg',
      color: 'from-green-500 to-teal-500',
      icon: '🌸'
    },
    {
      name: 'Christmas & English New Year',
      nameBengali: 'বড়দিন ও ইংরেজি নববর্ষ',
      description: 'Multicultural celebration embracing diversity and unity',
      descriptionBengali: 'বহুসাংস্কৃতিক উৎসব - ঐক্য ও বৈচিত্র্য',
      slug: 'christmas-new-year',
      image: '/communityphotos/20231111_225013-scaled.jpg',
      color: 'from-blue-500 to-indigo-500',
      icon: '🎄'
    }
  ]

  const communityActivities = [
    {
      name: 'Community Festivals',
      nameBengali: 'সামাজিক উৎসব',
      description: 'Traditional Bengali festivals bringing our community together',
      icon: '🎭',
      activities: ['Cultural Programs', 'Traditional Music & Dance', 'Community Feast', 'Cultural Workshops']
    },
    {
      name: 'Volunteering',
      nameBengali: 'স্বেচ্ছাসেবা',
      description: 'Community service activities supporting wider Australian community',
      icon: '🤝',
      activities: ['Blood Donation', 'Tree Plantation', 'Community Support', 'Environmental Programs']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/bsmpooja/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
            alt="Bengali Society of Melbourne Events"
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
              Our Events & Festivals
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের অনুষ্ঠান ও উৎসব
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              Celebrating Bengali culture and traditions throughout the year with the Melbourne community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Festival Navigation */}
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
              Bengali Festivals | বাংলা উৎসব
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional celebrations that connect us to our rich cultural heritage and bring our community together
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {festivals.map((festival, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link href={`/events/${festival.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={festival.image}
                      alt={festival.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${festival.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    <div className="absolute top-4 right-4">
                      <span className="text-4xl bg-white/20 backdrop-blur-md rounded-full p-3 block">
                        {festival.icon}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{festival.name}</h3>
                    <p className="text-lg font-medium mb-3 opacity-90" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {festival.nameBengali}
                    </p>
                    <p className="text-sm opacity-80 line-clamp-2 group-hover:opacity-100 transition-opacity">
                      {festival.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Activities */}
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
              Community Activities | কমিউনিটি কার্যক্রম
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond festivals, we actively engage in community service and cultural programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {communityActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                    <p className="text-red-600 font-medium mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {activity.nameBengali}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {activity.activities.map((item, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <span className="text-red-500 mr-2">•</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Celebrations | আমাদের উৎসবে যোগ দিন
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Stay connected with our community and never miss our traditional Bengali festivals and cultural events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-block"
              >
                Get Event Updates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}