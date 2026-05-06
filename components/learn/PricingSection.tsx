"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BOOKING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdx9J3TJbcH3YMsjDLvY4nLVYGHO-pdli6kyp4RWH3v9uF-yQ/viewform?usp=header";

const trialFeatures = [
  "One free trial class per student",
  "Live coding skill assessment",
  "Personalized plan preview",
  "Available 7 days a week",
  "No commitment, no credit card",
];

const monthlyFeatures = [
  "4 live classes per month",
  "Fully personalized lesson plans",
  "Available 7 days a week",
  "Weekly written progress updates",
  "School homework help included",
  "Month-to-month, cancel anytime",
];

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] font-extrabold mt-0.5"
      style={{ background: color, color: "#ffffff" }}
    >
      ✓
    </span>
  );
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".price-header",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".price-card",
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: ".price-cards", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--lp-purple)" }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blob accents */}
      <div className="lp-blob lp-blob-lime absolute w-64 h-64 -bottom-20 -right-10" style={{ filter: "blur(60px)", opacity: 0.3 }} />
      <div className="lp-blob lp-blob-yellow absolute w-48 h-48 -top-10 left-[20%]" style={{ filter: "blur(60px)", opacity: 0.2 }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="price-header mb-14 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-extrabold tracking-widest uppercase mb-5"
            style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff" }}
          >
            02 / Pricing
          </span>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            Start free.{" "}
            <span
              className="px-3 py-0.5 rounded-xl"
              style={{ background: "var(--lp-lime)", color: "var(--lp-navy)" }}
            >
              Stay because it works.
            </span>
          </h2>
          <p className="text-lg max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            A free trial so you see the value before spending a dollar. Then the most
            affordable expert coding instruction around.
          </p>
        </div>

        {/* Cards */}
        <div className="price-cards grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

          {/* Free Trial */}
          <motion.div
            className="price-card relative rounded-2xl p-7 flex flex-col bg-white"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <div>
              <p
                className="text-[0.65rem] font-heading font-extrabold tracking-[0.15em] uppercase mb-1"
                style={{ color: "var(--lp-purple)" }}
              >
                Trial Class
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--lp-muted)" }}>
                Experience our interactive platform
              </p>
              <p
                className="font-heading text-[3.5rem] font-extrabold leading-none mb-7"
                style={{ color: "var(--lp-navy)" }}
              >
                $0
              </p>
              <ul className="space-y-3 mb-7">
                {trialFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[0.8125rem]" style={{ color: "#3d4460" }}>
                    <CheckIcon color="var(--lp-purple)" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block w-full py-4 text-center font-heading font-bold text-[0.8125rem] uppercase tracking-widest rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--lp-navy)", color: "#ffffff" }}
            >
              Book Free Trial
            </a>
          </motion.div>

          {/* Monthly */}
          <motion.div
            className="price-card relative rounded-2xl flex flex-col bg-white overflow-hidden"
            style={{ border: "3px solid var(--lp-lime)" }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {/* 40% OFF badge */}
            <div
              className="absolute top-0 right-0 px-5 py-2.5 font-heading font-extrabold text-sm tracking-wider uppercase"
              style={{
                background: "var(--lp-lime)",
                color: "var(--lp-navy)",
                borderRadius: "0 18px 0 18px",
              }}
            >
              40% OFF
            </div>

            <div className="p-7 pt-6 flex flex-col h-full">
              <div>
                <p
                  className="text-[0.65rem] font-heading font-extrabold tracking-[0.15em] uppercase mb-1"
                  style={{ color: "var(--lp-purple)" }}
                >
                  Monthly Classes
                </p>
                <p
                  className="text-[0.65rem] font-heading font-extrabold tracking-[0.12em] uppercase mb-5"
                  style={{ color: "var(--lp-purple)", opacity: 0.65 }}
                >
                  Special Launch Price!
                </p>

                <div className="flex items-baseline gap-3 mb-7">
                  <span
                    className="font-heading text-[3.5rem] font-extrabold leading-none"
                    style={{ color: "var(--lp-navy)" }}
                  >
                    $88
                  </span>
                  <div>
                    <p className="text-sm line-through" style={{ color: "#9ca3af" }}>$145</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>/ month</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-7">
                  {monthlyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[0.8125rem]" style={{ color: "#3d4460" }}>
                      <CheckIcon color="var(--lp-purple)" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full py-4 text-center font-heading font-bold text-[0.8125rem] uppercase tracking-widest rounded-xl transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--lp-navy)", color: "#ffffff" }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          Keeping the first cohort small for maximum personal attention. Questions?{" "}
          <a
            href="tel:+16467776394"
            className="underline underline-offset-2 text-white transition-opacity hover:opacity-80"
          >
            +1 (646) 777-6394
          </a>{" "}
          or{" "}
          <a
            href="mailto:teach@arhamhameed.xyz"
            className="underline underline-offset-2 text-white transition-opacity hover:opacity-80"
          >
            teach@arhamhameed.xyz
          </a>
        </p>
      </div>
    </section>
  );
}
