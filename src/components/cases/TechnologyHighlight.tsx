'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TechnologyHighlight = () => {
  const techRef = useRef(null);
  const isTechInView = useInView(techRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white">
      <div
        ref={techRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Technology Deployment
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Maritime Law Firm: From Manual to Automated
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isTechInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-6">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                A prestigious maritime law firm was spending 15 hours per week on manual marketing tasks: 
                updating their website, sending newsletters, tracking leads, and following up with prospects. 
                Their partners were lawyers, not marketers, and the administrative burden was preventing them 
                from focusing on billable work.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Problems We Identified</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      Manual content updates taking 3+ hours per week
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      No lead tracking or qualification system
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      Newsletter creation requiring 4-5 hours monthly
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      No visibility into which marketing efforts actually worked
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isTechInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">The Solution</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Automated Content Management</h4>
                      <p className="text-gray-300 text-sm">Content scheduling system that publishes case studies, insights, and news automatically</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Lead Tracking & Analytics</h4>
                      <p className="text-gray-300 text-sm">Comprehensive dashboard showing lead sources, conversion rates, and ROI by channel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Automated Nurture Sequences</h4>
                      <p className="text-gray-300 text-sm">Email sequences that educate prospects about maritime law complexities automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-white font-medium mb-1">Time Savings</div>
              <div className="text-gray-400 text-sm">From 15 hours/week to 2 hours/week</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-white font-medium mb-1">More Qualified Leads</div>
              <div className="text-gray-400 text-sm">Better targeting and nurturing</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
              <div className="text-white font-medium mb-1">ROI Improvement</div>
              <div className="text-gray-400 text-sm">Clear attribution and optimization</div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isTechInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            <blockquote className="text-xl font-light leading-relaxed mb-6 text-gray-200 max-w-3xl mx-auto">
              "We went from spending more time on marketing than on legal work to having a system 
              that runs itself. Our partners can focus on what they do best while still growing the practice."
            </blockquote>
            <cite className="text-gray-400">
              <span className="font-medium">James Harrison</span><br />
              <span className="text-sm">Senior Partner, Maritime Legal Associates</span>
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};