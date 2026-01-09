"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const categories = [
  {
    name: "Data Collection",
    tools: [
      { name: "Google Forms", description: "Survey distribution and response collection" },
    ]
  },
  {
    name: "Data Processing",
    tools: [
      { name: "Python", description: "Primary scripting language for data manipulation" },
      { name: "pandas", description: "Data cleaning, transformation, and analysis" },
    ]
  },
  {
    name: "Statistical Analysis",
    tools: [
      { name: "R", description: "Statistical computing and modeling environment" },
      { name: "dplyr", description: "Data transformation and manipulation" },
      { name: "MASS", description: "Ordinal regression and advanced statistics" },
    ]
  },
  {
    name: "Visualization",
    tools: [
      { name: "Tableau", description: "Interactive dashboards and data exploration" },
      { name: "ggplot2", description: "Publication-quality statistical graphics" },
    ]
  },
];

export default function TechStackPage() {
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
              Tools & Technologies
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
                Tech Stack
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mt-4">
              Free and open-source software powering our research pipeline
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.15 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-accent mb-6"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: catIndex * 0.2 }}
                >
                  {category.name}
                </motion.h3>
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 + toolIndex * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: "rgba(140,0,0,0.5)",
                        boxShadow: "0 0 25px rgba(140,0,0,0.2)"
                      }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300"
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-white/10"
                        animate={{ 
                          boxShadow: [
                            "0 0 10px rgba(140,0,0,0.2)",
                            "0 0 20px rgba(140,0,0,0.4)",
                            "0 0 10px rgba(140,0,0,0.2)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: toolIndex * 0.3 }}
                      >
                        <span className="text-accent text-xl font-bold">{tool.name.charAt(0)}</span>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg text-white">{tool.name}</h4>
                        <p className="text-base text-white/50">{tool.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Budget highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(140,0,0,0.3)",
                  "0 0 40px rgba(140,0,0,0.5)",
                  "0 0 20px rgba(140,0,0,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-4xl md:text-5xl font-bold text-gradient">$0</span>
              <span className="text-white/70 text-lg md:text-xl">Total budget - powered by open-source</span>
            </motion.div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
