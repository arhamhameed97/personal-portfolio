"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const categories = gridRef.current?.querySelectorAll(".skill-category");
      if (categories) {
        gsap.fromTo(
          categories,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="relative py-20 md:py-32" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">4  |  Technical Expertise</div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            Technologies I work with
          </h2>
          <p className="text-xl mb-16 max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            A comprehensive toolkit for building modern, scalable applications from frontend to backend, with expertise in AI/ML and data analytics.
          </p>

          {/* Skills Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, items], index) => (
              <SkillCategory
                key={category}
                category={category}
                items={items}
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

interface SkillCategoryProps {
  category: string;
  items: string[];
  index: number;
  inView: boolean;
}

const SkillCategory = ({ category, items, index, inView }: SkillCategoryProps) => {
  const categoryNames: { [key: string]: string } = {
    Languages: "Languages",
    Frontend: "Frontend",
    Backend: "Backend",
    Tools: "Tools & Platforms",
    DataScience: "Data Science",
    Cloud: "Cloud & DevOps",
  };

  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-gradient">
        {categoryNames[category]}
      </h3>
      <div className="space-y-3">
        {items.map((skill) => (
          <div
            key={skill}
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
