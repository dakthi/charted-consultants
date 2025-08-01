'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CasesCallToAction = () => {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div
        ref={ctaRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-light leading-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Your business can be next
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Every transformation story started with a conversation. Legacy businesses with decades 
            of expertise, ready to reach the customers who need them most. Is yours one of them?
          </motion.p>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start a Conversation
              </a>
              <a
                href="/approach"
                className="px-8 py-4 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn Our Approach
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-300 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white mb-2">Discovery Call</h4>
                <p>Understand your business, expertise, and growth opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white mb-2">Custom Strategy</h4>
                <p>Tailored approach based on your industry, size, and goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white mb-2">Proven Results</h4>
                <p>Systems that deliver measurable growth and compound over time</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-white font-medium mb-1">Businesses Transformed</div>
              <div className="text-gray-300 text-sm">Across manufacturing, services, retail, and hospitality</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-400 mb-2">£12M+</div>
              <div className="text-white font-medium mb-1">Additional Revenue Generated</div>
              <div className="text-gray-300 text-sm">Documented impact across all client transformations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-400 mb-2">2+ Years</div>
              <div className="text-white font-medium mb-1">Average Ongoing Growth</div>
              <div className="text-gray-300 text-sm">Systems that keep delivering results long-term</div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <p className="text-gray-300 text-sm mb-4">
              "The best businesses aren't always the most visible ones. But the most successful ones figure out how to be both."
            </p>
            <p className="text-gray-400 text-xs">
              Your decades of expertise deserve to be found by the customers who need it most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};