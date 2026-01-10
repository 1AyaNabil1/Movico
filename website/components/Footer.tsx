"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-4 mt-8 md:mt-0 md:fixed md:bottom-0 md:left-0 md:right-0 md:z-30 md:bg-gradient-to-t md:from-darker md:via-darker/80 md:to-transparent">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-3" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
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
