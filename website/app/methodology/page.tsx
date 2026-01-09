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
    description: "Created a comprehensive questionnaire using validated measurement scales, covering demographics, viewing habits, genre preferences, and decision-making factors. The survey was designed to capture both quantitative ratings and qualitative insights.",
  },
  { 
    number: "02", 
    title: "Data Collection", 
    description: "Gathered 300+ responses through Google Forms, targeting diverse demographics including students, professionals, and various age groups. Distribution channels included social media, email lists, and direct outreach.",
  },
  { 
    number: "03", 
    title: "Data Cleaning", 
    description: "Utilized Python and pandas library for rigorous data preprocessing. This included removing careless responses, handling missing values through imputation, and standardizing response formats for analysis.",
  },
  { 
    number: "04", 
    title: "Statistical Analysis", 
    description: "Applied advanced statistical methods using R, including Chi-square tests for categorical relationships, ordinal regression for rating analysis, and Spearman correlation for preference patterns.",
  },
  { 
    number: "05", 
    title: "Visualization", 
    description: "Created interactive dashboards with Tableau and publication-quality statistical plots with ggplot2. Visualizations were designed to communicate complex findings in an accessible manner.",
  },
];

export default function MethodologyPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isMounted && <ParticleField />}
      <Navigation />
      
      <main className="relative z-10 min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="text-accent text-base font-medium tracking-[0.3em] uppercase inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              How We Did It
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
                Methodology
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4">
              Our rigorous five-phase approach to gathering and analyzing movie preference data.
            </p>
          </motion.div>

          {/* Vertical Timeline - Enhanced */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
              style={{ boxShadow: "0 0 20px rgba(140,0,0,0.5)" }}
            />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <motion.div 
                    className={`flex-1 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-accent text-lg font-bold tracking-widest"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      STEP {step.number}
                    </motion.span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-base md:text-lg mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Center node */}
                  <motion.div 
                    className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-darker"
                    whileHover={{ scale: 1.3 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(140,0,0,0.5)",
                        "0 0 25px rgba(140,0,0,0.8)",
                        "0 0 10px rgba(140,0,0,0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
