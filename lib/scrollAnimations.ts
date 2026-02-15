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

// Parse RGB string to RGB object
function parseRgbString(rgb: string): { r: number; g: number; b: number } | null {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return match ? {
    r: parseInt(match[1], 10),
    g: parseInt(match[2], 10),
    b: parseInt(match[3], 10)
  } : null;
}

// Calculate luminance of a color to determine if it's light or dark
export function calculateLuminance(color: string): number {
  const rgb = hexToRgb(color) || parseRgbString(color);
  if (!rgb) return 0.5; // Default to middle luminance
  
  // Convert to relative luminance (0-1)
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  // Apply gamma correction
  const rLinear = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gLinear = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bLinear = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  // Calculate luminance using ITU-R BT.709 coefficients
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

// Get text color based on background luminance for optimal contrast
export function getContrastTextColor(backgroundColor: string): string {
  const luminance = calculateLuminance(backgroundColor);
  // Use WCAG recommended threshold
  // Adjusted threshold to 0.4 for better visual balance
  return luminance > 0.4 ? "#0a0a0a" : "#ffffff";
}

// Get secondary text color with reduced opacity/contrast
export function getSecondaryTextColor(backgroundColor: string): string {
  const luminance = calculateLuminance(backgroundColor);
  // For light backgrounds: darker gray
  // For dark backgrounds: lighter gray
  return luminance > 0.4 ? "#3a3a3a" : "#d0d0d0";
}

// Get muted text color with even more reduced contrast
export function getMutedTextColor(backgroundColor: string): string {
  const luminance = calculateLuminance(backgroundColor);
  // For light backgrounds: medium gray
  // For dark backgrounds: medium light gray
  return luminance > 0.4 ? "#666666" : "#999999";
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
