'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const articles = [
  {
    name: 'The Legend of Durga Slaying Mahishasura',
    nameBengali: 'দুর্গার মহিষাসুর বধের কাহিনী',
    slug: 'durga-slays-mahishasura',
    description: 'The epic story of how Goddess Durga, born from the combined powers of all the gods, defeated the invincible buffalo demon Mahishasura and restored cosmic order.',
    descriptionBengali: 'দেবতাদের সম্মিলিত শক্তিতে জন্ম নেওয়া দেবী দুর্গা কীভাবে অজেয় মহিষাসুরকে পরাজিত করে মহাজাগতিক শৃঙ্খলা পুনরুদ্ধার করেছিলেন সেই মহাকাব্যিক কাহিনী।',
    icon: '🪔',
    color: 'from-red-500 to-orange-500',
    textColor: 'text-red-600',
    image: '/Durgapooja-2025/durga-pooja.jpg',
  },
  {
    name: 'Kali Mata: The Dark Mother',
    nameBengali: 'কালী মাতা: তমসানাশিনী জননী',
    slug: 'kali-mata',
    description: 'Discover the fierce and compassionate Goddess Kali — the destroyer of evil, the liberator of souls, and one of the most powerful manifestations of Shakti.',
    descriptionBengali: 'ভয়ংকরী ও করুণাময়ী দেবী কালীকে জানুন — অশুভের বিনাশকারিণী, আত্মার মুক্তিদাত্রী এবং শক্তির অন্যতম শক্তিশালী প্রকাশ।',
    icon: '🕉️',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-600',
    image: '/kalipooja-2025/kaalipooja-2025.jpeg',
  },
  {
    name: 'Goddess Saraswati: Divine Knowledge',
    nameBengali: 'দেবী সরস্বতী: দিব্য জ্ঞানের আলো',
    slug: 'goddess-saraswati',
    description: 'The serene goddess who presides over knowledge, music, arts, and wisdom — learn about Saraswati\'s timeless significance and her special place in Bengali culture.',
    descriptionBengali: 'জ্ঞান, সংগীত, শিল্পকলা ও প্রজ্ঞার অধিষ্ঠাত্রী শান্ত দেবী — সরস্বতীর চিরন্তন তাৎপর্য এবং বাঙালি সংস্কৃতিতে তাঁর বিশেষ স্থান সম্পর্কে জানুন।',
    icon: '📚',
    color: 'from-yellow-500 to-orange-500',
    textColor: 'text-yellow-600',
    image: '/saraswatipooja-2025/20240218_113230.jpg',
  },
]

export default function Articles() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20231029_125732-scaled.jpg"
            alt="Bengali Society of Melbourne"
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
              Our Stories & Articles
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের গল্প ও প্রবন্ধ
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              Explore the rich mythology and sacred stories of the deities we celebrate in our Bengali community
            </p>
            <p className="text-base sm:text-lg text-orange-600 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              আমাদের বাঙালি সম্প্রদায়ে আমরা যে দেবদেবীদের পূজা করি তাঁদের সমৃদ্ধ পৌরাণিক কাহিনী ও পবিত্র গল্প অন্বেষণ করুন
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
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
              Sacred Stories
              <span className="block text-orange-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                পবিত্র কাহিনী
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read about the divine legends that inspire our festivals and cultural celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Link href={`/articles/${article.slug}`} className="block group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-60`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{article.icon}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold ${article.textColor} mb-1 group-hover:underline`}>
                        {article.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                        {article.nameBengali}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        {article.description}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                        {article.descriptionBengali}
                      </p>
                      <div className={`mt-4 ${article.textColor} font-semibold text-sm flex items-center`}>
                        Read Article <span className="ml-2 group-hover:ml-3 transition-all duration-300">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Our Festivals
              <span className="block text-red-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের উৎসব উপভোগ করুন
              </span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              These sacred stories come alive through our community celebrations. Join us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                View Our Events
              </Link>
              <Link
                href="/membership"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-block"
              >
                Join BSM Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
