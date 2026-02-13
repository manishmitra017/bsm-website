'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 w-full">
          <motion.div 
            className="flex-shrink-0 flex items-center min-w-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/bsm-logo.png"
                alt="Bengali Society of Melbourne"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm lg:text-lg font-bold text-gray-800 leading-tight truncate">
                  Bengali Society of Melbourne
                </span>
                <span className="text-xs text-gray-600 leading-tight truncate" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বেঙ্গলি সোসাইটি অফ মেলবোর্ন
                </span>
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex flex-1 justify-end max-w-none">
            <div className="flex items-center space-x-3 lg:space-x-4">
              {[
                { href: '/about', label: 'About BSM' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/stories', label: 'Stories' },
                { href: '/volunteering', label: 'Volunteering' },
                { href: '/sponsorship', label: 'Sponsorship' },
                { href: '/membership', label: 'Membership' },
                { href: '/donation', label: 'Donation' },
                { href: '/contact', label: 'Contact' }
              ].map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:text-red-600 px-2 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-1">
                <a href="https://www.facebook.com/bsm2022" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors p-1">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/bsm_aus?igsh=MW5kaDM0NzcyMG9ndg==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors p-1">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.195 5.012.369a6.624 6.624 0 0 0-2.394 1.559A6.624 6.624 0 0 0 1.06 4.322C.885 4.83.773 5.404.738 6.352.702 7.299.69 7.706.69 11.327s.013 4.028.048 4.975c.035.948.147 1.522.321 2.03a6.624 6.624 0 0 0 1.559 2.394A6.624 6.624 0 0 0 4.988 22.285c.508.175 1.082.286 2.03.321.947.035 1.354.048 4.975.048s4.028-.013 4.975-.048c.948-.035 1.522-.146 2.03-.321a6.624 6.624 0 0 0 2.394-1.559 6.624 6.624 0 0 0 1.559-2.394c.175-.508.286-1.082.321-2.03.035-.947.048-1.354.048-4.975s-.013-4.028-.048-4.975c-.035-.948-.146-1.522-.321-2.03a6.624 6.624 0 0 0-1.559-2.394A6.624 6.624 0 0 0 19.018.369c-.508-.175-1.082-.286-2.03-.321C16.041.013 15.634 0 12.017 0zm0 2.164c3.604 0 4.032.014 5.456.079.658.03 1.351.143 1.789.236.449.175.901.413 1.29.802.389.389.627.841.802 1.29.093.438.206 1.131.236 1.789.065 1.424.079 1.852.079 5.456s-.014 4.032-.079 5.456c-.03.658-.143 1.351-.236 1.789-.175.449-.413.901-.802 1.29-.389.389-.841.627-1.29.802-.438.093-1.131.206-1.789.236-1.424.065-1.852.079-5.456.079s-4.032-.014-5.456-.079c-.658-.03-1.351-.143-1.789-.236a3.46 3.46 0 0 1-1.29-.802 3.46 3.46 0 0 1-.802-1.29c-.093-.438-.206-1.131-.236-1.789-.065-1.424-.079-1.852-.079-5.456s.014-4.032.079-5.456c.03-.658.143-1.351.236-1.789.175-.449.413-.901.802-1.29.389-.389.841-.627 1.29-.802.438-.093 1.131-.206 1.789-.236 1.424-.065 1.852-.079 5.456-.079zm0 3.678a5.158 5.158 0 1 0 0 10.316 5.158 5.158 0 0 0 0-10.316zm0 8.506a3.348 3.348 0 1 1 0-6.696 3.348 3.348 0 0 1 0 6.696zm6.406-8.845a1.204 1.204 0 1 0 0-2.408 1.204 1.204 0 0 0 0 2.408z"/>
                  </svg>
                </a>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Link 
                  href="/membership" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-medium hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap inline-block"
                >
                  Join Us
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About BSM
              </Link>
              <Link 
                href="/events" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/gallery" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/stories"
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </Link>
              <Link
                href="/volunteering"
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Volunteering
              </Link>
              <Link 
                href="/sponsorship" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sponsorship
              </Link>
              <Link 
                href="/membership" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Membership
              </Link>
              <Link 
                href="/donation" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Donation
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/membership" 
                className="block bg-red-600 text-white px-3 py-3 rounded-md text-base font-medium hover:bg-red-700 transition-colors mx-3 my-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
              <div className="px-3 py-2 space-y-2">
                <a 
                  href="tel:0403617375" 
                  className="block bg-red-100 text-red-600 px-3 py-2 rounded-md text-center font-semibold hover:bg-red-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  📞 President: 0403 617 375
                </a>
                <a 
                  href="tel:0450801113" 
                  className="block bg-orange-100 text-orange-600 px-3 py-2 rounded-md text-center font-semibold hover:bg-orange-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  📱 General Secretary: 0450 801 113
                </a>
                <a 
                  href="mailto:info@bsm.org.au" 
                  className="block bg-blue-100 text-blue-600 px-3 py-2 rounded-md text-center font-semibold hover:bg-blue-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ✉️ info@bsm.org.au
                </a>
                
                {/* Mobile Social Media Links */}
                <div className="flex justify-center space-x-6 py-4 border-t border-gray-200 mt-4">
                  <a href="https://www.facebook.com/bsm2022" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/bsm_aus?igsh=MW5kaDM0NzcyMG9ndg==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.195 5.012.369a6.624 6.624 0 0 0-2.394 1.559A6.624 6.624 0 0 0 1.06 4.322C.885 4.83.773 5.404.738 6.352.702 7.299.69 7.706.69 11.327s.013 4.028.048 4.975c.035.948.147 1.522.321 2.03a6.624 6.624 0 0 0 1.559 2.394A6.624 6.624 0 0 0 4.988 22.285c.508.175 1.082.286 2.03.321.947.035 1.354.048 4.975.048s4.028-.013 4.975-.048c.948-.035 1.522-.146 2.03-.321a6.624 6.624 0 0 0 2.394-1.559 6.624 6.624 0 0 0 1.559-2.394c.175-.508.286-1.082.321-2.03.035-.947.048-1.354.048-4.975s-.013-4.028-.048-4.975c-.035-.948-.146-1.522-.321-2.03a6.624 6.624 0 0 0-1.559-2.394A6.624 6.624 0 0 0 19.018.369c-.508-.175-1.082-.286-2.03-.321C16.041.013 15.634 0 12.017 0zm0 2.164c3.604 0 4.032.014 5.456.079.658.03 1.351.143 1.789.236.449.175.901.413 1.29.802.389.389.627.841.802 1.29.093.438.206 1.131.236 1.789.065 1.424.079 1.852.079 5.456s-.014 4.032-.079 5.456c-.03.658-.143 1.351-.236 1.789-.175.449-.413.901-.802 1.29-.389.389-.841.627-1.29.802-.438.093-1.131.206-1.789.236-1.424.065-1.852.079-5.456.079s-4.032-.014-5.456-.079c-.658-.03-1.351-.143-1.789-.236a3.46 3.46 0 0 1-1.29-.802 3.46 3.46 0 0 1-.802-1.29c-.093-.438-.206-1.131-.236-1.789-.065-1.424-.079-1.852-.079-5.456s.014-4.032.079-5.456c.03-.658.143-1.351.236-1.789.175-.449.413-.901.802-1.29.389-.389.841-.627 1.29-.802.438-.093 1.131-.206 1.789-.236 1.424-.065 1.852-.079 5.456-.079zm0 3.678a5.158 5.158 0 1 0 0 10.316 5.158 5.158 0 0 0 0-10.316zm0 8.506a3.348 3.348 0 1 1 0-6.696 3.348 3.348 0 0 1 0 6.696zm6.406-8.845a1.204 1.204 0 1 0 0-2.408 1.204 1.204 0 0 0 0 2.408z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}