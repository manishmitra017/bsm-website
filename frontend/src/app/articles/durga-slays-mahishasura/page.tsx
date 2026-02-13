'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DurgaArticle() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0">
          <Image
            src="/Durgapooja-2025/durga-pooja.jpg"
            alt="Goddess Durga - Bengali Society of Melbourne"
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
                href="/articles"
                className="text-red-600 hover:text-red-700 font-medium mr-4 flex items-center"
              >
                &larr; Back to Articles
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 mb-4 sm:mb-6 leading-tight">
              The Legend of Durga Slaying Mahishasura
              <span className="block text-orange-600 text-2xl sm:text-3xl md:text-4xl font-normal mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                দুর্গার মহিষাসুর বধের কাহিনী
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-700 leading-relaxed">
              The epic tale of good triumphing over evil
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
              The Story
              <span className="block text-red-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কাহিনী
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
                <span className="text-sm font-semibold text-white bg-red-600 px-3 py-1 rounded-full">
                  English
                </span>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-5">
                <h3 className="text-xl font-bold text-red-800">The Tyranny of Mahishasura</h3>
                <p>
                  Long ago, the demon Mahishasura — the buffalo demon — performed severe penance to please Lord Brahma.
                  Impressed by his devotion, Brahma granted him a boon: no god or demon could ever kill him. Emboldened
                  by this near-invincibility, Mahishasura waged war against the Devas (gods) and drove them out of heaven.
                  He terrorised the three worlds — heaven, earth, and the netherworld — plunging all of creation into
                  darkness and suffering.
                </p>

                <h3 className="text-xl font-bold text-red-800">The Birth of Goddess Durga</h3>
                <p>
                  The defeated gods turned to the holy trinity — Brahma, Vishnu, and Shiva — for help. In their fury
                  at Mahishasura's atrocities, all the gods combined their divine energies. From this blazing
                  convergence of cosmic power, a radiant female form emerged — Goddess Durga, the embodiment of
                  Shakti (divine feminine energy). She was more powerful than any single deity, for she carried the
                  collective strength of all the gods within her.
                </p>

                <h3 className="text-xl font-bold text-red-800">The Ten Arms and Divine Weapons</h3>
                <p>
                  Each god bestowed upon Durga their most powerful weapon. Shiva gave her his trident (trishul),
                  Vishnu his discus (sudarshana chakra), Indra his thunderbolt (vajra), Vayu gave his bow and arrows,
                  and Himavan gifted her a magnificent lion as her mount. With ten arms, each wielding a divine weapon,
                  Durga was the ultimate warrior — beautiful yet fearsome, serene yet invincible. Her very form
                  symbolised the truth that when all righteous forces unite, no evil can withstand them.
                </p>

                <h3 className="text-xl font-bold text-red-800">The Great Battle</h3>
                <p>
                  The battle between Durga and Mahishasura raged for nine days and nine nights. The demon king
                  changed his form repeatedly — appearing as a buffalo, a lion, an elephant, and a warrior — trying
                  every trick to overpower the goddess. But Durga matched him at every turn, her divine weapons
                  countering each transformation. The earth trembled, the seas roared, and the skies blazed with
                  the fury of their combat.
                </p>

                <h3 className="text-xl font-bold text-red-800">The Victory — Vijaya Dashami</h3>
                <p>
                  On the tenth day, as Mahishasura assumed his buffalo form once more, Durga leapt upon him,
                  pinning him with her foot. She drove her trident through his chest, and the great demon fell.
                  The heavens erupted in celebration. The gods showered flowers from the sky, and the three worlds
                  rejoiced. This day of triumph is celebrated as Vijaya Dashami (Dashami meaning the tenth day),
                  the culmination of Durga Puja. It represents the eternal promise that righteousness will always
                  prevail over evil, no matter how powerful the darkness may seem.
                </p>
              </div>
            </motion.div>

            {/* Bengali Column */}
            <motion.div
              className="bg-red-50 rounded-2xl shadow-lg p-8"
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
                <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>মহিষাসুরের অত্যাচার</h3>
                <p>
                  বহু যুগ আগে, মহিষাসুর — সেই মহিষরূপী দানব — ব্রহ্মাকে সন্তুষ্ট করতে কঠোর তপস্যা করেছিল।
                  তার ভক্তিতে সন্তুষ্ট হয়ে ব্রহ্মা তাকে এক বর দিলেন: কোনো দেবতা বা দানব তাকে বধ করতে পারবে না।
                  এই প্রায়-অজেয়তার শক্তিতে উদ্ধত হয়ে মহিষাসুর দেবতাদের বিরুদ্ধে যুদ্ধ ঘোষণা করল এবং তাদের
                  স্বর্গ থেকে বিতাড়িত করল। সে ত্রিলোক — স্বর্গ, মর্ত্য ও পাতাল — জুড়ে ত্রাস সৃষ্টি করল,
                  সমগ্র সৃষ্টিকে অন্ধকার ও যন্ত্রণায় নিমজ্জিত করল।
                </p>

                <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>দেবী দুর্গার জন্ম</h3>
                <p>
                  পরাজিত দেবতারা ত্রিমূর্তি — ব্রহ্মা, বিষ্ণু ও শিবের — কাছে সাহায্য প্রার্থনা করলেন।
                  মহিষাসুরের নৃশংসতায় ক্রুদ্ধ হয়ে সকল দেবতা তাঁদের দিব্য শক্তি একত্রিত করলেন। এই জ্বলন্ত
                  মহাজাগতিক শক্তির সম্মিলন থেকে এক উজ্জ্বল নারীমূর্তি আবির্ভূত হলেন — দেবী দুর্গা, শক্তির
                  (দিব্য নারী শক্তির) মূর্ত প্রকাশ। তিনি যেকোনো একক দেবতার চেয়ে অধিক শক্তিশালী ছিলেন,
                  কারণ তিনি সকল দেবতার সম্মিলিত শক্তি বহন করছিলেন।
                </p>

                <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>দশভুজা ও দিব্য অস্ত্রসমূহ</h3>
                <p>
                  প্রতিটি দেবতা দুর্গাকে তাঁদের সবচেয়ে শক্তিশালী অস্ত্র প্রদান করলেন। শিব দিলেন তাঁর
                  ত্রিশূল, বিষ্ণু দিলেন সুদর্শন চক্র, ইন্দ্র দিলেন বজ্র, বায়ু দিলেন ধনুক ও তীর, এবং
                  হিমবান তাঁকে উপহার দিলেন এক মহিমান্বিত সিংহ তাঁর বাহন হিসেবে। দশটি বাহুতে দিব্য অস্ত্র
                  নিয়ে দুর্গা ছিলেন পরম যোদ্ধা — সুন্দরী অথচ ভয়ংকরী, শান্ত অথচ অজেয়। তাঁর রূপই প্রমাণ
                  করে যে সকল ন্যায়পরায়ণ শক্তি যখন একত্রিত হয়, কোনো অশুভ শক্তি তার সামনে দাঁড়াতে পারে না।
                </p>

                <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>মহাযুদ্ধ</h3>
                <p>
                  দুর্গা ও মহিষাসুরের মধ্যে যুদ্ধ চলল নয় দিন নয় রাত। দানবরাজ বারবার তার রূপ পরিবর্তন
                  করল — মহিষ, সিংহ, হাতি এবং যোদ্ধার রূপ ধারণ করে — দেবীকে পরাজিত করতে সকল কৌশল প্রয়োগ
                  করল। কিন্তু দুর্গা প্রতিটি মোড়ে তার সমকক্ষ ছিলেন, তাঁর দিব্য অস্ত্র প্রতিটি রূপান্তরকে
                  প্রতিহত করল। পৃথিবী কেঁপে উঠল, সমুদ্র গর্জে উঠল, এবং আকাশ তাঁদের যুদ্ধের প্রচণ্ডতায়
                  জ্বলে উঠল।
                </p>

                <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>বিজয় — বিজয়া দশমী</h3>
                <p>
                  দশম দিনে, মহিষাসুর যখন আবার মহিষের রূপ ধারণ করল, দুর্গা তার উপর ঝাঁপিয়ে পড়লেন,
                  পায়ের নীচে তাকে চেপে ধরলেন। তিনি তাঁর ত্রিশূল তার বুকে বিদ্ধ করলেন, এবং মহাদানব
                  পতিত হল। স্বর্গ আনন্দে মুখরিত হয়ে উঠল। দেবতারা আকাশ থেকে পুষ্পবৃষ্টি করলেন, এবং
                  ত্রিলোক উল্লাসে মেতে উঠল। এই বিজয়ের দিনটি বিজয়া দশমী (দশমী অর্থাৎ দশম দিন) হিসেবে
                  উদযাপিত হয়, যা দুর্গাপূজার চূড়ান্ত পরিণতি। এটি সেই চিরন্তন প্রতিশ্রুতির প্রতীক যে
                  অন্ধকার যতই শক্তিশালী হোক না কেন, ধর্ম সর্বদা অধর্মের উপর জয়লাভ করবে।
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
              Why We Celebrate
              <span className="block text-red-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কেন আমরা উদযাপন করি
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
                <span className="text-sm font-semibold text-white bg-red-600 px-3 py-1 rounded-full">
                  English
                </span>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Durga Puja is the grandest festival for Bengalis worldwide. For five days each autumn,
                  communities come together to honour the Goddess through elaborate rituals, stunning pandal
                  decorations, cultural performances, and communal feasting. It is more than a religious
                  observance — it is a celebration of art, community, homecoming, and the enduring human
                  belief in the triumph of good over evil.
                </p>
                <p>
                  At the Bengali Society of Melbourne, Durgotsav is our most anticipated annual event.
                  It brings together Bengali families from across Victoria, recreating the warmth and spirit
                  of celebrations back home. From the rhythmic beats of the dhak to the fragrance of
                  dhunuchi, every element connects us to our heritage and to each other.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-red-50 rounded-2xl shadow-lg p-8"
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
                  দুর্গাপূজা বিশ্বজুড়ে বাঙালিদের সবচেয়ে বড় উৎসব। প্রতি শরতে পাঁচ দিন ধরে সম্প্রদায়গুলি
                  বিস্তৃত আচার-অনুষ্ঠান, অসাধারণ প্যান্ডেল সজ্জা, সাংস্কৃতিক অনুষ্ঠান এবং সামাজিক ভোজের
                  মাধ্যমে দেবীকে সম্মান জানাতে একত্রিত হয়। এটি শুধু একটি ধর্মীয় আচার নয় — এটি শিল্প,
                  সম্প্রদায়, ঘরে ফেরা এবং অশুভের উপর শুভের চিরন্তন বিজয়ে মানুষের অটল বিশ্বাসের উদযাপন।
                </p>
                <p>
                  বেঙ্গলি সোসাইটি অফ মেলবোর্নে দুর্গোৎসব আমাদের সবচেয়ে প্রতীক্ষিত বার্ষিক অনুষ্ঠান।
                  এটি সারা ভিক্টোরিয়া থেকে বাঙালি পরিবারদের একত্রিত করে, দেশে ফিরে যাওয়ার উৎসবের উষ্ণতা ও
                  প্রাণশক্তি পুনরায় সৃষ্টি করে। ঢাকের তালবদ্ধ বাদ্য থেকে ধুনুচির সুগন্ধ পর্যন্ত, প্রতিটি
                  উপাদান আমাদের ঐতিহ্য এবং পরস্পরের সাথে সংযুক্ত করে।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Durgotsav with BSM
              <span className="block text-red-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিএসএমের সাথে দুর্গোৎসব উপভোগ করুন
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events/durgotsav"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                View Durgotsav Event
              </Link>
              <Link
                href="/articles"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors inline-block"
              >
                More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
