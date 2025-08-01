'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const WhereWeStart = () => {
  const startRef = useRef(null);
  const isStartInView = useInView(startRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white">
      <div
        ref={startRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={isStartInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Discovery First
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            animate={isStartInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Where We Start
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isStartInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before touching any tools or building any systems, we need to understand what you've already built. 
                Your reputation. Your relationships. Your expertise. The processes that work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Legacy businesses have advantages that startup culture often overlooks: deep knowledge, 
                proven methods, trusted client relationships, and years of solving real problems. 
                Our technology should amplify these strengths, not replace them.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Your History</h4>
                    <p className="text-gray-700">What you've built, how you've grown, what challenges you've overcome</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Your Strengths</h4>
                    <p className="text-gray-700">The expertise and approach that sets you apart from competitors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Your Reputation</h4>
                    <p className="text-gray-700">How clients see you, what they value most, why they choose you</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isStartInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Our Discovery Process</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="text-2xl font-light text-blue-600 mr-4">1</span>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Business Deep Dive</h4>
                      <p className="text-gray-700 text-sm">Understanding your operations, client journey, and current processes</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-2xl font-light text-blue-600 mr-4">2</span>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Competitive Analysis</h4>
                      <p className="text-gray-700 text-sm">How you're positioned in your market and what makes you different</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-2xl font-light text-blue-600 mr-4">3</span>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Client Perspectives</h4>
                      <p className="text-gray-700 text-sm">What your best clients value most about working with you</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="text-2xl font-light text-blue-600 mr-4">4</span>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Growth Opportunities</h4>
                      <p className="text-gray-700 text-sm">Where technology and storytelling can have the biggest impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};