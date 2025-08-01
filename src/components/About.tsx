'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const About = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });

  return (
    <section className="relative">
      {/* About Content */}
      <div
        ref={aboutRef}
        className="flex flex-col justify-center px-6 md:px-12 text-white py-20 md:py-32 xl:py-40 min-h-[100vh] md:min-h-[80vh] xl:min-h-[60vh]"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Who We Are
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-light max-w-4xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          We're operators who understand that lasting success comes from systems you can actually own.
        </motion.h2>

        <div className="max-w-4xl space-y-6">
          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            For two decades, we've helped legacy businesses modernise without losing what makes them human. 
            We don't just build technology — we create digital foundations that businesses can own, control, and evolve.
          </motion.p>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            Whether you're preparing for growth, planning succession, or simply tired of renting your digital presence, 
            we build systems worth inheriting and stories worth finding.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row gap-8 mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-3 text-white">Our Foundation</h4>
            <p className="text-gray-300 leading-relaxed">
              Built by operators who've scaled businesses, managed exits, and understand 
              that sustainable growth requires systems you actually control.
            </p>
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-3 text-white">Our Approach</h4>
            <p className="text-gray-300 leading-relaxed">
              Technology that serves your business, not the other way around. 
              Stories that build trust. Operations that scale with intention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};