"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const phases = [
  {
    number: 1,
    title: "Research Proposal",
    description: "Defined research objectives, scope, and methodology framework.",
    status: "completed",
    details: [
      "Problem statement formulation",
      "Literature review",
      "Research question development",
      "Hypothesis formation",
    ],
  },
  {
    number: 2,
    title: "Questionnaire Design",
    description: "Created comprehensive survey with validated measurement scales.",
    status: "completed",
    details: [
      "Question development",
      "Scale selection (Likert 1-5)",
      "Pilot testing",
      "Refinement based on feedback",
    ],
  },
  {
    number: 3,
    title: "Sampling & Pretest",
    description: "Established sampling strategy and conducted preliminary testing.",
    status: "completed",
    details: [
      "Sample size calculation",
      "Sampling method selection",
      "Pretest with 30 respondents",
      "Reliability assessment",
    ],
  },
  {
    number: 4,
    title: "Data Collection",
    description: "Gathered survey responses through online distribution.",
    status: "completed",
    details: [
      "Google Forms deployment",
      "Social media distribution",
      "Response monitoring",
      "Quality control checks",
    ],
  },
  {
    number: 5,
    title: "Data Analysis",
    description: "Applied statistical methods to extract meaningful insights.",
    status: "completed",
    details: [
      "Data cleaning with Python",
      "Descriptive statistics",
      "Chi-square tests",
      "Ordinal regression in R",
    ],
  },
  {
    number: 6,
    title: "Final Report",
    description: "Compiled findings into comprehensive research documentation.",
    status: "completed",
    details: [
      "Results interpretation",
      "Visualization creation",
      "Report writing",
      "Presentation preparation",
    ],
  },
];

export default function Phases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <section id="phases" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-darker" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Project Timeline
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mt-4 mb-6">
            <span className="text-gradient">Research Phases</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our structured approach to conducting comprehensive survey research.
          </p>
        </motion.div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActivePhase(phase.number)}
              onHoverEnd={() => setActivePhase(null)}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Phase number background */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bold font-[family-name:var(--font-playfair)] text-white/3 select-none">
                  {phase.number}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent text-sm font-medium tracking-widest">
                      PHASE {phase.number}
                    </span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    {phase.title}
                  </h3>
                  
                  <p className="text-white/50 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  {/* Details list */}
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={activePhase === phase.number ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {phase.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </motion.ul>
                </div>
                
                {/* Bottom border animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex items-center justify-between text-sm text-white/40 mb-4">
            <span>Project Progress</span>
            <span>100% Complete</span>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
