'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const CaseStudyShowcase = () => {
  const caseRef = useRef(null);
  const isCaseInView = useInView(caseRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-50">
      <div
        ref={caseRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-600 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Real Results
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          From invisible to undeniable
        </motion.h2>

        {/* Case Study 1 */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Heritage Bakery → Digital Discovery</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A 40-year-old family bakery was struggling with online visibility despite having the best sourdough in the city. 
                Local customers loved them, but new residents couldn't find them.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-600"><strong>Before:</strong> 2-3 online orders per week</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600"><strong>After:</strong> 40+ online orders per week</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600"><strong>Impact:</strong> 300% increase in new customer acquisition</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Before/After Website Mockup</span>
              </div>
              <p className="text-sm text-gray-600">
                Modern, mobile-friendly website with integrated ordering system and local SEO optimization
              </p>
            </div>
          </div>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Marketing Dashboard Mockup</span>
                </div>
                <p className="text-sm text-gray-600">
                  Automated marketing system with performance tracking and customer journey mapping
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Law Firm → Marketing Automation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A boutique law firm was spending 15 hours per week on manual marketing tasks and struggling 
                to track which efforts actually brought in clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-600"><strong>Before:</strong> 15hrs/week manual marketing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600"><strong>After:</strong> 2hrs/week oversight</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600"><strong>Impact:</strong> 85% time savings, 40% more qualified leads</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};