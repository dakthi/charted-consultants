'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const HowWeWorkTogether = () => {
  const workRef = useRef(null);
  const isWorkInView = useInView(workRef, { once: true, margin: '-100px' });

  const phases = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      description: 'Deep dive into your business, market, and current operations',
      activities: [
        'Business process analysis',
        'Competitive landscape review',
        'Client journey mapping',
        'Technology audit',
        'Growth opportunity identification'
      ]
    },
    {
      phase: 'Design',
      duration: '2-3 weeks',
      description: 'Strategic planning and system architecture',
      activities: [
        'Information architecture',
        'User experience design',
        'Technical specification',
        'Content strategy planning',
        'Integration planning'
      ]
    },
    {
      phase: 'Implementation',
      duration: '4-8 weeks',
      description: 'Building your systems and content foundation',
      activities: [
        'Development and testing',
        'Content creation and filming',
        'System integration',
        'Quality assurance',
        'Performance optimization'
      ]
    },
    {
      phase: 'Refinement',
      duration: 'Ongoing',
      description: 'Monitoring, optimization, and iterative improvement',
      activities: [
        'Performance monitoring',
        'User feedback analysis',
        'Content optimization',
        'Feature enhancements',
        'Training and support'
      ]
    }
  ];

  return (
    <section className="relative bg-gray-50">
      <div
        ref={workRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-600 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our Process
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            How We Work Together
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Every project follows a structured approach designed to minimize disruption while maximizing impact. 
              You'll be involved at every step, with clear milestones and regular communication.
            </p>
          </motion.div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isWorkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-gray-500">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-blue-50 p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isWorkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">What Makes Our Process Different</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Business-First Approach</h4>
                <p className="text-gray-600 text-sm">
                  We start with your business needs, not technical possibilities. 
                  Every recommendation serves a clear business purpose.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparent Communication</h4>
                <p className="text-gray-600 text-sm">
                  Regular updates, clear timelines, and honest feedback. 
                  You'll always know what's happening and why.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Knowledge Transfer</h4>
                <p className="text-gray-600 text-sm">
                  We document everything and train your team so you're never 
                  dependent on external support for basic updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};