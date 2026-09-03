"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, ShieldCheck, Rocket, Puzzle, Headphones } from "lucide-react";

// Data untuk 5 Card Keunggulan sesuai referensi
const features = [
  {
    icon: <Cpu className="w-10 h-10 text-blue-400" />,
    title: "Teknologi Terdepan",
    description: "Menggunakan teknologi Blockchain & Web3 terbaru yang aman dan scalable.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-400" />,
    title: "Aman & Terpercaya",
    description: "Sistem keamanan berlapis dengan smart contract yang terverifikasi.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-400" />,
    title: "Performa Optimal",
    description: "Infrastruktur cepat, stabil, dan siap untuk pertumbuhan jangka panjang.",
  },
  {
    icon: <Puzzle className="w-10 h-10 text-purple-400" />,
    title: "Solusi Kustom",
    description: "Layanan yang disesuaikan dengan kebutuhan proyek dan bisnis Anda.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-blue-400" />,
    title: "Support 24/7",
    description: "Tim profesional siap membantu Anda kapan pun dan dari mana pun.",
  },
];

// Varian animasi untuk kontainer
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Keunggulan() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      
      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Mengapa Mudapedia?
          </h2>

          {/* Subjudul */}
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Kami menghadirkan solusi digital berbasis Web3 dan Blockchain dengan standar teknologi masa depan.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className="relative p-6 rounded-2xl cursor-pointer flex flex-col items-center text-center transition-all duration-300 bg-neutral-900/90 border border-neutral-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-blue-950/40 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group"
            >
              {/* Icon Container */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <div className="relative z-10">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}