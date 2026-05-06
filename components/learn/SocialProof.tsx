"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiUsers, FiAward, FiCalendar, FiLayers } from "react-icons/fi";
import NumberCounter from "@/components/NumberCounter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: "100+", label: "Students Taught",       Icon: FiUsers    },
  { number: "85%+", label: "Student Retention",      Icon: FiAward    },
  { number: "5+",   label: "Years Teaching",          Icon: FiCalendar },
  { number: "8+",   label: "Languages & Frameworks", Icon: FiLayers   },
];

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".sp-item",
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.11, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-16 overflow-hidden"
      style={{ background: "var(--lp-purple)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map(({ number, label, Icon }, i) => (
            <div
              key={i}
              className="sp-item flex flex-col items-center text-center py-2 md:border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <Icon size={18} color="var(--lp-lime)" strokeWidth={2} />
              </span>
              <div
                className="font-heading text-4xl md:text-5xl font-extrabold mb-1"
                style={{ color: "var(--lp-lime)" }}
              >
                <NumberCounter target={number} duration={2200} />
              </div>
              <p
                className="text-xs md:text-sm font-heading font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
