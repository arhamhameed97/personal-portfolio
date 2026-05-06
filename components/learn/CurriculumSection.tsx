"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CurriculumItem = { text: string; isAI?: boolean };

type Track = {
  icon: string;
  name: string;
  subtitle: string;
  ageRange: string;
  accentColor: string;
  accentBg: string;
  items: CurriculumItem[];
  project: string;
};

const tracks: Track[] = [
  {
    icon: "🐍",
    name: "Python",
    subtitle: "Data, Automation & AI",
    ageRange: "Ages 10+",
    accentColor: "#5c2dde",
    accentBg: "#EDE8FF",
    items: [
      { text: "Variables, functions, loops & data structures" },
      { text: "Web scraping with BeautifulSoup" },
      { text: "Data analysis & charts with Pandas + Matplotlib" },
      { text: "Train a text classifier with scikit-learn", isAI: true },
      { text: "Build a personal chatbot using the OpenAI API", isAI: true },
      { text: "Automate real tasks with Python scripts" },
    ],
    project: "A sentiment analyzer that reads social posts and charts mood trends in real time.",
  },
  {
    icon: "⚡",
    name: "JavaScript",
    subtitle: "Web Apps & Browser AI",
    ageRange: "Ages 11+",
    accentColor: "#d97706",
    accentBg: "#FEF3C7",
    items: [
      { text: "DOM manipulation, events & async/await" },
      { text: "Building interactive web pages from scratch" },
      { text: "Fetch real data from APIs (weather, sports, movies)" },
      { text: "TensorFlow.js — run ML models in the browser", isAI: true },
      { text: "Real-time object detection with the webcam", isAI: true },
      { text: "Deploy a live app to the web" },
    ],
    project: "A browser app that recognizes hand gestures using your webcam — no server needed.",
  },
  {
    icon: "🎨",
    name: "Scratch",
    subtitle: "Visual Coding & AI Games",
    ageRange: "Ages 7–12",
    accentColor: "#0ea5e9",
    accentBg: "#E0F2FE",
    items: [
      { text: "Sprites, loops, conditionals & events" },
      { text: "Storytelling and interactive animations" },
      { text: "Game logic, scoring & lives systems" },
      { text: "ML for Kids — train an image/text classifier inside Scratch", isAI: true },
      { text: "Teachable Machine models imported into Scratch projects", isAI: true },
      { text: "Publish and share projects online" },
    ],
    project: "A rock-paper-scissors game where the AI learns your patterns and tries to beat you.",
  },
  {
    icon: "🎮",
    name: "Game Dev",
    subtitle: "Unity, Roblox & AI NPCs",
    ageRange: "Ages 11+",
    accentColor: "#059669",
    accentBg: "#D1FAE5",
    items: [
      { text: "Unity scenes, GameObjects, physics & C# scripting" },
      { text: "Roblox Studio + Luau scripting" },
      { text: "Level design, collision detection & UI systems" },
      { text: "Unity ML-Agents — train an NPC to navigate a maze", isAI: true },
      { text: "Procedural level generation using AI algorithms", isAI: true },
      { text: "Export and share a playable build" },
    ],
    project: "A 3D platformer where enemy AI adapts to your playstyle — harder the better you get.",
  },
];

const ageGroups = [
  {
    range: "Ages 7–10",
    label: "Beginners",
    desc: "Scratch, Minecraft, and intro to Python. Visual, creative, and hands-on from day one.",
    bg: "var(--lp-purple)",
    textColor: "#ffffff",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeColor: "#ffffff",
  },
  {
    range: "Ages 11–14",
    label: "Builders",
    desc: "Python, JavaScript, game development, and first AI projects. Building real things.",
    bg: "var(--lp-lime)",
    textColor: "var(--lp-navy)",
    badgeBg: "rgba(26,31,54,0.12)",
    badgeColor: "var(--lp-navy)",
  },
  {
    range: "Ages 15+",
    label: "Advanced",
    desc: "Full-stack development, ML models, and portfolio-ready projects for college applications.",
    bg: "var(--lp-orange)",
    textColor: "#ffffff",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeColor: "#ffffff",
  },
];

export default function CurriculumSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".curr-header",
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".curr-track",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".curr-tracks", start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".curr-age",
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".curr-ages", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--lp-bg-alt)" }}
    >
      {/* Background blobs */}
      <div className="lp-blob lp-blob-purple w-[400px] h-[400px] -top-20 -right-20 opacity-40" />
      <div className="lp-blob lp-blob-lime   w-[300px] h-[300px] bottom-40 -left-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="curr-header max-w-2xl mb-14">
          <span className="lp-section-label">04 / Curriculum</span>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--lp-navy)" }}
          >
            One program,{" "}
            <span className="lp-highlight">every language</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--lp-muted)" }}>
            Every track is project-based and AI-integrated. Students don&apos;t just learn syntax —
            they build real things and use AI tools the way professionals do.
          </p>
        </div>

        {/* Language Track Cards */}
        <div className="curr-tracks grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="curr-track lp-card-white flex flex-col overflow-hidden"
            >
              {/* Colored header strip */}
              <div
                className="px-7 pt-7 pb-5"
                style={{ borderTop: `4px solid ${track.accentColor}` }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-3xl flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0"
                      style={{ background: track.accentBg }}
                    >
                      {track.icon}
                    </span>
                    <div>
                      <h3
                        className="font-heading text-2xl font-extrabold leading-tight"
                        style={{ color: "var(--lp-navy)" }}
                      >
                        {track.name}
                      </h3>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: track.accentColor }}>
                        {track.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className="flex-shrink-0 inline-block px-3 py-1 rounded-full text-xs font-heading font-bold tracking-wider uppercase mt-1"
                    style={{ background: track.accentBg, color: track.accentColor }}
                  >
                    {track.ageRange}
                  </span>
                </div>
              </div>

              {/* Curriculum list */}
              <div className="px-7 pb-6 flex flex-col flex-1">
                <ul className="space-y-2.5 mb-6 flex-1">
                  {track.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="mt-[5px] w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: item.isAI ? track.accentColor : "var(--lp-muted)", opacity: item.isAI ? 1 : 0.4 }}
                      />
                      <span
                        className="text-sm leading-snug flex-1"
                        style={{ color: "var(--lp-navy)", opacity: item.isAI ? 1 : 0.8 }}
                      >
                        {item.text}
                        {item.isAI && (
                          <span
                            className="ml-2 inline-block px-1.5 py-0.5 rounded text-[0.6rem] font-heading font-bold tracking-wider uppercase align-middle"
                            style={{ background: track.accentBg, color: track.accentColor }}
                          >
                            ✦ AI
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* You'll Build callout */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "var(--lp-lime)", opacity: 1 }}
                >
                  <p className="text-[0.65rem] font-heading font-bold tracking-widest uppercase mb-1.5" style={{ color: "var(--lp-navy)", opacity: 0.6 }}>
                    You&apos;ll Build
                  </p>
                  <p className="text-sm font-semibold leading-snug" style={{ color: "var(--lp-navy)" }}>
                    {track.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Age group cards */}
        <div className="curr-ages grid grid-cols-1 md:grid-cols-3 gap-5">
          {ageGroups.map((group, i) => (
            <div
              key={i}
              className="curr-age rounded-2xl p-7 shadow-md"
              style={{ background: group.bg }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-4"
                style={{ background: group.badgeBg, color: group.badgeColor }}
              >
                {group.range}
              </span>
              <h3
                className="font-heading text-2xl font-extrabold mb-2"
                style={{ color: group.textColor }}
              >
                {group.label}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: group.textColor, opacity: 0.85 }}
              >
                {group.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
