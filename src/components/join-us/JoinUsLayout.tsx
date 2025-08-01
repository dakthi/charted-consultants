'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/Navbar';

export function JoinUsLayout() {
  useLenis();

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    availability: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const consultants = [
    {
      name: 'Sarah Mitchell',
      title: 'Digital Strategy Consultant',
      expertise: 'Process Automation, Change Management',
      location: 'London, UK',
      experience: '12+ years',
      image: '/img/sarah-mitchell.jpg'
    },
    {
      name: 'Michael Roberts',
      title: 'Customer Experience Strategist',
      expertise: 'UX Design, Customer Journey Mapping',
      location: 'Manchester, UK',
      experience: '8+ years',
      image: '/img/michael-roberts.jpg'
    },
    {
      name: 'David Lee',
      title: 'Technology Integration Specialist',
      expertise: 'Cloud Migration, API Development',
      location: 'Edinburgh, UK',
      experience: '15+ years',
      image: '/img/david-lee.jpg'
    },
    {
      name: 'Emma Wilson',
      title: 'Retail Transformation Expert',
      expertise: 'E-commerce, Omnichannel Strategy',
      location: 'Birmingham, UK',
      experience: '10+ years',
      image: '/img/emma-wilson.jpg'
    },
    {
      name: 'James Foster',
      title: 'Operations Optimization Consultant',
      expertise: 'Supply Chain, Logistics Technology',
      location: 'Bristol, UK',
      experience: '14+ years',
      image: '/img/james-foster.jpg'
    },
    {
      name: 'Lisa Chen',
      title: 'Financial Systems Specialist',
      expertise: 'Fintech, Compliance Automation',
      location: 'Leeds, UK',
      experience: '9+ years',
      image: '/img/lisa-chen.jpg'
    }
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-10 left-0 w-full z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/90 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
        
        <div
          ref={heroRef}
          className="relative z-20 flex flex-col justify-center px-6 md:px-12 text-white py-20 md:h-[60vh]"
        >
          <motion.p
            className="uppercase text-sm tracking-wide mb-4 text-blue-200"
            initial={{ opacity: 0, y: -10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Join Our Network
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-light max-w-4xl leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            Become a Charted Consultant
          </motion.h1>

          <motion.p
            className="text-xl max-w-3xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Join our network of experienced consultants helping legacy businesses navigate digital transformation. Work on meaningful projects while maintaining your independence.
          </motion.p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-white py-20">
        <div className="px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Why Join Our Network?
            </h2>
            <p className="text-lg text-gray-600">
              We're building a community of consultants who share our values of preserving business heritage while enabling digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Projects</h3>
              <p className="text-gray-600">Work on projects that make a real difference to established businesses and their communities.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
              <p className="text-gray-600">Earn competitive daily rates while working with premium clients who value expertise.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Collaboration</h3>
              <p className="text-gray-600">Choose projects that align with your expertise and availability. Work independently or as part of our team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Consultants */}
      <div className="bg-gray-50 py-20">
        <div className="px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Meet Our Consultants
            </h2>
            <p className="text-lg text-gray-600">
              Our network includes specialists across various industries and expertise areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultants.map((consultant, index) => (
              <motion.div
                key={consultant.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={consultant.image || '/img/Portrait_Placeholder.png'}
                    alt={consultant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{consultant.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{consultant.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{consultant.expertise}</p>
                  <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
                    <span>{consultant.location}</span>
                    <span>•</span>
                    <span>{consultant.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white py-20">
        <div className="px-6 md:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Apply to Join Our Network
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your expertise and how you'd like to contribute to meaningful digital transformation projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select experience level</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10-15">10-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area of Expertise *
              </label>
              <input
                type="text"
                name="expertise"
                required
                placeholder="e.g., Digital Strategy, Process Automation, Customer Experience"
                value={formData.expertise}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select availability</option>
                <option value="full-time">Full-time (5 days/week)</option>
                <option value="part-time">Part-time (2-3 days/week)</option>
                <option value="project-based">Project-based</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about yourself
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your experience, what type of projects interest you, and why you'd like to join our network..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Submit Application
              </button>
              <p className="text-sm text-gray-500 mt-4">
                We'll review your application and get back to you within 5 business days.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Questions About Joining?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch to learn more about opportunities in our consultant network.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center gap-2"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}