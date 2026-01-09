"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const genres = [
  { name: "Action", rating: 4.2, color: "#FA1E0E" },
  { name: "Adventure", rating: 4.0, color: "#BD2000" },
  { name: "Comedy", rating: 3.8, color: "#FFBE0F" },
  { name: "Drama", rating: 3.5, color: "#8C0000" },
  { name: "Horror", rating: 3.2, color: "#6a0000" },
  { name: "Sci-Fi", rating: 4.1, color: "#FA1E0E" },
  { name: "Romance", rating: 3.4, color: "#BD2000" },
  { name: "Thriller", rating: 3.9, color: "#8C0000" },
];

const keyFindings = [
  { 
    title: "Viewing Location", 
    insight: "65% prefer home, 35% favor cinema",
    detail: "Home viewers cite convenience and comfort, while cinema-goers value immersive experience."
  },
  { 
    title: "Genre Popularity", 
    insight: "Action and Sci-Fi rank highest across all demographics",
    detail: "Adventure and Comedy follow closely, with notable gender-based preference variations."
  },
  { 
    title: "Decision Factors", 
    insight: "Story quality and reviews are primary drivers",
    detail: "Advertisements have moderate influence, particularly for younger audiences."
  },
  { 
    title: "Viewing Frequency", 
    insight: "Average viewer watches 4-6 movies per month",
    detail: "Weekly viewers tend to have broader genre preferences than occasional watchers."
  },
];

export default function FindingsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

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
            className="text-center mb-16"
          >
            <motion.span 
              className="text-accent text-base font-medium tracking-[0.3em] uppercase inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Research Results
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
                Key Findings
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-4">
              Discover the insights uncovered from our comprehensive survey analysis.
            </p>
          </motion.div>

          {/* Genre Ratings - Interactive Circles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Genre Preference Ratings</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {genres.map((genre, index) => (
                <motion.div
                  key={genre.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  whileHover={{ scale: 1.15, y: -10 }}
                  onHoverStart={() => setHoveredGenre(genre.name)}
                  onHoverEnd={() => setHoveredGenre(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Rating circle */}
                  <div
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border-4 transition-all duration-300"
                    style={{
                      borderColor: hoveredGenre === genre.name ? genre.color : "rgba(255,255,255,0.15)",
                      boxShadow: hoveredGenre === genre.name ? `0 0 40px ${genre.color}60` : "none",
                    }}
                  >
                    {/* Progress ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="42%"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="4"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="42%"
                        fill="none"
                        stroke={genre.color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: genre.rating / 5 }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      />
                    </svg>
                    
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold" style={{ color: genre.color }}>
                        {genre.rating}
                      </span>
                      <span className="text-white/30 text-sm">/5</span>
                    </div>
                  </div>
                  
                  <p className="text-center mt-3 text-base text-white/60 group-hover:text-white transition-colors">
                    {genre.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Findings Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {keyFindings.map((finding, index) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(140,0,0,0.5)",
                  boxShadow: "0 0 40px rgba(140,0,0,0.2)"
                }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <motion.span 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-bold mb-4 inline-flex"
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(140,0,0,0.3)",
                        "0 0 20px rgba(140,0,0,0.6)",
                        "0 0 10px rgba(140,0,0,0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {index + 1}
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {finding.title}
                  </h3>
                  <p className="text-accent text-lg mt-2 font-medium">{finding.insight}</p>
                  <p className="text-white/50 text-base mt-2">{finding.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
