"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { about } from "@/lib/data";
import { useEffect, useState } from "react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto">
            {/* Bio Card */}
            <motion.div
              className="glass p-8 md:p-12 rounded-3xl mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {about.bio}
              </p>
            </motion.div>

            {/* Achievements */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {about.achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.label}
                  achievement={achievement}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface AchievementCardProps {
  achievement: { number: string; label: string };
  index: number;
  inView: boolean;
}

const AchievementCard = ({ achievement, index, inView }: AchievementCardProps) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(achievement.number.replace(/\D/g, ""));
  const hasPlus = achievement.number.includes("+");
  const hasPercent = achievement.number.includes("%");

  useEffect(() => {
    if (inView && targetNumber) {
      let current = 0;
      const increment = targetNumber / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [inView, targetNumber]);

  return (
    <motion.div
      className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 glow"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {count}
        {hasPlus && "+"}
        {hasPercent && "%"}
      </div>
      <div className="text-sm md:text-base text-gray-400">{achievement.label}</div>
    </motion.div>
  );
};

export default About;
