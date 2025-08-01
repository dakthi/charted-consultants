'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const StorytellingEngine = () => {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-gray-900 text-white">
      <div
        ref={storyRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Storytelling Engine
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-12 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Turning history and expertise into content people and AI understand
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Your decades of experience solving real problems is invaluable. But if Google and ChatGPT 
                don't understand what you do, potential clients will never find you.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We capture your expertise through filming, case studies, and content that works across 
                all platforms—from detailed long-form content for serious buyers to quick social clips 
                that build awareness.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Process Documentation</h4>
                    <p className="text-gray-400 text-sm">How you work, why it matters, what makes you different</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Case Study Creation</h4>
                    <p className="text-gray-400 text-sm">Real client stories that demonstrate your impact and approach</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Ready Content</h4>
                    <p className="text-gray-400 text-sm">Structured so search engines and AI tools can surface your expertise</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Content That Works Everywhere</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 text-green-400">Long-Form Content</h4>
                    <p className="text-gray-300 text-sm">Detailed case studies and process explanations for serious buyers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-green-400">Social Snippets</h4>
                    <p className="text-gray-300 text-sm">Quick insights and behind-the-scenes content for awareness</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-green-400">Video Documentation</h4>
                    <p className="text-gray-300 text-sm">Show your process, your team, and your results authentically</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-green-400">Search Optimization</h4>
                    <p className="text-gray-300 text-sm">Content structured for both human readers and AI understanding</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center bg-gray-800 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <blockquote className="text-xl font-light leading-relaxed mb-4 text-gray-200">
              "The best businesses aren't just good at what they do—they're good at explaining why it matters."
            </blockquote>
            <p className="text-gray-400 text-sm">
              Your story, told in ways that build trust and drive discovery
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};