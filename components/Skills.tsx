"use client";

import { skills } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = Object.entries(skills);
const directions: ("left" | "right")[] = ["right", "left", "right", "left"];
const speeds = ["35s", "40s", "32s", "38s"];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const rows = sectionRef.current?.querySelectorAll(".marquee-row");
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const labels = sectionRef.current?.querySelectorAll(".category-label");
      if (labels) {
        gsap.fromTo(
          labels,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-16">
        <div className="section-number mb-4">04 / Expertise</div>
        <TextReveal
          as="h2"
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          Technologies and skills
        </TextReveal>
      </div>

      {/* Marquee rows */}
      <div className="space-y-8">
        {categories.map(([category, items], index) => (
          <div key={category} className="marquee-row">
            {/* Category label */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-3">
              <span
                className="category-label font-heading text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--accent-warm)" }}
              >
                {category}
              </span>
            </div>

            {/* Infinite scroll row */}
            <div
              className={`marquee-${directions[index]} overflow-hidden`}
              style={
                { "--duration": speeds[index] } as React.CSSProperties
              }
            >
              <div className="marquee-track">
                {/* Duplicate content for seamless loop */}
                {[...items, ...items].map((skill, i) => (
                  <span key={`${skill}-${i}`} className="glass-pill mx-2 flex-shrink-0">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
