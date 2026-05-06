"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const topicsRow1 = [
  "Python", "AI Development", "JavaScript", "Unity",
  "Scratch", "Roblox", "HTML & CSS", "Java",
  "Minecraft Modding", "Arduino & Robotics", "Homework Help", "React",
];

const topicsRow2 = [
  "Machine Learning", "Game Development", "Web Apps", "C#",
  "Algorithms", "Mobile Basics", "TypeScript",
  "APIs & Backend", "Git & GitHub", "Project Portfolio",
];

const ageGroups = [
  {
    range: "Ages 7–10",
    label: "Beginners",
    desc: "Scratch, Minecraft, and intro to Python. Visual, creative, and hands-on from day one.",
    bg: "var(--lp-purple)",
    textColor: "#ffffff",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeColor: "#ffffff",
  },
  {
    range: "Ages 11–14",
    label: "Builders",
    desc: "Python, JavaScript, game development, and first AI projects. Building real things.",
    bg: "var(--lp-lime)",
    textColor: "var(--lp-navy)",
    badgeBg: "rgba(26,31,54,0.12)",
    badgeColor: "var(--lp-navy)",
  },
  {
    range: "Ages 15+",
    label: "Advanced",
    desc: "Full-stack development, ML models, and portfolio-ready projects for college applications.",
    bg: "var(--lp-orange)",
    textColor: "#ffffff",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeColor: "#ffffff",
  },
];

export default function CurriculumSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".curr-header",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".curr-age",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".curr-ages", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--lp-bg-alt)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-14">
        <div className="curr-header max-w-2xl">
          <span className="lp-section-label">04 / Curriculum</span>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--lp-navy)" }}
          >
            One program,{" "}
            <span className="lp-highlight">every language</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--lp-muted)" }}>
            Classes adapt to your child&apos;s interests and goals. Whether they want to build games,
            websites, or AI projects, we have it covered.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div
        className="marquee-left mb-3 overflow-hidden"
        style={{ "--duration": "32s" } as React.CSSProperties}
      >
        <div className="marquee-track flex gap-2.5 py-1">
          {[...topicsRow1, ...topicsRow1].map((topic, i) => (
            <span key={i} className="lp-pill-purple">{topic}</span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 */}
      <div
        className="marquee-right overflow-hidden mb-14"
        style={{ "--duration": "38s" } as React.CSSProperties}
      >
        <div className="marquee-track flex gap-2.5 py-1">
          {[...topicsRow2, ...topicsRow2].map((topic, i) => (
            <span key={i} className="lp-pill-lime">{topic}</span>
          ))}
        </div>
      </div>

      {/* Age group cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="curr-ages grid grid-cols-1 md:grid-cols-3 gap-5">
          {ageGroups.map((group, i) => (
            <div
              key={i}
              className="curr-age rounded-2xl p-7 shadow-md"
              style={{ background: group.bg }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-4"
                style={{ background: group.badgeBg, color: group.badgeColor }}
              >
                {group.range}
              </span>
              <h3
                className="font-heading text-2xl font-extrabold mb-2"
                style={{ color: group.textColor }}
              >
                {group.label}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: group.textColor, opacity: 0.85 }}
              >
                {group.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
