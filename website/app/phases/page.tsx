"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const phases = [
  {
    number: 1,
    title: "Research Proposal",
    description: "Defined objectives, scope, and methodology framework for the comprehensive movie preference study.",
    emphasis: "foundation"
  },
  {
    number: 2,
    title: "Questionnaire Design",
    description: "Created survey with validated measurement scales covering demographics, preferences, and behaviors.",
    emphasis: "foundation"
  },
  {
    number: 3,
    title: "Sampling & Pretest",
    description: "Established sampling strategy targeting diverse demographics and conducted preliminary testing.",
    emphasis: "standard"
  },
  {
    number: 4,
    title: "Data Collection",
    description: "Gathered 300+ responses through strategic online distribution across multiple channels.",
    emphasis: "standard"
  },
  {
    number: 5,
    title: "Data Analysis",
    description: "Applied rigorous statistical methods including Chi-square tests and ordinal regression.",
    emphasis: "highlight"
  },
  {
    number: 6,
    title: "Final Report",
    description: "Compiled findings into comprehensive documentation with actionable insights and visualizations.",
    emphasis: "conclusion"
  },
];

export default function PhasesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-auto md:h-screen md:overflow-hidden">
      {isMounted && <ParticleField />}
      <Navigation />

      <main className="relative z-10 min-h-screen md:h-screen pt-24 md:pt-20 pb-8 md:pb-16 flex flex-col">
        <div className="flex-shrink-0 max-w-5xl mx-auto px-4 md:px-6 pt-4 md:pt-8">
          {/* Header - Matching other pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)]">
              <span className="text-gradient">
                Research Phases
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
              A six-phase journey from initial concept to final insights, documenting how the research evolved.
            </p>
          </motion.div>
        </div>

        {/* Timeline Content */}
        <div className="flex-1 px-4 md:px-6 flex items-start md:items-center py-4 md:py-0">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-8">
              {phases.map((phase, index) => {
                // Vary emphasis based on phase position
                const isFoundation = phase.emphasis === "foundation";
                const isHighlight = phase.emphasis === "highlight";
                const isConclusion = phase.emphasis === "conclusion";

                // Vary spacing - earlier phases slightly tighter
                const extraSpacing = index >= 4 ? "lg:mt-2" : "";

                return (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                    className={`${extraSpacing}`}
                  >
                    {/* Phase number and status */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-base font-medium tracking-wider ${isHighlight ? "text-accent" : "text-white/30"
                          }`}
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                      >
                        {String(phase.number).padStart(2, '0')}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-semibold mb-2 ${isHighlight ? "text-accent" :
                      isConclusion ? "text-white/90" :
                        isFoundation ? "text-white/70" :
                          "text-white/80"
                      }`}>
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base text-white/45 leading-relaxed"
                      style={{ fontFamily: "'Times New Roman', Times, serif", lineHeight: "1.7" }}
                    >
                      {phase.description}
                    </p>

                    {/* Subtle divider - quieter */}
                    <div className={`mt-4 h-px w-12 ${isHighlight ? "bg-accent/30" : "bg-white/[0.06]"
                      }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left Arrow - Hidden on mobile */}
        <motion.a
          href="/tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="hidden sm:block fixed left-6 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
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

        <Footer />
      </main>
    </div>
  );
}
