"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import Package3D from "./Package3D";

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

export default function PaketToken() {
  const [activeNetwork, setActiveNetwork] = useState("solana");
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [successIndex, setSuccessIndex] = useState<number | null>(null);

  const currentPackages = networkPackages[activeNetwork] || networkPackages.solana;

  const handlePilihPaket = (index: number, namaPaket: string, hargaPaket: string) => {
    setLoadingIndex(index);

    setTimeout(() => {
      setLoadingIndex(null);
      setSuccessIndex(index);

      setTimeout(() => {
        setSuccessIndex(null);
        const selectedNet = networks.find((n) => n.id === activeNetwork);
        alert(`Berhasil Memilih!\n- Jaringan: ${selectedNet?.name}\n- Paket: ${namaPaket}\n- Harga: ${hargaPaket}`);
      }, 500);
    }, 1000);
  };

  return (
    <section id="paket-token" className="relative py-28 px-4 md:px-12 bg-[#030014] text-white overflow-hidden">
      
      {/* Background Glow Biru Solid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
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
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
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
              className="lg:col-span-3 flex flex-col gap-3.5"
            >
              {networks.map((net) => {
                const isActive = activeNetwork === net.id;
                return (
                  <button
                    key={net.id}
                    onClick={() => setActiveNetwork(net.id)}
                    className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 text-left group cursor-pointer ${
                      isActive 
                        ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                        : "bg-[#08031d]/60 border-white/5 hover:border-blue-500/30 hover:bg-[#0a0524]"
                    }`}
                  >
                    <span className="text-xl">{net.icon}</span>
                    <span className={`font-medium tracking-wide ${isActive ? "text-white font-semibold" : "text-gray-400 group-hover:text-gray-200"}`}>
                      {net.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-2xl border border-blue-400 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>

            {/* Right: 3 Package Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {currentPackages.map((pkg, idx) => {
                const isLoading = loadingIndex === idx;
                const isSuccess = successIndex === idx;

                return (
                  <motion.div 
                    key={`${activeNetwork}-${idx}`}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: idx * 0.15, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 w-full ${
                      pkg.popular 
                        ? "bg-[#08031d]/95 border-2 border-blue-500 shadow-[0_0_35px_rgba(59,130,246,0.35)] md:-translate-y-2" 
                        : "bg-[#08031d]/80 border border-blue-500/20 hover:border-blue-400/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                        <span className="px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-white bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.8)] uppercase">
                          POPULAR
                        </span>
                      </div>
                    )}

                    <div className="flex-grow">
                      <div className="mb-2">
                        <Package3D color={pkg.color} />
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold tracking-wider text-white mb-1">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-400 text-xs mb-3">
                          {pkg.desc}
                        </p>
                        <div className="text-xl md:text-2xl font-extrabold text-blue-400">
                          {pkg.price}
                        </div>
                        <span className="text-[11px] text-gray-500">/proyek</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feat, fIdx) => (
                          <motion.li 
                            key={fIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (idx * 0.15) + (fIdx * 0.05) }}
                            className="flex items-start gap-3 text-xs text-gray-300"
                          >
                            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span className="leading-snug">{feat}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.button 
                      onClick={() => handlePilihPaket(idx, pkg.name, pkg.price)}
                      disabled={isLoading || isSuccess}
                      whileTap={{ scale: 0.95 }}
                      className={`relative overflow-hidden w-full py-3.5 rounded-full text-sm font-bold transition-all duration-300 border cursor-pointer flex items-center justify-center gap-2 ${
                        isSuccess
                          ? "bg-emerald-600 text-white border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                          : pkg.popular
                          ? "bg-blue-600 text-white border-transparent hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                          : "bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-transparent"
                      }`}
                    >
                      {!isLoading && !isSuccess && (
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                      )}

                      {isLoading && (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Menghubungkan...</span>
                        </>
                      )}

                      {isSuccess && (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                          <span>Berhasil Dipilih!</span>
                        </>
                      )}

                      {!isLoading && !isSuccess && "Beli Paket"}
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}