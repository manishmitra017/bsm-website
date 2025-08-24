'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Membership() {
  const [membershipType, setMembershipType] = useState('single')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20221008_115837-scaled.jpg"
            alt="Bengali Society of Melbourne - Join Our Community"
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
              Membership
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সদস্যতা
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              Join Melbourne's premier Bengali cultural community and be part of preserving our rich heritage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Types */}
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
              Membership Types
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সদস্যতার ধরন
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="bg-red-50 rounded-xl p-8 border-2 border-red-200 hover:border-red-400 transition-colors"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">Single Membership</h3>
                <p className="text-red-600 font-medium mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  একক সদস্যতা
                </p>
                <div className="text-4xl font-bold text-red-600 mb-4">$160</div>
                <p className="text-gray-600 mb-4">Annual membership for one adult only</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm font-medium">
                    Single membership is strictly for one adult only
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200 hover:border-orange-400 transition-colors"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-2">Family Membership</h3>
                <p className="text-orange-600 font-medium mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  পারিবারিক সদস্যতা
                </p>
                <div className="text-4xl font-bold text-orange-600 mb-4">$300</div>
                <p className="text-gray-600 mb-4">Annual membership for entire family</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm font-medium">
                    Best value for families with multiple members
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
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
              Membership Benefits
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                সদস্যতার সুবিধা
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join BSM and enjoy exclusive access to our cultural events, community programs, and Bengali heritage preservation initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Exclusive Event Access',
                titleBengali: 'বিশেষ অনুষ্ঠানের সুবিধা',
                description: 'Priority access to all BSM festivals and cultural programs including Durga Puja, Kali Puja, and other traditional celebrations'
              },
              {
                icon: '💰',
                title: 'Discounted Rates',
                titleBengali: 'ছাড়ের হার',
                description: 'Special member pricing for event tickets, workshops, and community programs throughout the year'
              },
              {
                icon: '🗳️',
                title: 'Voting Rights',
                titleBengali: 'ভোটাধিকার',
                description: 'Participate in BSM elections and have a say in community decisions and organizational direction'
              },
              {
                icon: '📧',
                title: 'Priority Updates',
                titleBengali: 'অগ্রাধিকার আপডেট',
                description: 'First to know about upcoming events, community news, and important announcements via email'
              },
              {
                icon: '🤝',
                title: 'Networking Opportunities',
                titleBengali: 'নেটওয়ার্কিং সুবিধা',
                description: 'Connect with Melbourne\'s Bengali community, build friendships, and expand your social and professional network'
              },
              {
                icon: '🎨',
                title: 'Cultural Programs',
                titleBengali: 'সাংস্কৃতিক কর্মসূচি',
                description: 'Participate in Bengali language classes, dance workshops, music programs, and cultural training initiatives'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                <p className="text-red-600 font-medium mb-3 text-center text-sm" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {benefit.titleBengali}
                </p>
                <p className="text-gray-600 text-sm text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
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
              Join BSM Today
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আজই BSM-এ যোগ দিন
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete the form below to become a member of Melbourne's premier Bengali cultural organization
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                {/* Membership Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select Membership Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        membershipType === 'single' 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-300 bg-white hover:border-red-300'
                      }`}
                      onClick={() => setMembershipType('single')}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Single Membership</h4>
                          <p className="text-sm text-gray-600">$160 per year</p>
                        </div>
                        <input
                          type="radio"
                          name="membershipType"
                          value="single"
                          checked={membershipType === 'single'}
                          onChange={() => setMembershipType('single')}
                          className="h-4 w-4 text-red-600"
                        />
                      </div>
                    </div>
                    <div
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        membershipType === 'family' 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-300 bg-white hover:border-orange-300'
                      }`}
                      onClick={() => setMembershipType('family')}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Family Membership</h4>
                          <p className="text-sm text-gray-600">$300 per year</p>
                        </div>
                        <input
                          type="radio"
                          name="membershipType"
                          value="family"
                          checked={membershipType === 'family'}
                          onChange={() => setMembershipType('family')}
                          className="h-4 w-4 text-orange-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email ID *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your complete postal address"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone/Mobile *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your phone or mobile number"
                  />
                </div>

                {membershipType === 'family' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="adultMembers" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Adult Family Members *
                      </label>
                      <input
                        type="number"
                        id="adultMembers"
                        name="adultMembers"
                        min="1"
                        required={membershipType === 'family'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Number of adults"
                      />
                    </div>
                    <div>
                      <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Children
                      </label>
                      <input
                        type="number"
                        id="children"
                        name="children"
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Number of children (optional)"
                      />
                    </div>
                  </div>
                )}

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-800 mb-4">Payment Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Bank Details:</p>
                      <p className="font-medium">BSB: <span className="text-red-600">033070</span></p>
                      <p className="font-medium">Account: <span className="text-red-600">371537</span></p>
                      <p className="font-medium">Name: Bengali Society Of Melbourne</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Membership Fee:</p>
                      <p className="text-2xl font-bold text-red-600">
                        ${membershipType === 'single' ? '160' : '300'}
                      </p>
                      <p className="text-sm text-gray-600">Annual membership</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-yellow-800 text-sm">
                      💡 Please transfer the membership fee to the above bank account and submit this form. 
                      Include your full name in the transfer reference.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Submit Membership Application
                  </button>
                  <button
                    type="reset"
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BSM Address */}
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
              Visit Us
              <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের সাথে দেখা করুন
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">🏢</span>
                  <div>
                    <p className="font-semibold text-gray-900">Bengali Society of Melbourne</p>
                    <p className="text-gray-600">Melbourne, Victoria, Australia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">President</p>
                    <p className="text-gray-600">Anup Singha: <a href="tel:0403617375" className="text-red-600 hover:underline">0403 617 375</a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Vice President</p>
                    <p className="text-gray-600">Pabitra Barman: <a href="tel:0413406344" className="text-red-600 hover:underline">0413 406 344</a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">
                      <a href="mailto:info@bsm.org.au" className="text-red-600 hover:underline">info@bsm.org.au</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">🌐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <p className="text-gray-600">
                      <a href="https://bsm.org.au" className="text-red-600 hover:underline">bsm.org.au</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 text-xl">📘</span>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-gray-600">
                      <a href="https://www.facebook.com/bsm2022" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                        facebook.com/bsm2022
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="mb-2">🗺️</p>
                  <p className="text-sm">
                    Google Maps integration available<br />
                    with API key configuration
                  </p>
                  <p className="text-xs mt-2">
                    Located in Melbourne, Victoria
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Configure <code className="bg-gray-100 px-2 py-1 rounded text-xs">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in .env.local to enable map display
                </p>
              </div>
            </motion.div>
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
              Ready to Join Our Community?
              <span className="block text-red-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের কমিউনিটিতে যোগ দিতে প্রস্তুত?
              </span>
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Experience the warmth of Bengali culture in Melbourne. Join thousands of community members celebrating our heritage together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#membership-form" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                Apply for Membership
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-block"
              >
                Contact Us First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}