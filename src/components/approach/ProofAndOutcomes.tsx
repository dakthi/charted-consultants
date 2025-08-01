'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const ProofAndOutcomes = () => {
  const proofRef = useRef(null);
  const isProofInView = useInView(proofRef, { once: true, margin: '-100px' });

  const outcomes = [
    {
      metric: '300%',
      description: 'Average increase in qualified leads within 6 months',
      context: 'Across manufacturing, professional services, and retail clients'
    },
    {
      metric: '85%',
      description: 'Reduction in time spent on manual marketing tasks',
      context: 'Through automation and streamlined workflows'
    },
    {
      metric: '£2.4M',
      description: 'New revenue generated for a single client in year one',
      context: 'Heritage manufacturing company transformation'
    },
    {
      metric: '45%',
      description: 'Improvement in client acquisition cost',
      context: 'Better targeting and conversion optimization'
    }
  ];

  return (
    <section className="relative bg-white">
      <div
        ref={proofRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Proof & Outcomes
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            What happens when this approach is applied
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isProofInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <div className="text-4xl font-semibold text-blue-600 mb-2">{outcome.metric}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{outcome.description}</h3>
                <p className="text-sm text-gray-700">{outcome.context}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-50 p-8 rounded-lg mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Mini Case Snippet</h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A 40-year-old precision engineering firm was invisible online despite having superior 
                    quality and decades of expertise. They were losing contracts to competitors with 
                    better digital presence.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">The Approach</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Built owned digital foundation (website, CRM, analytics)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Created video case studies showcasing 40 years of expertise
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Established consistent content rhythm and performance tracking
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">The Results</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                      <div className="font-semibold text-gray-900">300% increase in qualified leads</div>
                      <div className="text-sm text-gray-700">From 2-3 per month to 12-15 per month</div>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                      <div className="font-semibold text-gray-900">£2.4M new revenue in year one</div>
                      <div className="text-sm text-gray-700">Direct attribution to digital transformation</div>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                      <div className="font-semibold text-gray-900">85% reduction in admin time</div>
                      <div className="text-sm text-gray-700">Automated quoting and client communication</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <blockquote className="text-xl font-light leading-relaxed mb-6 text-gray-900 max-w-3xl mx-auto">
              "We didn't just get a new website. We got a complete transformation of how customers 
              find us, understand what we do, and decide to work with us. The systems they built 
              are still driving growth two years later."
            </blockquote>
            <cite className="text-gray-700">
              <span className="font-medium">David Richardson</span><br />
              <span className="text-sm">Managing Director, Heritage Manufacturing</span>
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};