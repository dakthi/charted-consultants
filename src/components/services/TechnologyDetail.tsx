'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function TechnologyDetail() {
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
            Technology Foundation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Built for speed, built to last
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9c0-5 4-9 9-9s9 4 9 9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Websites</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fast, mobile-ready, SEO-friendly websites that you actually own.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Lightning-fast loading
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Mobile-first design
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                SEO optimized
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Booking & Payments</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Smooth customer experience from first click to final payment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Integrated scheduling
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Secure payment processing
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Automated confirmations
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Clear visibility on what's working and what needs attention.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Real-time dashboards
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Conversion tracking
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Performance insights
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}