"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "./ScrollProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { textColor, backgroundColor } = useScroll();

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Image morphing - scale and fade on scroll with smoother scrub
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            scale: 1,
            y: 0,
            opacity: 1,
          },
          {
            scale: 1.2,
            y: 80,
            opacity: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 2,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Content parallax - slower fade with smoother animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -80,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 2.5,
              invalidateOnRefresh: true,
            },
          }
        );
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
      style={{ 
        background: "#d4d4d4",
        transition: "background 0.8s ease-in-out"
      }}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="animated-gradient absolute inset-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div
            ref={contentRef}
            className="will-change-transform z-20"
          >
            {/* Main Heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Full-Stack Developer & AI/ML Engineer
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: "#171717" }}
            >
              Building scalable web applications and AI-powered solutions that drive results. 
              From teaching 100+ students to serving 3000+ enterprise clients.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                onClick={scrollToWork}
                className="px-8 py-4 font-medium text-base rounded-full transition-all"
                style={{ background: "#0a0a0a", color: "#ffffff" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.button>
              <motion.a
                href="mailto:arham.hameed@uni.minerva.edu"
                className="px-8 py-4 border-2 font-medium text-base rounded-full transition-all"
                style={{ borderColor: "#0a0a0a", color: "#0a0a0a" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>

            {/* Companies/Education Tags */}
            <div
              className="mt-12 pt-8"
              style={{ borderTop: "1px solid #404040" }}
            >
              <p className="text-xs mb-4 uppercase tracking-wider" style={{ color: "#525252" }}>
                Education & Experience
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#171717", color: "#d4d4d4" }}>
                  Minerva University
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#171717", color: "#d4d4d4" }}>
                  Code With Us
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#171717", color: "#d4d4d4" }}>
                  ClinCapture
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Seamless Blending */}
          <div
            ref={imageRef}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
