'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function CaseStudyHighlights() {
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
            Case Study Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Real results from real businesses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">3x</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                GROWTH
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Architecture Firm: From Invisible to Industry Leader
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              How a 50-year-old architecture firm increased qualified leads by 300% and positioned themselves as thought leaders through strategic content and owned digital assets.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-500">
                <div>Timeline: 6 months</div>
                <div>Industry: Architecture</div>
              </div>
            </div>
            <Link 
              href="/cases/architecture-firm" 
              className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center"
            >
              Read Full Case Study
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">5x</span>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                EFFICIENCY
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Consulting Practice: Streamlined Client Experience
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Transformed a manual client intake process into an automated system, reducing admin time by 80% while improving client satisfaction and project delivery speed.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-500">
                <div>Timeline: 4 months</div>
                <div>Industry: Consulting</div>
              </div>
            </div>
            <Link 
              href="/cases/consulting-practice" 
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
            >
              Read Full Case Study
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">10x</span>
              </div>
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                FEATURED
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Professional Services: Complete Digital Transformation
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              End-to-end transformation from paper-based processes to fully integrated digital systems. Achieved 10x improvement in client acquisition costs.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-500">
                <div>Timeline: 8 months</div>
                <div>Industry: Professional Services</div>
              </div>
            </div>
            <Link 
              href="/cases/digital-transformation" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              Read Full Case Study
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Projects Completed</div>
              <div className="text-gray-600 text-sm">Across diverse industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Client Satisfaction</div>
              <div className="text-gray-600 text-sm">Based on post-project surveys</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">6 Months</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Average Timeline</div>
              <div className="text-gray-600 text-sm">From start to full handover</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
        >
          <Link 
            href="/cases" 
            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View All Case Studies
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}