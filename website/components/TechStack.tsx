"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Pipeline categories with hierarchy metadata
const categories = [
  {
    name: "Collection",
    phase: 1,
    emphasis: "quiet" as const,
    description: "Survey distribution via Google Forms",
    tools: [
      { name: "Google Forms", isPrimary: true },
    ]
  },
  {
    name: "Processing",
    phase: 2,
    emphasis: "medium" as const,
    description: "Data cleaning and transformation",
    tools: [
      { name: "Python", isPrimary: true },
      { name: "pandas", isPrimary: false },
    ]
  },
  {
    name: "Analysis",
    phase: 3,
    emphasis: "primary" as const,
    description: "Statistical modeling and hypothesis testing",
    tools: [
      { name: "R", isPrimary: true },
      { name: "dplyr", isPrimary: false },
      { name: "MASS", isPrimary: false },
    ]
  },
  {
    name: "Visualization",
    phase: 4,
    emphasis: "medium" as const,
    description: "Interactive dashboards and publication graphics",
    tools: [
      { name: "Tableau", isPrimary: true },
      { name: "ggplot2", isPrimary: false },
    ]
  },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker to-dark" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header - Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-white/40 text-xs font-medium tracking-[0.25em] uppercase block mb-5">
            Research Toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-base text-white/45 max-w-md leading-relaxed">
            A zero-cost toolkit assembled for rigorous film analysis.
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="space-y-4">
          {categories.map((category, catIndex) => {
            const topMargin = catIndex === 0 ? "" : 
                             catIndex === 2 ? "mt-8" : 
                             catIndex === 3 ? "mt-6" :
                             "mt-4";
            
            const padding = category.emphasis === "primary" ? "py-6 px-5" :
                           category.emphasis === "medium" ? "py-5 px-5" :
                           "py-4 px-5";
            
            const isPrimary = category.emphasis === "primary";
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: catIndex * 0.1 }}
                className={topMargin}
              >
                <div 
                  className={`${padding} rounded-lg border transition-colors duration-300 ${
                    isPrimary 
                      ? "border-primary/20 bg-primary/[0.02]" 
                      : "border-white/[0.06] hover:border-white/10"
                  }`}
                >
                  {/* Phase + Title */}
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-white/20 text-xs font-mono">
                      {String(category.phase).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base font-semibold tracking-wide ${
                      isPrimary ? "text-accent" : "text-white/75"
                    }`}>
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-white/35 mb-3 ml-7">
                    {category.description}
                  </p>
                  
                  {/* Tools */}
                  <div className="ml-7 flex flex-wrap gap-x-5 gap-y-1">
                    {category.tools.map((tool) => (
                      <span
                        key={tool.name}
                        className={`text-sm ${
                          tool.isPrimary 
                            ? "text-white/60 font-medium" 
                            : "text-white/35"
                        }`}
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Budget Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-white/[0.05]"
        >
          <p className="text-sm text-white/25">
            <span className="text-white/40">$0</span>
            <span className="mx-2">—</span>
            All tools are free and open-source
          </p>
        </motion.div>
      </div>
    </section>
  );
}
