'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function TemplateLibrary() {
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
            Template Library
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready-to-use templates and checklists
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Editable documents that save you time and ensure you don't miss critical steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                PLANNING
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Content Calendar Template</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              12-month content planning template with the 1-2-4-7 system built in. Includes content types, publishing schedules, and performance tracking.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Google Sheets + Notion</span>
              <Link 
                href="/templates/content-calendar" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Download →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                MARKETING
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Campaign Brief Template</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Complete marketing campaign planning template. From objectives and target audience to messaging and success metrics.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Word + PDF</span>
              <Link 
                href="/templates/campaign-brief" 
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                Download →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                TECHNICAL
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Tech Audit Checklist</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Comprehensive checklist for auditing your current tech stack. Identify gaps, redundancies, and optimization opportunities.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">PDF + Checklist</span>
              <Link 
                href="/templates/tech-audit" 
                className="text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                Download →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                ANALYTICS
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Dashboard</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Pre-built dashboard template to track the metrics that actually matter for your business growth and content performance.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Google Analytics</span>
              <Link 
                href="/templates/performance-dashboard" 
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Download →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                CLIENT
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Client Onboarding Kit</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Complete client onboarding process including intake forms, project timelines, and communication templates.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Forms + Templates</span>
              <Link 
                href="/templates/client-onboarding" 
                className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
              >
                Download →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-medium">
                COMPLETE KIT
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Starter Pack Bundle</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Get all templates plus bonus resources: migration guides, vendor comparison sheets, and quarterly review templates.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Everything included</span>
              <Link 
                href="/templates/starter-pack" 
                className="bg-indigo-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Get Bundle
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
        >
          <p className="text-gray-600 mb-4">
            All templates are editable and come with instructions for customization.
          </p>
          <Link 
            href="/contact" 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Need a custom template? Let us know →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}