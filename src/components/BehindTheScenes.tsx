'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const BehindTheScenes = () => {
  const behindRef = useRef(null);
  const isBehindInView = useInView(behindRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white/95 backdrop-blur-sm">
      <div
        ref={behindRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={isBehindInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Working Together
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={isBehindInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          What working with us is actually like
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBehindInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Discovery & Understanding</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              "We start by actually listening. Not just to what you think you need, but to how your business really works. 
              I'll spend time with your team, understand your processes, and identify where technology can genuinely help 
              rather than complicate."
            </p>
            <p className="text-gray-700 leading-relaxed">
              No generic solutions. No forcing you into someone else's framework. Just honest assessment of what 
              will actually move your business forward.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBehindInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Building & Teaching</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              "I don't just build systems and disappear. I build them with you, explaining every decision, 
              teaching your team how everything works, and making sure you're never dependent on any single person 
              or vendor."
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I hand over your new systems, you'll understand them completely. You'll own them completely. 
              And you'll be able to evolve them as your business grows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBehindInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Honest Communication</h3>
            <p className="text-gray-700 leading-relaxed">
              "I'll tell you if something isn't worth doing. I'll recommend the simple solution over the complex one. 
              And I'll be upfront about timelines, costs, and what success actually looks like for your specific situation."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBehindInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Long-term Partnership</h3>
            <p className="text-gray-700 leading-relaxed">
              "This isn't about a quick project and moving on. I'm interested in businesses that are built to last, 
              and I want to help them stay competitive for decades, not just quarters."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};