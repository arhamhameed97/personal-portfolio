"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";

const BOOKING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdx9J3TJbcH3YMsjDLvY4nLVYGHO-pdli6kyp4RWH3v9uF-yQ/viewform?usp=header";

const navItems = [
  { name: "Why Different", href: "#why" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function LearnNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight - vh;
        setIsScrolled(scrollY > 30);
        if (progressRef.current) {
          const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          progressRef.current.style.width = `${progress}%`;
        }
        const ids = ["contact", "faq", "pricing", "curriculum", "why", "hero"];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      {/* Purple progress bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-[3px] z-[9999] transition-none"
        style={{ width: "0%", background: "var(--lp-purple)" }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "#ffffff",
          boxShadow: isScrolled
            ? "0 2px 24px rgba(92,45,222,0.1)"
            : "0 1px 0 rgba(92,45,222,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo + back */}
            <div className="flex items-center gap-5">
              <Link
                href="/"
                className="font-heading text-xl font-extrabold tracking-tight"
                style={{ color: "var(--lp-navy)" }}
              >
                AH<span style={{ color: "var(--lp-purple)" }}>.</span>
              </Link>
              <Link
                href="/"
                className="hidden md:flex items-center gap-1.5 text-xs font-heading font-semibold tracking-wider uppercase transition-colors duration-200"
                style={{ color: "var(--lp-muted)" }}
              >
                <FiArrowLeft size={11} />
                Portfolio
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="relative px-3.5 py-2 text-xs font-heading font-semibold tracking-wider uppercase transition-colors duration-200 rounded-lg"
                    style={{
                      color: isActive ? "var(--lp-purple)" : "var(--lp-navy)",
                      background: isActive ? "var(--lp-purple-lt)" : "transparent",
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-xs font-heading font-bold tracking-wider uppercase rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "var(--lp-purple)",
                color: "#ffffff",
                boxShadow: "0 4px 14px rgba(92,45,222,0.3)",
              }}
            >
              Book Free Trial
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden text-2xl transition-colors duration-200"
              style={{ color: "var(--lp-navy)" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 flex flex-col items-start justify-center px-10 space-y-5"
              style={{ background: "#ffffff" }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-heading font-semibold tracking-wider uppercase mb-4"
                style={{ color: "var(--lp-muted)" }}
              >
                <FiArrowLeft size={13} />
                Back to Portfolio
              </Link>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.08 }}
                  className="font-heading text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--lp-navy)" }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navItems.length + 0.08 }}
                className="mt-6 px-8 py-4 font-heading font-bold text-base rounded-full"
                style={{ background: "var(--lp-purple)", color: "#ffffff" }}
              >
                Book Free Trial
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
