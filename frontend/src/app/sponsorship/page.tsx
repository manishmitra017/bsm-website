'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SponsorshipPage() {
  const [selectedTier, setSelectedTier] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sponsorshipTier: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleTierSelect = (tier: string) => {
    setSelectedTier(tier)
    setFormData({ ...formData, sponsorshipTier: tier })
    setShowForm(true)
    setTimeout(() => {
      document.getElementById('sponsorship-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '6a108641-d443-4d19-ba6a-a210acdc4567')
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('sponsorshipTier', formData.sponsorshipTier)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', `New Sponsorship Application - ${formData.fullName} (${formData.sponsorshipTier})`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your sponsorship application! We appreciate your support and will contact you soon to discuss partnership details.')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          sponsorshipTier: '',
          message: ''
        })
        setSelectedTier('')
        setShowForm(false)
      } else {
        setSubmitMessage('There was an error submitting your application. Please try again.')
      }
    } catch {
      setSubmitMessage('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  const sponsorshipTiers = [
    {
      tier: 'Platinum Sponsor',
      tierBengali: 'প্ল্যাটিনাম স্পনসর',
      amount: '$2,000+',
      benefits: [
        'Logo prominently displayed at all major events',
        'Recognition in all promotional materials',
        'VIP seating at festivals',
        'Social media promotion across all platforms',
        'Newsletter feature article',
        'Website homepage logo placement'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      tier: 'Gold Sponsor',
      tierBengali: 'গোল্ড স্পনসর',
      amount: '$1,000+',
      benefits: [
        'Logo displayed at sponsored events',
        'Recognition in event programs',
        'Social media mentions',
        'Newsletter acknowledgment',
        'Website sponsor page listing'
      ],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      tier: 'Silver Sponsor',
      tierBengali: 'সিলভার স্পনসর',
      amount: '$500+',
      benefits: [
        'Logo in event materials',
        'Social media recognition',
        'Newsletter mention',
        'Website listing'
      ],
      color: 'from-gray-300 to-gray-500'
    },
    {
      tier: 'Bronze Sponsor',
      tierBengali: 'ব্রোঞ্জ স্পনসর',
      amount: '$200+',
      benefits: [
        'Name in event programs',
        'Social media thank you',
        'Newsletter recognition'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ]

  const sponsorshipOpportunities = [
    {
      event: 'Durga Puja Festival',
      eventBengali: 'দুর্গা পূজা উৎসব',
      description: 'Our largest annual celebration attracting 1000+ attendees over 3 days',
      impact: 'Cultural preservation, community bonding, youth engagement',
      image: '/durgapooja-2023/2-scaled.jpg'
    },
    {
      event: 'Kali Puja & Deepavali',
      eventBengali: 'কালী পূজা ও দীপাবলি',
      description: 'Festival of lights celebrating divine feminine power and prosperity',
      impact: 'Interfaith dialogue, cultural education, community unity',
      image: '/kalipooja-2023/1-min.jpg'
    },
    {
      event: 'Saraswati Puja',
      eventBengali: 'সরস্বতী পূজা',
      description: 'Celebration of knowledge, arts, and learning for all ages',
      impact: 'Educational promotion, youth development, cultural learning',
      image: '/saraswatipooja/484723908_674928888396859_4255503182297146288_n.jpg'
    },
    {
      event: 'Pohela Boishakh',
      eventBengali: 'পহেলা বৈশাখ',
      description: 'Bengali New Year celebration with cultural performances and food',
      impact: 'New generation cultural connection, traditional arts promotion',
      image: '/pahelaboishak/484347968_674863851736696_6373890908421337640_n.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/BSM-Banner-Pull-Up-2023-Facebook-Cover.jpg"
            alt="BSM Community Sponsorship"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partner With BSM
              <span className="block text-2xl md:text-3xl font-normal mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিএসএম-এর সাথে অংশীদার হন
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Support Melbourne's vibrant Bengali community and help preserve our rich cultural heritage for future generations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bsm.org.au?subject=Sponsorship%20Inquiry"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-colors shadow-xl"
              >
                Become a Sponsor | স্পনসর হন
              </a>
              <a
                href="tel:0403617375"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                📞 Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Supporting Our Community
              <span className="block text-xl md:text-2xl font-normal mt-2 text-red-600" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                আমাদের কমিউনিটিকে সহায়তা করা
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/sponsorship/sponsorship.jpg"
              alt="BSM Community Sponsorship - Supporting Bengali Culture in Melbourne"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why Sponsorship Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Sponsorship is Vital for Community Events
              <span className="block text-xl md:text-2xl font-normal mt-2 text-red-600" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কমিউনিটি ইভেন্টের জন্য স্পনসরশিপ কেন গুরুত্বপূর্ণ
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏛️',
                title: 'Cultural Preservation',
                titleBengali: 'সাংস্কৃতিক সংরক্ষণ',
                description: 'Without sponsorship support, many traditional festivals and cultural practices would be lost. Sponsors help us maintain authentic celebrations, traditional music, dance, and rituals that connect generations.',
                impact: 'Preserving 1000+ years of Bengali heritage'
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Community Building',
                titleBengali: 'কমিউনিটি গঠন',
                description: 'Events bring people together, but organizing them requires significant resources. Sponsorship enables us to create spaces where families connect, children learn about their roots, and newcomers find belonging.',
                impact: 'Connecting 1000+ community members annually'
              },
              {
                icon: '🎓',
                title: 'Youth Development',
                titleBengali: 'যুব উন্নয়ন',
                description: 'Cultural events provide platforms for young people to develop leadership skills, artistic talents, and cultural identity. Sponsorship funds workshops, performances, and educational programs.',
                impact: 'Engaging 200+ youth in cultural activities'
              },
              {
                icon: '🤝',
                title: 'Integration & Harmony',
                titleBengali: 'একীকরণ ও সম্প্রীতি',
                description: 'Our festivals welcome people from all backgrounds, promoting multicultural understanding. Sponsorship helps us create inclusive events that strengthen Australia\'s diverse society.',
                impact: 'Building bridges across communities'
              },
              {
                icon: '💰',
                title: 'Financial Reality',
                titleBengali: 'আর্থিক বাস্তবতা',
                description: 'Event costs include venue rental, decorations, food, security, insurance, and performer fees. Without sponsorship, ticket prices would be unaffordable for many families, excluding community members.',
                impact: 'Making events accessible to all income levels'
              },
              {
                icon: '🌟',
                title: 'Quality & Safety',
                titleBengali: 'মান ও নিরাপত্তা',
                description: 'Proper funding ensures professional sound systems, adequate security, quality food safety, and comfortable facilities. Sponsorship helps us maintain high standards that keep everyone safe and engaged.',
                impact: 'Ensuring professional-grade celebrations'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-red-600 font-medium mb-3" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {reason.titleBengali}
                </p>
                <p className="text-gray-600 mb-4">{reason.description}</p>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-blue-800 font-semibold text-sm">{reason.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Event Sponsorship Opportunities
              <span className="block text-xl md:text-2xl font-normal mt-2 text-red-600" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                ইভেন্ট স্পনসরশিপ সুযোগ
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Support specific festivals and cultural celebrations throughout the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsorshipOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.event}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{opportunity.event}</h3>
                    <p className="text-sm opacity-90" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {opportunity.eventBengali}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">Impact:</span>
                      <p className="text-gray-700">{opportunity.impact}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        handleTierSelect(`${opportunity.event} Sponsorship`)
                        setFormData({ ...formData, message: `I am interested in sponsoring ${opportunity.event}. Please contact me with more details about sponsorship opportunities for this event.` })
                      }}
                      className="text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      Sponsor This Event →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sponsorship Tiers
              <span className="block text-xl md:text-2xl font-normal mt-2 text-red-600" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                স্পনসরশিপ স্তর
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the level of support that works best for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.tier}</h3>
                    <p className="text-red-600 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                      {tier.tierBengali}
                    </p>
                    <div className="text-2xl font-bold text-gray-900 mt-3">{tier.amount}</div>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm">
                        <span className="text-green-600 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button
                      onClick={() => handleTierSelect(tier.tier)}
                      className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Choose This Tier
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Application Form */}
      {showForm && (
        <section id="sponsorship-form" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sponsorship Application
                <span className="block text-red-600 text-2xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  স্পনসরশিপ আবেদন
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete the form below to apply for {selectedTier} sponsorship
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                className="bg-gray-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="sponsorshipTier" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Sponsorship Tier *
                    </label>
                    <select
                      id="sponsorshipTier"
                      name="sponsorshipTier"
                      required
                      value={formData.sponsorshipTier}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    >
                      <option value="">Choose a sponsorship tier...</option>
                      <option value="Platinum Sponsor">Platinum Sponsor ($2,000+)</option>
                      <option value="Gold Sponsor">Gold Sponsor ($1,000+)</option>
                      <option value="Silver Sponsor">Silver Sponsor ($500+)</option>
                      <option value="Bronze Sponsor">Bronze Sponsor ($200+)</option>
                      <option value="Durga Puja Festival Sponsorship">Durga Puja Festival Sponsorship</option>
                      <option value="Kali Puja & Deepavali Sponsorship">Kali Puja & Deepavali Sponsorship</option>
                      <option value="Saraswati Puja Sponsorship">Saraswati Puja Sponsorship</option>
                      <option value="Pohela Boishakh Sponsorship">Pohela Boishakh Sponsorship</option>
                      <option value="Custom Sponsorship">Custom Sponsorship Package</option>
                    </select>
                  </div>

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
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-gray-500"
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
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-gray-500"
                        placeholder="Enter your email address"
                      />
                    </div>
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-gray-500"
                      placeholder="Enter your phone or mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-gray-500"
                      placeholder="Tell us about your organization and how you'd like to support our community..."
                    />
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="font-semibold text-red-800 mb-4">💝 Partnership with Love</h3>
                    <p className="text-red-700 text-sm mb-4">
                      Your sponsorship is more than financial support - it's a partnership built on shared values of cultural preservation, community building, and creating meaningful connections across Melbourne's diverse population.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-yellow-800 text-sm">
                        💡 After submitting this form, our team will contact you within 48 hours to discuss partnership details, benefits, and how we can work together to make a positive impact in our community.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Sponsorship Application ❤️'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false)
                        setSelectedTier('')
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          sponsorshipTier: '',
                          message: ''
                        })
                      }}
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>

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
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
              <span className="block text-xl md:text-2xl font-normal mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                পার্থক্য আনতে প্রস্তুত?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Your sponsorship helps preserve Bengali culture, supports community welfare, and creates lasting connections across Melbourne's diverse population.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bsm.org.au?subject=Sponsorship%20Partnership%20Discussion"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-50 transition-colors shadow-xl"
              >
                Let's Discuss Partnership | আলোচনা করুন
              </a>
              <a
                href="tel:0403617375"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
              >
                📞 Call 0403 617 375
              </a>
            </div>
            
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@bsm.org.au" className="hover:text-red-200 transition-colors">
                    info@bsm.org.au
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:0403617375" className="hover:text-red-200 transition-colors">
                    0403 617 375
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}