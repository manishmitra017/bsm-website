import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-red-400 mb-2">
              Bengali Society of Melbourne
            </h3>
            <p className="text-orange-400 mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              বেঙ্গলি সোসাইটি অফ মেলবোর্ন
            </p>
            <p className="text-gray-300 mb-4 max-w-md">
              Melbourne's premier Bengali cultural organization since 2012, dedicated to preserving our rich heritage 
              and connecting the Bengali community across Victoria. Celebrating traditional festivals and cultural diversity.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/bsm2022" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 President: <a href="tel:0403617375" className="hover:text-red-400">Anup Singha - 0403 617 375</a></p>
              <p>📱 Vice President: <a href="tel:0413406344" className="hover:text-red-400">Pabitra Barman - 0413 406 344</a></p>
              <p>✉️ Email: <a href="mailto:info@bsm.org.au" className="hover:text-red-400">info@bsm.org.au</a></p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Festivals</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-red-400">
                  Durgotsav | দুর্গোৎসব
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-red-400">
                  Kalipuja | কালীপূজা
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-red-400">
                  Saraswati Puja | সরস্বতী পূজা
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-red-400">
                  Pohela Boishakh | পহেলা বৈশাখ
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-red-400">
                  Christmas & New Year
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-400">
                  About BSM
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-red-400">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-red-400">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/donation" className="text-gray-300 hover:text-red-400">
                  Support BSM
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2012-2025 Bengali Society of Melbourne (BSM). All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            A not-for-profit multicultural organization in Victoria, Australia
          </p>
        </div>
      </div>
    </footer>
  )
}