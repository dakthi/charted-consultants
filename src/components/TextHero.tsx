'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TextHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="bg-white/95 backdrop-blur-sm scroll-snap-section">
      <div
        ref={ref}
        className="flex flex-wrap items-center pt-20 px-5 xl:px-0"
      >
        {/* Left Column (Text) */}
        <div className="order-first xl:order-first flex items-start w-full md:w-1/2 lg:w-1/2">
          <div className="max-w-xl xl:mx-auto">
            <motion.p
              className="text-4xl font-bold leading-snug tracking-tight text-gray-900 lg:text-6xl lg:leading-tight xl:text-6xl xl:leading-tight mb-0 xl:mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
              What do ChatGPT or Google know about you?
            </motion.p>
          </div>
        </div>

        {/* Right Column (Image + Text) */}
        <div className="order-last xl:order-last w-full md:w-1/2 lg:w-1/2 lg:px-12 mb-0 lg:mb-0 mt-5 md:mt-0">
          <motion.p
            className="first:mt-0 text-md leading-relaxed text-gray-600 lg:text-xl xl:text-xl mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            We see you, and we know that you&apos;re doing amazing, incredible work.
            You&apos;re making this world better, bit by bit.
            <br />
            <br />
            But to succeed and build a lifestyle boutique business that offers you{' '}
            <i>financial freedom</i> and a truly <i>rewarding</i> life, you need
            thousands of people out there to know about you.
          </motion.p>

          <motion.p
            className="text-md leading-relaxed text-gray-600 lg:text-xl xl:text-xl mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            Try asking ChatGPT right now:
          </motion.p>

          {/* Part 2: The question — highlighted */}
          <motion.p
            className="text-sm leading-relaxed mb-5 text-gray-900 font-semibold lg:text-xl xl:text-xl bg-yellow-100 px-2 py-1 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            Who is [your name, your business name]?
          </motion.p>

          {/* Part 3: Closing text */}
          <motion.p
            className="text-md leading-relaxed text-gray-600 lg:text-xl xl:text-xl mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            If you&apos;re not loving what you see, why not explore how Charted
            Consultants can help you?
          </motion.p>
        </div>
      </div>

      {/* Logo section */}
      <div className="flex justify-center items-end pt-0 mt-0">
        <Image src="/img/logo-half-black.png" alt="Logo" width={240} height={120} />
      </div>
    </div>
  );
};
