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
              <a href="https://www.instagram.com/bsm_aus?igsh=MW5kaDM0NzcyMG9ndg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.195 5.012.369a6.624 6.624 0 0 0-2.394 1.559A6.624 6.624 0 0 0 1.06 4.322C.885 4.83.773 5.404.738 6.352.702 7.299.69 7.706.69 11.327s.013 4.028.048 4.975c.035.948.147 1.522.321 2.03a6.624 6.624 0 0 0 1.559 2.394A6.624 6.624 0 0 0 4.988 22.285c.508.175 1.082.286 2.03.321.947.035 1.354.048 4.975.048s4.028-.013 4.975-.048c.948-.035 1.522-.146 2.03-.321a6.624 6.624 0 0 0 2.394-1.559 6.624 6.624 0 0 0 1.559-2.394c.175-.508.286-1.082.321-2.03.035-.947.048-1.354.048-4.975s-.013-4.028-.048-4.975c-.035-.948-.146-1.522-.321-2.03a6.624 6.624 0 0 0-1.559-2.394A6.624 6.624 0 0 0 19.018.369c-.508-.175-1.082-.286-2.03-.321C16.041.013 15.634 0 12.017 0zm0 2.164c3.604 0 4.032.014 5.456.079.658.03 1.351.143 1.789.236.449.175.901.413 1.29.802.389.389.627.841.802 1.29.093.438.206 1.131.236 1.789.065 1.424.079 1.852.079 5.456s-.014 4.032-.079 5.456c-.03.658-.143 1.351-.236 1.789-.175.449-.413.901-.802 1.29-.389.389-.841.627-1.29.802-.438.093-1.131.206-1.789.236-1.424.065-1.852.079-5.456.079s-4.032-.014-5.456-.079c-.658-.03-1.351-.143-1.789-.236a3.46 3.46 0 0 1-1.29-.802 3.46 3.46 0 0 1-.802-1.29c-.093-.438-.206-1.131-.236-1.789-.065-1.424-.079-1.852-.079-5.456s.014-4.032.079-5.456c.03-.658.143-1.351.236-1.789.175-.449.413-.901.802-1.29.389-.389.841-.627 1.29-.802.438-.093 1.131-.206 1.789-.236 1.424-.065 1.852-.079 5.456-.079zm0 3.678a5.158 5.158 0 1 0 0 10.316 5.158 5.158 0 0 0 0-10.316zm0 8.506a3.348 3.348 0 1 1 0-6.696 3.348 3.348 0 0 1 0 6.696zm6.406-8.845a1.204 1.204 0 1 0 0-2.408 1.204 1.204 0 0 0 0 2.408z"/>
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
                <Link href="/events/durgotsav" className="text-gray-300 hover:text-red-400">
                  Durgotsav | দুর্গোৎসব
                </Link>
              </li>
              <li>
                <Link href="/events/kalipuja-deepavali" className="text-gray-300 hover:text-red-400">
                  Kalipuja | কালীপূজা
                </Link>
              </li>
              <li>
                <Link href="/events/saraswati-puja" className="text-gray-300 hover:text-red-400">
                  Saraswati Puja | সরস্বতী পূজা
                </Link>
              </li>
              <li>
                <Link href="/events/pohela-boishakh" className="text-gray-300 hover:text-red-400">
                  Pohela Boishakh | পহেলা বৈশাখ
                </Link>
              </li>
              <li>
                <Link href="/events/christmas-new-year" className="text-gray-300 hover:text-red-400">
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
                <Link href="/stories" className="text-gray-300 hover:text-red-400">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/volunteering" className="text-gray-300 hover:text-red-400">
                  Volunteering
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