"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const networkPackages: Record<string, Array<{ name: string; desc: string; price: string; popular: boolean; color: string; features: string[] }>> = {
  solana: [
    {
      name: "Paket Dasar",
      desc: "Fitur penting untuk membuat token dasar.",
      price: "Rp 35.500.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp 900.000",
        "Media Sosial (X/Twitter)",
        "Telegram (5 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
      ],
    },
    {
      name: "Paket Standar",
      desc: "Fitur penting untuk membuat token standar.",
      price: "Rp 70.000.000",
      popular: true,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp 1.500.000",
        "Media Sosial (X/Twitter)",
        "Telegram (50 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "2 postingan pertama untuk promosi",
      ],
    },
    {
      name: "Paket Lanjutan",
      desc: "Fitur penting untuk membuat token canggih.",
      price: "Rp 120.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan SOLANA",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp 5.000.000",
        "Media Sosial (X/Twitter, Telegram 100 anggota)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di Garuda Exchanger dan Bursa lainnya",
      ],
    },
  ],
  sui: [
    {
      name: "Paket Dasar",
      desc: "Fitur penting untuk membuat token dasar.",
      price: "Rp 26.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan SUI",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp 500.000 USD",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
      ],
    },
    {
      name: "Paket Standar",
      desc: "Fitur penting untuk membuat token standar.",
      price: "Rp 35.000.000",
      popular: true,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan SUI",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp 1.500.000 USD",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi",
      ],
    },
    {
      name: "Paket Lanjutan",
      desc: "Fitur penting untuk membuat token canggih.",
      price: "Rp 80.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan SUI",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp 2.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
        "Permintaan Supply khusus",
        "50 Pemegang Dompet",
      ],
    },
  ],
  ethereum: [
    {
      name: "Paket Dasar",
      desc: "Fitur penting untuk membuat token dasar.",
      price: "Rp 222.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan ETHEREUM",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp 3.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
      ],
    },
    {
      name: "Paket Standar",
      desc: "Fitur penting untuk membuat token standar.",
      price: "Rp 650.000.000",
      popular: true,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan ETHEREUM",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp 10.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi",
      ],
    },
    {
      name: "Paket Lanjutan",
      desc: "Fitur penting untuk membuat token canggih.",
      price: "Rp 1.300.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan ETHEREUM",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp 15.000.000 USD",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Excahnger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
        "Permintaan Supply khusus",
        "50 Pemegang Dompet",
      ],
    },
  ],
  bnb: [
    {
      name: "Paket Dasar",
      desc: "Fitur penting untuk membuat token dasar.",
      price: "Rp 80.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan BNB",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp 2.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
      ],
    },
    {
      name: "Paket Standar",
      desc: "Fitur penting untuk membuat token standar.",
      price: "Rp 160.000.000",
      popular: true,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan BNB",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp 5.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi",
      ],
    },
    {
      name: "Paket Lanjutan",
      desc: "Fitur penting untuk membuat token canggih.",
      price: "Rp 222.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan BNB",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp 100.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
        "Permintaan Supply khusus",
        "50 Pemegang Dompet",
      ],
    },
  ],
  tron: [
    {
      name: "Paket Dasar",
      desc: "Fitur penting untuk membuat token dasar.",
      price: "Rp 71.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan TRON",
        "Supply Koin 1 Juta",
        "Tambahkan Likuiditas Rp 3.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Excahnger & Bursa Lainnya",
      ],
    },
    {
      name: "Paket Standar",
      desc: "Fitur penting untuk membuat token standar.",
      price: "Rp 125.000.000",
      popular: true,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan TRON",
        "Supply Koin 5 Juta",
        "Tambahkan Likuiditas Rp 5.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "3 postingan pertama untuk promosi",
      ],
    },
    {
      name: "Paket Lanjutan",
      desc: "Fitur penting untuk membuat token canggih.",
      price: "Rp 169.000.000",
      popular: false,
      color: "#3b82f6",
      features: [
        "Pembuatan token di jaringan TRON",
        "Supply Koin 10 Juta",
        "Tambahkan Likuiditas Rp 11.000.000",
        "Media Sosial (X/Twitter, Telegram, dan Instagram)",
        "Situs Web + Domain Gratis 1 Tahun",
        "Buku Manual",
        "Buku Putih & Peta Jalan",
        "Daftar Garuda Exchanger & Bursa Lainnya",
        "10 postingan pertama untuk promosi",
        "Pencatatan eksklusif di NusaDex dan Bursa lainnya",
        "Media Sosial X Terverifikasi",
      ],
    },
  ],
};

