import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // Much slower, more natural scrolling
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // Gentler easing curve
      wheelMultiplier: 0.5, // Much less aggressive wheel response
      touchMultiplier: 0.8, // Slower touch response
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
