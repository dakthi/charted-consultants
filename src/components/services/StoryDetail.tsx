'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function StoryDetail() {
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
          <p className="uppercase text-sm tracking-wide mb-4 text-gray-700">
            Story Engine
          </p>
          <h2 className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900">
            Make your expertise impossible to ignore
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Video & Photography</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professional content that showcases your work and builds trust.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Behind-the-scenes footage
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Client testimonials
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Process documentation
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Content Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Consistent, engaging content that builds your reputation online.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Platform-specific content
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Content calendar management
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Engagement optimization
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Blog & Knowledge Base</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Educational content that positions you as the expert in your field.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                SEO-optimized articles
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                How-to guides
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                FAQ sections
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}