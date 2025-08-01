'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function FinalCTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build something that lasts?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            From invisible to unmistakable. From renting to owning. From scattered to systematic.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Start a Conversation</h3>
            <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
              Free discovery call to understand your situation and explore possibilities. No pressure, just honest conversation.
            </p>
            <ul className="space-y-2 text-sm text-indigo-100">
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                45 minutes of focused discussion
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                Custom recommendations
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                Clear next steps
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Start Your Project</h3>
            <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
              Ready to move forward? Get a detailed proposal with fixed pricing and clear deliverables.
            </p>
            <ul className="space-y-2 text-sm text-indigo-100">
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                Fixed-price proposal
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                6-week typical timeline
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                Full ownership guaranteed
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <a
            href="mailto:hello@chartedconsultants.com?subject=Discovery Call Request"
            className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Book a Conversation Now
          </a>
          
          <a
            href="tel:+15551234567"
            className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Right Now
          </a>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          <p className="text-indigo-200 text-sm mb-4">
            Prefer to learn more first?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="/services" className="text-white hover:text-indigo-200 underline">
              Explore Our Services
            </Link>
            <Link href="/cases" className="text-white hover:text-indigo-200 underline">
              View Case Studies
            </Link>
            <Link href="/resources" className="text-white hover:text-indigo-200 underline">
              Browse Resources
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 border-t border-white/20 pt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Technology</div>
              <div className="text-indigo-200 text-sm">Built for speed and ownership</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Story</div>
              <div className="text-indigo-200 text-sm">Content that builds authority</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Momentum</div>
              <div className="text-indigo-200 text-sm">Systems that compound results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}