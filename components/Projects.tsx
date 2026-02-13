"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

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
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
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

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    highlights: string[];
    image: string;
  };
  index: number;
  inView: boolean;
}

const ProjectCard = ({ project, index, inView }: ProjectCardProps) => {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/10">{project.id}</div>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Highlights */}
        <div className="mb-4">
          {project.highlights.slice(0, 2).map((highlight) => (
            <div key={highlight} className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              {highlight}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium text-sm glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink size={16} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 glass rounded-lg text-white font-medium text-sm border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={16} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
