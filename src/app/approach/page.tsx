'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ApproachPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative isolate">
        {/* Mobile image */}
        <div className="block md:hidden w-full">
          <img
            src="/img/lone-sailboat-2.png"
            alt="Lone Sailboat"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Desktop background image */}
        <div
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/lone-sailboat-2.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Dark overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/60 z-10" />

        {/* Hero Content */}
        <div
          ref={heroRef}
          className="relative z-20 flex flex-col justify-center px-6 md:px-12 text-white py-12 md:h-[50vh]"
        >
          <motion.p
            className="uppercase text-sm tracking-wide mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our Method
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            How We Work
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Our proven approach to transforming legacy businesses with modern operations.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-16">
      
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mt-16">
        <div className="lg:col-span-2 xl:col-span-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We start by understanding your business inside and out. Through comprehensive analysis 
                of your current operations, market position, and growth potential, we identify key 
                opportunities for modernization and efficiency gains.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Strategic Planning</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Based on our findings, we develop a tailored roadmap that aligns with your business 
                goals. Our strategic approach ensures that every recommendation is practical, 
                measurable, and designed for sustainable growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Implementation & Support</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We don't just plan – we execute. Our team works closely with yours to implement 
                solutions, provide ongoing support, and ensure that changes deliver the expected 
                results. We're your partners in transformation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-1">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Why Our Approach Works</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                Data-driven decision making
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                Tailored to your industry
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                Focus on measurable results
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                Long-term partnership mindset
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
}