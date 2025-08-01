'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const VisualGallery = () => {
  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Heritage Bakery Website',
      category: 'E-commerce Integration',
      image: '/img/example-lieu-1.png'
    },
    {
      title: 'Law Firm Dashboard',
      category: 'Client Management',
      image: '/img/lieu-article-1.png'
    },
    {
      title: 'Restaurant Booking System',
      category: 'Automation',
      image: '/img/lieu-article-4.png'
    },
    {
      title: 'Manufacturing Analytics',
      category: 'Performance Tracking',
      image: '/img/lieu-article-5.png'
    },
    {
      title: 'Consultancy Website',
      category: 'Professional Services',
      image: '/img/bakery.jpg'
    },
    {
      title: 'Retail Point of Sale',
      category: 'Operations Integration',
      image: '/img/boat-navigation.jpg'
    }
  ];

  return (
    <section className="relative bg-white">
      <div
        ref={galleryRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <motion.p
          className="uppercase text-sm tracking-wide mb-4 text-gray-700 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Our Work
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-gray-900 text-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Systems built for real businesses
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</span>
                  <h3 className="text-lg font-medium text-gray-900 mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className="text-gray-700 mb-6">
            Each project is custom-built for the specific needs and workflows of the business.
          </p>
          <a
            href="/cases"
            className="inline-block px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded-md"
          >
            View Detailed Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};