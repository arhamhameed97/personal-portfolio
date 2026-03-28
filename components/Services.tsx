"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/lib/data";
import { FiCode, FiTrendingUp, FiUsers } from "react-icons/fi";
import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const icons = [FiCode, FiTrendingUp, FiUsers];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
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
    <section
      id="services"
      className="relative py-24 md:py-36"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div ref={ref}>
          <div className="section-number mb-4">05 / Services</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <TextReveal
              as="h2"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              How I can help
            </TextReveal>
            <div className="flex items-end">
              <p
                className="text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                Comprehensive services spanning software engineering, financial
                analytics, and technical education.
              </p>
            </div>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={icons[index]}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    features: string[];
  };
  icon: React.ElementType;
  index: number;
  inView: boolean;
}

const ServiceCard = ({ service, icon: Icon, index, inView }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.08,
      y: y * 0.08,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="service-card card p-8 rounded-2xl group cursor-none transition-all duration-500 hover:border-[rgba(201,169,110,0.3)]"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
        style={{ background: "rgba(201, 169, 110, 0.15)" }}
      >
        <Icon size={22} style={{ color: "var(--accent-warm)" }} />
      </div>

      <h3
        className="font-heading text-xl font-bold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm mb-6 leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {service.description}
      </p>

      <ul className="space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
              style={{ background: "var(--accent-warm)" }}
            />
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 60px rgba(201, 169, 110, 0.05)",
        }}
      />
    </motion.div>
  );
};

export default Services;
