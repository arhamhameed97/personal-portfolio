"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  splitBy?: "char" | "word";
  stagger?: number;
  duration?: number;
  delay?: number;
  start?: string;
  scrub?: boolean;
}

export default function TextReveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  splitBy = "word",
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  start = "top 85%",
  scrub = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spans = el.querySelectorAll(".split-unit");
    if (!spans.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: scrub
            ? {
                trigger: el,
                start,
                end: "top 30%",
                scrub: 1.5,
              }
            : {
                trigger: el,
                start,
                toggleActions: "play none none none",
              },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children, stagger, duration, delay, start, scrub]);

  const renderContent = () => {
    if (splitBy === "char") {
      return children.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="split-unit inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ));
    }

    return children.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
        <span className="split-unit inline-block">{word}</span>
      </span>
    ));
  };

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      className={`${className}`}
      style={style}
    >
      {renderContent()}
    </Tag>
  );
}

interface LineRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  start?: string;
}

export function LineReveal({
  children,
  className = "",
  style,
  delay = 0,
  start = "top 85%",
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, start]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
