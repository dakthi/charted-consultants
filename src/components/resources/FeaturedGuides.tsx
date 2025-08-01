'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function FeaturedGuides() {
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
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">
            Featured Guides
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Essential reading for modern operators
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                FEATURED
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Own Your Website, Not Rent It</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The complete guide to breaking free from platform dependency. Learn why ownership matters and how to transition from rental platforms to true digital ownership.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Understanding the rental trap
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Migration strategies and tools
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-2">✓</span>
                Long-term cost analysis
              </li>
            </ul>
            <Link 
              href="/resources/own-your-website" 
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Read Guide
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                SYSTEM
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The 1–2–4–7 Publishing System</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              A sustainable content creation framework that builds authority without burnout. Learn the exact system we use to maintain consistent publishing schedules.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Weekly content strategy
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Content batching techniques
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Performance tracking methods
              </li>
            </ul>
            <Link 
              href="/resources/publishing-system" 
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Read Guide
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3">Building Customer Trust</h4>
            <p className="text-gray-600 text-sm mb-4">
              Strategies for establishing credibility and building lasting customer relationships in the digital age.
            </p>
            <Link href="/resources/customer-trust" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              Read more →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3">SEO for Service Businesses</h4>
            <p className="text-gray-600 text-sm mb-4">
              Practical SEO strategies that actually work for service-based businesses without the technical complexity.
            </p>
            <Link href="/resources/seo-guide" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              Read more →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 mb-3">Analytics That Matter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Focus on the metrics that actually drive business growth, not vanity numbers that look impressive.
            </p>
            <Link href="/resources/analytics-guide" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              Read more →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}