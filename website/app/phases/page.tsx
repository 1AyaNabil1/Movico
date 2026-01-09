"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const phases = [
  { number: 1, title: "Research Proposal", description: "Defined objectives, scope, and methodology framework for the comprehensive movie preference study." },
  { number: 2, title: "Questionnaire Design", description: "Created survey with validated measurement scales covering demographics, preferences, and behaviors." },
  { number: 3, title: "Sampling & Pretest", description: "Established sampling strategy targeting diverse demographics and conducted preliminary testing." },
  { number: 4, title: "Data Collection", description: "Gathered 300+ responses through strategic online distribution across multiple channels." },
  { number: 5, title: "Data Analysis", description: "Applied rigorous statistical methods including Chi-square tests and ordinal regression." },
  { number: 6, title: "Final Report", description: "Compiled findings into comprehensive documentation with actionable insights and visualizations." },
];

export default function PhasesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isMounted && <ParticleField />}
      <Navigation />
      
      <main className="relative z-10 min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <motion.span 
              className="text-accent text-base font-medium tracking-[0.3em] uppercase inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Project Timeline
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] mt-4">
              <motion.span 
                className="text-gradient inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(140,0,0,0.3)",
                    "0 0 40px rgba(140,0,0,0.6)",
                    "0 0 20px rgba(140,0,0,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Research Phases
              </motion.span>
            </h1>
          </motion.div>

          {/* Phases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  borderColor: "rgba(140,0,0,0.5)",
                  boxShadow: "0 0 40px rgba(140,0,0,0.2)"
                }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.span 
                    className="text-accent text-lg font-bold tracking-widest"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    PHASE {phase.number}
                  </motion.span>
                  <motion.span 
                    className="w-4 h-4 rounded-full bg-green-500"
                    animate={{ 
                      boxShadow: [
                        "0 0 5px rgba(34,197,94,0.5)",
                        "0 0 15px rgba(34,197,94,0.8)",
                        "0 0 5px rgba(34,197,94,0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {phase.title}
                </h3>
                <p className="text-white/50 text-base md:text-lg mt-3 leading-relaxed">
                  {phase.description}
                </p>
                <motion.div 
                  className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-6 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-between text-base text-white/60 mb-3">
              <span>Project Progress</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-accent font-bold"
              >
                100% Complete
              </motion.span>
            </div>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ boxShadow: "0 0 20px rgba(140,0,0,0.5)" }}
              />
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
