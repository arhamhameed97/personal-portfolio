"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BOOKING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdx9J3TJbcH3YMsjDLvY4nLVYGHO-pdli6kyp4RWH3v9uF-yQ/viewform?usp=header";

export default function BookTrial() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".bt-content",
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--lp-purple) 0%, var(--lp-purple-dk) 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(200,241,53,0.15)", filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(255,228,77,0.12)", filter: "blur(70px)" }}
      />

      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 text-center">
        <div className="bt-content">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-extrabold tracking-widest uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff" }}
          >
            07 / Get Started
          </span>

          <h2
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Ready to start your
            <br />
            <span
              className="px-3 py-1 rounded-xl"
              style={{ background: "var(--lp-lime)", color: "var(--lp-navy)" }}
            >
              child&apos;s journey?
            </span>
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Book a free trial. No commitment, no credit card. Come see what a class looks
            like and let your child experience building something real.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 font-heading font-extrabold text-sm uppercase tracking-widest rounded-full transition-all duration-200 shadow-lg"
              style={{
                background: "var(--lp-lime)",
                color: "var(--lp-navy)",
                boxShadow: "0 8px 28px rgba(200,241,53,0.4)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Trial
              <FiArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="mailto:teach@arhamhameed.xyz"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 font-heading font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.97 }}
            >
              Send a Message
            </motion.a>
          </div>

          {/* Contact chips */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 mb-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            <a
              href="mailto:teach@arhamhameed.xyz"
              className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105 group"
              style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <FiMail size={15} style={{ color: "var(--lp-lime)" }} />
              </span>
              <span className="text-sm font-medium">teach@arhamhameed.xyz</span>
            </a>

            <a
              href="tel:+16467776394"
              className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <FiPhone size={15} style={{ color: "var(--lp-lime)" }} />
              </span>
              <span className="text-sm font-medium">+1 (646) 777-6394</span>
            </a>
          </div>

          {/* Signature */}
          <div
            className="pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              Your instructor
            </p>
            <p className="font-heading text-2xl font-extrabold text-white">Arham Hameed</p>
            <p className="text-sm italic mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
              Software Engineer &middot; Coding Instructor &middot; San Francisco, CA
            </p>
            <div className="mt-5">
              <Link
                href="/"
                className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                View full portfolio →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
