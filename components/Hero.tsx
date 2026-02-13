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
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Image morphing - scale and fade on scroll
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.3,
          y: 100,
          opacity: 0.5,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Content parallax - slower fade
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -50,
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
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="will-change-transform z-20"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Full-Stack Developer & AI/ML Engineer
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Building scalable web applications and AI-powered solutions that drive results. 
              From teaching 100+ students to serving 3000+ enterprise clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToWork}
                className="px-8 py-4 bg-gray-900 text-white font-medium text-base rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
              <motion.a
                href="mailto:arham.hameed@uni.minerva.edu"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium text-base rounded-full hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Companies/Education Tags */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
                Education & Experience
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Minerva University
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Code With Us
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  ClinCapture
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Seamless Blending */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative h-[500px] lg:h-[700px] will-change-transform"
          >
            {/* Image with gradient masks for seamless blending */}
            <div className="relative h-full">
              <img 
                src="/images/headshot.jpg" 
                alt="Arham Hameed"
                className="w-full h-full object-cover object-center"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
