"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    q: "What age range are the classes for?",
    a: "Classes are designed for students aged 7 to 18. Beginners (7 to 10) start with Scratch, Minecraft, and visual tools. Middle-schoolers (11 to 14) dive into Python, JavaScript, and game development. High schoolers (15+) work on full-stack projects, AI, and portfolio-ready apps.",
  },
  {
    q: "Do I need to buy any software or equipment?",
    a: "No. All you need is a laptop or desktop with a web browser. For advanced topics like Unity or Arduino, setup is guided step by step together in class.",
  },
  {
    q: "How are classes conducted, in-person or online?",
    a: "Classes are conducted live online via video call. Your child can attend from anywhere, schedules are fully flexible, and there is no commute. Sessions are 1-on-1 or in small groups, never large lectures.",
  },
  {
    q: "What if my child has never coded before?",
    a: "That is the most common starting point. The free trial includes a skill assessment so I can build a plan starting from exactly the right level, whether that is absolute zero or picking up mid-way through a topic.",
  },
  {
    q: "How long does it take to see real progress?",
    a: "Most students complete their first project (a simple game or interactive website) within the first 2 to 3 classes. Visible, shareable results are part of the curriculum design from day one.",
  },
  {
    q: "Is there a long-term contract? Can I cancel?",
    a: "No contracts, no lock-ins. The monthly plan is month-to-month and you can cancel any time. Start with the free trial and continue only when you see the value for yourself.",
  },
  {
    q: "What sets this apart from platforms like Codecademy or Code.org?",
    a: "Those platforms are self-paced and text-based. Most kids lose motivation quickly without a real person who adapts, encourages, and explains things differently when something does not click. Live 1-on-1 instruction with real project outcomes is a fundamentally different experience.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-header",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".faq-item",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ background: "var(--lp-bg-alt)" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="faq-header mb-12">
          <span className="lp-section-label">06 / FAQ</span>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--lp-navy)" }}
          >
            Questions from{" "}
            <span className="lp-wavy" style={{ color: "var(--lp-purple)" }}>parents</span>
          </h2>
        </div>

        <div className="faq-list space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="faq-item lp-card-white overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "var(--lp-purple-lt)" : "#ffffff",
                  border: isOpen ? "1.5px solid var(--lp-border)" : "1.5px solid rgba(0,0,0,0.05)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{ color: "var(--lp-navy)" }}
                >
                  <span className="font-heading font-bold text-base md:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "var(--lp-purple)" : "var(--lp-purple-lt)",
                      color: isOpen ? "#ffffff" : "var(--lp-purple)",
                    }}
                  >
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 md:px-6 pb-5 md:pb-6 leading-relaxed text-sm md:text-base"
                        style={{ color: "var(--lp-muted)" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
