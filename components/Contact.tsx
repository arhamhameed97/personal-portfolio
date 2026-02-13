"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll(".contact-item");
      if (elements) {
        gsap.fromTo(
          elements,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative py-20 md:py-32" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Number */}
          <div className="section-number mb-4">6  |  Get in Touch</div>

          {/* Main Content */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Left Column */}
            <div className="contact-item">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Let&apos;s work together
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you need help with development, have a question, or just want to connect.
              </p>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div className="contact-item">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xl hover:text-gray-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="contact-item">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xl hover:text-gray-600 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="contact-item">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Location
                </h3>
                <p className="text-xl">{personalInfo.location}</p>
              </div>

              <div className="contact-item">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="w-12 h-12 border-2 border-gray-900 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiMail size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
              <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
