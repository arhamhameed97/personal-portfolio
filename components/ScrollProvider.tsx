"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { colorZones } from "@/lib/scrollConfig";
import { interpolateColor } from "@/lib/scrollAnimations";

interface ScrollContextType {
  scrollY: number;
  backgroundColor: string;
  textColor: string;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  backgroundColor: "#ffffff",
  textColor: "#0a0a0a",
  scrollProgress: 0,
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#0a0a0a");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (currentScrollY / (documentHeight - windowHeight)) * 100;

      setScrollY(currentScrollY);
      setScrollProgress(scrollPercentage);

      // Calculate viewport height units
      const scrollVH = currentScrollY / windowHeight * 100;

      // Find the appropriate color zone
      let newBackgroundColor = "#ffffff";
      let newTextColor = "#0a0a0a";

      for (const zone of colorZones) {
        if (scrollVH >= zone.start && scrollVH < zone.end) {
          // Calculate the progress within this zone
          const zoneProgress = (scrollVH - zone.start) / (zone.end - zone.start);
          newBackgroundColor = interpolateColor(zone.startColor, zone.endColor, zoneProgress);
          newTextColor = zone.textColor;
          break;
        }
      }

      setBackgroundColor(newBackgroundColor);
      setTextColor(newTextColor);
    };

    // Initial call
    handleScroll();

    // Add event listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, backgroundColor, textColor, scrollProgress }}>
      <div
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          transition: "background-color 0.3s ease, color 0.3s ease",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
