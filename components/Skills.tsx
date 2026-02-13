"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-white">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl">
            Technologies I work with
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            A comprehensive toolkit for building modern, scalable applications from frontend to backend, with expertise in AI/ML and data analytics.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {categoryNames[category]}
      </h3>
      <div className="space-y-3">
        {items.map((skill) => (
          <div
            key={skill}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
