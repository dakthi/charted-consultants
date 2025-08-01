'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function ResourcesFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need an agency or can I DIY?",
      answer: "It depends on your timeline, budget, and technical comfort level. Many of our resources are designed for DIY implementation. However, if you want to move quickly and ensure everything is done right the first time, working with professionals can save you months of trial and error. We offer both full-service implementation and DIY support options."
    },
    {
      question: "What's the fastest way to launch a site?",
      answer: "The fastest path is our Foundation Package: a professional website with integrated booking and payments, typically delivered in 3-4 weeks. If you're going DIY, using our templates and following our step-by-step guides, you can have a basic site live in a weekend, though full optimization takes longer."
    },
    {
      question: "How do I know if I should migrate from my current platform?",
      answer: "If you're paying monthly fees for basic features, can't customize your site the way you want, or feel locked into a platform, it's worth considering migration. Our migration guide walks through the costs, benefits, and step-by-step process. The general rule: if you're planning to be in business for more than 2 years, ownership pays off."
    },
    {
      question: "What if I'm not technical at all?",
      answer: "Most of our clients aren't technical when they start. Our resources are written in plain English with step-by-step instructions. We also offer 'hand-holding' support packages where we guide you through implementation via screen sharing sessions. The goal is always to make you self-sufficient, not dependent."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="uppercase text-sm tracking-wide text-gray-700 mb-2">
            FAQ Section
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Common questions about getting started
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="text-gray-700 mb-4">
            Have a question that's not covered here?
          </p>
          <a 
            href="mailto:hello@chartedconsultants.com" 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Email us directly →
          </a>
        </motion.div>
      </div>
    </section>
  );
}