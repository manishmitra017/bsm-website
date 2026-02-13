'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SaraswatiArticle() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="absolute inset-0">
          <Image
            src="/saraswati-pooja-2026/20260201_122304.jpg"
            alt="Goddess Saraswati - Bengali Society of Melbourne"
            fill
            className="object-cover opacity-40"
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
                href="/stories"
                className="text-yellow-600 hover:text-yellow-700 font-medium mr-4 flex items-center"
              >
                &larr; Back to Stories
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-800 mb-4 sm:mb-6 leading-tight">
              Goddess Saraswati: Divine Knowledge
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl font-normal mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দেবী সরস্বতী: দিব্য জ্ঞানের আলো
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-yellow-700 leading-relaxed">
              The serene goddess of knowledge, music, arts, and wisdom
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story - Bilingual */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Goddess of Wisdom
              <span className="block text-yellow-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিদ্যার দেবী
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* English Column */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-semibold text-white bg-yellow-600 px-3 py-1 rounded-full">
                  English
                </span>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-5">
                <h3 className="text-xl font-bold text-yellow-800">The River of Knowledge</h3>
                <p>
                  Saraswati is one of the three great goddesses (Tridevi) of Hinduism, alongside Lakshmi and
                  Parvati. Her name comes from the Sanskrit words &quot;Sara&quot; (essence) and &quot;Swa&quot;
                  (self), meaning &quot;the essence of the self&quot;. She is also named after the sacred
                  Saraswati River, which in Vedic literature represents the flow of knowledge and wisdom.
                  Just as a river nourishes the land through which it flows, Saraswati nourishes the mind
                  with learning, creativity, and insight.
                </p>

                <h3 className="text-xl font-bold text-yellow-800">The Divine Iconography</h3>
                <p>
                  Saraswati is depicted as an ethereally beautiful goddess dressed in pure white, symbolising
                  the purity of true knowledge. She sits upon a white lotus, representing supreme reality
                  and transcendence. In her four hands, she carries the sacred symbols of her domain:
                </p>
                <ul>
                  <li><strong>The Veena</strong> — a stringed musical instrument representing the arts, music, and the harmony of life. It teaches that knowledge must be tuned to produce sweetness, not discord.</li>
                  <li><strong>The Vedas (sacred scriptures)</strong> — representing universal, divine, and eternal knowledge that transcends all boundaries of time and place.</li>
                  <li><strong>A Mala (rosary)</strong> — symbolising the power of meditation, spiritual discipline, and inner contemplation.</li>
                  <li><strong>A Kamandalu (water pot)</strong> — representing the purifying power of knowledge that cleanses the mind of ignorance.</li>
                </ul>

                <h3 className="text-xl font-bold text-yellow-800">The Swan and the Peacock</h3>
                <p>
                  Saraswati's mount is the swan (Hamsa), a bird revered in Indian mythology for its legendary
                  ability to separate milk from water — symbolising the discrimination between truth and
                  falsehood, the essential from the superficial. This teaches us that true wisdom lies not
                  in accumulating information, but in the ability to discern what is meaningful. She is
                  sometimes also associated with the peacock, which represents the colourful beauty of the arts.
                </p>

                <h3 className="text-xl font-bold text-yellow-800">Beyond Religion: A Universal Symbol</h3>
                <p>
                  Saraswati transcends religious boundaries. She is worshipped across Hinduism, Buddhism,
                  and Jainism as the patron of education, arts, and intellectual pursuit. In an age where
                  knowledge is humanity's greatest asset, Saraswati represents the eternal aspiration for
                  learning, creativity, and the illumination of the mind. She reminds us that true wealth
                  is not material but intellectual and spiritual — and that this wealth, unlike material
                  possessions, grows when shared.
                </p>
              </div>
            </motion.div>

            {/* Bengali Column */}
            <motion.div
              className="bg-yellow-50 rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-semibold text-white bg-orange-600 px-3 py-1 rounded-full" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বাংলা
                </span>
              </div>
              <div className="prose prose-lg text-gray-800 space-y-5" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                <h3 className="text-xl font-bold text-yellow-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>জ্ঞানের নদী</h3>
                <p>
                  সরস্বতী হিন্দুধর্মের তিন মহান দেবী (ত্রিদেবী) — লক্ষ্মী ও পার্বতীর পাশাপাশি — একজন।
                  তাঁর নাম এসেছে সংস্কৃত শব্দ "সার" (সারাংশ) এবং "স্ব" (নিজ) থেকে, যার অর্থ
                  "আত্মার সারাংশ"। তিনি পবিত্র সরস্বতী নদীর নামেও পরিচিত, যা বৈদিক সাহিত্যে জ্ঞান ও
                  প্রজ্ঞার প্রবাহকে উপস্থাপন করে। যেমন একটি নদী তার পথের ভূমিকে সিঞ্চিত করে, তেমনি
                  সরস্বতী শিক্ষা, সৃজনশীলতা ও অন্তর্দৃষ্টি দিয়ে মনকে পুষ্ট করেন।
                </p>

                <h3 className="text-xl font-bold text-yellow-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>দিব্য মূর্তিতত্ত্ব</h3>
                <p>
                  সরস্বতীকে অলৌকিক সুন্দরী দেবী হিসেবে চিত্রিত করা হয়, যিনি শুভ্র বসনে সজ্জিত, যা
                  প্রকৃত জ্ঞানের বিশুদ্ধতার প্রতীক। তিনি একটি শ্বেত পদ্মের উপর উপবিষ্ট, যা পরম
                  বাস্তবতা ও অতিক্রমণের প্রতিনিধিত্ব করে। তাঁর চার হাতে তিনি তাঁর ক্ষেত্রের
                  পবিত্র প্রতীকগুলি ধারণ করেন:
                </p>
                <ul>
                  <li><strong>বীণা</strong> — একটি তারযন্ত্র যা শিল্পকলা, সংগীত ও জীবনের সামঞ্জস্যের প্রতীক। এটি শেখায় যে জ্ঞানকে মধুরতা সৃষ্টি করতে সুরে বাঁধতে হবে, বিসম্বাদ নয়।</li>
                  <li><strong>বেদ (পবিত্র গ্রন্থ)</strong> — সার্বজনীন, দিব্য ও চিরন্তন জ্ঞানের প্রতিনিধিত্ব করে যা কাল ও স্থানের সকল সীমানা অতিক্রম করে।</li>
                  <li><strong>মালা (জপমালা)</strong> — ধ্যানের শক্তি, আধ্যাত্মিক শৃঙ্খলা ও অন্তর্মুখী চিন্তনের প্রতীক।</li>
                  <li><strong>কমণ্ডলু (জলপাত্র)</strong> — জ্ঞানের বিশুদ্ধকারী শক্তির প্রতিনিধিত্ব করে যা মনকে অজ্ঞানতা থেকে মুক্ত করে।</li>
                </ul>

                <h3 className="text-xl font-bold text-yellow-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>হংস ও ময়ূর</h3>
                <p>
                  সরস্বতীর বাহন হংস, একটি পাখি যা ভারতীয় পুরাণে জল থেকে দুধ আলাদা করার কিংবদন্তি
                  ক্ষমতার জন্য সম্মানিত — সত্য ও মিথ্যা, সারবস্তু ও অসার এর মধ্যে বিচক্ষণতার প্রতীক।
                  এটি আমাদের শেখায় যে প্রকৃত প্রজ্ঞা তথ্য সংগ্রহে নয়, বরং অর্থবহ বিষয় চিহ্নিত করার
                  ক্ষমতায় নিহিত। তাঁকে কখনো কখনো ময়ূরের সাথেও সম্পর্কিত করা হয়, যা শিল্পকলার
                  বর্ণময় সৌন্দর্যের প্রতীক।
                </p>

                <h3 className="text-xl font-bold text-yellow-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>ধর্মের ঊর্ধ্বে: একটি সার্বজনীন প্রতীক</h3>
                <p>
                  সরস্বতী ধর্মীয় সীমানা অতিক্রম করেন। হিন্দুধর্ম, বৌদ্ধধর্ম ও জৈনধর্ম জুড়ে তিনি
                  শিক্ষা, শিল্পকলা ও বৌদ্ধিক সাধনার পৃষ্ঠপোষক হিসেবে পূজিত হন। এই যুগে যেখানে জ্ঞান
                  মানবতার সর্বশ্রেষ্ঠ সম্পদ, সরস্বতী শিক্ষা, সৃজনশীলতা ও মনের আলোকসম্পাতের চিরন্তন
                  আকাঙ্ক্ষার প্রতিনিধিত্ব করেন। তিনি আমাদের স্মরণ করিয়ে দেন যে প্রকৃত সম্পদ বস্তুগত
                  নয় বরং বৌদ্ধিক ও আধ্যাত্মিক — এবং এই সম্পদ, বস্তুগত সম্পত্তির বিপরীতে, ভাগ
                  করলে বৃদ্ধি পায়।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Saraswati Puja in Bengali Culture
              <span className="block text-yellow-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বাঙালি সংস্কৃতিতে সরস্বতী পূজা
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-semibold text-white bg-yellow-600 px-3 py-1 rounded-full">
                  English
                </span>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Saraswati Puja is celebrated on Basant Panchami, the fifth day of the Hindu month of Magha
                  (January-February), marking the arrival of spring. It is one of the most beloved festivals
                  for Bengali students and families. On this day, children dress in yellow (the colour of
                  spring and knowledge), books and instruments are placed before the goddess, and the
                  sacred ceremony of Hatey Khori is performed.
                </p>
                <p>
                  Hatey Khori (literally &quot;chalk in hand&quot;) is a deeply moving tradition where young
                  children are introduced to the world of letters for the very first time. Seated before
                  the image of Saraswati, a child traces their first alphabet on a slate, guided by an
                  elder. This beautiful ritual symbolises the beginning of a lifelong journey of learning,
                  blessed by the Goddess of Knowledge herself.
                </p>
                <p>
                  At the Bengali Society of Melbourne, Saraswati Puja is a cherished annual celebration
                  where we honour academic excellence, nurture our children's connection to Bengali
                  culture, and celebrate the transformative power of education. It reminds our community
                  that wherever we are in the world, the pursuit of knowledge remains our highest calling.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-yellow-50 rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-semibold text-white bg-orange-600 px-3 py-1 rounded-full" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বাংলা
                </span>
              </div>
              <div className="prose prose-lg text-gray-800 space-y-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                <p>
                  সরস্বতী পূজা বসন্ত পঞ্চমীতে পালিত হয়, হিন্দু মাঘ মাসের পঞ্চম দিনে (জানুয়ারি-ফেব্রুয়ারি),
                  যা বসন্তের আগমন চিহ্নিত করে। এটি বাঙালি ছাত্রছাত্রী ও পরিবারগুলির কাছে সবচেয়ে
                  প্রিয় উৎসবগুলির মধ্যে একটি। এই দিনে শিশুরা হলুদ রঙের পোশাক পরে (বসন্ত ও জ্ঞানের রঙ),
                  বই ও বাদ্যযন্ত্র দেবীর সামনে রাখা হয়, এবং হাতে খড়ির পবিত্র অনুষ্ঠান পালিত হয়।
                </p>
                <p>
                  হাতে খড়ি (আক্ষরিক অর্থে "হাতে চক") একটি গভীরভাবে আবেগপূর্ণ ঐতিহ্য যেখানে ছোট
                  শিশুদের প্রথমবারের মতো অক্ষরের জগতের সাথে পরিচয় করানো হয়। সরস্বতীর মূর্তির সামনে
                  বসে একটি শিশু একজন বয়োজ্যেষ্ঠের পরিচালনায় স্লেটে তার প্রথম বর্ণ লেখে। এই সুন্দর
                  আচার-অনুষ্ঠান আজীবন শিক্ষার যাত্রার সূচনার প্রতীক, স্বয়ং বিদ্যার দেবীর আশীর্বাদে।
                </p>
                <p>
                  বেঙ্গলি সোসাইটি অফ মেলবোর্নে সরস্বতী পূজা একটি লালিত বার্ষিক উদযাপন যেখানে আমরা
                  শিক্ষাগত শ্রেষ্ঠত্বকে সম্মান করি, আমাদের সন্তানদের বাঙালি সংস্কৃতির সাথে সংযোগ
                  লালন করি এবং শিক্ষার রূপান্তরকারী শক্তি উদযাপন করি। এটি আমাদের সম্প্রদায়কে স্মরণ
                  করিয়ে দেয় যে আমরা পৃথিবীর যেখানেই থাকি না কেন, জ্ঞানের সাধনা আমাদের সর্বোচ্চ আহ্বান।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Saraswati Puja with BSM
              <span className="block text-yellow-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিএসএমের সাথে সরস্বতী পূজা উপভোগ করুন
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events/saraswati-puja"
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-50 transition-colors inline-block"
              >
                View Saraswati Puja Event
              </Link>
              <Link
                href="/stories"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors inline-block"
              >
                More Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
