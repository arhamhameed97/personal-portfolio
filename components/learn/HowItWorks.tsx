"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCalendar, FiClipboard, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BOOKING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdx9J3TJbcH3YMsjDLvY4nLVYGHO-pdli6kyp4RWH3v9uF-yQ/viewform?usp=header";

interface Step {
  number: string;
  Icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  cta: { label: string; href: string } | null;
  circleBg: string;
  cardBg: string;
}

const steps: Step[] = [
  {
    number: "01",
    Icon: FiCalendar,
    iconColor: "#ffffff",
    title: "Book a Free Trial",
    description:
      "No commitment, no credit card. A single free class so you can see the teaching style, meet Arham, and decide if it's the right fit. Available 7 days a week.",
    cta: { label: "Book Now", href: BOOKING_URL },
    circleBg: "var(--lp-purple)",
    cardBg: "var(--lp-purple-lt)",
  },
  {
    number: "02",
    Icon: FiClipboard,
    iconColor: "var(--lp-navy)",
    title: "Skill Assessment & Custom Plan",
    description:
      "After the trial, a personalized curriculum is built around your child's age, skill level, and interests, whether a complete beginner or already coding.",
    cta: null,
    circleBg: "var(--lp-lime)",
    cardBg: "#F9FFE3",
  },
  {
    number: "03",
    Icon: FiTrendingUp,
    iconColor: "#ffffff",
    title: "Weekly Classes + Progress Updates",
    description:
      "4 live classes per month with weekly written progress updates so you always know what your child built, what they're working toward, and how they're improving.",
    cta: null,
    circleBg: "var(--lp-orange)",
    cardBg: "#FFF6EE",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hiw-header",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".hiw-step",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.16, ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-steps", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ background: "var(--lp-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="hiw-header mb-14">
          <span className="lp-section-label">05 / How It Works</span>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--lp-navy)" }}
          >
            Simple.{" "}
            <span className="lp-highlight">Three steps.</span>
          </h2>
        </div>

        <div className="hiw-steps grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="hiw-step lp-card-white p-8"
              style={{ background: step.cardBg }}
            >
              <div
                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5 shadow-md"
                style={{ background: step.circleBg }}
              >
                <step.Icon size={28} color={step.iconColor} strokeWidth={1.75} />
              </div>

              <span
                className="inline-block text-xs font-heading font-bold tracking-widest uppercase mb-2 px-2.5 py-1 rounded-full"
                style={{ background: "rgba(92,45,222,0.1)", color: "var(--lp-purple)" }}
              >
                Step {step.number}
              </span>

              <h3
                className="font-heading text-xl font-bold mb-3 mt-1"
                style={{ color: "var(--lp-navy)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--lp-muted)" }}>
                {step.description}
              </p>

              {step.cta && (
                <a
                  href={step.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-bold tracking-wide hover:underline"
                  style={{ color: "var(--lp-purple)" }}
                >
                  {step.cta.label} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
