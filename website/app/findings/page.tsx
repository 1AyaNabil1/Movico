"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const genres = [
  { name: "Action", rating: 4.2, color: "#FA1E0E", emphasis: true },
  { name: "Sci-Fi", rating: 4.1, color: "#FA1E0E", emphasis: true },
  { name: "Adventure", rating: 4.0, color: "#BD2000", emphasis: false },
  { name: "Thriller", rating: 3.9, color: "#8C0000", emphasis: false },
  { name: "Comedy", rating: 3.8, color: "#FFBE0F", emphasis: false },
  { name: "Drama", rating: 3.5, color: "#666666", emphasis: false },
  { name: "Romance", rating: 3.4, color: "#666666", emphasis: false },
  { name: "Horror", rating: 3.2, color: "#666666", emphasis: false },
];

const keyFindings = [
  { 
    title: "Viewing Location", 
    insight: "Home viewing dominates at 65%, convenience and control outweigh the cinema's immersive pull.",
    isPrimary: true
  },
  { 
    title: "Genre Hierarchy", 
    insight: "Action and Sci-Fi lead decisively. Adventure and Comedy follow, but gender shapes preference intensity.",
    isPrimary: true
  },
  { 
    title: "Decision Drivers", 
    insight: "Story quality and peer reviews drive selection ads sway younger audiences, not seasoned viewers.",
    isPrimary: false
  },
  { 
    title: "Viewing Cadence", 
    insight: "The median viewer consumes 4/6 films monthly. Frequent watchers show broader taste.",
    isPrimary: false
  },
];

export default function FindingsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

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
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)]">
              <span className="text-gradient">
                Key Findings
              </span>
            </h1>
            
            {/* Decorative Glowy Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 mb-6"
            />
            
            <p 
              className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              What three hundred respondents revealed about how we choose, watch, and value films.
            </p>
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 relative overflow-hidden">
          <div className="h-full overflow-y-auto px-6">
            <div className="max-w-5xl mx-auto pb-16">
              {/* Genre Ratings - Lighter, more curated feel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20 py-8"
              >
                <h3 className="text-lg md:text-xl font-semibold text-center mb-10 text-white/50">Genre Preferences</h3>
                
                {/* All genres in one row - flex wrap to show all */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                  {genres.map((genre, index) => (
                    <motion.div
                      key={genre.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -5, transition: { duration: 0.2 } }}
                      onHoverStart={() => setHoveredGenre(genre.name)}
                      onHoverEnd={() => setHoveredGenre(null)}
                      className="relative group cursor-pointer"
                    >
                      {/* Rating circle with glow */}
                      <div
                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          boxShadow: genre.emphasis 
                            ? `0 0 30px ${genre.color}60, 0 0 15px ${genre.color}30` 
                            : "none",
                        }}
                      >
                    {/* Progress ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke={genre.emphasis ? genre.color : "rgba(255,255,255,0.25)"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: genre.rating / 5 }}
                        transition={{ duration: 1.2 }}
                      />
                    </svg>
                    
                    <div className="text-center relative z-10">
                      <span 
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: genre.emphasis ? genre.color : "rgba(255,255,255,0.7)" }}
                      >
                        {genre.rating}
                      </span>
                      <span className="text-white/20 text-xs">/5</span>
                    </div>
                  </div>
                  
                      <p 
                        className="text-center mt-3 text-sm text-white/50 group-hover:text-white/80 transition-colors"
                        style={{ fontFamily: "'Times New Roman', Times, serif" }}
                      >
                        {genre.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Insights - Uniform cards */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-center mb-10 text-white/50">Key Insights</h3>
                
                <div className="space-y-8 max-w-3xl mx-auto">
                  {keyFindings.map((finding, index) => (
                    <motion.article
                      key={finding.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="flex items-baseline gap-6">
                        <span 
                          className="text-white/30 text-sm font-medium tracking-wider flex-shrink-0"
                          style={{ fontFamily: "'Times New Roman', Times, serif" }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <h3 
                            className="text-xl md:text-2xl font-bold text-white/90 mb-3 leading-tight"
                            style={{ fontFamily: "'Times New Roman', Times, serif" }}
                          >
                            {finding.title}
                          </h3>
                          <p 
                            className="text-white/65 text-base md:text-lg leading-loose max-w-xl"
                            style={{ fontFamily: "'Times New Roman', Times, serif", lineHeight: "1.8" }}
                          >
                            {finding.insight}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Left Arrow - Center Left */}
        <motion.a
          href="/methodology"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
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
          href="/tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
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
