"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Timer otomatis untuk durasi loading screen (misalnya 2.5 detik)
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 900); // Waktu transisi keluar
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014] text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 2.5, 
            filter: "blur(20px)" 
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Latar Belakang Cahaya Biru Tunggal (Clean & HD Glow) */}
          <div className="absolute w-[450px] h-[450px] bg-blue-600/25 rounded-full blur-[130px] pointer-events-none animate-pulse" />

          {/* Kontainer Logo dan Teks */}
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Logo HD Tanpa Pembungkus Cincin */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 drop-shadow-[0_0_35px_rgba(37,99,235,0.8)]">
              <Image 
                src="/mudapedia-logo.png" 
                alt="Logo Mudapedia"
                width={150}
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Nama Perusahaan Berwarna Biru */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              Mudapedia Digital
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}