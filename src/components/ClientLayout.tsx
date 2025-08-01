'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pagesWithTransparentNavbar = [
    '/',
    '/approach',
    '/cases',
    '/services',
    '/resources',
    '/contact',
    '/services/three-hour-website'
  ];
  
  const hasTransparentNavbar = pagesWithTransparentNavbar.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Only show layout navbar for pages without their own transparent navbar */}
      {!hasTransparentNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
