"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Hero3D from "./Hero3D";

// Varian animasi
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number, duration: number}[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      duration: Math.random() * 3 + 2, // Durasi kedip acak antara 2-5 detik
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center justify-center bg-black">
      
      {/* Latar Belakang Bintang Bergerak / Berkedip Halus */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.size > 1.5 ? "0 0 6px 1px rgba(255, 255, 255, 0.4)" : "none",
            }}
            initial={{ opacity: star.opacity }}
            animate={{ 
              opacity: [star.opacity, star.opacity * 0.2, star.opacity],
              scale: [1, 1.2, 1] 
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Kontainer Utama */}
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri: Teks */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 lg:-mt-56 lg:-ml-36 relative z-25"
        >
          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
            Kecepatan dalam Industri Web3<br />
            Blockchain, dan Kripto. <br />
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Web3</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl">
            Kami adalah perusahaan rintisan yang berada di jantung Web3, blockchain, dan kripto, tempat teknologi dan kreativitas berpadu. Tim kami membangun solusi inovatif yang membantu bisnis berkembang di dunia desentralisasi.
          </motion.p>
        </motion.div>

        {/* Kolom Kanan: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:translate-x-20 w-full h-[600px] md:h-[800px] lg:h-[900px] z-10"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}