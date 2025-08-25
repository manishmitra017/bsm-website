'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '7d4e4c8b-e886-49df-ba29-d859ddcc7e55')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('interest', formData.interest)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', 'New Contact Form Submission - Bengali Society of Melbourne')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interest: ''
        })
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.')
      }
    } catch {
      setSubmitMessage('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/PA094485-scaled.jpg"
            alt="Contact Bengali Society of Melbourne"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight">
              Contact Us
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                যোগাযোগ করুন
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              Get in touch with Bengali Society of Melbourne for events, membership, or community inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                  >
                    <option value="">Select your interest</option>
                    <option value="membership">Membership</option>
                    <option value="events">Events</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="donations">Donations</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              {/* Leadership Contact */}
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">AS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Anup Singha</h3>
                      <p className="text-red-600 font-medium">President | সভাপতি</p>
                      <a href="tel:0403617375" className="text-gray-600 hover:text-red-600 transition-colors">
                        📞 0403 617 375
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">PB</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Pabitra Barman</h3>
                      <p className="text-orange-600 font-medium">Vice President | সহ-সভাপতি</p>
                      <a href="tel:0413406344" className="text-gray-600 hover:text-orange-600 transition-colors">
                        📞 0413 406 344
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Jony Saha</h3>
                      <p className="text-green-600 font-medium">General Secretary | সাধারণ সম্পাদক</p>
                      <a href="tel:0450801113" className="text-gray-600 hover:text-green-600 transition-colors">
                        📞 0450 801 113
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">TB</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Tapas Barman</h3>
                      <p className="text-blue-600 font-medium">Public Relation Officer | জনসংযোগ কর্মকর্তা</p>
                      <a href="tel:0401513800" className="text-gray-600 hover:text-blue-600 transition-colors">
                        📞 0401 513 800
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Contact */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">General Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-600 text-xl">✉️</span>
                    <a href="mailto:info@bsm.org.au" className="text-gray-600 hover:text-red-600 transition-colors">
                      info@bsm.org.au
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-600 text-xl">🌐</span>
                    <a href="https://bsm.org.au" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                      www.bsm.org.au
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-600 text-xl">📍</span>
                    <span className="text-gray-600">Melbourne, Victoria, Australia</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/bsm2022" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-2">Stay updated with our events and community news</p>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/membership" className="block text-red-600 hover:text-red-700 transition-colors">
                    → Join Our Community
                  </Link>
                  <Link href="/events" className="block text-red-600 hover:text-red-700 transition-colors">
                    → Upcoming Events
                  </Link>
                  <Link href="/donation" className="block text-red-600 hover:text-red-700 transition-colors">
                    → Support BSM
                  </Link>
                  <Link href="/gallery" className="block text-red-600 hover:text-red-700 transition-colors">
                    → Photo Gallery
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}