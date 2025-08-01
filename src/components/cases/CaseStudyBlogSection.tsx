'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
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
};

interface CaseStudyBlogSectionProps {
  posts: Post[];
}

export function CaseStudyBlogSection({ posts }: CaseStudyBlogSectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-wide text-gray-600 mb-4">
            Deep Dive Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Real Transformations, Real Results
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore detailed case studies of how we've helped businesses like yours navigate digital transformation while preserving what makes them unique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || '/img/Portrait_Placeholder.png'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {post.category && (
                      <span className="text-xs uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                    {post.readingTime && (
                      <span className="text-xs text-gray-500">{post.readingTime} min read</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  {post.quote && (
                    <p className="text-sm text-gray-600 italic">"{post.quote}"</p>
                  )}
                  {post.client && (
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.client.image || '/img/Portrait_Placeholder.png'}
                          alt={post.client.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">{post.client.name}</p>
                        <p className="text-xs text-gray-500">{post.client.job}</p>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}