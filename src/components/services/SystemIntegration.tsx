'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function SystemIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="uppercase text-sm tracking-wide text-gray-600 mb-2">
            System Integration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            No more disconnected tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything works together seamlessly, so you can focus on what you do best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Website connects to booking</h3>
                  <p className="text-gray-600">Visitors can schedule directly from your site without friction.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Booking triggers payment</h3>
                  <p className="text-gray-600">Automatic payment processing when appointments are confirmed.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics track everything</h3>
                  <p className="text-gray-600">Real-time insights into what's working and what needs attention.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Content feeds the machine</h3>
                  <p className="text-gray-600">Every piece of content drives traffic and builds authority.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">One unified system</h3>
              <p className="text-gray-600 mb-6">
                Instead of juggling 5-10 different platforms, everything works as one cohesive system.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="font-medium text-gray-900">Website</div>
                  <div className="text-gray-600">Your digital home</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-medium text-gray-900">Booking</div>
                  <div className="text-gray-600">Seamless scheduling</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-medium text-gray-900">Payments</div>
                  <div className="text-gray-600">Secure processing</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="font-medium text-gray-900">Analytics</div>
                  <div className="text-gray-600">Clear insights</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}