"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCpu, FiPackage, FiUser, FiDollarSign } from "react-icons/fi";
import type { IconType } from "react-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Differentiator {
  Icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  borderColor: string;
  bgTint: string;
  iconBg: string;
}

const differentiators: Differentiator[] = [
  {
    Icon: FiCpu,
    iconColor: "#5c2dde",
    title: "AI-Integrated from Day One",
    description:
      "Students don't just use AI tools. They understand how AI works and build their own AI projects. The kids who learn this now will be years ahead of their peers.",
    borderColor: "#a78bfa",
    bgTint: "#F3F0FF",
    iconBg: "#EDE8FF",
  },
  {
    Icon: FiPackage,
    iconColor: "#4d7c0f",
    title: "Project-Based, Zero Drills",
    description:
      "No boring theory. No pointless exercises. From the first class, students build real things: games, websites, and apps they can actually show off to friends and family.",
    borderColor: "#84cc16",
    bgTint: "#F9FFE3",
    iconBg: "#EDFFC0",
  },
  {
    Icon: FiUser,
    iconColor: "#c2410c",
    title: "Fully Personalized",
    description:
      "Every student gets a custom lesson plan matched to their age, skill level, and interests. Adaptive difficulty and progress tracking keep them engaged and growing.",
    borderColor: "#FF8C42",
    bgTint: "#FFF6EE",
    iconBg: "#FFE8D0",
  },
  {
    Icon: FiDollarSign,
    iconColor: "#9d174d",
    title: "Unbeatable Price Point",
    description:
      "At $88/month for 4 live classes, you get a senior engineer and 5-year instructor for the price of a textbook. No hidden fees, no long commitments, cancel anytime.",
    borderColor: "#FF6B9D",
    bgTint: "#FFF0F6",
    iconBg: "#FFD6E8",
  },
];

export default function WhyDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".wd-header",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".wd-card",
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".wd-grid", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ background: "var(--lp-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="wd-header mb-14 max-w-2xl">
          <span className="lp-section-label">03 / Why Different</span>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--lp-navy)" }}
          >
            Not another{" "}
            <span className="lp-wavy" style={{ color: "var(--lp-purple)" }}>
              coding bootcamp
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--lp-muted)" }}>
            After 5 years of teaching and 100+ students, I&apos;ve seen what works. This program is
            built around the patterns that actually keep kids engaged.
          </p>
        </div>

        <div className="wd-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="wd-card lp-card-white p-8 group"
              style={{ borderLeft: `4px solid ${item.borderColor}`, background: item.bgTint }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                style={{ background: item.iconBg }}
              >
                <item.Icon size={24} color={item.iconColor} strokeWidth={1.75} />
              </div>
              <h3
                className="font-heading text-xl font-bold mb-3"
                style={{ color: "var(--lp-navy)" }}
              >
                {item.title}
              </h3>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: "var(--lp-muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
