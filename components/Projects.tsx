"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="relative py-20 md:py-32" style={{ background: "var(--background)" }}>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl" style={{ color: "var(--text-primary)" }}>
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
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Card entrance animation - smooth scale and fade
      gsap.fromTo(
        cardRef.current,
        {
          scale: 0.92,
          opacity: 0,
          y: 60,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.8,
            invalidateOnRefresh: true,
          },
        }
      );

      // Image morph effect - scale and clip-path animation
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.15,
          clipPath: "inset(0% 0% 0% 0% round 0px)",
        },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 16px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 2,
            invalidateOnRefresh: true,
          },
        }
      );

      // Smoother hover effect
      const card = cardRef.current;
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.01,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.a
      ref={cardRef}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block card rounded-2xl overflow-hidden group cursor-pointer will-change-transform"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image/Visual Side */}
        <div ref={imageRef} className="relative h-64 lg:h-96 overflow-hidden bg-gray-900 will-change-transform">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover:from-black/30 transition-colors duration-500" />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-xl font-bold text-white">{project.id}</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{ background: "rgba(229, 229, 229, 0.1)", color: "var(--slate-300)" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-colors" style={{ color: "var(--text-primary)" }}>
              {project.title}
            </h3>

            {/* Description */}
            <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {project.longDescription}
            </p>

            {/* Highlights/Metrics */}
            <div className="space-y-2 mb-6">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--slate-300)" }} />
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center font-medium group-hover:gap-2 transition-all" style={{ color: "var(--slate-200)" }}>
            View Project
            <FiArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default Projects;
