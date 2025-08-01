'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function OwnershipHandover() {
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
            Ownership & Handover
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            You own it, not rent it
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full control at the end. No vendor lock-in. No ongoing subscription fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 14.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">The Rental Trap</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-red-600 mr-3">✗</span>
                Monthly subscription fees forever
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-3">✗</span>
                Can't move to another provider
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-3">✗</span>
                Limited customization options
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-3">✗</span>
                Lose everything if you stop paying
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-3">✗</span>
                At the mercy of platform changes
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">True Ownership</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-indigo-600 mr-3">✓</span>
                You own the domain, hosting, and code
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-3">✓</span>
                Move to any provider you choose
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-3">✓</span>
                Full customization control
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-3">✓</span>
                No ongoing platform fees
              </li>
              <li className="flex items-center">
                <span className="text-indigo-600 mr-3">✓</span>
                Future-proof technology stack
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You Get at Handover</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Complete Documentation</h4>
              <p className="text-sm text-gray-600">Everything explained in plain English</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">All Login Credentials</h4>
              <p className="text-sm text-gray-600">Full admin access to everything</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Source Code</h4>
              <p className="text-sm text-gray-600">Every line of code, commented and organized</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Training Materials</h4>
              <p className="text-sm text-gray-600">Step-by-step guides for updates</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}