'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';

export const Navbar = () => {
  const navigation = [
    { 
      label: 'Approach', 
      href: '/approach',
      submenu: [
        { label: 'Our Philosophy', href: '/approach#philosophy' },
        { label: 'Where We Start', href: '/approach#discovery' },
        { label: 'Momentum System', href: '/approach#momentum' },
        { label: 'Working Together', href: '/approach#process' }
      ]
    },
    { 
      label: 'Case Studies', 
      href: '/cases',
      submenu: [
        { label: 'All Case Studies', href: '/cases' },
        { label: 'Heritage Manufacturing', href: '/cases#heritage' },
        { label: 'Digital Transformations', href: '/cases#digital' },
        { label: 'Success Stories', href: '/cases#stories' }
      ]
    },
    { 
      label: 'Services', 
      href: '/services',
      submenu: [
        { label: 'All Services', href: '/services' },
        { label: 'Three-Hour Website', href: '/services/three-hour-website' },
        { label: 'Technology Foundation', href: '/services#technology' },
        { label: 'Story Engine', href: '/services#story' },
        { label: 'System Integration', href: '/services#integration' },
        { label: 'Pricing Philosophy', href: '/services#pricing' }
      ]
    },
    { 
      label: 'Resources', 
      href: '/resources',
      submenu: [
        { label: 'All Resources', href: '/resources' },
        { label: 'Featured Guides', href: '/resources#guides' },
        { label: 'Templates & Tools', href: '/resources#tools' },
        { label: 'Blog Articles', href: '/blog' },
        { label: 'Download Pack', href: '/resources#download' }
      ]
    },
    {
      label: 'About',
      href: '/join-us',
      submenu: [
        { label: 'Our Consultants', href: '/join-us' },
        { label: 'Join Our Network', href: '/join-us#apply' },
        { label: 'Company Story', href: '/contact#about' }
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      submenu: [
        { label: 'Start a Conversation', href: '/contact' },
        { label: 'Quick Contact Form', href: '/contact#form' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  useEffect(() => {
    const SHRINK_SCROLL_Y = 60;
    const UNSHRINK_SCROLL_Y = 10;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > SHRINK_SCROLL_Y && !scrolled) {
        setScrolled(true);
      } else if (scrollY < UNSHRINK_SCROLL_Y && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run once at mount to set initial state correctly:
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div
      className={`w-full sticky top-0 z-[1000] transition-all duration-300 hover:bg-gray-950 ${
        scrolled ? 'bg-gray-950' : 'bg-transparent'
      }`}
    >
      {/* Burger Menu - Outside Container */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              aria-label="Toggle Menu"
              className="fixed left-4 md:left-6 p-2 rounded-md transition text-white hover:bg-gray-800 z-[1001]"
              style={{ 
                top: scrolled ? '1.5rem' : '2rem',
                transform: 'translateY(0)'
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Disclosure.Button>

            {/* Large Dropdown Menu - full width, 1/2 screen height */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "50vh", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-0 left-0 w-full overflow-hidden bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-2xl z-[1000]"
                >
                  <div className="h-full flex flex-col">
                    {/* Search Bar */}
                    <motion.div 
                      className="px-6 py-4 border-b border-gray-200 bg-gray-50/50"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <div className="container mx-auto">
                        <div className="relative">
                          <svg 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search pages, services, resources..."
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Stepper Layout */}
                    <div className="flex-1 flex">
                      {/* Left Sidebar - Main Menu (1/5) */}
                      <motion.div 
                        className="w-1/5 bg-gray-50 border-r border-gray-200 p-6"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {/* Logo Section */}
                        <div className="mb-8 pb-6 border-b border-gray-200">
                          <Link href="/" className="block">
                            <div className="flex items-center space-x-3 mb-2">
                              <Image
                                src="/img/logo-white.png"
                                alt="Charted logo"
                                width={40}
                                height={40}
                                className="object-contain bg-gray-900 p-2 rounded-lg"
                                priority
                              />
                              <span className="font-semibold text-lg text-gray-900">
                                Charted
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              modern operators for legacy businesses
                            </p>
                          </Link>
                        </div>

                        <h3 className="text-sm uppercase tracking-wide text-gray-600 font-semibold mb-6">
                          Navigation
                        </h3>
                        <nav className="space-y-2">
                          {navigation.map((item, index) => (
                            <motion.button
                              key={item.label}
                              onClick={() => setActiveMenuItem(index)}
                              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                activeMenuItem === index
                                  ? 'bg-white text-gray-900 shadow-sm'
                                  : 'text-gray-700 hover:bg-white/50 hover:text-gray-900'
                              }`}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{item.label}</span>
                                <svg 
                                  className={`w-4 h-4 transition-transform ${
                                    activeMenuItem === index ? 'rotate-0' : ''
                                  }`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </motion.button>
                          ))}
                        </nav>
                      </motion.div>

                      {/* Right Content Area - Submenu (4/5) */}
                      <motion.div 
                        className="w-4/5 p-6"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                      >
                        <div className="container mx-auto max-w-5xl">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeMenuItem}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.2 }}
                            >
                              {/* Active Menu Content */}
                              <div className="mb-6">
                                <h2 className="text-2xl font-light text-gray-900 mb-2">
                                  {navigation[activeMenuItem].label}
                                </h2>
                                <p className="text-gray-600 mb-6">
                                  {activeMenuItem === 0 && "Our proven methodology for helping legacy businesses modernize without losing their human touch."}
                                  {activeMenuItem === 1 && "Real results from businesses we've helped transform their digital presence and operational efficiency."}
                                  {activeMenuItem === 2 && "Comprehensive technology solutions, storytelling, and momentum systems for sustainable growth."}
                                  {activeMenuItem === 3 && "Tools, guides, and resources to help you build and grow your business with confidence."}
                                  {activeMenuItem === 4 && "Get in touch to start building your digital foundation and tell your story."}
                                </p>
                              </div>

                              {/* Submenu Grid */}
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {navigation[activeMenuItem].submenu.map((subItem, index) => (
                                  <motion.div
                                    key={subItem.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.2 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
                                    >
                                      <h4 className="font-medium text-gray-900 mb-1">
                                        {subItem.label}
                                      </h4>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>

                              {/* CTA Section */}
                              {activeMenuItem === 4 && (
                                <motion.div
                                  className="mt-8 p-6 bg-gray-900 rounded-lg text-center"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                  <h3 className="text-xl font-medium text-white mb-4">
                                    Ready to get started?
                                  </h3>
                                  <Link
                                    href="/contact"
                                    className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                  >
                                    Start a conversation
                                  </Link>
                                </motion.div>
                              )}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>

      <Container>
        <nav className="relative flex items-center justify-between py-4 md:py-6">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/img/logo-white.png"
              alt="Charted logo"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
            <div className="flex flex-col space-y-0.5">
              <span
                className={`font-semibold transition-all duration-300 ${
                  scrolled ? 'text-xl' : 'text-2xl'
                } text-white`}
              >
                Charted
              </span>
              <span
                className={`transition-all duration-300 ${
                  scrolled ? 'text-xs hidden md:block' : 'text-sm'
                } text-gray-100`}
              >
                modern operators for legacy businesses
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors text-white hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}

            {/* WhatsApp Icon */}
            <Link
              href="https://wa.me/447123456789?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20digital%20transformation%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              title="WhatsApp"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
            </Link>

            {/* Start a conversation button */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 uppercase bg-gray-800 rounded-md border border-white text-sm text-white transition-colors hover:bg-white hover:text-black"
            >
              Start a conversation
            </Link>
          </div>

        </nav>
      </Container>
    </div>
  );
};
