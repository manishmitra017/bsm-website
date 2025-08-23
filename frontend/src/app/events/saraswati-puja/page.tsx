'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SaraswatiPuja() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20231029_125732-scaled.jpg"
            alt="Saraswati Puja - Bengali Society of Melbourne"
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
                className="text-yellow-600 hover:text-yellow-700 font-medium mr-4 flex items-center"
              >
                ← Back to Events
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-800 mb-4 sm:mb-6 leading-tight">
              Saraswati Puja
              <span className="block text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সরস্বতী পূজা
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-yellow-700 leading-relaxed font-medium">
              Goddess of Knowledge, Arts & Learning
            </p>
            <p className="text-lg sm:text-xl text-orange-600 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              জ্ঞান, শিল্প ও শিক্ষার দেবী
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
                Celebrating Knowledge & Wisdom
                <span className="block text-yellow-600 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  জ্ঞান ও প্রজ্ঞার উৎসব
                </span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Saraswati Puja is a beautiful celebration dedicated to Goddess Saraswati, the divine embodiment of knowledge, 
                  arts, music, and learning. This auspicious festival typically falls in January or February, marking the 
                  arrival of spring and new beginnings in education and creative pursuits.
                </p>
                <p>
                  Students, teachers, artists, and scholars offer their prayers to seek the goddess's blessings for wisdom, 
                  creativity, and success in their academic and artistic endeavors. The festival is especially significant 
                  for children as they begin their educational journey.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-yellow-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    সরস্বতী পূজা জ্ঞান, শিল্প, সংগীত ও শিক্ষার দেবী সরস্বতীর উদ্দেশ্যে নিবেদিত একটি সুন্দর উৎসব। 
                    ছাত্র-ছাত্রী, শিক্ষক, শিল্পী এবং পণ্ডিতগণ জ্ঞান, সৃজনশীলতা এবং শিক্ষা ও শিল্পক্ষেত্রে 
                    সাফল্যের জন্য দেবীর আশীর্বাদ প্রার্থনা করেন।
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
                  src="/communityphotos/20231029_125732-scaled.jpg"
                  alt="Saraswati Puja Celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Significance */}
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
              A Festival of Learning
              <span className="block text-yellow-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                শিক্ষার উৎসব
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
                  The festival holds special significance for Bengali families, as it marks an important milestone in a 
                  child's educational journey. The traditional ceremony of 'Hatey Khori' (holding the chalk) is performed, 
                  where young children are introduced to writing for the first time, symbolizing the beginning of their 
                  formal education.
                </p>
                <p>
                  Books, musical instruments, and educational materials are placed before the goddess to receive her divine 
                  blessings. Students abstain from studying the day before the puja and resume their studies only after 
                  seeking the goddess's grace.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">
                    BSM's Educational Mission | বিএসএমের শিক্ষা লক্ষ্য
                  </h3>
                  <p className="text-yellow-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএমের সরস্বতী পূজা শুধু একটি ধর্মীয় অনুষ্ঠান নয়, এটি আমাদের সন্তানদের শিক্ষা ও সাংস্কৃতিক 
                    মূল্যবোধের সাথে পরিচয় করিয়ে দেওয়ার একটি গুরুত্বপূর্ণ মাধ্যম। এই উৎসবের মাধ্যমে আমরা নতুন 
                    প্রজন্মকে বাংলা ভাষা, সাহিত্য ও ঐতিহ্যের সাথে যুক্ত রাখি।
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Festival Rituals */}
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
              Sacred Rituals & Traditions
              <span className="block text-yellow-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                পবিত্র রীতিনীতি ও ঐতিহ্য
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Hatey Khori',
                titleBengali: 'হাতে খড়ি',
                icon: '✍️',
                description: 'First writing ceremony for children beginning their education'
              },
              {
                title: 'Pushpanjali',
                titleBengali: 'পুষ্পাঞ্জলি',
                icon: '🌺',
                description: 'Offering of flowers to the goddess with sacred mantras'
              },
              {
                title: 'Book Blessing',
                titleBengali: 'বই পূজা',
                icon: '📚',
                description: 'Blessing of books and educational materials'
              },
              {
                title: 'Cultural Program',
                titleBengali: 'সাংস্কৃতিক অনুষ্ঠান',
                icon: '🎭',
                description: 'Musical and artistic performances by students'
              }
            ].map((ritual, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{ritual.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ritual.title}</h3>
                <p className="text-yellow-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {ritual.titleBengali}
                </p>
                <p className="text-gray-600 text-sm">{ritual.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Celebrate the Divine Wisdom
              <span className="block text-yellow-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দিব্য জ্ঞানের উৎসব
              </span>
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Join us in seeking Goddess Saraswati's blessings for knowledge, wisdom, and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-block"
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