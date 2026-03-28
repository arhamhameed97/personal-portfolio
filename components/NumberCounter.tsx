"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface NumberCounterProps {
  target: string;
  className?: string;
  duration?: number;
}

export default function NumberCounter({
  target,
  className = "",
  duration = 2000,
}: NumberCounterProps) {
  const [display, setDisplay] = useState(target.replace(/[\d.]+/, "0"));
  const hasAnimated = useRef(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const match = target.match(/([$]?)([\d.]+)(\+?)(.*)/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const prefix = match[1];
    const numericTarget = parseFloat(match[2]);
    const suffix = (match[3] || "") + (match[4] || "");
    const isDecimal = match[2].includes(".");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericTarget * eased;

      if (isDecimal) {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplay(`${prefix}${Math.floor(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(`${prefix}${match[2]}${suffix}`);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
