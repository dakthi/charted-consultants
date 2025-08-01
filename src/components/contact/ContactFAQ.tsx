'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function ContactFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What happens after I reach out?",
      answer: "We'll respond within 24 hours with thoughtful questions about your situation. If we think we can help, we'll schedule a 45-minute discovery call to understand your needs better. No sales pressure - just honest conversation about whether we're a good fit."
    },
    {
      question: "How much does it cost to work with you?",
      answer: "Our Foundation Package typically ranges from $8,000-$15,000 depending on complexity. The Complete Package (including content creation and momentum systems) ranges from $15,000-$25,000. We provide fixed-price proposals after our discovery call, so no surprises."
    },
    {
      question: "Do you work with businesses outside the US?",
      answer: "Absolutely. We work with clients globally and are experienced with different time zones, business practices, and technical requirements. We'll accommodate your schedule for calls and ensure all systems work properly in your region."
    },
    {
      question: "What if I just need advice, not a full project?",
      answer: "We offer strategic consulting sessions for businesses who want expert guidance on specific challenges. This might include platform migration advice, content strategy planning, or tech stack recommendations. Sessions start at $500 for 2 hours."
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
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Questions before you reach out?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are the most common questions we get from potential clients.
          </p>
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
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              Every situation is unique. We're happy to discuss your specific circumstances and answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@chartedconsultants.com"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Your Question
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-white text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Quick Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}