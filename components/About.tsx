"use client";

import { useEffect, useRef } from "react";
import { about, education } from "@/lib/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal, { LineReveal } from "./TextReveal";
import NumberCounter from "./NumberCounter";
import { FiMapPin, FiBook } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".bento-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Label */}
        <div className="section-number mb-4">01 / About</div>

        {/* Heading */}
        <TextReveal
          as="h2"
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-16 max-w-4xl"
          style={{ color: "var(--text-primary)" }}
          stagger={0.02}
        >
          Crafting digital experiences where code meets capital
        </TextReveal>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
        >
          {/* Bio Card - spans 2 cols */}
          <div className="bento-card card rounded-2xl p-8 md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="space-y-5">
              {about.bio.map((paragraph, i) => (
                <LineReveal key={i} delay={i * 0.15} start="top 90%">
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {paragraph}
                  </p>
                </LineReveal>
              ))}
            </div>
          </div>

          {/* Stat Cards */}
          {about.achievements.map((stat, i) => (
            <div
              key={i}
              className="bento-card card rounded-2xl p-6 flex flex-col justify-between min-h-[140px] group hover:border-[rgba(201,169,110,0.3)] transition-all duration-500"
            >
              <div
                className="text-3xl md:text-4xl font-heading font-bold text-gradient-warm"
              >
                <NumberCounter target={stat.number} />
              </div>
              <p
                className="text-sm font-medium mt-2"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}

          {/* Education Card */}
          <div className="bento-card card rounded-2xl p-6 md:col-span-1 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201, 169, 110, 0.15)" }}
              >
                <FiBook size={18} style={{ color: "var(--accent-warm)" }} />
              </div>
              <div>
                <h3
                  className="font-heading font-semibold text-lg mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {education.school}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {education.degree}
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.concentrations.map((c) => (
                    <span key={c} className="glass-pill text-xs py-1 px-3">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bento-card card rounded-2xl p-6 md:col-span-1 lg:col-span-2 flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(201, 169, 110, 0.15)" }}
            >
              <FiMapPin size={18} style={{ color: "var(--accent-warm)" }} />
            </div>
            <div>
              <p
                className="font-heading font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                San Francisco, CA
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Open to remote & global opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
