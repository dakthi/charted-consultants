'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isThreeHourWebsite = pathname === '/services/three-hour-website';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Do not wrap in container */}
      {!isHome && !isThreeHourWebsite && <Navbar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
