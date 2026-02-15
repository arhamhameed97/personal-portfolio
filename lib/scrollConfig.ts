// Scroll animation configurations
// Note: textColor is now calculated dynamically based on background luminance

export const colorZones = [
  { start: 0, end: 100, startColor: "#d4d4d4", endColor: "#d4d4d4" }, // Hero - light grey
  { start: 100, end: 200, startColor: "#d4d4d4", endColor: "#c8c8c8" }, // About - slightly darker grey
  { start: 200, end: 300, startColor: "#c0c0c0", endColor: "#8a8a8a" }, // Projects - smooth gradient to medium grey
  { start: 300, end: 400, startColor: "#787878", endColor: "#909090" }, // Testimonials - medium grey
  { start: 400, end: 500, startColor: "#909090", endColor: "#b8b8b8" }, // Skills - transition to lighter
  { start: 500, end: 600, startColor: "#b8b8b8", endColor: "#d0d0d0" }, // Experience - light grey
  { start: 600, end: 700, startColor: "#d0d0d0", endColor: "#c8c8c8" }, // Services - light grey
  { start: 700, end: 10000, startColor: "#c8c8c8", endColor: "#d4d4d4" }, // Contact - light grey
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
