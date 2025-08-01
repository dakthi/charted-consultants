'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';

const steps = [
  {
    title: 'Technology',
    heading: 'Your digital foundation, fully yours',
    paragraph1:
      'We put the essential systems in place — websites, booking flows, payments, SEO, and analytics — built so you fully own them.',
    paragraph2:
      'No subscriptions you don’t control, no tech that locks you in. Everything we set up is portable and future‑proof.',
    details: [
      { title: 'Website & Hosting', excerpt: 'Fast, secure, and fully owned by you — no rented platforms or surprise restrictions.', category: 'core' },
      { title: 'Booking & Payments', excerpt: 'Seamless appointment scheduling and integrated payments that reduce admin and boost conversion.', category: 'operations' },
      { title: 'SEO & Analytics', excerpt: 'Search engine optimisation and data insights that show what’s working and where to improve.', category: 'growth' },
      { title: 'Ownership & Control', excerpt: 'All systems configured so you hold the keys. No lock‑ins, no dependency on a single vendor.', category: 'philosophy' },
    ],
  },
  {
    title: 'Story',
    heading: 'Show who you are and why it matters',
    paragraph1:
      'We capture and shape your story — filming, editing, and repurposing it so Google, ChatGPT, and your audience see the real value of what you do.',
    paragraph2:
      'Clear, authentic, and designed to build trust. From long-form case studies to short social clips, your work speaks for itself.',
    details: [
      { title: 'Filming & Photography', excerpt: 'Show your process, your team, and your results with clear, authentic visuals.', category: 'media' },
      { title: 'Content Strategy', excerpt: 'From long‑form to short social snippets, we make your story work across platforms.', category: 'planning' },
      { title: 'AI‑ready Metadata', excerpt: 'Optimised content so search engines and AI tools like ChatGPT can surface your work.', category: 'visibility' },
    ],
  },
  {
    title: 'Momentum',
    heading: 'From one-off wins to long-term rhythm',
    paragraph1:
      'We connect technology and storytelling into a rhythm — regular updates, measurable results, and the kind of consistency that turns one-off wins into long-term growth.',
    paragraph2:
      'With performance tracking and iterative improvements, your business evolves instead of standing still.',
    details: [
      { title: 'Editorial Rhythm', excerpt: 'A sustainable schedule for content updates so you stay visible without burnout.', category: 'cadence' },
      { title: 'Performance Tracking', excerpt: 'Analytics and reporting so you know what’s resonating and where to focus.', category: 'insights' },
      { title: 'Iterative Improvements', excerpt: 'We adapt and improve your systems and story as your business evolves.', category: 'evolution' },
    ],
  },
];

export default function ChartedServices() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <section className="relative bg-gradient-to-b from-blue-950 to-black text-white scroll-snap-section">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10">
        <Container>
          {/* Logo */}
          <div className="flex justify-center items-start mb-8">
            <Image src="/img/logo-half.png" alt="Logo" width={240} height={120} />
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            {steps.map((s, index) => (
              <button
                key={index}
                className={`px-5 py-3 mx-3 border-b-4 text-base font-light uppercase transition-colors ${
                  index === activeStep
                    ? 'border-white text-white'
                    : 'border-transparent text-white hover:border-gray-300'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-relaxed">
              {step.heading}
            </h2>
            <div className="space-y-6 mb-16">
              <p className="text-xl text-gray-300 leading-relaxed">{step.paragraph1}</p>
              <p className="text-xl text-gray-300 leading-relaxed">{step.paragraph2}</p>
            </div>
          </div>

          {/* Larger Horizontal Tiles */}
          <div className="flex flex-wrap justify-center gap-10">
            {step.details.map((detail, index) => (
              <div
                key={index}
                className="flex-none w-[22rem] h-[14rem] bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-xl hover:shadow-black/20 hover:border-white/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold tracking-wide text-white text-lg leading-tight">
                    {detail.title}
                  </h4>
                  <span className="text-sm text-gray-400 ml-2 flex-shrink-0">
                    {detail.category}
                  </span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {detail.excerpt}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
