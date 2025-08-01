'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const QuickGrid = () => {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' });

  const caseCards = [
    {
      title: 'Heritage Bakery',
      industry: 'Food & Beverage',
      challenge: 'Local business struggling with online visibility',
      outcome: '40+ online orders per week from 2-3',
      image: '/img/bakery.jpg',
      tags: ['Storytelling', 'E-commerce']
    },
    {
      title: 'Precision Engineering',
      industry: 'Manufacturing',
      challenge: 'Losing contracts to competitors with better digital presence',
      outcome: '£2.4M new revenue in first year',
      image: '/img/lieu-article-1.png',
      tags: ['Full Transformation', 'B2B']
    },
    {
      title: 'Maritime Law Firm',
      industry: 'Professional Services',
      challenge: '15 hours/week spent on manual marketing tasks',
      outcome: '85% time savings, 40% more qualified leads',
      image: '/img/lieu-article-4.png',
      tags: ['Automation', 'Legal']
    },
    {
      title: 'Family Restaurant Group',
      industry: 'Hospitality',
      challenge: 'Competing with chain restaurants on convenience',
      outcome: '180% growth in direct bookings',
      image: '/img/lieu-article-5.png',
      tags: ['Technology', 'Hospitality']
    }
  ];

  return (
    <section className="relative bg-gray-50">
      <div
        ref={gridRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Success Stories
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Transformations across industries
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseCards.map((caseCard, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={caseCard.image}
                    alt={caseCard.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {caseCard.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {caseCard.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseCard.title}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Challenge</h4>
                      <p className="text-sm text-gray-700">{caseCard.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Outcome</h4>
                      <p className="text-sm text-blue-600 font-medium">{caseCard.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                      Read full case study →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isGridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-gray-700 mb-6">
              Each transformation is unique, but the principles remain consistent: 
              ownership, expertise, and sustainable growth.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-md"
            >
              View All Case Studies
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};