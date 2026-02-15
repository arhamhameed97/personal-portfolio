"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const ctx = gsap.context(() => {
      const stats = statsRef.current?.querySelectorAll(".stat-item");
      if (stats) {
        gsap.fromTo(
          stats,
          {
            scale: 0.9,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-32" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">1  |  About</div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                Crafting digital experiences that drive real business results
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m a full-stack developer and software programming instructor with a unique blend of technical expertise and business acumen. 
                Graduated from Minerva University with concentrations in AI/ML, Product Development, and Strategic Finance.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                As an instructor at Code With Us, I teach 100+ students across 8+ programming languages (Python, JavaScript, Java, C#, React, Unity) 
                while building production-grade applications serving 1000+ users with 99.9% uptime.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                My work focuses on creating scalable solutions that bridge technology and finance, with a track record of 
                supporting 3000+ enterprise clients and identifying $2M+ in revenue opportunities through data-driven approaches.
              </p>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-6 pt-8">
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2 text-gradient">100+</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Students Taught</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2 text-gradient">3000+</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Clients Supported</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2 text-gradient">99.9%</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Uptime</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2 text-gradient">8+</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
