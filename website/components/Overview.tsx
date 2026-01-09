"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "300+", label: "Survey Responses" },
  { value: "12", label: "Genre Categories" },
  { value: "6", label: "Research Phases" },
  { value: "0$", label: "Budget" },
];

const features = [
  {
    title: "Genre Ratings",
    description: "Comprehensive analysis of 12 movie genres including Action, Comedy, Drama, Romance, Horror, and Sci-Fi.",
  },
  {
    title: "Viewing Behavior",
    description: "Deep insights into home vs cinema preferences, frequency patterns, and decision-making factors.",
  },
  {
    title: "Statistical Analysis",
    description: "Chi-square tests, ordinal regression, and correlation analysis to uncover meaningful patterns.",
  },
];

export default function Overview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000]/50 via-dark to-darker" />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            About The Project
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mt-4 mb-6">
            <span className="text-gradient">Project Overview</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A multi-phase academic research project investigating movie genre preferences, 
            viewing habits, and the factors that influence audience decisions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <span className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</span>
                <p className="text-white/50 mt-2 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="relative">
                {/* Number indicator */}
                <span className="text-6xl font-bold text-white/5 absolute -top-2 -left-2 font-[family-name:var(--font-playfair)]">
                  0{index + 1}
                </span>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="w-0 h-px bg-gradient-to-r from-primary to-accent mt-6 group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
