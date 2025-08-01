'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const ApproachCallToAction = () => {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white scroll-snap-section">
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
            Start Your Conversation
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Ready to explore what this approach means for your business? Let's discuss your challenges, 
            your goals, and how modern operations can help you build on what you've already achieved.
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
                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Schedule a Discovery Call
              </a>
              <a
                href="mailto:chartedconsultants.co@gmail.com"
                className="px-8 py-4 border border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                Send Us an Email
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white mb-1">30-Minute Discovery Call</h4>
                <p>Understand your business and identify opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white mb-1">No Pressure, No Pitch</h4>
                <p>Honest conversation about what makes sense for you</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-white mb-1">Clear Next Steps</h4>
                <p>Actionable recommendations, whether we work together or not</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-gray-400 text-sm mb-4">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
            <p className="text-gray-400 text-xs">
              Your business has already proven its value. Let's make sure the world can find it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};