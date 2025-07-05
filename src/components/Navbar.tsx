'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

export const Navbar = () => {
  const navigation = [
    { label: 'Approach', href: '/approach' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Services', href: '/services' },
    { label: 'Resources', href: '/resources' },
  ];

  const [scrolled, setScrolled] = useState(false);

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
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
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
              className="text-sm font-medium transition-colors text-white"
            >
              {item.label}
            </Link>
          ))}

          {/* Start a conversation button — hover only on button itself */}
          <Link
            href="/contact"
            className="ml-6 px-4 py-2 uppercase bg-gray-800 rounded-md border border-white text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            Start a conversation
          </Link>
        </div>

        {/* Mobile Nav */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="md:hidden p-2 rounded-md transition text-white"
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

              <Disclosure.Panel className="md:hidden mt-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 transition text-white"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Start a conversation button (mobile) */}
                <Link
                  href="/contact"
                  className="block mt-2 px-4 py-2 text-center rounded-md border border-white text-white transition-colors hover:bg-white hover:text-black"
                >
                  Start a conversation
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
};
