import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";
import type { LenisRef } from "lenis/react";

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

export const useLenisScroll = () => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    const lenis: Lenis | undefined = lenisRef.current?.lenis;
    if (!lenis) return;

    // Always start from top on (re)load, disable native scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    // Ensure Lenis internal position is also reset
    lenis.scrollTo(0, { immediate: true });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return lenisRef;
};
