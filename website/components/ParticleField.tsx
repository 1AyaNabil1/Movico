"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface DustParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setParticles(newParticles);

    // Generate dust particles - smaller and more faded
    const newDust: DustParticle[] = [];
    for (let i = 0; i < 80; i++) {
      newDust.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 10,
      });
    }
    setDustParticles(newDust);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(140,0,0,${particle.opacity}) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -150, -300],
            x: [0, Math.random() * 60 - 30, Math.random() * 80 - 40],
            opacity: [0, particle.opacity, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Dust particles - very faded and subtle */}
      {dustParticles.map((dust) => (
        <motion.div
          key={`dust-${dust.id}`}
          className="absolute rounded-full"
          style={{
            left: `${dust.x}%`,
            top: `${dust.y}%`,
            width: dust.size,
            height: dust.size,
            background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -50, -100, -50, 0],
            x: [0, 20, 0, -20, 0],
            opacity: [0.05, 0.15, 0.1, 0.15, 0.05],
          }}
          transition={{
            duration: dust.duration,
            delay: dust.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating orbs - more faded */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/3 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/3 blur-[100px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent/2 blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
