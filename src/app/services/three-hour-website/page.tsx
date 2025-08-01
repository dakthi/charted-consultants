'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import { THWHero } from '@/components/THW/THWHero';
import { THWHowItWorks } from '@/components/THW/THWHowItWorks';
import { THWExampleSites } from '@/components/THW/THWExampleSites';
import { THWPricing } from '@/components/THW/THWPricing';
import { THWFAQ } from '@/components/THW/THWFAQ';
import { THWCTA } from '@/components/THW/THWCTA';
import { THWVideo } from '@/components/THW/THWVideo';
export default function THWPage() {
  useLenis();

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
      {/* Global Navbar - always on top */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950 text-black shadow-md'
            : 'bg-transparent text-white'
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative isolate">
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

        {/* Optional dark overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div
          ref={heroRef}
          className="relative z-20 flex flex-col justify-center px-6 md:px-12 text-white py-12 min-h-screen"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <THWHero />
          </motion.div>
        </div>
      </div>
      {/* These should not be constrained to hero height */}
      <THWHowItWorks />
      <THWExampleSites />
      <THWPricing />

      <THWFAQ />
      <THWCTA />
     
    </>
  );
}
