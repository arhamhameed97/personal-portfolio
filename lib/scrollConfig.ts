// Scroll animation configurations

export const colorZones = [
  { start: 0, end: 100, startColor: "#f8f8f8", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Hero
  { start: 100, end: 200, startColor: "#f8f8f8", endColor: "#f0f0f0", textColor: "#0a0a0a" }, // About
  { start: 200, end: 300, startColor: "#f0f0f0", endColor: "#e8e8e8", textColor: "#0a0a0a" }, // Projects
  { start: 300, end: 400, startColor: "#e8e8e8", endColor: "#f0f0f0", textColor: "#0a0a0a" }, // Testimonials
  { start: 400, end: 500, startColor: "#f0f0f0", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Skills
  { start: 500, end: 600, startColor: "#f8f8f8", endColor: "#f0f0f0", textColor: "#0a0a0a" }, // Experience
  { start: 600, end: 700, startColor: "#f0f0f0", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Services
  { start: 700, end: 10000, startColor: "#f8f8f8", endColor: "#f8f8f8", textColor: "#0a0a0a" }, // Contact
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
