"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-auto md:h-screen md:overflow-hidden">
      {/* Animated Background Elements */}
      {isMounted && <ParticleField />}

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 h-full">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
