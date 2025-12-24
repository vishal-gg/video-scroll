import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let animationFrame: number;
    const handleResize = () => {
      // Batch updates with requestAnimationFrame
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    // Use ResizeObserver for visual viewport changes (mobile zoom, etc.)
    const observer = new ResizeObserver(handleResize);
    observer.observe(document.documentElement);

    // Fallback for full window resizes
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};