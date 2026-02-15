"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll(".experience-item");
      if (items) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative py-20 md:py-32" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">5  |  Experience</div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Professional journey
          </h2>

          {/* Experience Items */}
          <div ref={timelineRef} className="space-y-16">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: {
    id: number;
    company: string;
    position: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
  };
  index: number;
  inView: boolean;
}

const ExperienceCard = ({ experience, index, inView }: ExperienceCardProps) => {
  return (
    <motion.div
      className="experience-item grid grid-cols-1 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      {/* Left Column - Company & Period */}
      <div>
        <h3 className="text-2xl font-bold mb-2 text-gradient">
          {experience.company}
        </h3>
        <div className="mb-2" style={{ color: "var(--text-secondary)" }}>{experience.position}</div>
        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{experience.period}</div>
        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{experience.location}</div>
      </div>

      {/* Right Column - Description & Achievements */}
      <div className="lg:col-span-2">
        <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {experience.description}
        </p>
        <ul className="space-y-3">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--slate-300)" }} />
              <span style={{ color: "var(--text-secondary)" }}>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
