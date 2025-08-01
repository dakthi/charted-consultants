'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CommonProblems = () => {
  const problemsRef = useRef(null);
  const isProblemsInView = useInView(problemsRef, { once: true, margin: '-100px' });

  const problems = [
    {
      question: "Can't update your website?",
      answer: "We build systems you can easily update yourself, with training and documentation so you're never stuck."
    },
    {
      question: "Relying on word of mouth?",
      answer: "We make your expertise discoverable online while preserving the trust-based relationships that built your business."
    },
    {
      question: "Drowning in manual processes?",
      answer: "We identify what can be automated without losing the personal touch that makes your service valuable."
    },
    {
      question: "Tech vendor holding you hostage?",
      answer: "We create solutions you own completely—no subscriptions you can't control, no platforms that can disappear."
    },
    {
      question: "No idea what's actually working?",
      answer: "We implement clear tracking and reporting so you know exactly where your business is growing and why."
    },
    {
      question: "Competing with bigger players?",
      answer: "We highlight what makes you different: your experience, your approach, your local knowledge, your care for customers."
    }
  ];

  return (
    <section className="relative bg-gray-50 scroll-snap-section">
      <div
        ref={problemsRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-600 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Common Challenges
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Problems we solve every day
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {problem.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {problem.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isProblemsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every business faces unique challenges, but many of the underlying problems are the same. 
            We've solved these before, and we can solve them for you.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-md"
          >
            Discuss Your Specific Situation
          </a>
        </motion.div>
      </div>
    </section>
  );
};