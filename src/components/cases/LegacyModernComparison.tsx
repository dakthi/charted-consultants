'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const LegacyModernComparison = () => {
  const comparisonRef = useRef(null);
  const isComparisonInView = useInView(comparisonRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white">
      <div
        ref={comparisonRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isComparisonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Transformation Comparison
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isComparisonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Legacy → Modern: The Complete Picture
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-2 max-w-6xl mx-auto">
            {/* Before Column */}
            <motion.div
              className="bg-red-50 p-8 rounded-l-lg lg:rounded-r-none"
              initial={{ opacity: 0, x: -20 }}
              animate={isComparisonInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-red-800 mb-2">Before: Legacy State</h3>
                <p className="text-red-700 text-sm">45-year-old precision engineering firm</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Digital Presence</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      Basic 5-page website from 2010
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      No search engine visibility
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      Zero online client acquisition
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      No digital case studies or portfolio
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Business Operations</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      Manual quoting process (3-4 hours per quote)
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      Paper-based project tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      No lead tracking or analytics
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      Reactive marketing (Yellow Pages, word-of-mouth)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Results</h4>
                  <div className="space-y-3">
                    <div className="bg-red-100 p-3 rounded">
                      <div className="font-medium text-red-800">2-3 inquiries per month</div>
                      <div className="text-red-600 text-xs">Mostly through personal networks</div>
                    </div>
                    <div className="bg-red-100 p-3 rounded">
                      <div className="font-medium text-red-800">45% quote conversion</div>
                      <div className="text-red-600 text-xs">Competing primarily on price</div>
                    </div>
                    <div className="bg-red-100 p-3 rounded">
                      <div className="font-medium text-red-800">Losing to digital competitors</div>
                      <div className="text-red-600 text-xs">Despite superior quality and experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* After Column */}
            <motion.div
              className="bg-green-50 p-8 rounded-r-lg lg:rounded-l-none"
              initial={{ opacity: 0, x: 20 }}
              animate={isComparisonInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">After: Modern Operations</h3>
                <p className="text-green-700 text-sm">Same expertise, modern systems</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Digital Presence</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      Modern, mobile-optimized website
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      #1 Google ranking for key terms
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      70% of leads from online sources
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      Comprehensive project portfolio with video
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Business Operations</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      Automated quoting system (30 minutes per quote)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      Digital project management and tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      Complete lead attribution and analytics
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      Strategic content marketing and SEO
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Results</h4>
                  <div className="space-y-3">
                    <div className="bg-green-100 p-3 rounded">
                      <div className="font-medium text-green-800">35+ inquiries per month</div>
                      <div className="text-green-600 text-xs">Qualified prospects seeking their expertise</div>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <div className="font-medium text-green-800">78% quote conversion</div>
                      <div className="text-green-600 text-xs">Competing on value and expertise</div>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <div className="font-medium text-green-800">£2.4M additional revenue</div>
                      <div className="text-green-600 text-xs">In first 12 months post-transformation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            className="mt-16 bg-gray-100 p-8 rounded-lg text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isComparisonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">The Transformation Key</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We didn't change what they do—we made what they do discoverable, measurable, and scalable. 
              The same 45 years of expertise, now visible to the people who need it most.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold text-blue-600 mb-1">1700%</div>
                <div className="text-sm text-gray-700">Increase in monthly inquiries</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-green-600 mb-1">73%</div>
                <div className="text-sm text-gray-700">Improvement in conversion rate</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-purple-600 mb-1">85%</div>
                <div className="text-sm text-gray-700">Reduction in administrative time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};