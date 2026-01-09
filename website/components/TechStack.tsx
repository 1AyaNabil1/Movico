"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Data Collection",
    tools: [
      { name: "Google Forms", description: "Survey distribution and response collection" },
    ],
  },
  {
    title: "Data Cleaning",
    tools: [
      { name: "Python", description: "Primary scripting language" },
      { name: "pandas", description: "Data manipulation and cleaning" },
      { name: "Jupyter", description: "Interactive notebook environment" },
    ],
  },
  {
    title: "Statistical Analysis",
    tools: [
      { name: "R", description: "Statistical computing" },
      { name: "dplyr", description: "Data transformation" },
      { name: "MASS", description: "Ordinal regression" },
      { name: "ggstatsplot", description: "Statistical visualization" },
    ],
  },
  {
    title: "Visualization",
    tools: [
      { name: "Tableau", description: "Interactive dashboards" },
      { name: "ggplot2", description: "Grammar of graphics" },
      { name: "corrplot", description: "Correlation matrices" },
    ],
  },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker to-dark" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Tools & Technologies
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mt-4 mb-6">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Free and open-source software powering our research - zero budget, maximum impact.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-500">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 + toolIndex * 0.05 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/3 hover:bg-white/5 transition-colors cursor-default"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10">
                        <span className="text-accent font-bold text-lg">
                          {tool.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{tool.name}</h4>
                        <p className="text-sm text-white/40">{tool.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Budget highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
            <span className="text-4xl font-bold text-gradient">$0</span>
            <span className="text-white/60">Total project budget - powered by open-source</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
