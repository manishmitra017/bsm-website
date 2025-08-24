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
        <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/bsm-logo.png"
                alt="Bengali Society of Melbourne"
                width={80}
                height={80}
                className="w-auto h-14 sm:h-16 lg:h-20"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-lg lg:text-xl font-bold text-gray-800">
                  Bengali Society of Melbourne
                </span>
                <span className="text-xs text-gray-600 hidden sm:block" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বেঙ্গলি সোসাইটি অফ মেলবোর্ন
                </span>
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center space-x-6">
              {[
                { href: '/about', label: 'About BSM' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/volunteering', label: 'Volunteering' },
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
                    className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-2 mr-4">
                <a href="https://www.facebook.com/bsm2022" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors p-1">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/membership" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-xs lg:text-sm font-medium hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
                href="/volunteering" 
                className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-3 py-3 text-base font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Volunteering
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
                  href="tel:0413406344" 
                  className="block bg-orange-100 text-orange-600 px-3 py-2 rounded-md text-center font-semibold hover:bg-orange-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  📱 VP: 0413 406 344
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
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}