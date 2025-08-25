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
            src="/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
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

      {/* Upcoming Events 2025 */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Events 2025
              <span className="block text-yellow-200 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আসন্ন অনুষ্ঠান ২০২৫
              </span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Mark your calendars! Join us for Melbourne's most spectacular Bengali cultural celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Durga Puja 2025 */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/upcoming-events/Durga-Puja-2025-1654-x-841-mm-Horizontal-Jul27-scaled.jpg"
                  alt="Durga Puja 2025 - BSM Melbourne"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-3">
                  <span className="text-3xl">🪔</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  Sep 26-28
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Durga Puja 2025</h3>
                    <p className="text-red-600 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      দুর্গা পূজা ২০২৫
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-red-600">September 26-28</p>
                    <p className="text-sm text-gray-600">2025</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-600 text-lg">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Werribee Functions & Events Centre</p>
                      <p className="text-gray-600 text-sm">2-10 Bulban Rd, Werribee, VIC 3030</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-red-600 text-lg">🎭</span>
                    <div>
                      <p className="text-gray-700">
                        The biggest annual festival celebrated by the Bengali-speaking community, honoring 
                        the triumph of Goddess Durga over evil and showcasing Bengali culture through devotion, 
                        music, dance, rituals, and delicious food.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/events/durgotsav" 
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact" 
                    className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors text-center"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Kalipuja & Diwali 2025 */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/kalipooja-2023/1-min.jpg"
                  alt="Kalipuja & Diwali 2025 - BSM Melbourne"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-3">
                  <span className="text-3xl">🕉️</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                  Oct 20
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Kalipuja & Diwali 2025</h3>
                    <p className="text-purple-600 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      কালী পূজা ও দীপাবলি ২০২৫
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">October 20</p>
                    <p className="text-sm text-gray-600">6:00 PM - 11:30 PM</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-600 text-lg">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Werribee Masonic Centre</p>
                      <p className="text-gray-600 text-sm">223 Watton St, Werribee, VIC 3030</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-600 text-lg">💫</span>
                    <div>
                      <p className="text-gray-700">
                        The Festival of Light symbolizes the spiritual victory of light over darkness, 
                        good over evil, and knowledge over ignorance. A time to destroy dark desires 
                        and embrace goodwill.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/events/kalipuja-deepavali" 
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact" 
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Event Highlights */}
          <motion.div 
            className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-semibold mb-2">Cultural Performances</h4>
                <p className="text-red-100 text-sm">Traditional music, dance, and theatrical performances</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🍛</div>
                <h4 className="font-semibold mb-2">Authentic Bengali Food</h4>
                <p className="text-red-100 text-sm">Delicious traditional Bengali cuisine and sweets</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-semibold mb-2">Beautiful Decorations</h4>
                <p className="text-red-100 text-sm">Stunning pandals and traditional decorative arts</p>
              </div>
            </div>
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

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Memories | আমাদের স্মৃতি
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our vibrant community celebrations through photos and memories
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                '/durgapooja-2023/20231029_161210-1024x768.jpg',
                '/kalipooja-2023/1-min.jpg',
                '/communityphotos/20221007_224153-scaled.jpg',
                '/communityphotos/IMG-1305-scaled.jpg'
              ].map((photo, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-32 md:h-40 overflow-hidden">
                    <Image
                      src={photo}
                      alt={`BSM Event Preview ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <Link 
              href="/gallery" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Complete Gallery →
            </Link>
          </motion.div>
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