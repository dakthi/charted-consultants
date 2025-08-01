'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TechnologyFoundation = () => {
  const techRef = useRef(null);
  const isTechInView = useInView(techRef, { once: true, margin: '-100px' });

  const foundations = [
    {
      title: 'Websites & Hosting',
      description: 'Fast, secure, fully owned. No platform dependencies or surprise restrictions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0-5-4-9-9-9z" />
        </svg>
      )
    },
    {
      title: 'Booking & Payments',
      description: 'Seamless scheduling and integrated payments that reduce admin and boost conversion.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Analytics & Insights',
      description: 'Clear data about what is working, where visitors come from, and how to optimize.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Full Ownership',
      description: 'You hold all credentials, source code, and documentation. No vendor lock-ins.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-gray-50">
      <div
        ref={techRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Technology Foundation
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Simple, clean, fully under your control
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              We build the essential systems every business needs—websites, booking, payments, analytics—
              but we build them so you own them completely. No subscriptions you don't control, 
              no platforms that can disappear overnight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foundations.map((foundation, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={isTechInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {foundation.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{foundation.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{foundation.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Why Ownership Matters</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">No Monthly Fees</h4>
                <p className="text-gray-700 text-sm">Pay once, own forever. No subscription traps or surprise price increases.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Complete Control</h4>
                <p className="text-gray-700 text-sm">Make changes when you want, how you want. No platform restrictions.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Future-Proof</h4>
                <p className="text-gray-700 text-sm">Your systems grow with your business, not against vendor limitations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};