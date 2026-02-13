"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiPostgresql, SiTailwindcss, SiGit, SiDocker,
  SiAmazon, SiVercel, SiFigma, SiJira, SiNumpy, SiPandas
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap: { [key: string]: any } = {
    Python: SiPython,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    PostgreSQL: SiPostgresql,
    "Tailwind CSS": SiTailwindcss,
    Git: SiGit,
    Docker: SiDocker,
    AWS: SiAmazon,
    Vercel: SiVercel,
    Figma: SiFigma,
    Jira: SiJira,
    NumPy: SiNumpy,
    Pandas: SiPandas,
    Java: FaJava,
    SQL: FaDatabase,
  };

  const categoryColors: { [key: string]: string } = {
    Languages: "from-blue-500 to-cyan-500",
    Frontend: "from-purple-500 to-pink-500",
    Backend: "from-green-500 to-emerald-500",
    Tools: "from-orange-500 to-red-500",
    DataScience: "from-yellow-500 to-amber-500",
    Cloud: "from-indigo-500 to-blue-500",
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Skills & <span className="text-gradient">Technologies</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <SkillCategory
                key={category}
                category={category}
                items={items}
                color={categoryColors[category]}
                iconMap={iconMap}
                index={categoryIndex}
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
  color: string;
  iconMap: { [key: string]: any };
  index: number;
  inView: boolean;
}

const SkillCategory = ({ category, items, color, iconMap, index, inView }: SkillCategoryProps) => {
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
      className="glass p-6 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      {/* Category Header */}
      <div className="mb-4">
        <h3 className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {categoryNames[category]}
        </h3>
        <div className={`w-16 h-1 bg-gradient-to-r ${color} rounded-full mt-2`} />
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-3">
        {items.map((skill, skillIndex) => {
          const Icon = iconMap[skill];
          return (
            <motion.div
              key={skill}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-colors group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {Icon && (
                <Icon className={`text-base group-hover:text-${color.split('-')[1]}-500`} />
              )}
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {skill}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
