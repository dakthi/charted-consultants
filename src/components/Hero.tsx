'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import heroImg from '../../public/img/globe.jpg'; // Replace with relevant brand image

export const Hero = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="order-last xl:order-first flex items-start w-full lg:w-1/2 pl-5 pr-5 xl:pl-0 xl:pr-0">
        <div className="max-w-xl">
          <p className="text-lg font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Systems that support people.
            <br />
            Stories that build trust.
          </p>

          <p className="text-md leading-normal text-gray-500 lg:text-xl xl:text-xl xl:mt-5 xl:mb-5 xl:pr-0">
            We’re Charted — a collective of operators helping small business owners modernise without losing what makes them human. We clean up messy operations, design digital front doors, and quietly prepare businesses for what's next.
          </p>

          <p className="mb-2 text-md leading-normal text-gray-500 lg:text-xl xl:text-xl xl:mt-5 xl:mb-5 pr-5 xl:pr-0">
            Whether you're staying, stepping back, or planning your exit, we'll help you build systems worth inheriting — and tell a story your customers can actually find and believe.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/contact"
              className="mt-2 px-8 py-4 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 rounded-md transition"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
