'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function ServicesCallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white scroll-snap-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">
            Ready to Build
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's build your foundation
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Stop renting your digital presence. Start with a free discovery call to explore how we can make you unmistakable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Free Discovery Call</h3>
            <p className="text-sm text-gray-600">45 minutes to understand your business and explore possibilities</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Clear Proposal</h3>
            <p className="text-sm text-gray-600">Fixed-price proposal with clear deliverables and timeline</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Conversation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <p className="text-sm text-gray-500 mt-4">
            Or email us directly at{' '}
            <a href="mailto:hello@chartedconsultants.com" className="text-indigo-600 hover:text-indigo-700">
              hello@chartedconsultants.com
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-indigo-600 mb-2">Technology</div>
            <div className="text-gray-600 text-sm">Built for speed and ownership</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600 mb-2">Story</div>
            <div className="text-gray-600 text-sm">Content that builds authority</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600 mb-2">Momentum</div>
            <div className="text-gray-600 text-sm">Systems that compound results</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}