'use client';

import { Container } from '@/components/Container';

export function THWVideo() {
  return (
    <Container className="px-5">
      <div className="relative w-full aspect-video overflow-hidden rounded-md shadow-lg mb-16 px-40 py-40">
        <video
          src="/img/lieu-podcast.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          Sorry, your browser doesn’t support embedded videos.
        </video>
      </div>
    </Container>
  );
}
