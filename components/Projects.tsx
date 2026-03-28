"use client";

import { projects } from "@/lib/data";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const cards = track.querySelectorAll(".project-slide");
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { clipPath: "inset(8% 8% 8% 8% round 20px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById?.("horizontalScroll") || undefined,
              start: "left 80%",
              end: "left 30%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="min-h-screen flex flex-col justify-center">
        {/* Header - fixed while scrolling horizontally */}
        <div ref={headerRef} className="px-6 md:px-8 lg:px-12 pt-24 pb-8 max-w-7xl mx-auto w-full">
          <div className="section-number mb-4">03 / Work</div>
          <TextReveal
            as="h2"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl"
            style={{ color: "var(--text-primary)" }}
          >
            Selected projects
          </TextReveal>
        </div>

        {/* Horizontal scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-8 px-6 md:px-8 lg:px-12 pb-24 pt-8 items-stretch"
          style={{ width: "max-content" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* End spacer with CTA */}
          <div className="flex items-center justify-center min-w-[300px] md:min-w-[400px]">
            <a
              href="https://github.com/arhamhameed97"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 cursor-none"
            >
              <div
                className="w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 group-hover:border-[var(--accent-warm)] group-hover:scale-110"
                style={{ borderColor: "var(--slate-600)" }}
              >
                <FiArrowUpRight
                  size={28}
                  className="transition-all duration-300 group-hover:rotate-45"
                  style={{ color: "var(--text-primary)" }}
                />
              </div>
              <span
                className="font-heading text-sm font-semibold tracking-wider uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                View All
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    highlights: string[];
    image: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-slide relative min-w-[80vw] md:min-w-[600px] lg:min-w-[750px] h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden group cursor-none"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="80vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      </div>

      {/* Oversized project number */}
      <div
        className="absolute top-4 right-6 font-heading text-[120px] md:text-[180px] font-extrabold leading-none opacity-10 select-none"
        style={{ color: "var(--text-primary)" }}
      >
        {String(project.id).padStart(2, "0")}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="glass-pill text-xs py-1 px-3">
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-1"
          style={{ color: "#ffffff" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm font-heading font-medium mb-3 tracking-wider uppercase"
          style={{ color: "var(--accent-warm)" }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5 max-w-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              {h}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-heading font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-3 cursor-none"
            style={{ background: "var(--accent-warm)", color: "#0a0a0a" }}
          >
            Live
            <FiArrowUpRight size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-heading font-semibold tracking-wider border transition-all duration-300 hover:border-[var(--accent-warm)] cursor-none"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}
          >
            <FiGithub size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
