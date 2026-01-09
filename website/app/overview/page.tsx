"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const stats = [
  { 
    value: "300+", 
    label: "Survey Responses",
    description: "Detailed analysis from 300+ movie enthusiasts"
  },
  { 
    value: "12", 
    label: "Genre Categories",
    description: "The key genres we looked at: Action, Comedy, Drama, and more."
  },
  { 
    value: "No external funding", 
    label: "",
    description: "An independent study, driven by pure curiosity."
  },
];

const features = [
  {
    title: "Genre Ratings",
    description: "We focused on 12 genres that consistently shape viewing decisions—Action, Comedy, Drama, Romance, Horror, Sci-Fi, and more.",
  },
  {
    title: "Viewing Behavior",
    description: "Why people still choose home over cinema, despite saying they won't. Decision-making factors and viewing patterns we uncovered.",
  },
  {
    title: "Statistical Analysis",
    description: "Rigorous Chi-square tests, ordinal regression, and correlation analysis to validate our findings.",
  },
];

export default function OverviewPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {isMounted && <ParticleField />}
      <Navigation />
      
      <main className="relative z-10 h-screen pt-20 pb-16 flex flex-col">
        <div className="flex-1 max-w-5xl mx-auto px-6 flex flex-col justify-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
              <span className="text-gradient">
                Research Overview
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
              className="text-sm text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              A multi-phase research project exploring how genre preferences shape movie viewing habits.
            </p>
          </motion.div>

          {/* Stats Row - 3 boxes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center cursor-pointer hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-100"
              >
                <span className={`font-bold text-gradient block ${stat.label ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                  {stat.value}
                </span>
                {stat.label && (
                  <p className="text-white/50 text-sm font-medium mt-2">{stat.label}</p>
                )}
                <p className="text-white/30 text-xs mt-2 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Row - 3 boxes */}
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] cursor-pointer hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-100"
              >
                <span className="text-5xl font-bold text-white/[0.06] font-[family-name:var(--font-playfair)] block">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-white mt-3">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Left Arrow - Center Left */}
        <motion.a
          href="/"
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
          href="/methodology"
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
