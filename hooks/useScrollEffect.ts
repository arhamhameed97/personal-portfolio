"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollEffect(
  ref: RefObject<HTMLElement>,
  animationFn: () => gsap.core.Tween | ScrollTrigger | void,
  deps: any[] = []
) {
  useEffect(() => {
    if (!ref.current) return;

    const animation = animationFn();

    return () => {
      if (animation) {
        if ('kill' in animation) {
          animation.kill();
        }
      }
    };
  }, [ref, ...deps]);
}

export function useParallax(ref: RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const animation = gsap.to(element, {
      y: () => -window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [ref, speed]);
}

export function useFadeIn(ref: RefObject<HTMLElement>, delay: number = 0) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const animation = gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.kill();
    };
  }, [ref, delay]);
}
