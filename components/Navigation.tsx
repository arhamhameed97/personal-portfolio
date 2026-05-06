"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight - vh;

        setIsScrolled(scrollY > 30);
        setIsDark(scrollY > vh * 0.8);

        if (progressRef.current) {
          const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          progressRef.current.style.width = `${progress}%`;
        }

        const sections = ["contact", "services", "skills", "work", "experience", "about", "home"];
        for (const id of sections) {
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

  const getNavBackground = useCallback(() => {
    if (!isScrolled) return "transparent";
    return isDark ? "rgba(20, 20, 20, 0.85)" : "rgba(212, 212, 212, 0.85)";
  }, [isScrolled, isDark]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const textColor = isDark ? "#ffffff" : "#0a0a0a";
  const mutedColor = isDark ? "#a3a3a3" : "#525252";

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ width: "0%" }} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-xl" : ""
        }`}
        style={{
          backgroundColor: getNavBackground(),
          borderBottom: isScrolled
            ? `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(10,10,10,0.06)"}`
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <MagneticButton strength={0.15}>
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
                className="font-heading text-lg font-bold cursor-none tracking-tight transition-colors duration-300"
                style={{ color: textColor }}
              >
                AH<span style={{ color: "var(--accent-warm)" }}>.</span>
              </a>
            </MagneticButton>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="relative px-3 py-2 text-xs font-heading font-medium tracking-wider uppercase transition-colors duration-300 cursor-none"
                    style={{ color: isActive ? "var(--accent-warm)" : mutedColor }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-px"
                        style={{ background: "var(--accent-warm)" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="/learn"
                className="relative px-3 py-2 text-xs font-heading font-medium tracking-wider uppercase transition-colors duration-300 cursor-none"
                style={{ color: "var(--accent-warm)" }}
              >
                Classes
              </a>
            </div>

            <MagneticButton strength={0.15} className="hidden md:block">
              <a
                href="mailto:arham.hameed@uni.minerva.edu"
                className="px-5 py-2 text-xs font-heading font-semibold tracking-wider uppercase rounded-full transition-all duration-300 cursor-none"
                style={{
                  background: isDark ? "var(--accent-warm)" : "#0a0a0a",
                  color: isDark ? "#0a0a0a" : "#ffffff",
                }}
              >
                Hire Me
              </a>
            </MagneticButton>

            <button
              className="md:hidden text-2xl cursor-none transition-colors duration-300"
              style={{ color: textColor }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 flex flex-col items-start justify-center px-8 space-y-6"
              style={{ background: "#141414" }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1 }}
                  className="font-heading text-3xl font-bold tracking-tight"
                  style={{ color: "#ffffff" }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/learn"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navItems.length + 0.05 }}
                className="font-heading text-3xl font-bold tracking-tight"
                style={{ color: "var(--accent-warm)" }}
              >
                Classes
              </motion.a>
              <motion.a
                href="mailto:arham.hameed@uni.minerva.edu"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navItems.length + 0.1 }}
                className="mt-4 px-8 py-3 font-heading font-semibold text-lg rounded-full"
                style={{ background: "var(--accent-warm)", color: "#0a0a0a" }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
