"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 900);
          }, 300);
          return 100;
        }
        return prev + 2.5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014] text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Latar Belakang Portal Glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            
            {/* Cincin Portal Berputar di Luar Logo */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-2 rounded-full border border-purple-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Logo di Tengah Portal */}
              <div className="relative w-24 h-24 flex items-center justify-center drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                <Image 
                  src="/mudapedia-logo.png" 
                  alt="Logo Mudapedia"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Teks Persentase Portal */}
            <div className="text-2xl md:text-3xl font-bold tracking-widest text-cyan-400 font-mono mb-2">
              {Math.floor(progress)}%
            </div>
            <p className="text-gray-400 text-xs tracking-widest uppercase">
              Mudapedia Digital
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}