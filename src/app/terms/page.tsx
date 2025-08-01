'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';

export default function TermsPage() {
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
      {/* Navbar - solid background for non-hero pages */}
      <div className="fixed top-0 left-0 w-full z-30 bg-gray-950/90 backdrop-blur-sm shadow-md">
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
            Legal
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Terms of Service
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Clear terms for working together, written in plain English.
          </motion.p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-20 bg-white scroll-snap-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2>1. Services</h2>
            <p>
              Charted Consultants provides business consulting, technology implementation, content strategy, and related services. All projects begin with a discovery call to understand your needs and determine if we're a good fit.
            </p>

            <h2>2. Ownership & Deliverables</h2>
            <p>
              Upon full payment, you own all deliverables we create for your project. This includes:
            </p>
            <ul>
              <li>Website code and assets</li>
              <li>Content created specifically for your business</li>
              <li>Processes and documentation we develop</li>
              <li>Domain names and hosting accounts registered in your name</li>
            </ul>
            <p>
              You receive admin access to all systems and complete documentation for everything we build.
            </p>

            <h2>3. Payment Terms</h2>
            <p>
              Projects are billed with 50% due to start work and 50% due upon completion. Invoices are due within 15 days. We accept bank transfers, checks, and credit cards.
            </p>
            <p>
              Ongoing support services (if selected) are billed monthly in advance.
            </p>

            <h2>4. Project Timeline</h2>
            <p>
              We provide estimated timelines for all projects. While we work diligently to meet deadlines, timelines may be affected by:
            </p>
            <ul>
              <li>Client feedback and revision cycles</li>
              <li>Third-party service dependencies</li>
              <li>Scope changes or additions</li>
            </ul>

            <h2>5. Revisions & Changes</h2>
            <p>
              Each project includes a reasonable number of revisions. Major scope changes may require additional work and will be discussed before proceeding.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              We respect your business information and maintain strict confidentiality. We may showcase completed work in our portfolio unless you request otherwise.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              Our liability for any claim related to our services is limited to the amount paid for those services. We are not liable for indirect, special, or consequential damages.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate a project with written notice. You will be billed for work completed up to the termination date and receive all deliverables completed at that time.
            </p>

            <h2>9. Third-Party Services</h2>
            <p>
              We may recommend third-party services (hosting, domains, software). You are responsible for agreements with these providers. We are not liable for their performance or policies.
            </p>

            <h2>10. Questions</h2>
            <p>
              Questions about these terms? Contact us at{' '}
              <a href="mailto:hello@chartedconsultants.com" className="text-indigo-600">
                hello@chartedconsultants.com
              </a>
              . We're happy to clarify anything.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}