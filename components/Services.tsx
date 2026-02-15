"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiDatabase, FiCpu } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 30,
            opacity: 0,
            scale: 0.97,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.2,
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

  const services = [
    {
      icon: FiCode,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies. From React and Next.js frontends to Node.js and PostgreSQL backends.",
      features: [
        "Responsive web applications",
        "RESTful API development",
        "Database design & optimization",
        "Cloud deployment & DevOps",
      ],
    },
    {
      icon: FiCpu,
      title: "AI/ML Solutions",
      description: "Integrating AI and machine learning capabilities into applications. From predictive models to intelligent automation.",
      features: [
        "Machine learning models",
        "Data analysis & visualization",
        "Predictive analytics",
        "AI-powered features",
      ],
    },
    {
      icon: FiDatabase,
      title: "Technical Consulting",
      description: "Strategic technical guidance and code reviews. Helping teams make informed decisions about architecture and technology choices.",
      features: [
        "Architecture review",
        "Code audits",
        "Technology stack planning",
        "Team mentoring",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">7  |  Services</div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl" style={{ color: "var(--text-primary)" }}>
            How I can help
          </h2>
          <p className="text-xl mb-16 max-w-3xl" style={{ color: "var(--text-secondary)" }}>
            Comprehensive development services to bring your ideas to life and scale your business.
          </p>

          {/* Services Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
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

interface ServiceCardProps {
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
  inView: boolean;
}

const ServiceCard = ({ service, index, inView }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      className="service-card card p-8 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: "var(--slate-100)", color: "var(--background)" }}>
        <Icon size={24} />
      </div>

      <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
      <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.description}</p>

      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--slate-300)" }} />
            <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Services;
