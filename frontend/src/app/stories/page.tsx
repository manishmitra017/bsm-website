'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { articles, deitySections, getStoriesByDeity } from './storyData'

const bengaliFont = { fontFamily: 'Noto Sans Bengali, sans-serif' }

export default function StoriesPage() {
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
              Stories &amp; Articles
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={bengaliFont}>
                গল্প ও প্রবন্ধ
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              Explore the rich mythology and sacred stories of the deities we celebrate in our Bengali community
            </p>
            <p className="text-base sm:text-lg text-orange-600 mt-2" style={bengaliFont}>
              আমাদের বাঙালি সম্প্রদায়ে আমরা যে দেবদেবীদের পূজা করি তাঁদের সমৃদ্ধ পৌরাণিক কাহিনী ও পবিত্র গল্প অন্বেষণ করুন
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divine Family Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Divine Family
              <span className="block text-orange-600 text-xl mt-2 font-normal" style={bengaliFont}>
                দেব পরিবার
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              During Durga Puja, we welcome Ma Durga along with her divine family — her sons Ganesh
              and Kartikeya, and goddesses Lakshmi and Saraswati. These stories, written for children,
              bring their adventures to life through tales of courage, wisdom, love, and family.
            </p>
            <p className="text-base text-gray-500 mt-3 leading-relaxed max-w-3xl mx-auto" style={bengaliFont}>
              দুর্গাপূজায় আমরা মা দুর্গাকে তাঁর দেব পরিবারসহ বরণ করি — পুত্র গণেশ ও কার্তিকেয়, এবং দেবী লক্ষ্মী ও সরস্বতী। এই গল্পগুলি শিশুদের জন্য লেখা, সাহস, প্রজ্ঞা, ভালোবাসা ও পরিবারের কাহিনী।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Children's Stories by Deity */}
      {deitySections.map((deity, deityIdx) => {
        const stories = getStoriesByDeity(deity.key)
        if (stories.length === 0) return null

        return (
          <section
            key={deity.key}
            className={`py-20 ${deityIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-5xl mb-4 block">{deity.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {deity.name} Stories
                  <span className="block text-orange-600 text-xl mt-2 font-normal" style={bengaliFont}>
                    {deity.nameBengali}-র গল্প
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {deity.description}
                </p>
                <p className="text-gray-500 text-sm mt-1" style={bengaliFont}>
                  {deity.descriptionBengali}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {stories.map((story, index) => (
                  <motion.div
                    key={story.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    <Link href={`/stories/${story.slug}`} className="block group">
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          {story.image && (
                            <Image
                              src={story.image}
                              alt={story.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          )}
                          <div className={`absolute inset-0 bg-gradient-to-t ${story.colorTheme.gradient} opacity-70`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl">{story.icon}</span>
                          </div>
                          {story.ageRange && (
                            <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                              Ages {story.ageRange}
                            </span>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className={`text-lg font-bold ${story.colorTheme.text} mb-1 group-hover:underline`}>
                            {story.title}
                          </h3>
                          <p className="text-orange-600 font-medium text-sm mb-3" style={bengaliFont}>
                            {story.titleBengali}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {story.description}
                          </p>
                          <div className={`mt-4 ${story.colorTheme.accent} font-semibold text-sm flex items-center`}>
                            Read Story <span className="ml-2 group-hover:ml-3 transition-all duration-300">&rarr;</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Articles / Deep Reads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Articles / Deep Reads
              <span className="block text-orange-600 text-xl mt-2 font-normal" style={bengaliFont}>
                প্রবন্ধ ও বিস্তারিত পাঠ
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In-depth bilingual articles exploring the mythology and cultural significance of the deities we celebrate
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
                <Link href={`/stories/${article.slug}`} className="block group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    <div className="relative h-56 overflow-hidden">
                      {article.image && (
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      <div className={`absolute inset-0 bg-gradient-to-t ${article.colorTheme.gradient} opacity-60`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{article.icon}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold ${article.colorTheme.text} mb-1 group-hover:underline`}>
                        {article.title}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3" style={bengaliFont}>
                        {article.titleBengali}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        {article.description}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed" style={bengaliFont}>
                        {article.descriptionBengali}
                      </p>
                      <div className={`mt-4 ${article.colorTheme.accent} font-semibold text-sm flex items-center`}>
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
              <span className="block text-red-200 text-xl mt-2" style={bengaliFont}>
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
