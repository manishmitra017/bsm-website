'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function KalipujaDeepavali() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // All photos for lightbox navigation (2025 + 2023)
  const allPhotos = [
    // 2025 photos
    '/kalipooja-2025/20251019_195953.jpg',
    '/kalipooja-2025/20251019_200009.jpg',
    '/kalipooja-2025/20251019_200010.jpg',
    '/kalipooja-2025/20251019_200046.jpg',
    '/kalipooja-2025/20251019_200127.jpg',
    '/kalipooja-2025/20251019_200201.jpg',
    '/kalipooja-2025/20251019_200203(0).jpg',
    '/kalipooja-2025/20251019_200206.jpg',
    '/kalipooja-2025/20251019_203633.jpg',
    '/kalipooja-2025/20251019_204046.jpg',
    '/kalipooja-2025/20251019_212020.jpg',
    '/kalipooja-2025/20251019_212030.jpg',
    '/kalipooja-2025/20251019_212031.jpg',
    '/kalipooja-2025/20251019_212212.jpg',
    '/kalipooja-2025/20251019_220859~2.jpg',
    '/kalipooja-2025/20251019_220905~2.jpg',
    '/kalipooja-2025/20251019_221118.jpg',
    '/kalipooja-2025/20251019_221138.jpg',
    '/kalipooja-2025/20251019_222155.jpg',
    '/kalipooja-2025/20251019_222158.jpg',
    // 2023 photos
    '/kalipooja-2023/1-min.jpg',
    '/kalipooja-2023/2-min.jpg',
    '/kalipooja-2023/3-min.jpg',
    '/kalipooja-2023/4-min-1.jpg',
    '/kalipooja-2023/5-min-1.jpg',
    '/kalipooja-2023/6-min.jpg',
    '/kalipooja-2023/7-min-1.jpg',
    '/kalipooja-2023/8-min-1.jpg',
    '/kalipooja-2023/9-min-1.jpg',
    '/kalipooja-2023/10-min-1.jpg',
    '/kalipooja-2023/11-min.jpg',
    '/kalipooja-2023/12-min.jpg',
    '/kalipooja-2023/13-min.jpg',
    '/kalipooja-2023/14-min.jpg',
    '/kalipooja-2023/15-min.jpg',
    '/kalipooja-2023/17-min.jpg',
  ]

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(allPhotos.indexOf(imageSrc))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % allPhotos.length
    setSelectedIndex(nextIndex)
    setSelectedImage(allPhotos[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? allPhotos.length - 1 : selectedIndex - 1
    setSelectedIndex(prevIndex)
    setSelectedImage(allPhotos[prevIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0">
          <Image
            src="/kalipooja-2023/1-min.jpg"
            alt="Kalipuja & Deepavali - Bengali Society of Melbourne"
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

      {/* Event Details Banner - 2025 Completed */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/kalipooja-2025/kaalipooja-2025.jpeg"
                  alt="Kali Puja & Deepavali 2025 Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <span>✓</span> Completed
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-purple-800 mb-6">
                  Kali Puja 2025 - Successfully Celebrated!
                  <span className="block text-pink-600 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    কালীপূজা ২০২৫ - সফলভাবে সম্পন্ন!
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📅</span>
                    <div>
                      <p className="font-bold text-gray-900">Date</p>
                      <p className="text-gray-700">October 19, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🕐</span>
                    <div>
                      <p className="font-bold text-gray-900">Time</p>
                      <p className="text-gray-700">6:00 PM - 11:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-bold text-gray-900">Venue</p>
                      <p className="text-gray-700">Werribee Masonic Hall</p>
                      <p className="text-gray-600">223 Watton St, Werribee VIC 3030</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🎉</span>
                    <div>
                      <p className="font-bold text-gray-900">Activities</p>
                      <p className="text-gray-700">Kali Puja, Diya Lighting, Cultural Programs, Community Feast</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">
                    Thank you to everyone who joined us for Kali Puja & Deepavali 2025! View photos in our gallery.
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/gallery"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    View Photos
                  </Link>
                  <Link
                    href="/events"
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center"
                  >
                    View All Events
                  </Link>
                </div>
              </div>
            </div>
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
                  src="/kalipooja-2025/kaalipooja-2025.jpeg"
                  alt="Kalipuja & Deepavali 2025 Celebration"
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

      {/* Photo Gallery - 2025 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
              Kali Puja 2025 Gallery
              <span className="block text-pink-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কালীপূজা ২০২৫ ছবির সংগ্রহ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the divine moments from our Kali Puja & Deepavali 2025 celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/kalipooja-2025/20251019_195953.jpg',
              '/kalipooja-2025/20251019_200009.jpg',
              '/kalipooja-2025/20251019_200010.jpg',
              '/kalipooja-2025/20251019_200046.jpg',
              '/kalipooja-2025/20251019_200127.jpg',
              '/kalipooja-2025/20251019_200201.jpg',
              '/kalipooja-2025/20251019_200203(0).jpg',
              '/kalipooja-2025/20251019_200206.jpg',
              '/kalipooja-2025/20251019_203633.jpg',
              '/kalipooja-2025/20251019_204046.jpg',
              '/kalipooja-2025/20251019_212020.jpg',
              '/kalipooja-2025/20251019_212030.jpg',
              '/kalipooja-2025/20251019_212031.jpg',
              '/kalipooja-2025/20251019_212212.jpg',
              '/kalipooja-2025/20251019_220859~2.jpg',
              '/kalipooja-2025/20251019_220905~2.jpg',
              '/kalipooja-2025/20251019_221118.jpg',
              '/kalipooja-2025/20251019_221138.jpg',
              '/kalipooja-2025/20251019_222155.jpg',
              '/kalipooja-2025/20251019_222158.jpg',
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openLightbox(photo)}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={photo}
                    alt={`Kali Puja 2025 - Moment ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-4xl">🔍</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery - 2025 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
              Kali Puja 2025 Videos
              <span className="block text-pink-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কালীপূজা ২০২৫ ভিডিও
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch the highlights from our celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <video
                controls
                className="w-full h-auto"
                poster="/kalipooja-2025/20251019_212020.jpg"
              >
                <source src="/kalipooja-2025/20251019_213841.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-purple-50">
                <h3 className="font-bold text-purple-800">Kali Puja Rituals</h3>
                <p className="text-gray-600 text-sm">Divine moments from the puja ceremony</p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <video
                controls
                className="w-full h-auto"
                poster="/kalipooja-2025/20251019_222155.jpg"
              >
                <source src="/kalipooja-2025/20251019_222137.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-purple-50">
                <h3 className="font-bold text-purple-800">Celebration Highlights</h3>
                <p className="text-gray-600 text-sm">Community celebration and festivities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - 2023 */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
              Kali Puja 2023 Gallery
              <span className="block text-pink-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কালীপূজা ২০২৩ ছবির সংগ্রহ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memories from our Kali Puja & Deepavali 2023 celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/kalipooja-2023/1-min.jpg',
              '/kalipooja-2023/2-min.jpg',
              '/kalipooja-2023/3-min.jpg',
              '/kalipooja-2023/4-min-1.jpg',
              '/kalipooja-2023/5-min-1.jpg',
              '/kalipooja-2023/6-min.jpg',
              '/kalipooja-2023/7-min-1.jpg',
              '/kalipooja-2023/8-min-1.jpg',
              '/kalipooja-2023/9-min-1.jpg',
              '/kalipooja-2023/10-min-1.jpg',
              '/kalipooja-2023/11-min-1.jpg',
              '/kalipooja-2023/12-min-1.jpg',
              '/kalipooja-2023/13-min.jpg',
              '/kalipooja-2023/14-min.jpg',
              '/kalipooja-2023/15-min.jpg',
              '/kalipooja-2023/17-min.jpg',
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openLightbox(photo)}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={photo}
                    alt={`Kali Puja 2023 - Moment ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-4xl">🔍</span>
                  </div>
                </div>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Kali Puja & Deepavali"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {selectedIndex + 1} of {allPhotos.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}