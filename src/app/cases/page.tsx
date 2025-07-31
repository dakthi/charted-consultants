'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function CasesPage() {
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
            Success Stories
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Case Studies
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Real results from real businesses. See how we've helped companies transform their operations.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-16">
      
      <div className="grid gap-8 mt-16">
        <div className="bg-white border rounded-lg p-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Manufacturing Efficiency Overhaul</h3>
              <p className="text-gray-600">Mid-size Manufacturing Company</p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Completed
            </span>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            A 50-year-old manufacturing company was struggling with outdated processes and declining 
            productivity. We implemented modern operational frameworks and digital tools that resulted 
            in a 35% increase in efficiency and 22% reduction in operational costs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">35%</div>
              <div className="text-sm text-gray-600">Efficiency Increase</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">22%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">6 months</div>
              <div className="text-sm text-gray-600">Implementation Time</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border rounded-lg p-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Digital Transformation for Retail</h3>
              <p className="text-gray-600">Family-owned Retail Chain</p>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Completed
            </span>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            A traditional retail chain needed to compete with e-commerce giants. We developed a 
            comprehensive digital strategy that integrated online and offline operations, resulting 
            in 180% growth in online sales and improved customer experience across all channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">180%</div>
              <div className="text-sm text-gray-600">Online Sales Growth</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">45%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">8 months</div>
              <div className="text-sm text-gray-600">Full Integration</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border rounded-lg p-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Business Modernization</h3>
              <p className="text-gray-600">Professional Services Firm</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              In Progress
            </span>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            A traditional professional services firm wanted to scale their operations and improve 
            client delivery. We're currently implementing new project management systems and 
            client communication tools to streamline their workflow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">60%</div>
              <div className="text-sm text-gray-600">Process Automation</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">3x</div>
              <div className="text-sm text-gray-600">Faster Delivery</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-indigo-600">12 months</div>
              <div className="text-sm text-gray-600">Project Timeline</div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
}