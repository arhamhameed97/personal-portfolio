"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useScroll } from "./ScrollProvider";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { textColor, backgroundColor } = useScroll();

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Determine if background is dark
  const isDark = backgroundColor && (backgroundColor.includes("rgb") 
    ? parseInt(backgroundColor.split(",")[0].split("(")[1]) < 128
    : parseInt(backgroundColor.substring(1, 3), 16) < 128);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark 
              ? "bg-black/80 backdrop-blur-md border-b border-white/10"
              : "bg-white/80 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
        style={{ color: textColor }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-xl font-bold cursor-pointer transition-colors"
              style={{ color: textColor, opacity: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Arham Hameed
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium transition-colors cursor-pointer"
                  style={{ color: textColor, opacity: 0.8 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:arham.hameed@uni.minerva.edu"
              className={`hidden md:block px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                isDark ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-2xl"
              style={{ color: textColor }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="fixed inset-0 bg-white">
            <div className="flex flex-col items-start justify-center h-full px-6 space-y-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-medium text-gray-900 cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="mailto:arham.hameed@uni.minerva.edu"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="px-8 py-3 bg-gray-900 text-white font-medium text-xl rounded-full"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
