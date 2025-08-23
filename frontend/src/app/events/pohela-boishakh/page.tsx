'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PohelaBoishakh() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/IMG-1305-scaled.jpg"
            alt="Pohela Boishakh - Bengali Society of Melbourne"
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
                className="text-green-600 hover:text-green-700 font-medium mr-4 flex items-center"
              >
                ← Back to Events
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight">
              Pohela Boishakh
              <span className="block text-teal-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                পহেলা বৈশাখ
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-green-700 leading-relaxed font-medium">
              Bengali New Year Celebration
            </p>
            <p className="text-lg sm:text-xl text-teal-600 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              বাংলা নববর্ষ উৎসব
            </p>
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
                A New Beginning
                <span className="block text-green-600 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  নতুন সূচনা
                </span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Pohela Boishakh, the Bengali New Year, is one of the most vibrant and colorful celebrations in 
                  Bengali culture. Traditionally falling on April 14th or 15th, this festival marks the first 
                  day of the Bengali calendar and symbolizes fresh beginnings, prosperity, and renewed hope.
                </p>
                <p>
                  The celebration is characterized by cultural programs, traditional music, dance performances, 
                  and the sharing of festive foods. People dress in traditional Bengali attire - men in panjabi 
                  and women in sarees or salwar kameez - creating a beautiful tapestry of colors and traditions.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    পহেলা বৈশাখ বাঙালি সংস্কৃতির অন্যতম প্রধান ও রঙিন উৎসব। এই দিনে আমরা নতুন বছরকে স্বাগত 
                    জানাই এবং সমৃদ্ধি ও আশার নতুন অধ্যায়ের সূচনা করি। ঐতিহ্যবাহী পোশাক পরে, সাংস্কৃতিক 
                    অনুষ্ঠানে অংশ নিয়ে আমরা এই পবিত্র দিনটি উদযাপন করি।
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
                  src="/communityphotos/IMG-1305-scaled.jpg"
                  alt="Pohela Boishakh Celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
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
              Cultural Heritage & Traditions
              <span className="block text-green-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সাংস্কৃতিক ঐতিহ্য ও রীতিনীতি
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
                  The Bengali New Year celebration is deeply rooted in agricultural traditions, originally marking 
                  the time for farmers to settle accounts and start afresh. Today, it represents the preservation 
                  of Bengali cultural identity, language, and traditions, especially important for diaspora communities.
                </p>
                <p>
                  Traditional foods like panta bhat (fermented rice), ilish maach (hilsa fish), and various sweets 
                  play a central role in the celebration. The festival also features Mangal Shobhajatra (colorful 
                  processions), traditional games, and cultural performances that connect generations through shared heritage.
                </p>
                <div className="bg-green-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    BSM's Pohela Boishakh | বিএসএমের পহেলা বৈশাখ
                  </h3>
                  <p className="text-green-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএম প্রতি বছর পহেলা বৈশাখ উদযাপনে মেলবোর্নের বাঙালি সম্প্রদায়কে একত্রিত করে। আমাদের 
                    অনুষ্ঠানে ঐতিহ্যবাহী সংগীত, নৃত্য, আবৃত্তি এবং সাংস্কৃতিক পরিবেশনা অন্তর্ভুক্ত থাকে। 
                    এই উৎসবের মাধ্যমে আমরা আমাদের সন্তানদের বাংলা সংস্কৃতির সাথে পরিচয় করিয়ে দেই।
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Festival Activities */}
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
              New Year Celebrations
              <span className="block text-green-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                নববর্ষ উৎসব
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Traditional Music',
                titleBengali: 'ঐতিহ্যবাহী সংগীত',
                icon: '🎵',
                description: 'Rabindra Sangeet, folk songs, and Bengali classical music performances'
              },
              {
                title: 'Cultural Dance',
                titleBengali: 'সাংস্কৃতিক নৃত্য',
                icon: '💃',
                description: 'Traditional Bengali dances and modern choreography'
              },
              {
                title: 'Bengali Cuisine',
                titleBengali: 'বাঙালি খাবার',
                icon: '🍛',
                description: 'Authentic Bengali dishes including panta bhat and traditional sweets'
              },
              {
                title: 'Poetry & Literature',
                titleBengali: 'কবিতা ও সাহিত্য',
                icon: '📖',
                description: 'Recitation of Bengali poetry and literary works'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-green-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {activity.titleBengali}
                </p>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Welcome the New Year with Us
              <span className="block text-green-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের সাথে নববর্ষ উদযাপন করুন
              </span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join Melbourne's Bengali community in celebrating our rich cultural heritage and welcoming new beginnings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                View All Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}