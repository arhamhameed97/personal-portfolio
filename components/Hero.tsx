"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax fade out effect on hero content
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          y: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (subtitleRef.current) {
        gsap.to(subtitleRef.current, {
          y: -80,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (buttonsRef.current) {
        gsap.to(buttonsRef.current, {
          y: -60,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (companiesRef.current) {
        gsap.to(companiesRef.current, {
          y: -40,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Heading with parallax */}
          <motion.h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Full-Stack Developer & AI/ML Engineer
          </motion.h1>

          {/* Subtitle with parallax */}
          <motion.p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building scalable web applications and AI-powered solutions that drive results. 
            From teaching 100+ students to serving 3000+ enterprise clients.
          </motion.p>

          {/* CTA Buttons with parallax */}
          <motion.div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToWork}
              className="px-8 py-4 bg-gray-900 text-white font-medium text-lg rounded-full hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.button>
            <motion.a
              href="mailto:arham.hameed@uni.minerva.edu"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium text-lg rounded-full hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Clients/Companies Section with parallax */}
          <motion.div
            ref={companiesRef}
            className="mt-20 pt-12 border-t border-gray-200 will-change-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
              Education & Experience
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-400">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">Minerva University</div>
                <div className="text-sm text-gray-500">CS & Finance</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">Code With Us</div>
                <div className="text-sm text-gray-500">Instructor</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">Minerva Project</div>
                <div className="text-sm text-gray-500">Product Team</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-700">ClinCapture</div>
                <div className="text-sm text-gray-500">Analytics</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
