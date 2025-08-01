'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const TeamAndTools = () => {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });

  const tools = [
    { name: 'Next.js & React', category: 'Development', description: 'Modern, fast, SEO-friendly websites' },
    { name: 'Tailwind CSS', category: 'Design', description: 'Clean, responsive, maintainable styling' },
    { name: 'Vercel', category: 'Hosting', description: 'Reliable, fast, scalable deployment' },
    { name: 'Stripe', category: 'Payments', description: 'Secure, trusted payment processing' },
    { name: 'Google Analytics', category: 'Analytics', description: 'Comprehensive traffic and behavior tracking' },
    { name: 'Figma', category: 'Design', description: 'Collaborative design and prototyping' }
  ];

  return (
    <section className="relative bg-gray-900 text-white scroll-snap-section">
      <div
        ref={teamRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Team & Tools
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            The mix of human expertise and lightweight technology that powers our approach
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isTeamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Human Expertise</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/img/Portrait_Placeholder.png"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Strategy</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Understanding legacy business operations, identifying growth opportunities, 
                      and designing sustainable transformation strategies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/img/Portrait_Placeholder.png"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Development</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Building robust, scalable systems using proven technologies. 
                      Focus on ownership, performance, and long-term maintainability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/img/Portrait_Placeholder.png"
                      alt="Team member"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Content Strategy</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Capturing your expertise in formats that work across platforms, 
                      from detailed case studies to social media content.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isTeamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Lightweight Technology</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We use proven, reliable tools that prioritize performance, ownership, and simplicity. 
                No experimental frameworks, no vendor lock-ins, no unnecessary complexity.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{tool.name}</h4>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center bg-gray-800 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4">Why This Combination Works</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2 text-blue-400">Business-First Thinking</h4>
                <p className="text-gray-300">Technology serves your business strategy, not the other way around</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-green-400">Proven Reliability</h4>
                <p className="text-gray-300">Tools and approaches with track records, not experiments</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-purple-400">Long-term Sustainability</h4>
                <p className="text-gray-300">Systems built to last and evolve with your business</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};