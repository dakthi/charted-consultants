'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ResourcesPage() {
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
            Knowledge Hub
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Resources
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Insights, guides, and tools to help you navigate business transformation and growth.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-16">
      
      <div className="grid gap-8 mt-16">
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Business Strategy
              </span>
              <span className="text-sm text-gray-500">Latest Articles</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Planning Resources</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Comprehensive guides and frameworks for developing and executing successful 
              business strategies. Learn from industry experts and proven methodologies.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Browse Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Templates & Tools</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ready-to-use templates for business planning, process documentation, and 
              project management to accelerate your transformation initiatives.
            </p>
            <Link 
              href="/contact" 
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Request Access →
            </Link>
          </div>
          
          <div className="bg-white border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Webinars & Training</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Educational content and training sessions covering the latest trends in 
              business operations, digital transformation, and strategic planning.
            </p>
            <Link 
              href="/contact" 
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View Schedule →
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Personalized Guidance?</h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              While our resources provide valuable insights, every business is unique. 
              Get personalized recommendations and strategies tailored to your specific situation.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry Reports</h4>
            <p className="text-gray-600 text-sm">
              Annual insights and trends analysis across key industries
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Community Forum</h4>
            <p className="text-gray-600 text-sm">
              Connect with peers and share experiences in business transformation
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">
              Get answers to your questions from our team of experienced consultants
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}