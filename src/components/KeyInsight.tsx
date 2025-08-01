'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const KeyInsight = () => {
  const insightRef = useRef(null);
  const isInsightInView = useInView(insightRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white">
      <div
        ref={insightRef}
        className="flex flex-col items-center justify-center px-6 md:px-12 py-24 md:py-40 text-center"
      >
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-6xl md:text-8xl text-gray-400 mb-4">"</div>
          <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8">
            The best businesses aren't always the most visible ones. 
            But the most successful ones figure out how to be both.
          </blockquote>
          <div className="h-px bg-white/20 w-24 mx-auto mb-6"></div>
          <cite className="text-lg text-gray-300 not-italic">
            — On building sustainable visibility for legacy businesses
          </cite>
        </motion.div>
      </div>
    </section>
  );
};