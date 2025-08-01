'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicePillarsOverview } from '@/components/services/ServicePillarsOverview';
import { TechnologyDetail } from '@/components/services/TechnologyDetail';
import { StoryDetail } from '@/components/services/StoryDetail';
import { MomentumDetail } from '@/components/services/MomentumDetail';
import { SystemIntegration } from '@/components/services/SystemIntegration';
import { OwnershipHandover } from '@/components/services/OwnershipHandover';
import { ExampleWorkflow } from '@/components/services/ExampleWorkflow';
import { PricingPhilosophy } from '@/components/services/PricingPhilosophy';
import { ServicesCallToAction } from '@/components/services/ServicesCallToAction';

export default function ServicesPage() {
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
            What We Build
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            From invisible to unmistakable.
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Technology + Story + Momentum. Built for ownership, not dependency.
          </motion.p>
        </div>
      </div>

      {/* Services Components */}
      <ServicePillarsOverview />
      <TechnologyDetail />
      <StoryDetail />
      <MomentumDetail />
      <SystemIntegration />
      <OwnershipHandover />
      <ExampleWorkflow />
      <PricingPhilosophy />
      <ServicesCallToAction />
    </>
  );
}