const networks = [
  { id: "solana", name: "Solana", icon: "⚡" },
  { id: "ethereum", name: "Ethereum", icon: "♦" },
  { id: "bnb", name: "BNB Chain", icon: "🔶" },
  { id: "tron", name: "Tron", icon: "🔺" },
  { id: "sui", name: "Sui", icon: "💧" },
];

const sponsors = [
  { name: "Official Pavo", img: "/logopavo.png" },
  { name: "Nagapara", img: "/nagapara-logo.png" },
  { name: "Gaswin Artha Suar", img: "/gaswin-logo.png" },
  { name: "Digital Blockchain Indonesia", img: "/digitalblockchain-logo.png" },
];

export default function PaketToken() {
  const [activeNetwork, setActiveNetwork] = useState("solana");

  const currentPackages = networkPackages[activeNetwork] || networkPackages.solana;

  return (
    <section id="paket-token" className="relative py-28 px-4 md:px-12 bg-black text-white overflow-hidden">

      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Infinite Scrolling Sponsor Ticker Bar dengan Gambar Logo Lokal */}
        <div className="w-full overflow-hidden py-4 border-y border-neutral-900 bg-neutral-950/60 backdrop-blur-md mb-14 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-16 whitespace-nowrap items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, sIdx) => (
              <div key={sIdx} className="flex items-center gap-3 px-4 opacity-90">
                <div className="w-7 h-7 relative flex items-center justify-center">
                  <img 
                    src={sponsor.img} 
                    alt={sponsor.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm md:text-base font-semibold tracking-wider text-white">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            Paket Token
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
            Pilih paket terbaik untuk membangun token Anda di jaringan blockchain pilihan.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="relative w-full flex items-center justify-center">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Network Selector */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 flex flex-col gap-4"
            >
              {networks.map((net) => {
                const isActive = activeNetwork === net.id;
                return (
                  <button
                    key={net.id}
                    onClick={() => setActiveNetwork(net.id)}
                    className={`relative flex items-center gap-4 px-6 py-4 rounded-2xl text-left cursor-pointer transition-none ${
                      isActive 
                        ? "bg-neutral-900 border border-neutral-700 text-gray-300" 
                        : "bg-blue-600 border border-blue-600 text-white"
                    }`}
                  >
                    <span className="text-2xl">{net.icon}</span>
                    <span className={`text-base md:text-lg font-semibold tracking-wide ${isActive ? "text-gray-300" : "text-white"}`}>
                      {net.name}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Right: 3 Package Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {currentPackages.map((pkg, idx) => {
                const uniqueKey = `${activeNetwork}-${idx}`;

                return (
                  <div 
                    key={uniqueKey}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between w-full transition-none ${
                      pkg.popular 
                        ? "bg-neutral-900 border-2 border-blue-600 md:-translate-y-2 shadow-xl" 
                        : "bg-black border border-blue-600"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                        <span className="px-4 py-1 rounded-full text-xs font-bold tracking-widest text-white bg-blue-600 uppercase">
                          POPULAR
                        </span>
                      </div>
                    )}

                    <div className="flex-grow">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold tracking-wider text-white mb-2">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {pkg.desc}
                        </p>
                        <div className="text-2xl md:text-3xl font-extrabold text-white">
                          {pkg.price}
                        </div>
                        <span className="text-xs text-gray-400">/proyek</span>
                      </div>

                      <ul className="space-y-3.5 mb-8">
                        {pkg.features.map((feat, fIdx) => (
                          <li 
                            key={fIdx}
                            className="flex items-start gap-3 text-sm md:text-base text-gray-200 font-medium"
                          >
                            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      type="button"
                      className="relative overflow-hidden w-full py-4 rounded-full text-base font-bold border border-blue-600 bg-blue-600 text-white cursor-pointer flex items-center justify-center gap-2 transition-none"
                    >
                      Beli Paket
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}