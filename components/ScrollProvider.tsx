"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { colorZones } from "@/lib/scrollConfig";
import { 
  interpolateColor, 
  getContrastTextColor, 
  getSecondaryTextColor,
  getMutedTextColor 
} from "@/lib/scrollAnimations";

interface ScrollContextType {
  scrollY: number;
  backgroundColor: string;
  textColor: string;
  secondaryTextColor: string;
  mutedTextColor: string;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  backgroundColor: "#ffffff",
  textColor: "#0a0a0a",
  secondaryTextColor: "#3a3a3a",
  mutedTextColor: "#666666",
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
  const [secondaryTextColor, setSecondaryTextColor] = useState("#3a3a3a");
  const [mutedTextColor, setMutedTextColor] = useState("#666666");
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

      for (const zone of colorZones) {
        if (scrollVH >= zone.start && scrollVH < zone.end) {
          // Calculate the progress within this zone
          const zoneProgress = (scrollVH - zone.start) / (zone.end - zone.start);
          newBackgroundColor = interpolateColor(zone.startColor, zone.endColor, zoneProgress);
          break;
        }
      }

      // Calculate all text colors based on background luminance for proper contrast
      // This ensures text is always readable regardless of scroll position
      const newTextColor = getContrastTextColor(newBackgroundColor);
      const newSecondaryTextColor = getSecondaryTextColor(newBackgroundColor);
      const newMutedTextColor = getMutedTextColor(newBackgroundColor);

      setBackgroundColor(newBackgroundColor);
      setTextColor(newTextColor);
      setSecondaryTextColor(newSecondaryTextColor);
      setMutedTextColor(newMutedTextColor);
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
    <ScrollContext.Provider value={{ 
      scrollY, 
      backgroundColor, 
      textColor, 
      secondaryTextColor,
      mutedTextColor,
      scrollProgress 
    }}>
      <div
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          transition: "background-color 0.3s ease, color 0.3s ease",
          minHeight: "100vh",
          // Update CSS variables dynamically for consistent contrast
          ["--text-primary" as string]: textColor,
          ["--text-secondary" as string]: secondaryTextColor,
          ["--text-muted" as string]: mutedTextColor,
          ["--background" as string]: backgroundColor,
        }}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
