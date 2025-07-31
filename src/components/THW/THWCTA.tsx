'use client';

import Link from 'next/link';

export const THWCTA = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 text-center min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to launch your website in a single morning?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          No back-and-forth. No hidden fees. Just one focused session — and you walk away with a real, live website you're proud of.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-gray-900 px-12 py-6 font-semibold text-lg rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Book Your Discovery Call
        </Link>

        <p className="mt-8 text-lg text-gray-400">
          Limited slots each month · You own everything we build · No subscriptions required
        </p>
      </div>
    </section>
  );
};
