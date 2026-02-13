"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="relative py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">2  |  Recent Work</div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 max-w-4xl">
            Recent successful projects
          </h2>

          {/* Projects Grid */}
          <div className="space-y-8">
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
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block card rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image/Visual Side */}
        <div className="relative h-64 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold text-gray-300">{project.id}</div>
          </div>
          <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300" />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Highlights/Metrics */}
            <div className="space-y-2 mb-6">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center text-gray-900 font-medium group-hover:gap-2 transition-all">
            View Project
            <FiArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default Projects;
