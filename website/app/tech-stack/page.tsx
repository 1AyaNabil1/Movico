"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

// Tool icons as SVG components
const ToolIcons: Record<string, React.ReactNode> = {
  "Google Forms": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  ),
  "pandas": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.456zm4.213 2.559h2.623v2.57H8.669zm0 4.151h2.623v5.447H8.669zm0-11.187h2.623v5.446H8.669z" />
    </svg>
  ),
  "R": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 5.58 2 10c0 3.03 2.146 5.67 5.333 7.02v.98c0 .55.45 1 1 1h7.334c.55 0 1-.45 1-1v-.98C19.854 15.67 22 13.03 22 10c0-4.42-4.477-8-10-8zm-2.5 12.5c-2.485 0-4.5-1.79-4.5-4s2.015-4 4.5-4c1.607 0 3.015.79 3.792 2H10.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h3.292c-.777 1.21-2.185 2-3.792 2zm7 0l-2-3h1c1.105 0 2-.895 2-2s-.895-2-2-2h-3v7h-2V6.5h5c2.21 0 4 1.79 4 4 0 1.68-1.04 3.12-2.51 3.72l1.76 2.64-.75.64z" />
    </svg>
  ),
  "dplyr": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "MASS": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z" />
    </svg>
  ),
  "Tableau": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M11.654 5.327v2.38h-2.38v1.31h2.38v2.38h1.31v-2.38h2.38v-1.31h-2.38v-2.38h-1.31zm-5.24 2.785v1.86h-1.86v1.02h1.86v1.86h1.02v-1.86h1.86v-1.02h-1.86v-1.86h-1.02zm10.48 0v1.86h-1.86v1.02h1.86v1.86h1.02v-1.86h1.86v-1.02h-1.86v-1.86h-1.02zm-5.24 4.76v2.38h-2.38v1.31h2.38v2.38h1.31v-2.38h2.38v-1.31h-2.38v-2.38h-1.31zm-5.24 2.785v1.86h-1.86v1.02h1.86v1.86h1.02v-1.86h1.86v-1.02h-1.86v-1.86h-1.02zm10.48 0v1.86h-1.86v1.02h1.86v1.86h1.02v-1.86h1.86v-1.02h-1.86v-1.86h-1.02z" />
    </svg>
  ),
  "ggplot2": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M3 3v18h18V3H3zm2 2h14v14H5V5zm2 10l3-4 2 2 4-5 3 4v3H7v-0z" />
    </svg>
  ),
};

// Pipeline categories with hierarchy metadata
const categories = [
  {
    name: "Collection",
    phase: 1,
    emphasis: "quiet" as const,
    description: "Survey distribution via Google Forms",
    tools: [
      { name: "Google Forms", url: "https://docs.google.com/forms" },
    ]
  },
  {
    name: "Processing",
    phase: 2,
    emphasis: "medium" as const,
    description: "Data cleaning and transformation",
    tools: [
      { name: "Python", url: "https://docs.python.org/3/" },
      { name: "pandas", url: "https://pandas.pydata.org/docs/" },
    ]
  },
  {
    name: "Analysis",
    phase: 3,
    emphasis: "primary" as const,
    description: "Statistical modeling and hypothesis testing",
    tools: [
      { name: "R", url: "https://www.r-project.org/other-docs.html" },
      { name: "dplyr", url: "https://dplyr.tidyverse.org/" },
      { name: "MASS", url: "https://cran.r-project.org/web/packages/MASS/MASS.pdf" },
    ]
  },
  {
    name: "Visualization",
    phase: 4,
    emphasis: "medium" as const,
    description: "Interactive dashboards and publication graphics",
    tools: [
      { name: "Tableau", url: "https://www.tableau.com/learn/training" },
      { name: "ggplot2", url: "https://ggplot2.tidyverse.org/" },
    ]
  },
];

export default function TechStackPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {isMounted && <ParticleField />}
      <Navigation />

      <main className="relative z-10 h-screen pt-20 pb-16 flex flex-col">
        <div className="flex-shrink-0 max-w-5xl mx-auto px-6 pt-8">
          {/* Header - Matching other pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)]">
              <span className="text-gradient">
                Tech Stack
              </span>
            </h1>

            {/* Decorative Glowy Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 mb-6"
            />

            <p
              className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              A zero cost toolkit assembled for rigorous film analysis, each tool chosen for purpose, not prestige.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Grid Layout - No scrolling */}
        <div className="flex-1 px-6 flex items-center justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 justify-items-center">
              {categories.map((category, catIndex) => {
                const isPrimary = category.emphasis === "primary";

                return (
                  <div key={category.name} className="flex flex-col items-center text-center">
                    {/* Phase indicator + Title */}
                    <div className="flex items-baseline justify-center gap-3 mb-2">
                      <span
                        className="text-white/20 text-lg font-medium tracking-wider"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                      >
                        {String(category.phase).padStart(2, '0')}
                      </span>
                      <h2 className={`text-lg md:text-xl font-semibold tracking-tight ${isPrimary ? "text-accent" : "text-white/80"
                        }`}>
                        {category.name}
                      </h2>
                    </div>

                    {/* Description */}
                    <p
                      className="text-lg text-white/45 mb-4 text-center"
                      style={{ fontFamily: "'Times New Roman', Times, serif" }}
                    >
                      {category.description}
                    </p>

                    {/* Tools with icons - clickable */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.a
                          key={tool.name}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + catIndex * 0.08 + toolIndex * 0.06,
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -3,
                            transition: {
                              type: "spring",
                              stiffness: 120,
                              damping: 8,
                              mass: 0.8,
                            }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] hover:border-accent/40 hover:bg-accent/[0.05] transition-colors duration-200 cursor-pointer"
                        >
                          <span className="text-accent/70 hover:text-accent transition-colors">
                            {ToolIcons[tool.name]}
                          </span>
                          <span className="text-sm text-white/70 hover:text-white transition-colors">
                            {tool.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left Arrow - Center Left */}
        <motion.a
          href="/findings"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </motion.div>
        </motion.a>

        {/* Right Arrow - Center Right */}
        <motion.a
          href="/phases"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.a>

        <Footer />
      </main>
    </div>
  );
}
