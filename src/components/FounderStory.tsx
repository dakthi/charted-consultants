'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const FounderStory = () => {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white scroll-snap-section">
      <div
        ref={storyRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-400"
            initial={{ opacity: 0, y: -10 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Why This Matters
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Why I personally care about legacy businesses
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="aspect-square bg-gray-700 rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/img/Portrait_Placeholder.png"
                  alt="Founder photo"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Building systems that last for businesses that matter
              </p>
            </motion.div>

            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                My father ran a small engineering firm for thirty years. Brilliant work, loyal clients, 
                fair pricing. But when digital transformation became essential, he struggled. Not because 
                he couldn't learn technology, but because most solutions were built for different types of businesses.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I watched him navigate vendor lock-ins, subscription traps, and systems that promised 
                everything but delivered complexity. Good businesses like his were being left behind, 
                not because they lacked value, but because they lacked visibility.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                That's when I realized my background in technology could serve businesses that actually 
                matter to their communities. Businesses that have been solving real problems for decades, 
                but needed help being found by the people who need them most.
              </p>

              <div className="border-l-4 border-white/20 pl-6 mt-8">
                <p className="text-xl font-light text-white leading-relaxed italic">
                  "Legacy businesses didn't get where they are by accident. They earned their place 
                  through consistent value delivery. My job is to make sure the next generation 
                  can find them."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};