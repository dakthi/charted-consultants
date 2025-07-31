import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charted",
  description: "Navigate the business water gracefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased transition-colors`}>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
