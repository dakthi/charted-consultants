'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';

export default function PrivacyPage() {
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
            Legal
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-lg max-w-2xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            How we handle your information, with transparency and respect.
          </motion.p>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="py-20 bg-white scroll-snap-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8">
              <p className="text-indigo-800 font-medium">
                <strong>Simple version:</strong> We collect minimal information, use it only for legitimate business purposes, never sell it, and you can request deletion anytime. Full details below.
              </p>
            </div>

            <h2>1. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Name, email, phone number when you contact us</li>
              <li>Company information when relevant to our services</li>
              <li>Project details and business requirements</li>
              <li>Feedback and correspondence</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li>Website usage data (pages visited, time spent)</li>
              <li>Device and browser information</li>
              <li>IP address and general location (city/country level)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your inquiries and provide services</li>
              <li>Communicate about projects and ongoing work</li>
              <li>Send relevant resources (if you've opted in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, rent, or trade your information. We may share information only:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>With service providers who help us operate (hosting, email services)</li>
              <li>If required by law or to protect our rights</li>
            </ul>

            <h2>4. Data Storage & Security</h2>
            <p>
              Your information is stored securely using industry-standard practices. We use reputable third-party services for hosting and email management. While we take security seriously, no system is 100% secure.
            </p>

            <h2>5. Analytics & Cookies</h2>
            <p>
              We use Google Analytics to understand how our website is used. This helps us improve the user experience. You can opt out of Google Analytics tracking through your browser settings or Google's opt-out tools.
            </p>
            <p>
              We use minimal cookies for basic functionality. No advertising or tracking cookies.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the information we have about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2>7. Retention</h2>
            <p>
              We keep your information only as long as necessary to provide services and meet legal obligations. Contact information is typically kept for 3 years after last contact unless you request deletion.
            </p>

            <h2>8. International Transfers</h2>
            <p>
              Our services may involve transferring data internationally. We ensure appropriate safeguards are in place for any international transfers.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to anyone under 18. We do not knowingly collect information from children under 18.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. Changes will be posted on this page with an updated date. Significant changes will be communicated directly.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              Questions about this privacy policy or your data? Contact us at{' '}
              <a href="mailto:hello@chartedconsultants.com" className="text-indigo-600">
                hello@chartedconsultants.com
              </a>
              . We respond to all privacy inquiries within 7 days.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <p>
                  <strong>Unsubscribe from emails:</strong>{' '}
                  <a href="mailto:hello@chartedconsultants.com?subject=Unsubscribe" className="text-indigo-600">
                    Send us an email
                  </a>
                </p>
                <p>
                  <strong>Request your data:</strong>{' '}
                  <a href="mailto:hello@chartedconsultants.com?subject=Data Request" className="text-indigo-600">
                    Email us
                  </a>
                </p>
                <p>
                  <strong>Delete your data:</strong>{' '}
                  <a href="mailto:hello@chartedconsultants.com?subject=Delete My Data" className="text-indigo-600">
                    Request deletion
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}