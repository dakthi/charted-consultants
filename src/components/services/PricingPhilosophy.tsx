'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function PricingPhilosophy() {
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
            Pricing Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Clear value, no surprises
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fixed project fees + optional ongoing support. No hidden costs, no monthly subscriptions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Project-Based Investment</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Foundation Package</h4>
                  <p className="text-gray-600 mb-3">Complete website + booking + basic content setup</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Professional website (5-8 pages)
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Integrated booking system
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Payment processing setup
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Basic analytics implementation
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Complete Package</h4>
                  <p className="text-gray-600 mb-3">Foundation + story creation + momentum systems</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Everything in Foundation
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Video & photography session
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      Content creation (blog, social)
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      1-2-4-7 publishing system setup
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Optional Ongoing Support</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Maintenance & Updates</h4>
                  <p className="text-sm text-gray-600">Monthly technical maintenance, security updates, and performance optimization.</p>
                </div>
                
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Content Partnership</h4>
                  <p className="text-sm text-gray-600">Ongoing content creation, social media management, and publishing support.</p>
                </div>
                
                <div className="border-l-4 border-indigo-200 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Strategic Consulting</h4>
                  <p className="text-sm text-gray-600">Monthly strategy sessions, performance reviews, and growth planning.</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 border-2 border-indigo-200">
              <h4 className="font-bold text-gray-900 mb-3">What Makes This Different</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Fixed project investment, not hourly billing
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  You own everything after project completion
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Optional support - never required
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">✓</span>
                  Transparent pricing from day one
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Every project starts with a free discovery call to understand your needs and provide a clear, fixed-price proposal.
            </p>
            <div className="text-center">
              <div className="inline-block text-sm text-gray-500 mb-2">Next step</div>
              <div className="text-lg font-bold text-indigo-600">Free 45-minute discovery call</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}