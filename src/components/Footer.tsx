import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    { name: "Approach", href: "/approach" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/cases" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
  ];

  const legal = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative bg-gray-950 dark:bg-gray-950">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between text-white gap-10 pt-10">
          {/* Company Info */}
          <div className="lg:w-1/3 max-w-md text-sm text-white leading-relaxed">
            Charted is a boutique consultancy and operational partner for owner-led businesses.  
            <br />
            Email: <a href="mailto:chartedconsultants.co@gmail.com" className="underline hover:text-gray-300">chartedconsultants.co@gmail.com</a> 
            <br />
            Based in London, UK.
          </div>

          {/* Links */}
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Navigation */}
            <div>
              <div className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <div className="flex flex-col space-y-2">
                {legal.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="text-sm text-white mb-3">Stay connected</div>
              <div className="flex space-x-5 text-white">
                <a
                  href="https://www.instagram.com/charted_consultants/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/107766376/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 text-xs text-center text-white">
          &copy; {new Date().getFullYear()} Charted Consultants. All rights reserved.
        </div>
      </Container>
    </div>
  );
}

const LinkedIn = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.1V24h-4v-7.7c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.95 1.99-2.95 4.05V24h-4V8z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);
