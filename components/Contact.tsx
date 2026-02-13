"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      copyable: true,
      type: "email" as const,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      copyable: true,
      type: "phone" as const,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: personalInfo.github,
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p
              className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </div>

          {/* Contact Card */}
          <motion.div
            className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  )}
                  {info.copyable && (
                    <motion.button
                      onClick={() => copyToClipboard(info.value, info.type!)}
                      className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-400 text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {(info.type === "email" && copiedEmail) || (info.type === "phone" && copiedPhone) ? (
                        <>
                          <FiCheck size={14} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FiCopy size={14} />
                          Copy
                        </>
                      )}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-center text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${social.color} rounded-xl text-white font-medium glow hover:scale-105 transition-transform`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
