'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Disclosure } from '@headlessui/react';

export const FAQAccordion = () => {
  const faqRef = useRef(null);
  const isFaqInView = useInView(faqRef, { once: true, margin: '-100px' });

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects take 6-12 weeks from start to finish. This includes discovery, design, development, testing, and training your team. We'll give you a detailed timeline after our initial consultation based on your specific needs."
    },
    {
      question: "Do I really own everything you build?",
      answer: "Absolutely. You get all source code, credentials, documentation, and training. No licensing fees, no ongoing dependencies. If you want to take everything to another developer tomorrow, you can."
    },
    {
      question: "What if I need changes after the project is done?",
      answer: "We provide detailed documentation and training so you can handle most updates yourself. For bigger changes or technical issues, we offer ongoing support at transparent hourly rates—no contracts required."
    },
    {
      question: "How much does it cost?",
      answer: "Projects typically range from £5,000 to £25,000 depending on complexity. We provide fixed-price quotes after understanding your specific needs. No surprises, no scope creep, no hidden fees."
    },
    {
      question: "What makes you different from other web developers?",
      answer: "We focus specifically on legacy businesses that need modern systems without losing their character. We understand established business processes and build technology that enhances rather than replaces what already works."
    },
    {
      question: "Do you work with businesses outside of London?",
      answer: "Yes, we work with businesses across the UK and internationally. Most of our work is done remotely, with occasional in-person visits for discovery and training when needed."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "That's exactly who we work with. We explain everything in plain English, provide comprehensive training, and make sure you're comfortable with every system we build. No technical background required."
    },
    {
      question: "Can you work with my existing systems?",
      answer: "Usually, yes. We specialize in integrating with existing business processes and can often improve or connect your current systems rather than replacing everything."
    }
  ];

  return (
    <section className="relative bg-white">
      <div
        ref={faqRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Common Questions
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Questions about working together
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.7 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="border border-gray-200 rounded-lg">
                      <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className="text-gray-700 mb-6">
            Don't see your question here?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-md"
          >
            Ask Us Anything
          </a>
        </motion.div>
      </div>
    </section>
  );
};