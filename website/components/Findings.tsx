"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const genres = [
  { name: "Action", rating: 4.2, color: "#FA1E0E" },
  { name: "Adventure", rating: 4.0, color: "#BD2000" },
  { name: "Comedy", rating: 3.8, color: "#FFBE0F" },
  { name: "Drama", rating: 3.5, color: "#8C0000" },
  { name: "Horror", rating: 3.2, color: "#4a0000" },
  { name: "Sci-Fi", rating: 4.1, color: "#FA1E0E" },
  { name: "Romance", rating: 3.4, color: "#BD2000" },
  { name: "Thriller", rating: 3.9, color: "#8C0000" },
];

const keyFindings = [
  {
    title: "Viewing Location Preference",
    insight: "65% prefer watching movies at home, while 35% favor the cinema experience.",
    detail: "Home viewers cite convenience and comfort, while cinema-goers value the immersive experience.",
  },
  {
    title: "Genre Popularity",
    insight: "Action and Sci-Fi consistently rank as top-rated genres across all demographics.",
    detail: "Adventure and Comedy follow closely, with significant gender-based preferences observed.",
  },
  {
    title: "Decision Factors",
    insight: "Story quality and reviews are the primary drivers of movie selection.",
    detail: "Advertisements have moderate influence, particularly for younger audiences.",
  },
  {
    title: "Viewing Frequency",
    insight: "Average viewer watches 4-6 movies per month, with streaming as the primary medium.",
    detail: "Weekly viewers tend to have broader genre preferences compared to occasional watchers.",
  },
];

export default function Findings() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

  return (
    <section id="findings" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark to-darker" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]"
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
            Research Results
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mt-4 mb-6">
            <span className="text-gradient">Key Findings</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover the insights uncovered from our comprehensive survey analysis.
          </p>
        </motion.div>

        {/* Genre Ratings Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Genre Preference Ratings</h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {genres.map((genre, index) => (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                onHoverStart={() => setHoveredGenre(genre.name)}
                onHoverEnd={() => setHoveredGenre(null)}
                className="relative group cursor-pointer"
              >
                {/* Rating circle */}
                <div
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center border-4 transition-all duration-300"
                  style={{
                    borderColor: hoveredGenre === genre.name ? genre.color : "rgba(255,255,255,0.1)",
                    boxShadow: hoveredGenre === genre.name ? `0 0 30px ${genre.color}50` : "none",
                  }}
                >
                  {/* Progress ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke={genre.color}
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: genre.rating / 5 } : {}}
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
                
                <p className="text-center mt-3 text-sm text-white/60 group-hover:text-white transition-colors">
                  {genre.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Findings Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {keyFindings.map((finding, index) => (
            <motion.div
              key={finding.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {finding.title}
                  </h3>
                </div>
                
                <p className="text-accent font-medium mb-3">
                  {finding.insight}
                </p>
                
                <p className="text-white/50 text-sm leading-relaxed">
                  {finding.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
