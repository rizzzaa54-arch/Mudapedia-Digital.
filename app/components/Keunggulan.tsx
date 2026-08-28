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

// Varian animasi untuk kontainer dan card (Staggered)
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
    <section className="relative py-24 px-6 md:px-12 bg-[#030014] text-white overflow-hidden">
      
      {/* Background Decorative Lines & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

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

        {/* Cards Grid (5 Card dalam 1 baris di Desktop, responsif ke bawah di mobile/tablet) */}
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
              className="relative group p-6 rounded-2xl bg-[#08031d]/80 border border-blue-500/20 backdrop-blur-xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              {/* Efek Glow Halus di dalam Card saat Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon Container dengan Efek 3D/Glow */}
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-950/60 to-purple-950/40 border border-white/10 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}