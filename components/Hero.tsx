"use client";

import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const roles = [
  "Full-Stack Developer",
  "Financial Analyst",
  "Coding Instructor",
  "Data Engineer",
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Line 1 only: per-word opacity + y is safe (solid fill on h1).
      // Line 2 uses gradient text (.hero-line2); animating nested opacity breaks
      // compositing after scroll scrub — keep line 2 as one element, y-only.
      const line1Words = heroRef.current?.querySelectorAll(".hero-heading-line1 .hero-word");
      if (line1Words?.length) {
        gsap.fromTo(
          line1Words,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }

      const line2Reveal = heroRef.current?.querySelector(".hero-line2-reveal");
      if (line2Reveal) {
        gsap.fromTo(
          line2Reveal,
          { y: "115%" },
          {
            y: "0%",
            duration: 0.85,
            ease: "power4.out",
            delay: 0.3 + 0.06 * 4 + 0.15,
          }
        );
      }

      gsap.fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-tags",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.4, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-image-wrap",
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
      );

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 0, opacity: 1 },
          {
            y: -80,
            opacity: 0,
            immediateRender: false,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      gsap.fromTo(
        ".hero-image-wrap",
        { y: 0, scale: 1, opacity: 1 },
        {
          y: 60,
          scale: 1.05,
          opacity: 0.2,
          immediateRender: false,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        ".hero-shape",
        { y: 0, rotation: 0 },
        {
          y: -40,
          rotation: 30,
          immediateRender: false,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const line1Words = ["I", "Build", "Software", "&"];

  const renderLine1Words = (words: string[]) =>
    words.map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
        <span className="hero-word inline-block">{word}</span>
      </span>
    ));

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
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ background: "#d4d4d4" }}
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-shape absolute top-[15%] right-[10%] w-20 h-20 border border-black/8 rounded-full animate-float" />
        <div className="hero-shape absolute bottom-[25%] left-[5%] w-14 h-14 border border-black/8 rotate-45 animate-float-delayed" />
        <div className="hero-shape absolute top-[60%] right-[25%] w-10 h-10 bg-[#c9a96e]/8 rounded-full animate-float-slow" />
        <div className="hero-shape absolute top-[30%] left-[15%] w-3 h-3 bg-black/10 rounded-full animate-float-delayed" />
        <div className="hero-shape absolute bottom-[40%] right-[40%] w-6 h-6 border border-[#c9a96e]/15 rotate-12 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Content */}
          <div ref={contentRef} className="lg:col-span-7 will-change-transform z-20">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-[1.08] tracking-tight" style={{ color: "#0a0a0a" }}>
              <span className="block hero-heading-line1">{renderLine1Words(line1Words)}</span>
              <span className="block overflow-hidden mt-1">
                <span className="hero-line2 hero-line2-reveal inline-block">Analyze Finance</span>
              </span>
            </h1>

            {/* Rotating subtitle */}
            <div className="hero-subtitle h-10 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="text-lg md:text-xl font-heading font-medium tracking-wide"
                  style={{ color: "#525252" }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.2}>
                <motion.button
                  onClick={scrollToWork}
                  className="px-8 py-4 font-heading font-semibold text-sm uppercase tracking-widest rounded-full cursor-none"
                  style={{ background: "#0a0a0a", color: "#ffffff" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="px-8 py-4 border-2 font-heading font-semibold text-sm uppercase tracking-widest rounded-full cursor-none"
                  style={{ borderColor: "#0a0a0a", color: "#0a0a0a" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </MagneticButton>
            </div>

            {/* Tags */}
            <div className="hero-tags mt-12 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
              <p className="text-xs mb-4 uppercase tracking-[0.2em] font-heading font-semibold" style={{ color: "#737373" }}>
                Experience
              </p>
              <div className="flex flex-wrap gap-3">
                {["Coverbox UK", "Code With Us", "ClinCapture", "Minerva"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full text-xs font-medium tracking-wider" style={{ background: "#171717", color: "#d4d4d4" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative will-change-transform">
            <div className="hero-image-wrap relative h-[450px] lg:h-[620px]">
              <Image
                src="/images/headshot.jpg"
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, black 80%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in" as string,
                }}
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full blur-[80px] opacity-20" style={{ background: "#c9a96e" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(0,0,0,0.2)" }}
          >
            <motion.div
              animate={{ opacity: [0.8, 0.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full"
              style={{ background: "rgba(0,0,0,0.3)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
