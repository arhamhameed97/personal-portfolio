"use client";

import { personalInfo } from "@/lib/data";
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal, { LineReveal } from "./TextReveal";
import MagneticButton from "./MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".contact-item");
      if (items) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-36 noise-bg"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="section-number mb-4">06 / Contact</div>

        {/* Big heading */}
        <TextReveal
          as="h2"
          className="font-heading text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.05] mb-12"
          style={{ color: "var(--text-primary)" }}
          splitBy="word"
          stagger={0.06}
        >
          Let&apos;s work together
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: message */}
          <div>
            <LineReveal delay={0.2}>
              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m always interested in new challenges at the intersection
                of technology and finance. Whether you need a developer, an
                analyst, or a technical educator — let&apos;s talk.
              </p>
            </LineReveal>

            {/* Email CTA */}
            <div className="contact-item mb-8">
              <MagneticButton as="a" href={`mailto:${personalInfo.email}`} strength={0.15}>
                <span
                  className="font-heading text-2xl md:text-3xl font-bold transition-colors duration-300 hover:text-[var(--accent-warm)] flex items-center gap-3 cursor-none"
                  style={{ color: "var(--text-primary)" }}
                >
                  {personalInfo.email}
                  <FiArrowUpRight
                    size={24}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </MagneticButton>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <a
                href={`tel:${personalInfo.phone}`}
                className="font-heading text-lg transition-colors duration-300 hover:text-[var(--accent-warm)] cursor-none"
                style={{ color: "var(--text-muted)" }}
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Right: links + info */}
          <div className="space-y-10">
            <div className="contact-item">
              <h3
                className="font-heading text-xs font-semibold uppercase tracking-[0.2em] mb-5"
                style={{ color: "var(--accent-warm)" }}
              >
                Connect
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
                  { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <MagneticButton key={label} as="a" href={href} target="_blank" rel="noopener noreferrer" strength={0.3}>
                    <div
                      className="w-14 h-14 border rounded-full flex items-center justify-center transition-all duration-500 hover:border-[var(--accent-warm)] hover:bg-[rgba(201,169,110,0.08)] cursor-none group"
                      style={{ borderColor: "var(--slate-700)" }}
                    >
                      <Icon
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                        style={{ color: "var(--text-primary)" }}
                      />
                    </div>
                  </MagneticButton>
                ))}
              </div>
            </div>

            <div className="contact-item">
              <h3
                className="font-heading text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "var(--accent-warm)" }}
              >
                Location
              </h3>
              <p
                className="font-heading text-lg"
                style={{ color: "var(--text-primary)" }}
              >
                {personalInfo.location}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Open to remote & global opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="font-heading tracking-wider">
              Built with Next.js, TypeScript & GSAP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
