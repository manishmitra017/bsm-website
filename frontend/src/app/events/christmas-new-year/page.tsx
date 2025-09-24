'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ChristmasNewYear() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20231111_225013-scaled.jpg"
            alt="Christmas & New Year - Bengali Society of Melbourne"
            fill
            className="object-contain sm:object-cover opacity-40"
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
                className="text-blue-600 hover:text-blue-700 font-medium mr-4 flex items-center"
              >
                ← Back to Events
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-800 mb-4 sm:mb-6 leading-tight">
              Christmas & New Year
              <span className="block text-indigo-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বড়দিন ও ইংরেজি নববর্ষ
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-700 leading-relaxed font-medium">
              Multicultural Celebration
            </p>
            <p className="text-lg sm:text-xl text-indigo-600 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              বহুসাংস্কৃতিক উৎসব
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
                Embracing Diversity & Unity
                <span className="block text-blue-600 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বৈচিত্র্য ও ঐক্যের উৎসব
                </span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Christmas and English New Year celebrations at BSM represent our commitment to embracing Australia's 
                  multicultural values while maintaining our Bengali identity. These festivities bring together families 
                  from diverse backgrounds in the spirit of joy, sharing, and community bonding.
                </p>
                <p>
                  Our celebration features a beautiful blend of traditional Christmas elements with Bengali hospitality, 
                  creating a unique cultural experience that reflects the harmony between our heritage and our adopted home. 
                  Children especially enjoy the festive atmosphere with games, music, and special treats.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএমের ক্রিসমাস ও ইংরেজি নববর্ষ উদযাপন অস্ট্রেলিয়ার বহুসাংস্কৃতিক মূল্যবোধকে সম্মান করে 
                    আমাদের বাঙালি পরিচয় বজায় রাখার প্রতীক। এই উৎসবে বিভিন্ন ধর্ম ও সংস্কৃতির মানুষ একসাথে 
                    আনন্দ ভাগাভাগি করে এবং সম্প্রদায়িক বন্ধন দৃঢ় করে।
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
                  src="/communityphotos/20231111_225013-scaled.jpg"
                  alt="Christmas & New Year Celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Bridge */}
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
              Building Cultural Bridges
              <span className="block text-blue-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সাংস্কৃতিক সেতুবন্ধন
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
                  At BSM, we believe that celebrating Christmas and New Year alongside our traditional Bengali festivals 
                  enriches our community experience. These celebrations provide an opportunity for our children to 
                  appreciate both their Bengali heritage and Australian culture, fostering a sense of belonging in 
                  both worlds.
                </p>
                <p>
                  The events feature Christmas carols, gift exchanges, traditional Christmas dinner with a Bengali twist, 
                  and New Year's resolutions that often include commitments to preserving and promoting Bengali culture 
                  in Australia. Our celebration emphasizes values of love, compassion, generosity, and hope for the future.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    BSM's Inclusive Celebration | বিএসএমের অন্তর্ভুক্তিমূলক উৎসব
                  </h3>
                  <p className="text-blue-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএমের এই বিশেষ উৎসব আমাদের সম্প্রদায়ের অন্তর্ভুক্তিমূলক প্রকৃতি প্রদর্শন করে। এখানে 
                    সকল ধর্ম ও সংস্কৃতির মানুষ একসাথে বসে খাবার ভাগাভাগি করে, গান-বাজনা উপভোগ করে এবং 
                    নতুন বছরের জন্য শুভকামনা বিনিময় করে। এই উৎসব আমাদের অস্ট্রেলিয়ান পরিচয়কে সম্মান করার 
                    পাশাপাশি আমাদের বাঙালি ঐতিহ্যকে আরও শক্তিশালী করে।
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
              Festive Celebrations
              <span className="block text-blue-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                উৎসবের আনন্দ
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Christmas Carol',
                titleBengali: 'ক্রিসমাস গান',
                icon: '🎄',
                description: 'Traditional Christmas songs and Bengali adaptations'
              },
              {
                title: 'Gift Exchange',
                titleBengali: 'উপহার বিনিময়',
                icon: '🎁',
                description: 'Secret Santa and community gift sharing activities'
              },
              {
                title: 'Festive Feast',
                titleBengali: 'উৎসবের ভোজ',
                icon: '🍽️',
                description: 'Christmas dinner with traditional and Bengali fusion dishes'
              },
              {
                title: 'New Year Toast',
                titleBengali: 'নববর্ষের শুভেচ্ছা',
                icon: '🥂',
                description: 'Midnight countdown and New Year resolutions ceremony'
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-blue-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {activity.titleBengali}
                </p>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Celebrate Unity in Diversity
              <span className="block text-blue-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বৈচিত্র্যের মধ্যে ঐক্য উদযাপন
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our multicultural celebration and experience the warmth of community bonding during the festive season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
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