'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import { About } from '@/components/About';
import { VisionStatement } from '@/components/VisionStatement';
import { KeyInsight } from '@/components/KeyInsight';
import { BehindTheScenes } from '@/components/BehindTheScenes';
import { CaseStudyShowcase } from '@/components/CaseStudyShowcase';
import { MiniClientQuote } from '@/components/MiniClientQuote';
import { FounderStory } from '@/components/FounderStory';
import { VisualGallery } from '@/components/VisualGallery';
import { CommonProblems } from '@/components/CommonProblems';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CallToConversation } from '@/components/CallToConversation';
import { TextHero } from '@/components/TextHero';
import ChartedServicesStepper from '@/components/ChartedServicesStepper';

export default function HomePage() {
  // useLenis(); // Disabled - using native scroll snap instead

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const textHeroRef = useRef(null);
  const isTextHeroInView = useInView(textHeroRef, { once: true, margin: '-100px' });

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
    <div className="relative min-h-screen">
      {/* Full-screen background */}
      <div className="block md:hidden fixed inset-0 z-0">
        <Image
          src="/img/lone-sailboat-2.png"
          alt="Lone Sailboat"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop background image */}
      <div
        className="hidden md:block fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/img/lone-sailboat-2.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/30 z-10" />

      {/* Transparent Navbar - only for homepage */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <Navbar />
      </div>

      {/* All content flows over background */}
      <div className="relative z-20">
        {/* Hero Content */}
        <section className="scroll-snap-section-full">
          <div
            ref={heroRef}
            className="flex flex-col justify-center px-6 md:px-12 text-white py-12 min-h-screen"
          >
            <motion.p
              className="uppercase text-sm tracking-wide mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Our Mission
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            >
              Business is hard, when no one knows you&apos;re doing it.
            </motion.h1>

            <motion.p
              className="text-md tracking-wide mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              "In storms, it&apos;s almost always the sailor who gives up first — not the boat."
              <br />
              With the right systems, you won&apos;t have to.
            </motion.p>

            <motion.p
              className="text-sm italic tracking-wide mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              Charted Consultants build and hand over tech you actually own, not rent.
              <br />
              Then, we make sure Google and ChatGPT know who you are.
            </motion.p>

            <motion.a
              href="/learn-more"
              className="mt-8 inline-block border-b border-white text-white hover:opacity-80 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.1, duration: 0.7 }}
            >
              Learn More
            </motion.a>
          </div>
        </section>
      </div>
      
      {/* All remaining sections with their own backgrounds */}
      <About />
      <VisionStatement />
      <KeyInsight />
      <BehindTheScenes />
      <CaseStudyShowcase />
      <MiniClientQuote />
      <FounderStory />
      <VisualGallery />
      <CommonProblems />
      <TextHero />
      <ChartedServicesStepper />
      <FAQAccordion />
      <CallToConversation />
    </div>
  );
}
