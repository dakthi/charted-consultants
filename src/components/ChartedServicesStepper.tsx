'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { SectionTitle } from './SectionTitle';

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: 'Technology',
    description:
      'We help you set up essential systems — website, booking, payments, SEO, and analytics — fully owned and under your control.',
  },
  {
    title: 'Story',
    description:
      'We film, edit, and repurpose your story across formats so that Google, ChatGPT, and your audience understand and value your work.',
  },
];

export default function ChartedServicesStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-gradient-to-b from-blue-950 to-black text-white h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          {/* Logo at top */}
          <div className="flex justify-center items-start mb-8">
            <Image src="/img/logo-half.png" alt="Logo" width={240} height={120} />
          </div>

          {/* Stepper */}
          <div className="flex justify-center sm:px-0 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 border-b-4 text-sm font-light uppercase whitespace-nowrap transition-colors ${
                  index === activeStep
                    ? 'border-white text-white'
                    : 'border-transparent text-white hover:border-gray-300'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
            <h3 className="text-2xl font-light uppercase mb-4 md:mb-2 lg:mb-4">
              {steps[activeStep].title}
            </h3>
            <p className="text-md text-gray-300 leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
