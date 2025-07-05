'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import { TextHero } from '@/components/TextHero';
import ChartedServicesStepper from '@/components/ChartedServicesStepper';

export default function HomePage() {
  useLenis();

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

        {/* Optional dark overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content */}
        <div
          ref={heroRef}
          className="
            relative z-20
            flex flex-col justify-center
            px-6 md:px-12 text-white
            py-12 md:h-screen
          "
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
            “In storms, it&apos;s almost always the sailor who gives up first — not the boat."
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
      </div>

      <TextHero />
      <ChartedServicesStepper />
      {/* Main Content */}
    </>
  );
}
