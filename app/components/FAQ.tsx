"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Apa itu PT Mudapedia Digital Indonesia?",
    answer: "PT Mudapedia Digital Indonesia adalah perusahaan yang bergerak dibidang pengembangan teknologi dan digitalisasi. Kami menyediakan solusi inovatif untuk bisnis maupun individu, mulai dari pengembangan aplikasi, website, hingga strategi digital marketing."
  },
  {
    question: "Layanan apa saja yang ditawarkan?",
    answer: (
      <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
        <li><strong>Pengembangan Aplikasi Mobile:</strong> Android & iOS (native atau cross-platform).</li>
        <li><strong>Pengembangan Website:</strong> E-commerce, company profile, portofolio, dan lainnya.</li>
        <li><strong>Digital Marketing:</strong> SEO, SEM, Social Media Management, hingga Content Creation.</li>
        <li><strong>Konsultasi Digital:</strong> Analisis kebutuhan & strategi digitalisasi bisnis.</li>
      </ul>
    )
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 px-6 md:px-12 bg-black text-white overflow-hidden">
      
      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-neutral-800 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            Pusat Bantuan Interaktif
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Pertanyaan yang Sering <span className="text-blue-500">Diajukan</span>
          </h2>
        </div>

        {/* Container Kartu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-black border border-neutral-800 hover:border-blue-500 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Nomor Urut Kartu */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-blue-400">
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
                    <div className={`w-7 h-7 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-blue-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? "rotate-180 border-blue-500 text-white" : ""}`}>
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
                        <div className="pt-4 mt-2 border-t border-neutral-800">
                          {typeof faq.answer === "string" ? (
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                              {faq.answer}
                            </p>
                          ) : (
                            faq.answer
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}