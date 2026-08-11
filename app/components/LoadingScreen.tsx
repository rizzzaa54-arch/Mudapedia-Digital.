"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  // Mengatur durasi setiap step (total ~6 detik untuk 6 step)
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 6) {
          clearInterval(timer);
          // Mulai exit animation setelah step 6 ditahan sebentar
          setTimeout(() => {
            setIsExiting(true);
            // Panggil callback untuk memunculkan Hero setelah exit selesai
            setTimeout(onComplete, 800); 
          }, 1000);
          return 6;
        }
        return prev + 1;
      });
    }, 1000); // 1 detik per step

    return () => clearInterval(timer);
  }, [onComplete]);

  // State untuk menyimpan partikel
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number}[]>([]);

  // Generate partikel HANYA di sisi client untuk mencegah Hydration Error
  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#030014] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Perspektif Container untuk efek 2.5D/Kedalaman */}
          <div className="relative w-full h-full perspective-1000">
            
            {/* ----------------- STEP 1 & 2: Partikel & Jaringan ----------------- */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                scale: step >= 5 ? 0.2 : 1,
                opacity: step >= 5 ? 0 : 1,
                translateZ: step === 4 ? 100 : 0
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Floor Grid (Muncul sejak awal) */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#0a0524] to-transparent opacity-50" style={{ transform: "rotateX(60deg) scale(2)" }}>
                <div className="w-full h-full border-t border-blue-900/30 shadow-[0_-10px_30px_rgba(0,0,255,0.1)]" />
              </div>

              {/* Partikel Dasar (Step 1+) */}
              {particles.map((p) => (
                <motion.div
                  key={`p-${p.id}`}
                  className="absolute rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: step >= 1 ? (Math.random() * 0.5 + 0.3) : 0,
                    y: [0, -15, 0]
                  }}
                  transition={{
                    opacity: { duration: 1 },
                    y: { duration: Math.random() * 2 + 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              ))}

              {/* Jaringan Node & Garis (Step 2+) */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {step >= 2 && particles.slice(0, 15).map((p, i) => {
                  const next = particles[i + 1] || particles[0];
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={`${p.x}%`}
                      y1={`${p.y}%`}
                      x2={`${next.x}%`}
                      y2={`${next.y}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* ----------------- STEP 3: Elemen Kripto & Cube (Step 3+) ----------------- */}
            <AnimatePresence>
              {step >= 3 && step < 5 && (
                <motion.div 
                  className="absolute inset-0 z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Bitcoin Node */}
                  <div className="absolute top-[30%] left-[25%] flex items-center justify-center w-16 h-16 rounded-full border border-blue-500/50 bg-blue-900/20 shadow-[0_0_20px_#3b82f6] backdrop-blur-sm animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="text-2xl font-bold text-blue-300">₿</span>
                  </div>
                  {/* Ethereum Node */}
                  <div className="absolute top-[45%] right-[25%] flex items-center justify-center w-16 h-16 rounded-full border border-purple-500/50 bg-purple-900/20 shadow-[0_0_20px_#8b5cf6] backdrop-blur-sm animate-bounce" style={{ animationDuration: '4s' }}>
                    <span className="text-2xl font-bold text-purple-300">Ξ</span>
                  </div>
                  {/* Floating Cubes (CSS representation) */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`cube-${i}`}
                      className="absolute w-8 h-8 border border-blue-400/40 rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${20 + (i % 2) * 40}%`,
                      }}
                      animate={{ rotateZ: 360, rotateX: 180 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ----------------- STEP 4: Aliran Data Web3 (Waves) ----------------- */}
            <AnimatePresence>
              {step >= 4 && step < 5 && (
                <motion.div
                  className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="w-[150%] h-[200px] bg-gradient-to-r from-transparent via-blue-600/20 to-transparent blur-xl"
                    animate={{ x: ["-50%", "50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ transform: "rotate(-10deg)" }}
                  />
                  <motion.div
                    className="absolute w-[150%] h-[100px] bg-gradient-to-r from-transparent via-purple-600/20 to-transparent blur-lg"
                    animate={{ x: ["50%", "-50%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    style={{ transform: "rotate(15deg)" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ----------------- STEP 5: Konvergensi (Menuju Tengah) ----------------- */}
            <AnimatePresence>
              {step >= 5 && step < 6 && (
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Cahaya di tengah bawah menyerupai portal disk */}
                  <div className="absolute bottom-[20%] w-[300px] h-[100px] rounded-[100%] bg-blue-600/40 blur-2xl shadow-[0_0_100px_#3b82f6]" />
                  <motion.div 
                    className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_10px_#fff]"
                    animate={{ scale: [1, 5, 1], opacity: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ----------------- STEP 6: Warp & Kotak Final ----------------- */}
            <AnimatePresence>
              {step >= 6 && (
                <motion.div
                  className="absolute inset-0 z-30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Efek Garis Warp/Kecepatan Cahaya */}
                  <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                     {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={`warp-${i}`}
                          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"
                          style={{ rotate: `${(i * 18)}deg` }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: [0, 2, 0], x: ["0%", "100%", "200%"] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() }}
                        />
                     ))}
                  </div>

                  {/* Kotak Portal Tengah yang menyala */}
                  <motion.div
                    className="relative w-32 h-32 border-2 border-blue-400 shadow-[0_0_40px_#3b82f6,inset_0_0_20px_#3b82f6]"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-md" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* ----------------- PROGRESS BAR BAWAH ----------------- */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#ffffff10]">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 6) * 100}%` }}
              transition={{ duration: 1, ease: "linear" }}
              style={{
                boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}