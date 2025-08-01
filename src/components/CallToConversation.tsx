'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CallToConversation = () => {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white">
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
            Start a conversation today
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Every great project starts with understanding your business, your challenges, 
            and your goals. Let's explore what modern systems and clear storytelling 
            could mean for your legacy business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
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
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-gray-400 text-sm mb-4">
              No pressure, no sales pitch. Just an honest conversation about your business.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>30-minute discovery call</span>
              <span>•</span>
              <span>Free consultation</span>
              <span>•</span>
              <span>Clear next steps</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};