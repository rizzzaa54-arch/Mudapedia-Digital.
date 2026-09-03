'use client';

import React, { useState } from 'react';

export default function AboutTeamSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'team'>('about');
  const [teamFilter, setTeamFilter] = useState<'all' | 'team' | 'intern'>('all');

  const teamMembers = [
    // Tim 
    { 
      name: 'Iqbal', 
      role: 'Backend Developer', 
      category: 'team', 
      img: '/iqbal.png',
      instagramUrl: 'https://instagram.com/username_iqbal' 
    },
    { 
      name: 'Theo', 
      role: 'Frontend Developer', 
      category: 'team', 
      img: '/theo.png',
      instagramUrl: 'https://instagram.com/username_theo' 
    },
    
    // Peserta Magang
    { 
      name: 'Riza', 
      role: 'Internship', 
      category: 'intern', 
      img: 'https://res.cloudinary.com/dpzzdlywb/image/upload/v1786919068/l-removebg-preview_ywucto.png',
      instagramUrl: 'https://www.instagram.com/rizzzxy_?igsh=NHYyMTNycDhzdzRw' 
    },
    { 
      name: 'Izza', 
      role: 'Internship', 
      category: 'intern', 
      img: '/izza.png',
      instagramUrl: 'https://instagram.com/username_izza' 
    },
    { 
      name: 'Peserta 3', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern3.png',
      instagramUrl: 'https://instagram.com/username_peserta3' 
    },
    { 
      name: 'Peserta 4', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern4.png',
      instagramUrl: 'https://instagram.com/username_peserta4' 
    },
    { 
      name: 'Peserta 5', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern5.png',
      instagramUrl: 'https://instagram.com/username_peserta5' 
    },
    { 
      name: 'Peserta 6', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern6.png',
      instagramUrl: 'https://instagram.com/username_peserta6' 
    },
    { 
      name: 'Peserta 7', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern7.png',
      instagramUrl: 'https://instagram.com/username_peserta7' 
    },
    { 
      name: 'Peserta 8', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern8.png',
      instagramUrl: 'https://instagram.com/username_peserta8' 
    },
    { 
      name: 'Peserta 9', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern9.png',
      instagramUrl: 'https://instagram.com/username_peserta9' 
    },
    { 
      name: 'Peserta 10', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern10.png',
      instagramUrl: 'https://instagram.com/username_peserta10' 
    },
    { 
      name: 'Peserta 11', 
      role: 'Internship', 
      category: 'intern', 
      img: '/intern11.png',
      instagramUrl: 'https://instagram.com/username_peserta11' 
    },
  ];

  const filteredMembers = teamMembers.filter((member) => {
    if (teamFilter === 'team') return member.category === 'team';
    if (teamFilter === 'intern') return member.category === 'intern';
    return true;
  });

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Tombol Navigasi Utama di Atas */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 bg-black border text-white ${
              activeTab === 'about'
                ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105'
                : 'border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
            }`}
          >
            Tentang Kami
          </button>

          <button
            onClick={() => setActiveTab('team')}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 bg-black border text-white ${
              activeTab === 'team'
                ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105'
                : 'border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
            }`}
          >
            Tim Kami
          </button>
        </div>

        {/* ================= BAGIAN 1: TENTANG KAMI ================= */}
        <div 
          className={`transition-all duration-700 transform ${
            activeTab === 'about' 
              ? 'opacity-100 translate-y-0 relative pointer-events-auto' 
              : 'opacity-0 absolute inset-0 translate-y-10 pointer-events-none hidden'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-2">Tentang Kami</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Animasi Visual Diagram Grafik Tren Naik di Sebelah Kiri */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-3xl overflow-hidden border border-neutral-800 bg-black p-6 relative group">
                
                {/* Header Kartu Statistik */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Performa Bisnis</span>
                    <h4 className="text-lg font-bold text-white">Grafik Pertumbuhan & Tren</h4>
                  </div>
                </div>

                {/* Area Grafik Statistik (SVG Tren Naik) */}
                <div className="relative h-56 w-full flex items-end pt-6">
                  {/* Garis Grid Latar Belakang */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-b border-gray-600 w-full"></div>
                    <div className="border-b border-gray-600 w-full"></div>
                    <div className="border-b border-gray-600 w-full"></div>
                  </div>

                  {/* SVG Grafik Garis Naik dan Area Gradien */}
                  <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 400 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Area di bawah garis */}
                    <path 
                      d="M 0,150 Q 100,100 200,80 T 400,20 L 400,180 L 0,180 Z" 
                      fill="url(#chartGradient)" 
                    />

                    {/* Garis Kurva Tren Naik */}
                    <path 
                      d="M 0,150 Q 100,100 200,80 T 400,20" 
                      fill="none" 
                      stroke="#22d3ee" 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                    />

                    {/* Titik Indikator Animasi di Ujung Grafik */}
                    <circle cx="400" cy="20" r="6" fill="#38bdf8" className="animate-pulse" />
                    <circle cx="400" cy="20" r="12" fill="#06b6d4" opacity="0.4" className="animate-ping" />
                  </svg>
                </div>

                {/* Footer Keterangan Statistik */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-neutral-800">
                  <div className="bg-black p-3 rounded-2xl border border-neutral-800">
                    <span className="text-gray-400 text-xs block">Peningkatan Klien</span>
                    <span className="text-cyan-400 font-bold text-base">+185%</span>
                  </div>
                  <div className="bg-black p-3 rounded-2xl border border-neutral-800">
                    <span className="text-gray-400 text-xs block">Solusi Digital</span>
                    <span className="text-blue-400 font-bold text-base">Terdepan</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Visi</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Misi</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                 Memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan bisnis modern.    </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BAGIAN 2: TIM KAMI ================= */}
        <div 
          className={`transition-all duration-700 transform ${
            activeTab === 'team' 
              ? 'opacity-100 translate-y-0 relative pointer-events-auto' 
              : 'opacity-0 absolute inset-0 translate-y-10 pointer-events-none hidden'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase mb-1">Tim Kami</h2>
            <h3 className="text-2xl md:text-3xl font-black mb-3">Meet Our Team</h3>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto">
              Bersatu dalam visi, beragam dalam karya. Tim Mudapedia hadir untuk menghadirkan pengetahuan, kreativitas, dan solusi digital bagi generasi muda Indonesia.
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 mb-10">
            <button
              onClick={() => setTeamFilter('all')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 bg-black border text-white ${
                teamFilter === 'all'
                  ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setTeamFilter('team')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 bg-black border text-white ${
                teamFilter === 'team'
                  ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
              }`}
            >
              Tim
            </button>
            <button
              onClick={() => setTeamFilter('intern')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 bg-black border text-white ${
                teamFilter === 'intern'
                  ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  : 'border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
              }`}
            >
              Magang
            </button>
          </div>

          {/* Container Scroll Horizontal */}
          <div className="max-w-6xl mx-auto">
            <div className={`flex overflow-x-auto pb-8 gap-6 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent snap-x snap-mandatory ${teamFilter === 'team' ? 'justify-center' : 'justify-start'}`}>
              {filteredMembers.map((member, index) => (
                <div 
                  key={index}
                  className="w-[260px] sm:w-[275px] shrink-0 snap-start group relative bg-black border border-neutral-800 rounded-[2.5rem] pt-6 px-0 pb-0 flex flex-col items-center text-center overflow-hidden shadow-lg hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animation: activeTab === 'team' ? `fadeInUp 0.6s ease forwards ${index * 0.1}s` : 'none',
                  }}
                >
                  {/* Kotak Dark Grey khusus untuk bagian Nama dan Role */}
                  <div className="px-6 w-full">
                    <div className="bg-neutral-900 border border-neutral-800 py-3 px-4 rounded-2xl mb-4 shadow-inner">
                      <h4 className="font-bold text-base md:text-lg text-white mb-1">{member.name}</h4>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>

                    {/* Hanya Ikon Instagram Saja dengan Link Unik */}
                    <div className="flex items-center justify-center mb-6">
                      <a 
                        href={member.instagramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-black border border-neutral-700 flex items-center justify-center text-white hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Foto Melebar Penuh Menempel ke Samping & Bawah Kartu */}
                  <div className="w-full h-72 flex items-end justify-center overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-bottom filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500 rounded-b-[2.5rem]" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}