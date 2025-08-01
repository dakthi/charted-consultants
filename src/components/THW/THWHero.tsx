import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container';

export const THWHero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center space-y-16 mt-20">
        {/* Text Content */}
        <div className="flex flex-col items-center max-w-4xl">
          <h1 className="text-4xl font-semibold leading-tight text-white lg:text-6xl lg:leading-tight mb-6">
            A complete website in just three hours.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-100 lg:text-xl">
            The Three-Hour Website is a fast, done-with-you service for small business owners
            who want a clean, professional online presence — without the usual delay or drama.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-100 lg:text-xl">
            We build it live with you in real time. You leave the session with a custom site,
            a real domain, and the clarity to move forward.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white text-base font-semibold bg-blue-950 hover:bg-indigo-950 rounded-lg transition-colors duration-200 text-center shadow-lg hover:shadow-xl"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block text-base font-medium text-white hover:text-blue-200 underline underline-offset-4 transition-colors duration-200"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Website Preview Stack */}
<div className="flex items-center justify-center w-full">
  <div className="relative w-full max-w-4xl">
    {/* Back image */}
    <div className="absolute inset-0 transform rotate-3 scale-90 opacity-40 z-10">
      <Image
        src="/img/example-lieu-1.png"
        alt="Example website back"
        fill
        className="object-contain rounded-lg shadow-xl border border-gray-200"
      />
    </div>

    {/* Middle image */}
    <div className="absolute inset-0 transform -rotate-1 scale-95 opacity-70 z-20">
      <Image
        src="/img/example-lieu-1.png"
        alt="Example website middle"
        fill
        className="object-contain rounded-lg shadow-xl border border-gray-200"
      />
    </div>

    {/* Front image */}
    <div className="relative z-30">
      <Image
        src="/img/example-lieu-1.png"
        alt="Example website built in three hours"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-lg shadow-2xl border border-gray-200"
      />
    </div>
  </div>
</div>

      </div>
    </Container>
  );
};
