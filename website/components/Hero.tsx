"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark to-[#1a0000]/50" />
      
      {/* Spotlight Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/20 blur-[80px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Film Strips Decoration */}
      <FilmStrip className="absolute -left-16 top-1/4 rotate-12 opacity-15" />
      <FilmStrip className="absolute -right-16 bottom-1/4 -rotate-12 opacity-15" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4"
        >
          Survey Research Project
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"
        />

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-[family-name:var(--font-playfair)] mb-8"
        >
          <motion.span 
            className="text-gradient glow-text inline-block"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(140,0,0,0.5)",
                "0 0 50px rgba(140,0,0,0.7)",
                "0 0 20px rgba(140,0,0,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Movico
          </motion.span>
        </motion.h1>

        {/* Description - Times New Roman */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl text-white/60 mb-4 italic"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Because sometimes, the right movie can light the stars inside you
        </motion.p>

        {/* Tagline - Times New Roman */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base text-white/40 mb-10"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          A comprehensive analysis of movie-watching preferences, genre ratings, and cinema behaviors
        </motion.p>

        {/* CTA Button - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href="/overview"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Research</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FilmStrip({ className }: { className?: string }) {
  return (
    <div className={`w-32 h-[600px] ${className}`}>
      <div className="w-full h-full bg-gradient-to-b from-dark/50 to-transparent border-x border-white/10 relative">
        {/* Film perforations */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1 w-4 h-6 bg-dark border border-white/10 rounded-sm"
            style={{ top: `${i * 50}px` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute right-1 w-4 h-6 bg-dark border border-white/10 rounded-sm"
            style={{ top: `${i * 50}px` }}
          />
        ))}
      </div>
    </div>
  );
}
