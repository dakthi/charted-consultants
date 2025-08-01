'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function QuickContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tell us about your project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The more context you provide, the better we can tailor our response to your specific needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                What brings you here? *
              </label>
              <select
                id="purpose"
                name="purpose"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select your primary interest</option>
                <option value="complete-foundation">Complete Foundation Package</option>
                <option value="website-only">Website Development Only</option>
                <option value="content-strategy">Content & Story Strategy</option>
                <option value="tech-migration">Platform Migration Help</option>
                <option value="consulting-only">Strategic Consulting</option>
                <option value="not-sure">Not sure yet - exploring options</option>
                <option value="other">Something else</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your situation *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="What's your biggest challenge right now? What would success look like for you? Any specific timeline or budget considerations?"
                required
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                Send me helpful resources and updates (unsubscribe anytime)
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
            >
              Send Message
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            We typically respond within 24 hours with thoughtful, specific guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}