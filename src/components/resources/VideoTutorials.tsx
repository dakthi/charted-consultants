'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function VideoTutorials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gray-50 scroll-snap-section">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">
            Video Tutorials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learn by doing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Short, practical videos showing you exactly how to use tools, publish content, and review your analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">
                  5 MIN
                </span>
                <span className="text-xs text-gray-500">BEGINNER</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Setting Up Google Analytics 4</h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step setup of GA4 with the essential configurations for service businesses.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-2">
                  8 MIN
                </span>
                <span className="text-xs text-gray-500">INTERMEDIATE</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Content Batching Workflow</h3>
              <p className="text-gray-600 text-sm mb-4">
                How to create a month's worth of content in one focused session using our proven system.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium mr-2">
                  12 MIN
                </span>
                <span className="text-xs text-gray-500">ADVANCED</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Domain Migration Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete walkthrough of moving your website from a rental platform to your own domain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}