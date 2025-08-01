'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const MiniClientQuote = () => {
  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white scroll-snap-section">
      <div
        ref={quoteRef}
        className="px-6 md:px-12 py-16 md:py-24"
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/img/user1.jpg"
                alt="Client photo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6 text-gray-900">
            "Working with Charted wasn't just about getting a new website. 
            They helped us understand our own business better and gave us tools 
            that actually make sense for how we work."
          </blockquote>
          
          <div className="h-px bg-gray-200 w-16 mx-auto mb-4"></div>
          
          <cite className="text-gray-600 not-italic">
            <span className="font-medium">Sarah Mitchell</span><br />
            <span className="text-sm">Owner, Heritage Bakery</span>
          </cite>
        </motion.div>
      </div>
    </section>
  );
};