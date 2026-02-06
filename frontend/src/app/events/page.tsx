'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AddToCalendar from '@/components/AddToCalendar'

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
            className="object-contain sm:object-cover opacity-30"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
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

      {/* Upcoming Events 2026 */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-white font-semibold tracking-wide uppercase text-sm">Up Next</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Upcoming Events 2026
              <span className="block text-green-200 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আসন্ন অনুষ্ঠান ২০২৬
              </span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Mark your calendars! Join us for Melbourne's most spectacular Bengali cultural celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {/* Pohela Boishakh 2026 */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/pahelaboishak/484347968_674863851736696_6373890908421337640_n.jpg"
                  alt="Pohela Boishakh 2026 - BSM Melbourne Bengali New Year"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-700/80 via-green-600/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-3">
                  <span className="text-3xl">🌸</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide">
                  April 2026
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-2xl font-bold drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Bengali New Year 1433
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Pohela Boishakh 2026
                    </h3>
                    <p className="text-green-600 font-medium text-lg" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      পহেলা বৈশাখ ১৪৩৩
                    </p>
                  </div>
                  <div className="text-right bg-green-50 rounded-xl px-4 py-2">
                    <p className="text-lg font-bold text-green-700">April 14</p>
                    <p className="text-sm text-green-600">2026</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg mt-0.5">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Venue to be announced</p>
                      <p className="text-gray-500 text-sm">Melbourne, VIC</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 text-lg mt-0.5">🌸</span>
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        Welcome the Bengali New Year with vibrant celebrations! Pohela Boishakh marks the
                        first day of the Bengali calendar - a time for fresh beginnings, cultural performances,
                        traditional music, dance, and the sharing of authentic Bengali cuisine with our Melbourne community.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/events/pohela-boishakh"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </Link>
                  <AddToCalendar
                    event={{
                      title: 'Pohela Boishakh 2026 - Bengali Society of Melbourne',
                      description: 'Welcome the Bengali New Year 1433! Join us for traditional music, dance, cultural performances and authentic Bengali cuisine.',
                      startDate: '2026-04-14T10:00:00+10:00',
                      endDate: '2026-04-14T18:00:00+10:00',
                      location: 'Melbourne, VIC (Venue TBA)'
                    }}
                    buttonClassName="border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-200 text-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Completed Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Completed Events
              <span className="block text-green-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সম্পন্ন অনুষ্ঠান
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thank you for making our celebrations grand! Relive the memories below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Saraswati Puja 2026 - Completed */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1.5 rounded-full font-bold text-xs flex items-center shadow-md">
                ✓ Completed
              </div>
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/saraswati-pooja-2026/Flyer - Join Us for Saraswati Puja 2026 up.jpg"
                  alt="Saraswati Puja 2026 - Celebrated Successfully"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2.5">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Saraswati Puja 2026</h3>
                <p className="text-yellow-600 font-medium text-sm mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  সরস্বতী পূজা ২০২৬ - সফলভাবে সম্পন্ন!
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  February 1, 2026 at Lara Hall
                </p>
                <Link
                  href="/events/saraswati-puja"
                  className="inline-flex items-center text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Photos & Highlights →
                </Link>
              </div>
            </motion.div>

            {/* Durgotsav 2025 - Completed */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1.5 rounded-full font-bold text-xs flex items-center shadow-md">
                ✓ Completed
              </div>
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/Durgapooja-2025/durga-pooja.jpg"
                  alt="Durgotsav 2025 - Celebrated Successfully"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2.5">
                  <span className="text-2xl">🪔</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Durgotsav 2025</h3>
                <p className="text-red-600 font-medium text-sm mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  দুর্গোৎসব ২০২৫ - সফলভাবে সম্পন্ন!
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  September 27-28, 2025 at Werribee Functions Centre
                </p>
                <Link
                  href="/events/durgotsav"
                  className="inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-700 transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Photos & Highlights →
                </Link>
              </div>
            </motion.div>

            {/* Kali Puja 2025 - Completed */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1.5 rounded-full font-bold text-xs flex items-center shadow-md">
                ✓ Completed
              </div>
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/kalipooja-2023/1-min.jpg"
                  alt="Kali Puja 2025 - Celebrated Successfully"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2.5">
                  <span className="text-2xl">🕉️</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Kali Puja & Deepavali 2025</h3>
                <p className="text-purple-600 font-medium text-sm mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  কালীপূজা ও দীপাবলি ২০২৫ - সফলভাবে সম্পন্ন!
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  October/November 2025 - Festival of Lights
                </p>
                <Link
                  href="/events/kalipuja-deepavali"
                  className="inline-flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Photos & Highlights →
                </Link>
              </div>
            </motion.div>

            {/* Saraswati Puja 2025 - Completed */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1.5 rounded-full font-bold text-xs flex items-center shadow-md">
                ✓ Completed
              </div>
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/saraswatipooja-2025/20240218_124542.jpg"
                  alt="Saraswati Puja 2025 - Celebrated Successfully"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2.5">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Saraswati Puja 2025</h3>
                <p className="text-yellow-600 font-medium text-sm mb-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  সরস্বতী পূজা ২০২৫ - সফলভাবে সম্পন্ন!
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  February 2025 - Goddess of Knowledge
                </p>
                <Link
                  href="/events/saraswati-puja"
                  className="inline-flex items-center text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Photos & Highlights →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              What to Expect
              <span className="block text-orange-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আপনার প্রত্যাশা
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the rich tapestry of Bengali culture through our authentic celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-6xl mb-6">🎵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Performances</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional music, dance, and theatrical performances that showcase the artistic heritage of Bengal
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-6xl mb-6">🍛</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Bengali Food</h3>
              <p className="text-gray-600 leading-relaxed">
                Delicious traditional Bengali cuisine and sweets prepared by our community members with authentic recipes
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beautiful Decorations</h3>
              <p className="text-gray-600 leading-relaxed">
                Stunning pandals and traditional decorative arts that transform venues into spiritual and cultural spaces
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Bengali Festivals | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>বাংলা উৎসব</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Community Activities | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>কমিউনিটি কার্যক্রম</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Memories | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আমাদের স্মৃতি</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join Our Celebrations | <span style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>আমাদের উৎসবে যোগ দিন</span>
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