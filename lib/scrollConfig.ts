// Scroll animation configurations

export const colorZones = [
  { start: 0, end: 100, startColor: "#f8f8f8", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Hero - light grey
  { start: 100, end: 200, startColor: "#f0f0f0", endColor: "#e8e8e8", textColor: "#0a0a0a" }, // About - grey
  { start: 200, end: 300, startColor: "#d4d4d4", endColor: "#1a1a1a", textColor: "#ffffff" }, // Projects - transition to dark
  { start: 300, end: 400, startColor: "#0f0f0f", endColor: "#1a1a1a", textColor: "#ffffff" }, // Testimonials - dark
  { start: 400, end: 500, startColor: "#2a2a2a", endColor: "#e8e8e8", textColor: "#ffffff" }, // Skills - transition to light
  { start: 500, end: 600, startColor: "#f0f0f0", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Experience - light grey
  { start: 600, end: 700, startColor: "#f8f8f8", endColor: "#f0f0f0", textColor: "#0a0a0a" }, // Services - light grey
  { start: 700, end: 10000, startColor: "#f8f8f8", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Contact - light grey
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
