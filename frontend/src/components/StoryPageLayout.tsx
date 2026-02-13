'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Story, getRelatedStories, getAdjacentStories } from '@/app/stories/storyData'

const bengaliFont = { fontFamily: 'Noto Sans Bengali, sans-serif' }

export default function StoryPageLayout({ story }: { story: Story }) {
  const related = getRelatedStories(story)
  const { prev, next } = getAdjacentStories(story.slug)
  const theme = story.colorTheme

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br ${theme.lightBg}`}>
        {story.image && (
          <div className="absolute inset-0">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        )}

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
                className={`${theme.accent} hover:opacity-80 font-medium mr-4 flex items-center`}
              >
                &larr; Back to Stories
              </Link>
            </div>

            {story.ageRange && (
              <span className={`inline-block text-xs font-semibold text-white ${theme.bg} px-3 py-1 rounded-full mb-4`}>
                Ages {story.ageRange}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              <span className="text-5xl mr-3">{story.icon}</span>
              {story.title}
              <span className={`block ${theme.accent} text-2xl sm:text-3xl font-normal mt-2`} style={bengaliFont}>
                {story.titleBengali}
              </span>
            </h1>
            {story.subtitle && (
              <p className={`text-lg sm:text-xl ${theme.text} leading-relaxed mt-4`}>
                {story.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      {story.sections.map((section, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-2`}>
                {section.title}
                {section.titleBengali && (
                  <span className={`block ${theme.accent} text-xl font-normal mt-1`} style={bengaliFont}>
                    {section.titleBengali}
                  </span>
                )}
              </h2>

              <div className="prose prose-lg text-gray-700 mt-6 leading-relaxed">
                {section.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {section.bengaliCallout && (
                <div className={`mt-8 ${theme.lightBg} ${theme.border} border-l-4 rounded-r-xl p-5`}>
                  <p className={`${theme.text} text-lg leading-relaxed`} style={bengaliFont}>
                    {section.bengaliCallout}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Moral / Lesson */}
      {story.moral && (
        <section className={`py-16 bg-gradient-to-r ${theme.gradient}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                The Lesson
                <span className="block text-white/80 text-xl mt-2 font-normal" style={bengaliFont}>
                  শিক্ষা
                </span>
              </h2>
              <p className="text-xl text-white/95 leading-relaxed mb-4">
                {story.moral}
              </p>
              {story.moralBengali && (
                <p className="text-lg text-white/80 leading-relaxed" style={bengaliFont}>
                  {story.moralBengali}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Stories */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              More Stories
              <span className="block text-gray-500 text-lg font-normal mt-1" style={bengaliFont}>
                আরও গল্প
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {related.map((r) => (
                <Link key={r.slug} href={`/stories/${r.slug}`} className="group">
                  <div className={`${r.colorTheme.lightBg} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
                    <span className="text-3xl">{r.icon}</span>
                    <h3 className={`text-lg font-bold ${r.colorTheme.text} mt-2 group-hover:underline`}>
                      {r.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1" style={bengaliFont}>
                      {r.titleBengali}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next + All Stories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
            {prev ? (
              <Link href={`/stories/${prev.slug}`} className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                &larr; <span className="ml-2">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}

            <Link
              href="/stories"
              className={`bg-gradient-to-r ${theme.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all`}
            >
              All Stories
            </Link>

            {next ? (
              <Link href={`/stories/${next.slug}`} className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                <span className="mr-2">{next.title}</span> &rarr;
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
