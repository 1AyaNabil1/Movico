"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const steps = [
  { 
    number: "01", 
    title: "Survey Design", 
    description: "Crafted a questionnaire using validated scales-demographics, viewing habits, genre preferences. Designed to capture both ratings and insights.",
  },
  { 
    number: "02", 
    title: "Data Collection", 
    description: "Gathered 300+ responses targeting students, professionals, and diverse age groups through social media and direct outreach.",
  },
  { 
    number: "03", 
    title: "Data Cleaning", 
    description: "Applied Python and pandas for preprocessing, removing careless responses, handling missing values, standardizing formats.",
  },
  { 
    number: "04", 
    title: "Statistical Analysis", 
    description: "Used Chi-square tests, ordinal regression, and Spearman correlation to identify patterns and validate findings.",
  },
  { 
    number: "05", 
    title: "Visualization", 
    description: "Built interactive dashboards with Tableau and statistical plots with ggplot2 to communicate findings clearly.",
  },
];

export default function MethodologyPage() {
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
          {/* Header - Fixed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)]">
              <span className="text-gradient">
                Methodology
              </span>
            </h1>
            
            {/* Decorative Glowy Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4 mb-4"
            />
            
            <p 
              className="text-base text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Our five-phase approach to gathering and analyzing movie preference data.
            </p>
          </motion.div>
        </div>

        {/* Scrollable Timeline */}
        <div className="flex-1 relative overflow-hidden">
          
          <div className="h-full overflow-y-auto overflow-x-hidden px-6 pt-8">
            <div className="max-w-5xl mx-auto pb-16">
              {/* Vertical Timeline - Refined */}
              <div className="relative max-w-3xl mx-auto">
                {/* Lighter Central line */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="absolute left-8 md:left-12 w-px bg-white/10"
                />

                {/* Steps with irregular spacing */}
                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div
                      key={step.number}
                      className="relative pl-20 md:pl-24 group"
                      style={{ 
                        marginTop: index === 0 ? '0' : `${48 + (index % 3) * 12}px`,
                      }}
                    >
                      {/* Step number - static, only color changes */}
                      <span className="absolute left-0 top-0 text-white/20 text-xs font-medium tracking-wider group-hover:text-white/40 transition-colors duration-100">
                        {step.number}
                      </span>

                      {/* Glowy dot - static, no hover */}
                      <div 
                        className="absolute left-8 md:left-12 top-1 w-3 h-3 rounded-full bg-primary/60"
                        style={{ 
                          transform: 'translate(-50%, 0)',
                          boxShadow: '0 0 10px rgba(250, 30, 14, 0.6), 0 0 20px rgba(140, 0, 0, 0.4)'
                        }}
                      />

                      {/* Content - animated on hover */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.15 }}
                        className="cursor-pointer"
                      >
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-accent transition-all duration-100">
                          {step.title}
                        </h3>
                        <p 
                          className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-100"
                          style={{ fontFamily: "'Times New Roman', Times, serif" }}
                        >
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrow - Center Left */}
        <motion.a
          href="/overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
          href="/findings"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
