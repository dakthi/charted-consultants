'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function OfficeHours() {
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
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            When we're available
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We work with clients across time zones, but here's when you're most likely to reach us live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-700">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-700">10:00 AM - 2:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-700">Closed</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Emergency Support</h4>
                <p className="text-blue-800 text-sm">
                  For existing clients with urgent technical issues, we offer 24/7 emergency support via our dedicated line.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Time Zone Friendly</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">West Coast (PST/PDT)</h4>
                  <p className="text-gray-700 text-sm">
                    Primary timezone. Best availability for live calls and immediate responses.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">East Coast (EST/EDT)</h4>
                  <p className="text-gray-700 text-sm">
                    Available 6 AM - 3 PM local time. We often accommodate early morning calls.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">International</h4>
                  <p className="text-gray-700 text-sm">
                    We work with clients globally. We'll find meeting times that work for everyone.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-2">Current Time</h4>
                <p className="text-indigo-800 text-sm">
                  Pacific Time: <span className="font-mono">Loading...</span>
                </p>
                <p className="text-indigo-700 text-xs mt-1">
                  We'll work around your schedule for discovery calls.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need to meet outside these hours?
            </h3>
            <p className="text-gray-700 mb-6">
              We understand that business doesn't always happen during business hours. We're flexible with scheduling for discovery calls and can accommodate different time zones and busy schedules.
            </p>
            <p className="text-sm text-gray-500">
              Just mention your preferred times in your message and we'll make it work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}