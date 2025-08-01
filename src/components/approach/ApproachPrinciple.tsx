'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const ApproachPrinciple = () => {
  const principleRef = useRef(null);
  const isPrincipleInView = useInView(principleRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white scroll-snap-section">
      <div
        ref={principleRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isPrincipleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            className="text-3xl md:text-5xl font-light max-w-4xl leading-tight mb-12 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isPrincipleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Modern Operators for Legacy Businesses
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isPrincipleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Legacy businesses didn't survive by accident. They earned their place through consistent value, 
              trusted relationships, and proven expertise. Our job isn't to replace what works—it's to make 
              what works visible, scalable, and future-proof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isPrincipleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Systems you own completely. No vendor lock-ins, no subscription traps. 
                Built for your business, controlled by your business.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isPrincipleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Your expertise, experience, and approach captured in ways that 
                both people and AI can understand and trust.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isPrincipleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Momentum</h3>
              <p className="text-gray-300 leading-relaxed">
                Consistent rhythm that turns one-off wins into sustainable growth. 
                Measurement, refinement, and steady progress.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};