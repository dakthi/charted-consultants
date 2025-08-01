'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const StorytellingHighlight = () => {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-white">
      <div
        ref={storyRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Storytelling Impact
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            How storytelling reshaped client presence
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Heritage Bakery Transformation</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Before: Invisible Expertise</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• No online presence beyond basic contact info</li>
                      <li>• 40 years of sourdough expertise completely undocumented</li>
                      <li>• Customers found them by accident or word-of-mouth only</li>
                      <li>• 2-3 online orders per week despite exceptional quality</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">After: Discoverable Authority</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Comprehensive process documentation with video</li>
                      <li>• SEO-optimized content that ranks for "artisan sourdough"</li>
                      <li>• Customer stories showcasing 40-year legacy</li>
                      <li>• 40+ online orders per week from people who understand the value</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded">
                  <h4 className="font-semibold text-gray-900 mb-2">The Story Strategy</h4>
                  <p className="text-gray-700 text-sm">
                    We didn't change what they do—we captured and communicated their expertise in ways 
                    that both search engines and customers could understand and trust.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/img/bakery.jpg"
                  alt="Heritage bakery transformation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-semibold text-blue-600 mb-1">1900%</div>
                  <div className="text-xs text-gray-700">Increase in online orders</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-semibold text-green-600 mb-1">#1</div>
                  <div className="text-xs text-gray-700">Google ranking for key terms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="text-2xl font-semibold text-purple-600 mb-1">300%</div>
                  <div className="text-xs text-gray-700">Growth in new customers</div>
                </div>
              </div>
              
              <blockquote className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 italic mb-3">
                  "People finally understand what makes our bread different. The orders started coming 
                  from customers who already knew they wanted artisan sourdough, not people who needed convincing."
                </p>
                <cite className="text-gray-700 not-italic">
                  <span className="font-medium">Sarah Mitchell</span><br />
                  <span className="text-sm">Owner, Heritage Bakery</span>
                </cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};