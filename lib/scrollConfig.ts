// Scroll animation configurations

export const colorZones = [
  { start: 0, end: 100, startColor: "#e5e5e5", endColor: "#e5e5e5", textColor: "#0a0a0a" }, // Hero - medium grey
  { start: 100, end: 200, startColor: "#d8d8d8", endColor: "#d0d0d0", textColor: "#0a0a0a" }, // About - darker grey
  { start: 200, end: 300, startColor: "#c0c0c0", endColor: "#1a1a1a", textColor: "#ffffff" }, // Projects - transition to dark
  { start: 300, end: 400, startColor: "#0f0f0f", endColor: "#1a1a1a", textColor: "#ffffff" }, // Testimonials - very dark
  { start: 400, end: 500, startColor: "#2a2a2a", endColor: "#d0d0d0", textColor: "#ffffff" }, // Skills - transition to light
  { start: 500, end: 600, startColor: "#d8d8d8", endColor: "#e0e0e0", textColor: "#0a0a0a" }, // Experience - medium grey
  { start: 600, end: 700, startColor: "#e0e0e0", endColor: "#d8d8d8", textColor: "#0a0a0a" }, // Services - medium grey
  { start: 700, end: 10000, startColor: "#d8d8d8", endColor: "#e5e5e5", textColor: "#0a0a0a" }, // Contact - grey
];

export const animationConfig = {
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
  fadeDistance: 50,
};

export const scrollConfig = {
  smoothness: 0.1,
  markers: false, // Set to true for debugging
  anticipatePin: 1,
};
