"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

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
              Work <span className="text-gradient">Experience</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  inView={inView}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
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
  isEven: boolean;
}

const ExperienceCard = ({ experience, index, inView, isEven }: ExperienceCardProps) => {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 hidden md:block"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-50" />
      </motion.div>

      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
        <motion.div
          className="glass p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          whileHover={{ y: -5 }}
        >
          {/* Company and Position */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-1">{experience.company}</h3>
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
              <FiBriefcase size={18} />
              <span>{experience.position}</span>
            </div>
            <div className={`flex flex-wrap gap-4 text-sm text-gray-400 ${isEven ? "md:justify-end" : ""}`}>
              <div className="flex items-center gap-2">
                <FiCalendar size={16} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{experience.description}</p>

          {/* Achievements */}
          <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-gray-400 text-sm"
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 + i * 0.1, duration: 0.5 }}
              >
                {!isEven && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                )}
                <span className={isEven ? "md:mr-3" : ""}>{achievement}</span>
                {isEven && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 hidden md:block" />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export default Experience;
