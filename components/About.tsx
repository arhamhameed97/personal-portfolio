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
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-32">
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crafting digital experiences that drive real business results
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m a full-stack developer with a unique blend of technical expertise and business acumen. 
                Graduated from Minerva University with concentrations in AI/ML, Product Development, and Strategic Finance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently teaching 100+ students across 8+ programming languages while building production-grade applications 
                serving 1000+ users with 99.9% uptime.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My work focuses on creating scalable solutions that bridge technology and finance, with a track record of 
                supporting 3000+ enterprise clients and identifying $2M+ in revenue opportunities through data-driven approaches.
              </p>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-6 pt-8">
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-sm text-gray-600">Students Taught</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2">3000+</div>
                  <div className="text-sm text-gray-600">Clients Supported</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="stat-item">
                  <div className="text-4xl font-bold mb-2">8+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
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
