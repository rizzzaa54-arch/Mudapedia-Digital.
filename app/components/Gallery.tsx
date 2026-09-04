"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";
import { useLanguage } from "../TranslationContext";
import Image from "next/image";

// Daftar 4 gambar galeri proyek
const galleryImages = [
  { 
    src: "https://res.cloudinary.com/dpzzdlywb/image/upload/v1785465536/WhatsApp_Image_2026-07-31_at_09.37.26_q56xix.jpg", 
    title: "Tren Blockchain di Masa Depan", 
    instagramUrl: "https://instagram.com/mudapediadigitalindonesia" 
  },
  { 
    src: "https://res.cloudinary.com/dpzzdlywb/image/upload/v1785465816/WhatsApp_Image_2026-07-31_at_09.42.51_dj1z0i.jpg",
    title: "Melek Finansial Digital",
    instagramUrl: "https://instagram.com/mudapediadigitalindonesia" 
  },
  { 
    src: "", 
    title: "Dashboard Analitik", 
    instagramUrl: "" 
  },
  { 
    src: "", 
    title: "Dompet Kripto Multi-Chain", 
    instagramUrl: "" 
  },
];

export default function Gallery() {
  const { t, locale } = useLanguage();

  return (
    <section id="galeri-section" className="relative py-28 px-6 md:px-12 bg-black text-white overflow-hidden border-t border-neutral-900">
      
      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            {t.gallery?.badge || (locale === "en" ? "Portfolio & Documentation" : "Portofolio & Dokumentasi")}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t.gallery?.title || (locale === "en" ? "Project" : "Galeri")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              {t.gallery?.highlight || (locale === "en" ? " Gallery" : " Proyek")}
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            {t.gallery?.subtitle || (locale === "en" 
              ? "Explore our technology documentation and project updates." 
              : "Jelajahi berbagai dokumentasi visual dan hasil pengembangan proyek teknologi kami.")}
          </p>
        </motion.div>

        {/* Grid Kartu Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {galleryImages.map((item, index) => (
            <motion.a
              key={index}
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-lg cursor-pointer block p-6"
            >
              {/* Area Gambar dengan object-contain agar tampil penuh */}
              <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center bg-neutral-950">
                <Image 
                  src={item.src} 
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
              </div>

              {/* Overlay Judul & Ikon saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Tombol Bawah (Berwarna Biru Futuristik) */}
        <div className="flex justify-center">
          <motion.a
            href="https://www.instagram.com/mudapedia_id?igsi=MWFmNTY2aTY5Mmg5cA=="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 text-white font-bold text-sm md:text-base shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            <span>{locale === "en" ? "View More on Instagram" : "Lihat Lebih Banyak di Instagram"}</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}