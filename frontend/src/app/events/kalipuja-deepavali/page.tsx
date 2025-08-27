'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function KalipujaDeepavali() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20221008_115837-scaled.jpg"
            alt="Kalipuja & Deepavali - Bengali Society of Melbourne"
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
                className="text-purple-600 hover:text-purple-700 font-medium mr-4 flex items-center"
              >
                ← Back to Events
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-800 mb-4 sm:mb-6 leading-tight">
              Kalipuja & Deepavali
              <span className="block text-pink-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কালীপূজা ও দীপাবলি
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-700 leading-relaxed font-medium">
              Festival of Lights
            </p>
            <p className="text-lg sm:text-xl text-pink-600 mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              আলোর উৎসব
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
                The Divine Festival of Light
                <span className="block text-purple-600 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  দিব্য আলোর উৎসব
                </span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Kali Puja & Diwali, also known as the Festival of Lights, is one of the most significant and widely 
                  celebrated festivals in Hindu culture. It typically falls in October or November and spans five days, 
                  with each day holding its own special significance and rituals.
                </p>
                <p>
                  The festival commemorates the triumph of light over darkness, good over evil, and knowledge over ignorance. 
                  Homes, streets, and public spaces are adorned with colorful lights, diyas (oil lamps), and intricate 
                  rangoli designs to symbolize the victory of light and prosperity.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-purple-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    কালীপূজা ও দীওয়ালি, যা আলোর উৎসব নামেও পরিচিত, হিন্দু সংস্কৃতির অন্যতম গুরুত্বপূর্ণ ও ব্যাপকভাবে 
                    পালিত উৎসব। এই উৎসব অন্ধকারের উপর আলোর, মন্দের উপর ভালোর, এবং অজ্ঞানতার উপর জ্ঞানের বিজয় 
                    উদযাপন করে।
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
                  src="/kalipooja-2023/1-min.jpg"
                  alt="Kalipuja & Deepavali Celebration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Festival Significance */}
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
              Celebrating Unity in Diversity
              <span className="block text-purple-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বৈচিত্র্যের মধ্যে ঐক্য
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
                  People clean and decorate their homes, exchange gifts, and prepare elaborate feasts to share with family and friends. 
                  Central to the celebration is the worship of Goddess Kali, the goddess of wealth and prosperity, to invite her 
                  blessings into the home. Fireworks light up the night sky, adding to the festive atmosphere and symbolizing 
                  the victory of good over evil.
                </p>
                <p>
                  Diwali is also a time for forgiveness, reconciliation, and new beginnings, as people resolve conflicts and 
                  mend relationships. Across regions and communities, Diwali is celebrated with joy, enthusiasm, and a sense 
                  of unity, fostering bonds of love and camaraderie among people of all ages and backgrounds.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">
                    BSM's Celebration | বিএসএমের উৎসব
                  </h3>
                  <p className="text-purple-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএম ২০১৩ সাল থেকে এই উৎসব আয়োজন করছে। এটি অত্যন্ত তাৎপর্যপূর্ণ যে মেলবোর্নের অন্যান্য বহু 
                    সাংস্কৃতিক সম্প্রদায় এই উদযাপনে যোগ দেয়। বিএসএমের কালী পূজা ও দীপাবলি সর্বদা আলোর উৎসব 
                    উদযাপনকারী বিভিন্ন সম্প্রদায়ের জন্য একটি মিলন স্থল হয়ে ওঠে।
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
              Festival Activities
              <span className="block text-purple-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                উৎসবের কার্যক্রম
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Kali Puja Rituals',
                titleBengali: 'কালী পূজা',
                icon: '🕉️',
                description: 'Sacred worship of Goddess Kali with traditional ceremonies'
              },
              {
                title: 'Diya Lighting',
                titleBengali: 'প্রদীপ জ্বালানো',
                icon: '🪔',
                description: 'Lighting of oil lamps to dispel darkness and invite prosperity'
              },
              {
                title: 'Rangoli Art',
                titleBengali: 'আল্পনা',
                icon: '🎨',
                description: 'Beautiful floor art created with colored powders and flowers'
              },
              {
                title: 'Community Feast',
                titleBengali: 'প্রসাদ বিতরণ',
                icon: '🍽️',
                description: 'Sharing of traditional sweets and festive meals'
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
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-purple-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {activity.titleBengali}
                </p>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Festival of Lights
              <span className="block text-purple-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আলোর উৎসবে যোগ দিন
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Celebrate the triumph of light over darkness with Melbourne's Bengali community. All are welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block"
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