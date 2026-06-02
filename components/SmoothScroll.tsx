"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

function getScrollOffset() {
  const root = document.documentElement;
  const navHeight = parseFloat(
    getComputedStyle(root).getPropertyValue("--nav-height"),
  );
  return -(Number.isFinite(navHeight) ? navHeight : 64) - 16;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: getScrollOffset(),
        duration: 1.2,
      });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return children;
}
