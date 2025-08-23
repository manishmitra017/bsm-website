'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/communityphotos/20221008_131557-scaled.jpg"
            alt="Bengali Society of Melbourne Community"
            fill
            className="object-cover opacity-40"
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
              About Bengali Society 
              <span className="block text-orange-600">
                of Melbourne
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed mb-4">
              Melbourne's premier Bengali cultural organization since 2012, preserving our rich heritage 
              and connecting the Bengali community across Victoria.
            </p>
            <p className="text-orange-600 font-medium" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              বেঙ্গলি সোসাইটি অফ মেলবোর্ন - ২০১২ সাল থেকে
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story | আমাদের গল্প
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Bengali Society of Melbourne (BSM), a not-for-profit organisation, is a platform of Bengali community 
                mostly from the sub-continent. Since its inception in 2012, we set forth with the aim to make our 
                newer generations familiar with our rich cultural heritage.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                At the same time, we always want to make BSM an integral part of the multicultural communities of Victoria. 
                With a motto 'to encourage cultural diversity as well as to take pride in own culture' we have been 
                successfully holding several community events every year.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center bg-red-50 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2">12+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Years Serving</div>
                </div>
                <div className="text-center bg-red-50 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1 sm:mb-2">1000+</div>
                  <div className="text-gray-700 text-sm sm:text-base">Community Members</div>
                </div>
              </div>

              <Link 
                href="/membership" 
                className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors text-center block sm:inline-block"
              >
                Join Our Community
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/bsmpooja/2-scaled.jpg"
                    alt="Bengali Society of Melbourne Cultural Event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
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
              Our Mission & Values | আমাদের লক্ষ্য ও মূল্যবোধ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to preserving Bengali culture while embracing the multicultural spirit of Australia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Preservation',
                titleBengali: 'সাংস্কৃতিক রক্ষণাবেক্ষণ',
                icon: '🏛️',
                description: 'Preserving and promoting Bengali traditions, language, and customs for future generations through festivals and cultural programs.'
              },
              {
                title: 'Community Building',
                titleBengali: 'কমিউনিটি গঠন',
                icon: '🤝',
                description: 'Creating a strong, supportive network of Bengali families in Melbourne, fostering friendships and cultural connections.'
              },
              {
                title: 'Multicultural Integration',
                titleBengali: 'বহুসাংস্কৃতিক একীকরণ',
                icon: '🌏',
                description: 'Being an integral part of Victoria\'s multicultural community while celebrating our unique Bengali identity and heritage.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-orange-600 font-medium mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {value.titleBengali}
                </p>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leadership */}
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
              Our Leadership | আমাদের নেতৃত্ব
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated community leaders working together to strengthen our Bengali cultural presence in Melbourne.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Anup Singha',
                role: 'President',
                roleBengali: 'সভাপতি',
                phone: '0403 617 375',
                description: 'Leading BSM with vision and dedication to preserve Bengali culture in Melbourne.'
              },
              {
                name: 'Pabitra Barman',
                role: 'Vice President',
                roleBengali: 'সহ-সভাপতি',
                phone: '0413 406 344',
                description: 'Supporting community initiatives and helping organize cultural events and programs.'
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-red-600 font-semibold mb-1">{leader.role}</p>
                <p className="text-orange-600 font-medium mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {leader.roleBengali}
                </p>
                <p className="text-gray-600 mb-4">{leader.description}</p>
                <a 
                  href={`tel:${leader.phone}`} 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  📞 {leader.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BSM Executive Committee 2025-2027 */}
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
              BSM Executive Committee
              <span className="block text-red-600 text-2xl mt-2">2025-2027</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
              বিএসএম কার্যনির্বাহী কমিটি ২০২৫-২০২৭
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: 'Anindita Sarkar',
                photo: '/members/anindita-279x300.jpg',
                position: 'Executive Member'
              },
              {
                name: 'Anup Singha',
                photo: '/members/Anup-Singha-279x300.jpg',
                position: 'President'
              },
              {
                name: 'Jony Saha',
                photo: '/members/js1-300x289.jpg',
                position: 'General Secretary'
              },
              {
                name: 'Mihir Das',
                photo: '/members/mihirdas-266x300.jpeg',
                position: 'Executive Member'
              },
              {
                name: 'Pabitra Barman',
                photo: '/members/Untitled-5-279x300.jpg',
                position: 'Vice President'
              },
              {
                name: 'Pradip Saha',
                photo: '/members/pradip-saha.jpg',
                position: 'Executive Member'
              },
              {
                name: 'Ratul Biswas',
                photo: '/members/ratul-biswas.jpg',
                position: 'Executive Member'
              },
              {
                name: 'Subhagata Saha',
                photo: '/members/Subhagata-Saha_BSM-279x300.jpg',
                position: 'Executive Member'
              },
              {
                name: 'Tapas Barman',
                photo: '/members/kartik-300x235.jpg',
                position: 'Public Relation Officer'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium text-sm">{member.position}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dedicated Executive Committee members work tirelessly to preserve Bengali culture, 
              organize community events, and strengthen the bonds within Melbourne's Bengali community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Community Activities | কমিউনিটি কার্যক্রম
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Beyond cultural festivals, we actively engage in community service and social initiatives.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Blood Donation', 
                nameBengali: 'রক্তদান', 
                icon: '❤️', 
                description: 'Regular blood donation drives to support the Australian healthcare system.' 
              },
              { 
                name: 'Tree Plantation', 
                nameBengali: 'বৃক্ষরোপণ', 
                icon: '🌱', 
                description: 'Environmental initiatives including tree planting and sustainability programs.' 
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{activity.icon}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{activity.name}</h3>
                <p className="text-red-200 font-medium mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  {activity.nameBengali}
                </p>
                <p className="text-red-100">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Bengali Community | আমাদের বাঙালি কমিউনিটিতে যোগ দিন
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of Melbourne's vibrant Bengali community. Experience traditional festivals, 
              cultural events, and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/membership" 
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Become a Member
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors inline-block"
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