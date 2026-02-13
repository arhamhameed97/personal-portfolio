import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Color interpolation utility
export function interpolateColor(color1: string, color2: string, factor: number): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);
  
  if (!c1 || !c2) return color1;
  
  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Fade in animation
export function fadeIn(element: HTMLElement | string, options = {}) {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none",
    },
    ...options,
  });
}

// Slide in from side
export function slideIn(element: HTMLElement | string, direction: "left" | "right" = "left", options = {}) {
  return gsap.from(element, {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none none",
    },
    ...options,
  });
}

// Scale animation
export function scaleIn(element: HTMLElement | string, options = {}) {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    ...options,
  });
}

// Parallax effect
export function parallax(element: HTMLElement | string, speed: number = 0.5, options = {}) {
  return gsap.to(element, {
    y: () => -ScrollTrigger.maxScroll(window) * speed,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0.5,
    },
    ...options,
  });
}

// Pin section
export function pinSection(element: HTMLElement | string, options = {}) {
  return ScrollTrigger.create({
    trigger: element,
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    ...options,
  });
}

// Staggered children animation
export function staggerChildren(parent: HTMLElement | string, children: string, options = {}) {
  return gsap.from(`${parent} ${children}`, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: parent,
      start: "top 70%",
      toggleActions: "play none none none",
    },
    ...options,
  });
}

// Morph animation (scale + rotate)
export function morph(element: HTMLElement | string, options = {}) {
  return gsap.to(element, {
    scale: 1.05,
    rotation: 2,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 60%",
      end: "top 40%",
      scrub: 1,
    },
    ...options,
  });
}

// Refresh ScrollTrigger
export function refreshScrollTrigger() {
  if (typeof window !== "undefined") {
    ScrollTrigger.refresh();
  }
}

// Kill all ScrollTriggers
export function killAllScrollTriggers() {
  if (typeof window !== "undefined") {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}

// Initialize smooth scrolling
export function initSmoothScroll() {
  if (typeof window !== "undefined") {
    ScrollTrigger.normalizeScroll(true);
  }
}
