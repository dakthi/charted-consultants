'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function GlossaryTerms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="uppercase text-sm tracking-wide text-gray-700 mb-2">
            Glossary of Key Terms
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            No jargon, just clarity
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Simple explanations of technical terms you'll encounter when building your digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">SEO</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Search Engine Optimization. Making your website easy for Google to understand and recommend to people searching for what you offer.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">Schema Markup</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Code that helps search engines understand your content better. Think of it as adding labels to help Google categorize your business correctly.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">First-Party Data</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Information you collect directly from your customers (like email addresses), rather than buying it from someone else. Much more valuable and reliable.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">Domain Authority</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              How much Google trusts your website. Built over time through quality content, legitimate backlinks, and consistent publishing.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">Conversion Rate</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The percentage of website visitors who take the action you want (like filling out a contact form or making a purchase).
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">CMS</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Content Management System. The admin panel where you update your website content. Should be simple enough that you can use it confidently.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">SSL Certificate</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Security certificate that enables the "https" lock icon in browsers. Essential for credibility and required by Google for good rankings.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.6, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">CDN</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Content Delivery Network. Stores copies of your website around the world so it loads faster for visitors regardless of their location.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.8, ease: 'easeOut' }}
          >
            <h3 className="font-semibold text-indigo-600 mb-2">API</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Application Programming Interface. How different software systems talk to each other. Allows your website to connect with booking systems, payment processors, etc.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 2.0, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still confused by a term you've encountered?
          </h3>
          <p className="text-gray-700 mb-6">
            We're here to translate tech-speak into plain English. No question is too basic.
          </p>
          <a 
            href="mailto:hello@chartedconsultants.com?subject=Glossary Question" 
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Ask Us Directly
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}