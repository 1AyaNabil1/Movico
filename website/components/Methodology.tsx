"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Survey Design",
    description: "Crafted comprehensive questionnaire covering demographics, viewing habits, genre preferences, and decision factors.",
  },
  {
    number: "02",
    title: "Data Collection",
    description: "Gathered 300+ responses through Google Forms, ensuring diverse participant demographics.",
  },
  {
    number: "03",
    title: "Data Cleaning",
    description: "Used Python and pandas to remove careless responses, handle missing values, and ensure data quality.",
  },
  {
    number: "04",
    title: "Statistical Analysis",
    description: "Applied chi-square tests, ordinal regression, and correlation analysis using R.",
  },
  {
    number: "05",
    title: "Visualization",
    description: "Created interactive dashboards with Tableau and statistical plots with ggplot2.",
  },
];

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methodology" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-darker" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            How We Did It
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mt-4 mb-6">
            <span className="text-gradient">Methodology</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our research followed a rigorous multi-phase approach to ensure accurate and meaningful insights.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"
          />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <span className="text-accent text-sm font-medium tracking-widest">
                        STEP {step.number}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-gradient transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center node */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-red"
                  >
                    <span className="text-white font-bold">{step.number}</span>
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-accent"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
