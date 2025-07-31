'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ServicesPage() {
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
            What We Offer
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Our Services
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Comprehensive solutions to modernize your business operations and drive sustainable growth.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-16">
      
      <div className="grid gap-8 lg:grid-cols-2 mt-16">
        <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Consulting</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Comprehensive business analysis and strategic planning to identify opportunities 
            for growth and operational improvement. We help you chart the course for sustainable success.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Business Process Analysis
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Market Research & Positioning
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Growth Strategy Development
            </li>
          </ul>
          <Link 
            href="/contact" 
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
        
        <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Digital Transformation</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Modernize your operations with cutting-edge technology solutions. From automation 
            to digital workflows, we help you leverage technology for competitive advantage.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Process Automation
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              System Integration
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Digital Workflow Design
            </li>
          </ul>
          <Link 
            href="/contact" 
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
        
        <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Operational Excellence</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Streamline your operations for maximum efficiency and quality. We implement proven 
            methodologies to reduce waste, improve quality, and increase productivity.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Lean Process Implementation
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Quality Management Systems
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Performance Optimization
            </li>
          </ul>
          <Link 
            href="/contact" 
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Three-Hour Website</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Get a professional website up and running in just three hours. Perfect for businesses 
            that need a strong online presence quickly and affordably.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Rapid Deployment
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              Mobile-Responsive Design
            </li>
            <li className="flex items-center">
              <span className="text-indigo-600 mr-2">✓</span>
              SEO Optimized
            </li>
          </ul>
          <Link 
            href="/services/three-hour-website" 
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </Container>
  );
}