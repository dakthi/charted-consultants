'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import { FeaturedGuides } from '@/components/resources/FeaturedGuides';
import { TemplateLibrary } from '@/components/resources/TemplateLibrary';
import { CaseStudyHighlights } from '@/components/resources/CaseStudyHighlights';
import { VideoTutorials } from '@/components/resources/VideoTutorials';
import { ToolsRecommended } from '@/components/resources/ToolsRecommended';
import { GlossaryTerms } from '@/components/resources/GlossaryTerms';
import { ResourcesFAQ } from '@/components/resources/ResourcesFAQ';
import { SubscribeDownload } from '@/components/resources/SubscribeDownload';
import { CommunityNextSteps } from '@/components/resources/CommunityNextSteps';

export default function ResourcesPage() {
  // useLenis(); // Disabled - using native scroll snap instead

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  // --- Simple scroll detection ---
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // ------------------------------

  return (
    <>
      {/* Transparent Navbar - same as homepage */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section with Same Background as Homepage */}
      <div className="relative isolate scroll-snap-section-full">
        {/* Mobile image */}
        <div className="block md:hidden w-full">
          <Image
            src="/img/lone-sailboat-2.png"
            alt="Lone Sailboat"
            width={800}
            height={600}
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

        {/* Dark overlay for readability */}
        <div className="hidden md:block absolute inset-0 bg-black/30 z-10" />

        {/* Hero Content */}
        <div
          ref={heroRef}
          className="relative z-20 flex flex-col justify-center px-6 md:px-12 text-white py-12 md:h-screen"
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
            Practical tools, guides, and insights for modern operators.
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Everything you need to own your digital presence and build sustainable momentum.
          </motion.p>
        </div>
      </div>

      {/* Resources Components */}
      <FeaturedGuides />
      <TemplateLibrary />
      <CaseStudyHighlights />
      <VideoTutorials />
      <ToolsRecommended />
      <GlossaryTerms />
      <ResourcesFAQ />
      <SubscribeDownload />
      <CommunityNextSteps />
    </>
  );
}