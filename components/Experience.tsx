"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineSvgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      const line = lineRef.current;
      if (!line) return;

      const length = line.getTotalLength?.() || 800;
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1.5,
        },
      });

      const nodes = sectionRef.current?.querySelectorAll(".timeline-node");
      if (nodes) {
        nodes.forEach((node, i) => {
          gsap.fromTo(
            node,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: node,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      const cards = sectionRef.current?.querySelectorAll(".exp-card");
      if (cards) {
        cards.forEach((card, i) => {
          const direction = i % 2 === 0 ? -40 : 40;
          gsap.fromTo(
            card,
            { x: direction, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-36"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div ref={ref}>
          <div className="section-number mb-4">02 / Experience</div>

          <TextReveal
            as="h2"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-20 max-w-4xl"
            style={{ color: "var(--text-primary)" }}
          >
            Professional journey
          </TextReveal>

          {/* Timeline */}
          <div className="relative">
            {/* SVG line - hidden on mobile, shown on lg */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
              <svg
                ref={timelineSvgRef}
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <line
                  ref={lineRef}
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="var(--accent-warm)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-start ${
                    index % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="timeline-node hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 items-center justify-center"
                    style={{ borderColor: "var(--accent-warm)", background: "#0e0e0e" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent-warm)" }} />
                  </div>

                  {/* Card - alternating sides */}
                  {index % 2 === 0 ? (
                    <>
                      <ExperienceCard exp={exp} inView={inView} index={index} />
                      <div className="hidden lg:flex items-start pt-4 pl-8">
                        <div className="text-right w-full">
                          <span
                            className="font-heading text-sm font-semibold tracking-wider"
                            style={{ color: "var(--accent-warm)" }}
                          >
                            {exp.period}
                          </span>
                          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:flex items-start pt-4 pr-8">
                        <div className="w-full">
                          <span
                            className="font-heading text-sm font-semibold tracking-wider"
                            style={{ color: "var(--accent-warm)" }}
                          >
                            {exp.period}
                          </span>
                          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <ExperienceCard exp={exp} inView={inView} index={index} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  exp: {
    id: number;
    company: string;
    position: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
  };
  inView: boolean;
  index: number;
}

const ExperienceCard = ({ exp, inView, index }: ExperienceCardProps) => {
  return (
    <motion.div
      className={`exp-card card rounded-2xl p-8 ${
        index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
      }`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      {/* Mobile-only period */}
      <div className="lg:hidden mb-3">
        <span
          className="font-heading text-xs font-semibold tracking-wider"
          style={{ color: "var(--accent-warm)" }}
        >
          {exp.period}
        </span>
        <span className="mx-2" style={{ color: "var(--text-muted)" }}>
          ·
        </span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {exp.location}
        </span>
      </div>

      <h3
        className="font-heading text-xl font-bold mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {exp.company}
      </h3>
      <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
        {exp.position}
      </p>
      <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {exp.description}
      </p>
      <ul className="space-y-2.5">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3">
            <div
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ background: "var(--accent-warm)" }}
            />
            <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {achievement}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;
