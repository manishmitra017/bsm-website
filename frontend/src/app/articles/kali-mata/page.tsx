'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function KaliMataArticle() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="absolute inset-0">
          <Image
            src="/kalipooja-2025/kaalipooja-2025.jpeg"
            alt="Kali Mata - Bengali Society of Melbourne"
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
                className="text-purple-600 hover:text-purple-700 font-medium mr-4 flex items-center"
              >
                &larr; Back to Articles
              </Link>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 mb-4 sm:mb-6 leading-tight">
              Kali Mata: The Dark Mother
              <span className="block text-pink-600 text-2xl sm:text-3xl md:text-4xl font-normal mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                কালী মাতা: তমসানাশিনী জননী
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-700 leading-relaxed">
              The fierce protector and compassionate mother of the universe
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
              The Origin & Mythology
              <span className="block text-purple-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                উৎপত্তি ও পৌরাণিক কাহিনী
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
                <span className="text-sm font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">
                  English
                </span>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-5">
                <h3 className="text-xl font-bold text-purple-800">Born from Durga's Fury</h3>
                <p>
                  According to the Devi Mahatmyam, when the great demons Chanda and Munda attacked Goddess Durga
                  during her battle, the goddess grew so furious that her face turned dark as ink. From her furrowed
                  brow emerged Kali — a terrifying figure with dark blue skin, wild dishevelled hair, a garland of
                  skulls around her neck, and a skirt of severed arms. She leapt onto the battlefield with a
                  fearsome roar, devouring the demon armies and slaying Chanda and Munda, earning the name Chamunda.
                </p>

                <h3 className="text-xl font-bold text-purple-800">The Destroyer of Evil</h3>
                <p>
                  Kali represents the most fierce aspect of the divine feminine — Shakti in her most raw and
                  unbridled form. She is the destroyer of ego, ignorance, and evil. Her dark complexion symbolises
                  the infinite void from which all creation emerges and into which it dissolves. She is time itself
                  (her name derives from &quot;Kala&quot;, meaning time), the force that consumes everything and
                  reminds us that nothing in this material world is permanent.
                </p>

                <h3 className="text-xl font-bold text-purple-800">The Sacred Symbolism</h3>
                <p>
                  Every aspect of Kali's fearsome appearance carries profound spiritual meaning. Her garland of
                  fifty skulls represents the fifty letters of the Sanskrit alphabet — she is the mother of
                  language and knowledge. Her protruding tongue symbolises her consuming nature and also her
                  embarrassment at stepping on Lord Shiva. Her four arms represent the complete cycle of creation
                  and destruction: one hand holds a sword (the destroyer of false consciousness), another carries
                  a severed head (the ego), while the other two hands bless her devotees and dispel fear.
                </p>

                <h3 className="text-xl font-bold text-purple-800">Kali and Shiva</h3>
                <p>
                  One of the most iconic images in Hindu mythology is Kali standing atop a reclining Shiva.
                  After destroying the demons, Kali's bloodlust could not be contained and she began her dance
                  of destruction, threatening to annihilate the entire cosmos. To stop her, Shiva lay down
                  beneath her feet. When Kali stepped on her husband, she was struck with shame and thrust
                  out her tongue in surprise. This image teaches us that Shakti (energy) without Shiva
                  (consciousness) becomes destructive, and Shiva without Shakti is inert — they are
                  inseparable and interdependent.
                </p>

                <h3 className="text-xl font-bold text-purple-800">The Compassionate Mother</h3>
                <p>
                  Beneath her fearsome exterior, Kali is the most loving and protective of all mothers. She
                  destroys only that which threatens her children — evil, ignorance, and suffering. Devotees
                  of Kali, particularly in Bengal, relate to her not with fear but with the intimate love of
                  a child for their mother. The great saint Ramakrishna Paramahansa worshipped Kali as his
                  divine mother at the Dakshineswar temple, experiencing her as a boundlessly compassionate
                  presence. To Bengalis, she is simply &quot;Ma&quot; — the Mother who fiercely protects and tenderly loves.
                </p>
              </div>
            </motion.div>

            {/* Bengali Column */}
            <motion.div
              className="bg-purple-50 rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-semibold text-white bg-pink-600 px-3 py-1 rounded-full" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বাংলা
                </span>
              </div>
              <div className="prose prose-lg text-gray-800 space-y-5" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>দুর্গার ক্রোধ থেকে জন্ম</h3>
                <p>
                  দেবীমাহাত্ম্য অনুসারে, যখন মহাদানব চণ্ড ও মুণ্ড দেবী দুর্গাকে আক্রমণ করেছিল,
                  তখন দেবী এতটাই ক্রুদ্ধ হয়েছিলেন যে তাঁর মুখমণ্ডল কালির মতো কৃষ্ণবর্ণ হয়ে গেল।
                  তাঁর কুঞ্চিত ভ্রু থেকে আবির্ভূত হলেন কালী — গাঢ় নীল বর্ণের এক ভয়ংকরী মূর্তি,
                  এলোমেলো উন্মুক্ত কেশ, গলায় মুণ্ডমালা এবং কাটা বাহুর তৈরি বসন। তিনি ভীষণ গর্জন করে
                  রণভূমিতে ঝাঁপিয়ে পড়লেন, দানব সেনাদের গ্রাস করলেন এবং চণ্ড ও মুণ্ডকে বধ করলেন,
                  যার ফলে তিনি চামুণ্ডা নামে পরিচিত হলেন।
                </p>

                <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>অশুভের বিনাশকারিণী</h3>
                <p>
                  কালী দিব্য নারীশক্তির সবচেয়ে উগ্র রূপের প্রতিনিধি — সবচেয়ে অকৃত্রিম ও
                  অদম্য রূপে শক্তি। তিনি অহংকার, অজ্ঞানতা ও অশুভের বিনাশকারিণী। তাঁর কৃষ্ণ বর্ণ
                  সেই অনন্ত শূন্যতার প্রতীক যেখান থেকে সমস্ত সৃষ্টি উদ্ভূত হয় এবং যেখানে সব কিছু
                  বিলীন হয়। তিনি স্বয়ং কাল (তাঁর নাম "কাল" থেকে এসেছে, যার অর্থ সময়), সেই শক্তি
                  যা সব কিছু গ্রাস করে এবং আমাদের মনে করিয়ে দেয় যে এই জড় জগতে কিছুই স্থায়ী নয়।
                </p>

                <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>পবিত্র প্রতীকবাদ</h3>
                <p>
                  কালীর ভয়ংকর রূপের প্রতিটি দিক গভীর আধ্যাত্মিক অর্থ বহন করে। তাঁর পঞ্চাশটি মুণ্ডের
                  মালা সংস্কৃত বর্ণমালার পঞ্চাশটি অক্ষরের প্রতীক — তিনি ভাষা ও জ্ঞানের জননী। তাঁর
                  প্রলম্বিত জিহ্বা তাঁর গ্রাসকারী প্রকৃতির এবং শিবের উপর পা দেওয়ার লজ্জার প্রতীক।
                  তাঁর চার বাহু সৃষ্টি ও ধ্বংসের সম্পূর্ণ চক্রের প্রতিনিধিত্ব করে: এক হাতে খড়্গ
                  (মিথ্যা চেতনার বিনাশকারী), অন্য হাতে ছিন্ন মস্তক (অহংকার), এবং বাকি দুই হাত
                  ভক্তদের আশীর্বাদ ও অভয় প্রদান করে।
                </p>

                <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>কালী ও শিব</h3>
                <p>
                  হিন্দু পুরাণের সবচেয়ে আইকনিক চিত্রগুলির মধ্যে একটি হল শায়িত শিবের উপর দণ্ডায়মান
                  কালী। দানবদের ধ্বংস করার পর কালীর রক্তপিপাসা নিবৃত্ত হল না এবং তিনি ধ্বংসের তাণ্ডবনৃত্য
                  শুরু করলেন, যা সমগ্র ব্রহ্মাণ্ডকে ধ্বংসের হুমকি দিল। তাঁকে থামাতে শিব তাঁর পায়ের নীচে
                  শুয়ে পড়লেন। কালী যখন স্বামীর উপর পা দিলেন, তিনি লজ্জায় আঘাত পেলেন এবং বিস্ময়ে
                  জিহ্বা বের করলেন। এই চিত্র আমাদের শেখায় যে শক্তি (শক্তি) শিব (চৈতন্য) ছাড়া ধ্বংসাত্মক
                  হয়ে ওঠে, এবং শিব শক্তি ছাড়া নিষ্ক্রিয় — তারা অবিচ্ছেদ্য ও পরস্পরনির্ভর।
                </p>

                <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>করুণাময়ী জননী</h3>
                <p>
                  তাঁর ভয়ংকর বাহ্যিক রূপের আড়ালে কালী সকল মায়ের মধ্যে সবচেয়ে স্নেহশীলা ও
                  রক্ষাকারিণী। তিনি শুধুমাত্র সেই সব কিছু ধ্বংস করেন যা তাঁর সন্তানদের হুমকি দেয় — অশুভ,
                  অজ্ঞানতা ও দুঃখকষ্ট। কালীর ভক্তরা, বিশেষত বাংলায়, তাঁর সাথে ভয়ে নয় বরং সন্তানের
                  মায়ের প্রতি অন্তরঙ্গ ভালোবাসায় সম্পর্কিত হন। মহান সাধক রামকৃষ্ণ পরমহংস দক্ষিণেশ্বর
                  মন্দিরে কালীকে তাঁর দিব্য মা হিসেবে পূজা করতেন, তাঁকে অসীম করুণাময়ী সত্তা হিসেবে
                  অনুভব করতেন। বাঙালিদের কাছে তিনি কেবল "মা" — যিনি প্রচণ্ডভাবে রক্ষা করেন এবং
                  কোমলভাবে ভালোবাসেন।
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
              Kali Puja in Bengali Culture
              <span className="block text-purple-600 text-2xl mt-3 font-normal" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বাঙালি সংস্কৃতিতে কালীপূজা
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
                <span className="text-sm font-semibold text-white bg-purple-600 px-3 py-1 rounded-full">
                  English
                </span>
              </div>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Kali Puja, celebrated on the new moon night of Kartik (October-November), coincides with
                  Deepavali across India but holds a uniquely Bengali character. While the rest of India
                  celebrates with Lakshmi Puja and fireworks, Bengal worships Kali with deep devotion,
                  elaborate night-long rituals, and stunning illuminated pandals.
                </p>
                <p>
                  The festival is observed on the darkest night of the year, symbolising Kali's power to
                  bring light into darkness. Homes and temples are lit with countless oil lamps and candles,
                  representing the triumph of knowledge over ignorance and hope over despair. It is a night
                  of profound spiritual significance and joyous community celebration.
                </p>
                <p>
                  At BSM, our Kali Puja and Deepavali celebration brings the Bengali community together
                  for an evening of traditional puja, cultural performances, and festive togetherness,
                  keeping the spirit of this unique Bengali tradition alive in Melbourne.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-purple-50 rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-semibold text-white bg-pink-600 px-3 py-1 rounded-full" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                  বাংলা
                </span>
              </div>
              <div className="prose prose-lg text-gray-800 space-y-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                <p>
                  কালীপূজা, কার্তিক মাসের অমাবস্যা তিথিতে (অক্টোবর-নভেম্বর) পালিত হয়, যা সারা ভারতে
                  দীপাবলির সাথে মিলে যায় কিন্তু এর একটি স্বতন্ত্র বাঙালি চরিত্র রয়েছে। বাকি ভারত যখন
                  লক্ষ্মীপূজা ও আতশবাজি দিয়ে উদযাপন করে, বাংলা গভীর ভক্তি, বিস্তৃত রাত্রিব্যাপী
                  আচার-অনুষ্ঠান এবং অসাধারণ আলোকসজ্জিত প্যান্ডেলে কালী পূজা করে।
                </p>
                <p>
                  এই উৎসব বছরের সবচেয়ে অন্ধকার রাতে পালিত হয়, যা অন্ধকারে আলো আনার কালীর শক্তির প্রতীক।
                  ঘরবাড়ি ও মন্দির অগণিত প্রদীপ ও মোমবাতিতে আলোকিত করা হয়, যা অজ্ঞানতার উপর জ্ঞানের
                  এবং হতাশার উপর আশার জয়ের প্রতীক। এটি গভীর আধ্যাত্মিক তাৎপর্যের এবং আনন্দময়
                  সামাজিক উদযাপনের রাত।
                </p>
                <p>
                  বিএসএমে আমাদের কালীপূজা ও দীপাবলি উদযাপন বাঙালি সম্প্রদায়কে ঐতিহ্যবাহী পূজা,
                  সাংস্কৃতিক অনুষ্ঠান এবং উৎসবমুখর একতার এক সন্ধ্যায় একত্রিত করে, মেলবোর্নে এই
                  অনন্য বাঙালি ঐতিহ্যের প্রাণশক্তি বজায় রাখে।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Kali Puja with BSM
              <span className="block text-purple-200 text-xl mt-2" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
                বিএসএমের সাথে কালীপূজা উপভোগ করুন
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events/kalipuja-deepavali"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors inline-block"
              >
                View Kali Puja Event
              </Link>
              <Link
                href="/articles"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block"
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
