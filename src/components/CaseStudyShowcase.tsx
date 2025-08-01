'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const CaseStudyShowcase = () => {
  const caseRef = useRef(null);
  const isCaseInView = useInView(caseRef, { once: true, margin: '-100px' });
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      title: 'Heritage Bakery → Digital Discovery',
      description: 'A 40-year-old family bakery was struggling with online visibility despite having the best sourdough in the city. Local customers loved them, but new residents couldn\'t find them.',
      before: '2-3 online orders per week',
      after: '40+ online orders per week',
      impact: '300% increase in new customer acquisition',
      image: '/img/bakery-case-study.jpg',
      category: 'E-commerce'
    },
    {
      title: 'Law Firm → Marketing Automation',
      description: 'A boutique law firm was spending 15 hours per week on manual marketing tasks and struggling to track which efforts actually brought in clients.',
      before: '15hrs/week manual marketing',
      after: '2hrs/week oversight',
      impact: '85% time savings, 40% more qualified leads',
      image: '/img/law-firm-case-study.jpg',
      category: 'Professional Services'
    },
    {
      title: 'Manufacturing → Supply Chain Optimization',
      description: 'A traditional manufacturing company needed to modernize their supply chain management to compete with digital-first competitors.',
      before: '3-day order processing time',
      after: 'Same-day order processing',
      impact: '70% faster delivery, 25% cost reduction',
      image: '/img/manufacturing-case-study.jpg',
      category: 'Manufacturing'
    },
    {
      title: 'Restaurant Chain → Customer Experience',
      description: 'A family restaurant chain wanted to improve customer experience while maintaining their personal touch across multiple locations.',
      before: 'Manual reservation system',
      after: 'Integrated digital platform',
      impact: '45% increase in repeat customers',
      image: '/img/restaurant-case-study.jpg',
      category: 'Hospitality'
    },
    {
      title: 'Consulting Firm → Knowledge Management',
      description: 'A boutique consulting firm needed better ways to capture and share institutional knowledge across their growing team.',
      before: 'Knowledge silos, repeated work',
      after: 'Centralized knowledge base',
      impact: '60% reduction in project setup time',
      image: '/img/consulting-case-study.jpg',
      category: 'Professional Services'
    },
    {
      title: 'Retail Store → Omnichannel Strategy',
      description: 'An established retail store wanted to blend their physical and digital presence without losing their community feel.',
      before: 'In-store only sales',
      after: 'Integrated online-offline experience',
      impact: '200% increase in customer reach',
      image: '/img/retail-case-study.jpg',
      category: 'Retail'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(caseStudies.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(caseStudies.length / 3)) % Math.ceil(caseStudies.length / 3));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gray-50">
      <div
        ref={caseRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Real Results
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-4 text-gray-900 text-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          From invisible to undeniable
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          See how we've helped businesses like yours achieve measurable transformation
        </motion.p>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isCaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(caseStudies.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(caseStudies.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {caseStudies.slice(slideIndex * 3, slideIndex * 3 + 3).map((study, index) => (
                      <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={study.image || '/img/Portrait_Placeholder.png'}
                            alt={study.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                              {study.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">{study.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                            {study.description}
                          </p>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-gray-700"><strong>Before:</strong> {study.before}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-gray-700"><strong>After:</strong> {study.after}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                              <span className="text-gray-700"><strong>Impact:</strong> {study.impact}</span>
                            </div>
                          </div>
                          <Link 
                            href="/cases"
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                          >
                            Read Full Case Study
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Cases CTA */}
          <div className="text-center mt-12">
            <Link
              href="/cases"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              View All Case Studies
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};