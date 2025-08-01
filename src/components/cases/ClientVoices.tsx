'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const ClientVoices = () => {
  const voicesRef = useRef(null);
  const isVoicesInView = useInView(voicesRef, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: "We didn't just get a new website. We got a complete transformation of how customers find us, understand what we do, and decide to work with us. The systems they built are still driving growth two years later.",
      author: "David Richardson",
      title: "Managing Director",
      company: "Heritage Manufacturing",
      image: "/img/user2.jpg",
      results: "£2.4M additional revenue in year one"
    },
    {
      quote: "Working with Charted wasn't just about getting a new website. They helped us understand our own business better and gave us tools that actually make sense for how we work. Our customers finally get what makes our bread different.",
      author: "Sarah Mitchell",
      title: "Owner",
      company: "Heritage Bakery",
      image: "/img/user1.jpg",
      results: "1900% increase in online orders"
    },
    {
      quote: "We went from spending more time on marketing than on legal work to having a system that runs itself. Our partners can focus on what they do best while still growing the practice. The ROI has been exceptional.",
      author: "James Harrison",
      title: "Senior Partner",
      company: "Maritime Legal Associates",
      image: "/img/user3.jpg",
      results: "85% reduction in marketing time, 40% more leads"
    }
  ];

  return (
    <section className="relative bg-gray-900 text-white">
      <div
        ref={voicesRef}
        className="px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-gray-400 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={isVoicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Client Voices
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-light max-w-4xl leading-relaxed mb-16 text-center mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isVoicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            What clients say about results and experience
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isVoicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm font-medium text-blue-400">{testimonial.results}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVoicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">Common Themes in Client Feedback</h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-center">Understanding First</h4>
                  <p className="text-gray-300 text-sm text-center">
                    "They took time to understand our business before building anything"
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-center">True Ownership</h4>
                  <p className="text-gray-300 text-sm text-center">
                    "We own everything and can make changes without depending on anyone"
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-center">Lasting Results</h4>
                  <p className="text-gray-300 text-sm text-center">
                    "The systems keep getting better and delivering results years later"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};