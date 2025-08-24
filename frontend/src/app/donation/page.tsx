'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Donation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight">
                Support BSM
                <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বিএসএমকে সাহায্য করুন
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
                Your generous donations help us preserve Bengali culture and strengthen our community in Melbourne
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Donation/donation.png"
                  alt="Support Bengali Society of Melbourne"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Donations Matter */}
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
              Why Your Support Matters
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আপনার সহযোগিতা কেন গুরুত্বপূর্ণ
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  As a not-for-profit multicultural organization, BSM relies entirely on the generous support 
                  of our community members and well-wishers. Your donations are the lifeline that enables us 
                  to preserve and celebrate our rich Bengali heritage in Melbourne.
                </p>
                <p>
                  Since 2012, BSM has been bringing the Bengali community together through traditional festivals, 
                  cultural programs, and community service initiatives. Every donation, no matter how small, 
                  makes a significant difference in our ability to serve the community.
                </p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-red-800 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                    বিএসএম একটি অলাভজনক বহুসাংস্কৃতিক সংস্থা যা সম্পূর্ণভাবে আমাদের কমিউনিটির সদস্য ও শুভাকাঙ্ক্ষীদের 
                    উদার সহযোগিতার উপর নির্ভর করে। আপনার দান আমাদের মেলবোর্নে বাঙালি ঐতিহ্য সংরক্ষণ ও উদযাপনে 
                    সক্ষম করে তোলে।
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: '🎭',
                    title: 'Cultural Events',
                    titleBengali: 'সাংস্কৃতিক অনুষ্ঠান',
                    description: 'Festival celebrations, puja ceremonies, and cultural programs'
                  },
                  {
                    icon: '🏢',
                    title: 'Venue & Equipment',
                    titleBengali: 'স্থান ও সরঞ্জাম',
                    description: 'Hall rentals, sound systems, decorations, and event infrastructure'
                  },
                  {
                    icon: '🎨',
                    title: 'Cultural Education',
                    titleBengali: 'সাংস্কৃতিক শিক্ষা',
                    description: 'Bengali language classes, dance workshops, and cultural training'
                  },
                  {
                    icon: '🤝',
                    title: 'Community Service',
                    titleBengali: 'কমিউনিটি সেবা',
                    description: 'Blood donation drives, environmental programs, and social initiatives'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-red-600 font-medium mb-3 text-sm" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {item.titleBengali}
                    </p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Details */}
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
              How to Donate
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কীভাবে দান করবেন
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BSM invites your generous support through donations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Bank Account Details
                    <span className="block text-red-600 text-lg mt-1" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      ব্যাংক অ্যাকাউন্টের বিবরণ
                    </span>
                  </h3>
                  
                  <div className="bg-red-50 rounded-lg p-6 space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Account Name</p>
                      <p className="text-lg font-bold text-gray-900">Bengali Society of Melbourne</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">BSB</p>
                        <p className="text-2xl font-bold text-red-600 bg-white rounded px-3 py-2">033070</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Account Number</p>
                        <p className="text-2xl font-bold text-red-600 bg-white rounded px-3 py-2">371537</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                      <p className="text-yellow-800 font-semibold text-center">
                        💰 Donations over $2 are tax-deductible
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Need More Information?
                    <span className="block text-red-600 text-lg mt-1" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      আরও তথ্যের প্রয়োজন?
                    </span>
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 text-center mb-6">
                      For more details, please contact us:
                    </p>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:info@bsm.org.au"
                        className="block bg-blue-50 text-blue-700 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">✉️</span>
                          <div>
                            <p className="font-semibold">Email Us</p>
                            <p className="text-sm">info@bsm.org.au</p>
                          </div>
                        </div>
                      </a>
                      
                      <a 
                        href="tel:0401513800"
                        className="block bg-red-50 text-red-700 border border-red-200 rounded-lg p-4 text-center hover:bg-red-100 transition-colors"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl">📞</span>
                          <div>
                            <p className="font-semibold">Call Us</p>
                            <p className="text-sm">0401 513 800</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              Your Impact
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আপনার প্রভাব
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                amount: '$50',
                description: 'Sponsors traditional decorations for a puja ceremony',
                descriptionBengali: 'একটি পূজা অনুষ্ঠানের জন্য ঐতিহ্যবাহী সাজসজ্জা স্পনসর করে'
              },
              {
                amount: '$100',
                description: 'Covers venue costs for a community cultural program',
                descriptionBengali: 'একটি কমিউনিটি সাংস্কৃতিক অনুষ্ঠানের স্থান খরচ বহন করে'
              },
              {
                amount: '$200',
                description: 'Supports a complete Bengali language workshop for children',
                descriptionBengali: 'শিশুদের জন্য একটি সম্পূর্ণ বাংলা ভাষার কর্মশালা সমর্থন করে'
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                className="text-center bg-red-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{impact.amount}</span>
                </div>
                <p className="text-gray-700 mb-3">{impact.description}</p>
                <p className="text-red-600 font-medium text-sm" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {impact.descriptionBengali}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us in Preserving Bengali Culture
              <span className="block text-red-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বাঙালি সংস্কৃতি সংরক্ষণে আমাদের সাথে যোগ দিন
              </span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Every contribution helps us build a stronger, more vibrant Bengali community in Melbourne.
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
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}