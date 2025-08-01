'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function MomentumDetail() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">
            Momentum System
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Consistency that compounds
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Publishing Cadence</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The 1–2–4–7 system: sustainable content creation that builds authority.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium mr-3">1</span>
                Weekly cornerstone content
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium mr-3">2</span>
                Bi-weekly deep dives
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium mr-3">4</span>
                Monthly case studies
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium mr-3">7</span>
                Quarterly strategic reviews
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Tracking</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Clear metrics to measure what matters and adjust course quickly.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Content performance analytics
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Lead generation tracking
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                ROI measurement
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Support</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ongoing partnership options to keep your momentum going.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Monthly optimization
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Content refresh cycles
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Strategic pivots
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}