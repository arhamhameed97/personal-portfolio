// Scroll animation configurations

export const colorZones = [
  { start: 0, end: 100, startColor: "#fafafa", endColor: "#fafafa", textColor: "#0a0a0a" }, // Hero
  { start: 100, end: 200, startColor: "#fafafa", endColor: "#f5f5f5", textColor: "#0a0a0a" }, // About start
  { start: 200, end: 300, startColor: "#e5e5e5", endColor: "#171717", textColor: "#ffffff" }, // Projects (dark)
  { start: 300, end: 400, startColor: "#0a0a0a", endColor: "#262626", textColor: "#ffffff" }, // Testimonials
  { start: 400, end: 500, startColor: "#404040", endColor: "#f5f5f5", textColor: "#0a0a0a" }, // Skills
  { start: 500, end: 600, startColor: "#f5f5f5", endColor: "#e5e5e5", textColor: "#0a0a0a" }, // Experience
  { start: 600, end: 700, startColor: "#ffffff", endColor: "#ffffff", textColor: "#0a0a0a" }, // Services
  { start: 700, end: 10000, startColor: "#ffffff", endColor: "#f5f5f5", textColor: "#0a0a0a" }, // Contact
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
