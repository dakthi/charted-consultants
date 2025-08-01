'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';
import { ContactPopup } from '@/components/ContactPopup';
import { DigitalGuideDownload } from '@/components/DigitalGuideDownload';

type Post = {
  slug: string;
  title: string;
  content: string;
  image?: string;
  date?: string;
  readingTime?: number;
  category?: string;
  quote?: string;
  client?: {
    name: string;
    age: number;
    job: string;
    image: string;
  };
  expert?: {
    name: string;
    title: string;
    image: string;
  };
};

interface CasesNewsLayoutProps {
  posts: Post[];
}

export function CasesNewsLayout({ posts }: CasesNewsLayoutProps) {
  useLenis();

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  // --- Search state ---
  const [searchTerm, setSearchTerm] = useState('');

  // --- Simple scroll detection ---
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get unique categories and organize posts by category
  const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)));
  
  // Group posts by category
  const postsByCategory = categories.reduce((acc, category) => {
    acc[category] = posts.filter(post => post.category === category);
    return acc;
  }, {} as Record<string, Post[]>);

  // Featured posts (latest from different categories)
  const featuredPost = posts[0];
  const secondaryFeatured = posts.slice(1, 4);

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies & Success Stories",
    "description": "Real case studies and success stories of legacy businesses transforming through digital innovation",
    "url": "https://chartedconsultants.co/cases",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": posts.slice(0, 10).map((post, index) => ({
        "@type": "Article",
        "position": index + 1,
        "name": post.title,
        "description": post.quote || post.title,
        "url": `https://chartedconsultants.co/blog/${post.slug}`,
        "datePublished": post.date,
        "articleSection": post.category,
        "author": {
          "@type": "Organization",
          "name": "Charted Consultants"
        }
      }))
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Transparent Navbar */}
      <div
        className={`fixed top-10 left-0 w-full z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section with Search */}
      <div className="relative isolate">
        {/* Mobile image */}
        <div className="block md:hidden w-full">
          <Image
            src="/img/lone-sailboat-2.png"
            alt="Case Studies"
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

        {/* Dark overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/40 z-10" />

        {/* Hero Content with Search */}
        <div
          ref={heroRef}
          className="relative z-20 flex flex-col justify-center px-6 md:px-12 text-white py-20 md:h-[70vh]"
        >
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Latest Case Studies & Insights
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-light max-w-4xl leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Real Stories of Digital Transformation
          </motion.h1>

          <motion.p
            className="text-xl max-w-3xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Explore detailed case studies, insights and lessons learned from helping legacy businesses embrace modern digital strategies.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <div className="relative">
              <input
                type="search"
                placeholder="Search case studies, insights, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Stories Section */}
      <div className="bg-white py-16">
        <div className="px-6 md:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-lg text-gray-600">Our most impactful transformations and latest insights</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Post */}
            <div className="lg:col-span-2">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={featuredPost.image || '/img/Portrait_Placeholder.png'}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    {featuredPost.category && (
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                        {featuredPost.category}
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {featuredPost.title}
                    </h3>
                    {featuredPost.quote && (
                      <p className="text-white/90 text-sm italic">"{featuredPost.quote}"</p>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {featuredPost.date && (
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    )}
                    {featuredPost.readingTime && (
                      <span>{featuredPost.readingTime} min read</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>

            {/* Secondary Featured Posts */}
            <div className="space-y-6">
              {secondaryFeatured.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={post.image || '/img/Portrait_Placeholder.png'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      {post.category && (
                        <span className="inline-block bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium mb-2">
                          {post.category}
                        </span>
                      )}
                      <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        {post.date && (
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        )}
                        {post.readingTime && (
                          <span>• {post.readingTime} min</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((category, categoryIndex) => (
        <div key={category} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="px-6 md:px-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">{category}</h2>
                <p className="text-gray-600">
                  {postsByCategory[category].length} article{postsByCategory[category].length !== 1 ? 's' : ''}
                </p>
              </div>
              <Link
                href={`/blog?category=${category}`}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {postsByCategory[category].slice(0, 4).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || '/img/Portrait_Placeholder.png'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        {post.readingTime && (
                          <span className="text-xs text-gray-500">{post.readingTime} min</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.quote && (
                        <p className="text-sm text-gray-600 italic line-clamp-2 mb-3">"{post.quote}"</p>
                      )}
                      <div className="flex items-center justify-between">
                        {post.date && (
                          <span className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        )}
                        {post.client && (
                          <div className="flex items-center gap-2">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                              <Image
                                src={post.client.image || '/img/Portrait_Placeholder.png'}
                                alt={post.client.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Discovery Call CTA */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every transformation starts with a conversation. Let's discuss how we can help your business navigate digital change while preserving what makes you unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center gap-2"
            >
              Book Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.452L3 21l2.452-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg inline-flex items-center gap-2"
            >
              Read More Insights
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Free 30-minute consultation • No obligation • Tailored to your business
          </p>
        </div>
      </div>

      {/* Contact Popup Widget */}
      <ContactPopup />

      {/* Digital Guide Download */}
      <DigitalGuideDownload />
    </>
  );
}