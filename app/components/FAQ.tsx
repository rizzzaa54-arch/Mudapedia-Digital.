"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HelpCircle, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Apa itu PT Mudapedia Digital Indonesia?",
    answer: "PT Mudapedia Digital Indonesia adalah perusahaan yang bergerak dibidang pengembangan teknologi dan digitalisasi. Kami menyediakan solusi inovatif untuk bisnis maupun individu, mulai dari pengembangan aplikasi, website, hingga strategi digital marketing."
  },
  {
    question: "Layanan apa saja yang ditawarkan?",
    answer: ""
  },
  {
    question: "Bagaimana cara kerja sama dengan PT Mudapedia?",
    answer: "Proses kerja sama dimulai dengan konsultasi awal untuk memahami kebutuhan Anda. Tim kami kemudian menyusun proposal solusi lengkap dengan estimasi biaya dan waktu pengerjaan. Setelah ada kesepakatan, pengembangan dimulai dengan komunikasi intensif dan transparansi di setiap tahap proyek."
  },
  {
    question: "Siapa saja klien yang bisa menggunakan layanan Mudapedia?",
    answer: "Layanan kami terbuka untuk berbagai jenis klien, mulai dari UMKM, perusahaan menengah, hingga korporasi besar. Kami juga melayani kebutuhan individu yang ingin mengembangkan produk digital."
  },
  {
    question: "Bagaimana cara menghubungi PT Mudapedia Digital Indonesia?",
    answer: "Anda dapat menghubungi kami melalui email, telepon, atau formular kontak di website resmi. Tim kami siap membantu Anda mendapatkan solusi terbaik sesuai kebutuhan bisnis."
  }
];

export default function FAQ() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 px-6 md:px-12 bg-[#030014] text-white overflow-hidden">
      
      {/* Background Glow Effects Biru */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <HelpCircle className="w-4 h-4" />
              Pusat Bantuan Interaktif
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Pertanyaan yang Sering <span className="text-blue-500">Diajukan</span>
            </h2>
          </div>

          {/* Tombol Navigasi Geser (Kiri & Kanan) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#0a0524]/80 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#0a0524]/80 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Container Kartu Geser (Horizontal Scroll) */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[380px] max-w-[380px] snap-start flex-shrink-0 bg-[#08031d]/90 border border-blue-500/30 hover:border-blue-400 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group"
              >
                <div>
                  {/* Nomor Urut Kartu */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tombol Pertanyaan (Bisa diklik untuk buka/tutup jawaban) */}
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-start justify-between gap-3 cursor-pointer group-hover:text-blue-400 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      {faq.question}
                    </h3>
                    <div className={`w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? "rotate-180 bg-blue-600 text-white" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Jawaban yang tertutup/terbuka secara interaktif */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed pt-4 mt-2 border-t border-blue-500/20">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}