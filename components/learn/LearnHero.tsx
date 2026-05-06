"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

export default function LearnHero() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const line1Els = heroRef.current?.querySelectorAll(".hero-l1 .hw");
      if (line1Els?.length) {
        gsap.fromTo(line1Els,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.85, stagger: 0.07, ease: "power4.out", delay: 0.2 }
        );
      }
      const line2Els = heroRef.current?.querySelectorAll(".hero-l2 .hw");
      if (line2Els?.length) {
        gsap.fromTo(line2Els,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.85, stagger: 0.07, ease: "power4.out", delay: 0.52 }
        );
      }
      gsap.fromTo(".lhero-badge", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, delay: 0.1,  ease: "power3.out" });
      gsap.fromTo(".lhero-sub",   { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, delay: 1.0,  ease: "power3.out" });
      gsap.fromTo(".lhero-stats", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8,  delay: 1.18, ease: "power3.out" });

      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { y: 0, opacity: 1 },
          {
            y: -50, opacity: 0, immediateRender: false, ease: "none",
            scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const line1Words = ["Learn", "to", "Code."];
  const line2Words = ["Build", "Real"];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-[70px]"
      style={{ background: "var(--lp-bg)" }}
    >
      {/* Background blobs */}
      <div className="lp-blob lp-blob-purple w-[500px] h-[500px] -top-32 -right-24" />
      <div className="lp-blob lp-blob-lime   w-[320px] h-[320px] bottom-0 -left-16"  />
      <div className="lp-blob lp-blob-yellow w-[260px] h-[260px] top-[50%] right-[40%]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div
          ref={contentRef}
          className="will-change-transform py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
        >

          {/* ── Left: text content ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Enrollment badge */}
            <div className="lhero-badge mb-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-bold tracking-widest uppercase"
                style={{ background: "var(--lp-purple)", color: "#ffffff" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--lp-lime)] animate-pulse" />
                Now Enrolling · Small Cohort
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight mb-5">
              <span className="block hero-l1">
                {line1Words.map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                    <span className="hw inline-block" style={{ color: "var(--lp-navy)" }}>{w}</span>
                  </span>
                ))}
              </span>
              <span className="block hero-l2">
                {line2Words.map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                    <span className="hw inline-block" style={{ color: "var(--lp-navy)" }}>{w}</span>
                  </span>
                ))}
                <span className="inline-block overflow-hidden mr-[0.22em]">
                  <span
                    className="hw inline-block px-3 py-1 rounded-xl"
                    style={{ background: "var(--lp-lime)", color: "var(--lp-navy)" }}
                  >
                    Things.
                  </span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="lhero-sub text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: "var(--lp-muted)" }}
            >
              AI-integrated coding classes for kids &amp; teens. No boring theory, no pointless drills.
              Students ship real games, websites, and AI projects from{" "}
              <strong style={{ color: "var(--lp-purple)", fontWeight: 700 }}>day one</strong>.
            </p>
          </div>

          {/* ── Right: 2×2 stats grid ── */}
          <div className="lhero-stats lg:col-span-5 flex items-center justify-center self-stretch">
            <div
              className="relative rounded-3xl p-10 w-full"
              style={{
                background: "var(--lp-purple)",
                boxShadow: "0 32px 80px rgba(92,45,222,0.3)",
              }}
            >
              {/* Dot texture */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="relative grid grid-cols-2 gap-5">
              {stats.map(({ number, label, Icon }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-7 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.09)" }}
                >
                  <span
                    className="flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{ background: "rgba(255,255,255,0.14)" }}
                  >
                    <Icon size={24} color="var(--lp-lime)" strokeWidth={2} />
                  </span>
                  <span
                    className="font-heading text-4xl md:text-5xl font-extrabold leading-none mb-2"
                    style={{ color: "var(--lp-lime)" }}
                  >
                    <NumberCounter target={number} duration={2200} />
                  </span>
                  <span
                    className="text-[0.68rem] font-heading font-bold tracking-widest uppercase leading-snug"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(92,45,222,0.25)" }}
        >
          <motion.div
            animate={{ opacity: [0.8, 0.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--lp-purple)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
