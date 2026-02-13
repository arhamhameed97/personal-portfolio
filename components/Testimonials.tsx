"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 60,
            opacity: 0,
            rotateX: 15,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">3  |  Testimonials</div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 max-w-4xl">
            What people say about working with me
          </h2>

          {/* Testimonials Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
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

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    position: string;
    company: string;
    content: string;
    image: string;
  };
  index: number;
  inView: boolean;
}

const TestimonialCard = ({ testimonial, index, inView }: TestimonialCardProps) => {
  return (
    <motion.div
      className="testimonial-card card p-8 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-semibold text-lg">
            {testimonial.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.position}</div>
          <div className="text-sm text-gray-500">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
