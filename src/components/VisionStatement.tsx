'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const VisionStatement = () => {
  const visionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white/95 backdrop-blur-sm">
      <div
        ref={visionRef}
        className="flex flex-col justify-center px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Our Vision
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-8 text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Legacy businesses built the foundation of our economy, but they're often invisible online.
        </motion.h2>

        <div className="max-w-4xl">
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Every day, exceptional businesses with decades of expertise remain hidden from their ideal customers. 
            They've built trust through relationships, delivered quality through experience, and created value through dedication. 
            But when someone searches for what they offer, these businesses don't appear.
            <br /><br />
            We believe visibility shouldn't be reserved for the loudest voices or the biggest budgets. 
            It should reflect actual value, real expertise, and genuine care for customers. 
            That's why we build systems that make exceptional work findable, and tell stories that make expertise undeniable.
          </motion.p>
        </div>
      </div>
    </section>
  );
};