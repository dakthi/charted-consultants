'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const MomentumSystem = () => {
  const momentumRef = useRef(null);
  const isMomentumInView = useInView(momentumRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white scroll-snap-section">
      <div
        ref={momentumRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-600 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Momentum System
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            A rhythm of updates, measurement, and consistency turning one-off wins into long-term growth
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isMomentumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One-off projects don't create lasting change. Real transformation happens when good systems 
                become consistent habits, when measurement drives improvement, and when small wins compound 
                into sustainable growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We don't just build and disappear. We establish rhythms that keep your business moving forward, 
                systems that get better over time, and metrics that show you exactly what's working.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Editorial Rhythm</h4>
                    <p className="text-gray-600 text-sm">Sustainable content schedule that builds authority without burnout</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Performance Tracking</h4>
                    <p className="text-gray-600 text-sm">Clear metrics that show what's resonating and where to focus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Iterative Improvement</h4>
                    <p className="text-gray-600 text-sm">Systems that evolve and improve as your business grows</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isMomentumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">The Momentum Cycle</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Measure</h4>
                      <p className="text-gray-600 text-sm">Track what matters: traffic, leads, conversions, client satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Create</h4>
                      <p className="text-gray-600 text-sm">Regular content that showcases expertise and builds trust</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Optimize</h4>
                      <p className="text-gray-600 text-sm">Refine based on data, feedback, and changing business needs</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">4</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Scale</h4>
                      <p className="text-gray-600 text-sm">Expand what works, eliminate what doesn't, compound success</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center bg-purple-50 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isMomentumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <blockquote className="text-xl font-light leading-relaxed mb-4 text-gray-900">
              "Success isn't about one perfect campaign. It's about building systems that get better every month."
            </blockquote>
            <p className="text-gray-600 text-sm">
              Consistent improvement over dramatic transformations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};