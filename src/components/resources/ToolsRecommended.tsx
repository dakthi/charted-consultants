'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function ToolsRecommended() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="uppercase text-sm tracking-wide text-gray-700 mb-2">
            Tools We Recommend
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
            The tech stack that actually works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-blue-50 rounded-xl p-6 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9c0-5 4-9 9-9s9 4 9 9" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Domain Registrars</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Namecheap (recommended)</li>
                <li>Google Domains</li>
                <li>Porkbun</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="bg-green-50 rounded-xl p-6 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hosting Platforms</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Vercel (recommended)</li>
                <li>Netlify</li>
                <li>Cloudflare Pages</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="bg-purple-50 rounded-xl p-6 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Tools</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Google Analytics 4</li>
                <li>Plausible Analytics</li>
                <li>PostHog</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          >
            <div className="bg-red-50 rounded-xl p-6 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Video Editors</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>ScreenFlow (Mac)</li>
                <li>Camtasia (PC)</li>
                <li>Loom (Quick clips)</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Complete Tech Stack Recommendations</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Website Ownership</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Domain: Namecheap or Google Domains
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Hosting: Vercel or Netlify
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  CMS: Sanity or Strapi
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Forms: Formspree or Netlify Forms
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Content Creation</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Writing: Notion or Obsidian
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Design: Canva Pro or Figma
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Video: Loom + ScreenFlow
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Scheduling: Buffer or Later
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}