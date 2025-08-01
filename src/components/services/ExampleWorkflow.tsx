'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function ExampleWorkflow() {
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
          <p className="uppercase text-sm tracking-wide mb-4 text-gray-700">
            Example Workflow
          </p>
          <h2 className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-6 text-gray-900">
            From discovery call to launch
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A clear, predictable process that gets you from invisible to unmistakable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-semibold">1</span>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-2"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery Call</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              45-minute conversation to understand your business, goals, and current challenges.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              Week 1
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-semibold">2</span>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-2"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Foundation Build</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Website, booking system, and initial content creation. Technology stack setup.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              Weeks 2-4
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-semibold">3</span>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform translate-x-2"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Launch & Test</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Go live, test all systems, gather initial feedback, and optimize performance.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              Week 5
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Handover & Support</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Complete ownership transfer, documentation, and optional ongoing support setup.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              Week 6+
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-semibold text-indigo-600 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Weeks</div>
              <div className="text-gray-700 text-sm">Average project timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-indigo-600 mb-2">3</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Pillars</div>
              <div className="text-gray-700 text-sm">Technology + Story + Momentum</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-indigo-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Ownership</div>
              <div className="text-gray-700 text-sm">You own everything we build</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}