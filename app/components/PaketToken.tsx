"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Package3D from "./Package3D";

const networks = [
  { id: "solana", name: "Solana", icon: "⚡", color: "#3b82f6" },
  { id: "ethereum", name: "Ethereum", icon: "♦", color: "#6366f1" },
  { id: "bnb", name: "BNB Chain", icon: "🔶", color: "#eab308" },
  { id: "tron", name: "Tron", icon: "🔺", color: "#ef4444" },
  { id: "sui", name: "Sui", icon: "💧", color: "#06b6d4" },
];

const packages = [
  {
    name: "BASIC",
    price: "Rp 35.500.000",
    popular: false,
    color: "#3b82f6",
    features: [
      "Pembuatan Token",
      "Supply 1 Juta",
      "Likuiditas Rp 900.000",
      "Website 1 Tahun",
    ],
  },
  {
    name: "STANDARD",
    price: "Rp 70.000.000",
    popular: true,
    color: "#8b5cf6",
    features: [
      "Pembuatan Token",
      "Supply 5 Juta",
      "Likuiditas Rp 1.500.000",
      "Website 1 Tahun",
      "Promosi 2 Postingan",
    ],
  },
  {
    name: "PREMIUM",
    price: "Rp 120.000.000",
    popular: false,
    color: "#06b6d4",
    features: [
      "Pembuatan Token",
      "Supply 10 Juta",
      "Likuiditas Rp 5.000.000",
      "Website 1 Tahun",
      "Promosi 10 Postingan",
      "Listing di DEX & CEX",
    ],
  },
];

export default function PaketToken() {
  const [activeNetwork, setActiveNetwork] = useState("solana");

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#030014] text-white overflow-hidden">
      
      {/* Background Glow & Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Paket Token – 3D Interaktif
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Pilih paket terbaik untuk membangun token Anda di jaringan blockchain pilihan.
          </p>
        </motion.div>

        {/* Main Content Layout with Navigation Arrows */}
        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Arrow Navigation */}
          <button className="hidden lg:flex absolute left-0 z-20 w-12 h-12 rounded-full bg-[#0a0524]/80 border border-blue-500/30 items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Grid Container */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:px-16">
            
            {/* Left: Network Selector (4 Cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 flex flex-col gap-3.5"
            >
              {networks.map((net) => {
                const isActive = activeNetwork === net.id;
                return (
                  <button
                    key={net.id}
                    onClick={() => setActiveNetwork(net.id)}
                    className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 text-left group ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-950/60 to-purple-950/40 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                        : "bg-[#08031d]/60 border-white/5 hover:border-white/20 hover:bg-[#0a0524]"
                    }`}
                  >
                    <span className="text-xl">{net.icon}</span>
                    <span className={`font-medium tracking-wide ${isActive ? "text-white font-semibold" : "text-gray-400 group-hover:text-gray-200"}`}>
                      {net.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-2xl border border-blue-400/50 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>

            {/* Right: 3 Package Cards (9 Cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            >
              {packages.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 group ${
                    pkg.popular 
                      ? "bg-gradient-to-b from-[#100730]/90 via-[#0a0524]/90 to-[#060214]/90 border-2 border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.3)] md:-translate-y-4" 
                      : "bg-[#08031d]/80 border border-blue-500/20 hover:border-blue-400/40 shadow-[0_0_25px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span className="px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_15px_rgba(139,92,246,0.8)] uppercase">
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div>
                    {/* 3D Visual Header */}
                    <div className="mb-2">
                      <Package3D color={pkg.color} />
                    </div>

                    {/* Title & Price */}
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold tracking-wider text-white mb-1">
                        {pkg.name}
                      </h3>
                      <div className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                        {pkg.price}
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs md:text-sm text-gray-300">
                          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                    pkg.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                      : "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}>
                    Pilih Paket
                  </button>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Arrow Navigation */}
          <button className="hidden lg:flex absolute right-0 z-20 w-12 h-12 rounded-full bg-[#0a0524]/80 border border-blue-500/30 items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}