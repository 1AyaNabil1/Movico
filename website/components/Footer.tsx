"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 py-4">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center text-sm">
          {/* Research by AyaNexus */}
          <div className="flex items-center gap-2">
            <span className="text-white/30">Research by</span>
            <motion.a
              href="https://ayanexus.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gradient hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
            >
              AyaNexus
            </motion.a>
            <span className="text-white/40">🦢</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
