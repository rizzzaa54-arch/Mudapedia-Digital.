import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#030014] text-white pt-24 pb-8 overflow-hidden border-t border-blue-900/40">
      
      {/* 3D Futuristic Background Effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      />
      {/* Neon Glow Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern Overlay for 3D Cyber Look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Kolom 1: Tagline, Jam Operasional, & Social Media */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-base md:text-lg font-bold tracking-wide text-white leading-snug mb-3 min-h-[3.5rem] flex items-center">
              Mudapedia Digital Indonesia
            </h2>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
              Mari ciptakan obsesi baru dengan diri kita!
            </p>

            <div className="mb-6 text-xs md:text-sm">
              <p className="font-bold text-white">Senin – Jum'at</p>
              <p className="text-gray-400">08.00 – 16.00 WIB</p>
            </div>

            <div className="flex items-center gap-3">
              <SocialIcon href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.42c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z"/></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Kolom 2: Galeri & Kontak/Alamat */}
          <div className="lg:col-span-4">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 min-h-[3.5rem] flex items-center">
              Galeri
            </h3>
            <div className="space-y-1 text-xs md:text-sm text-gray-300 mb-4">
              <p>Telepon : 0851-1983-6002</p>
              <p>
                Email : <a href="mailto:mudapediadigitalindonesia.com" className="text-blue-400 hover:underline">mudapediadigitalindonesia.com</a>
              </p>
            </div>

            <h4 className="font-bold text-xs md:text-sm text-white mb-1">Banyuwangi</h4>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Perum Gedong Blok. D No.5<br />
              Kertosari, Kec. Banyuwangi, Kabupaten<br />
              Banyuwangi, Jawa Timur 68418
            </p>
          </div>

          {/* Kolom 3: Perusahaan */}
          <div className="lg:col-span-2">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 min-h-[3.5rem] flex items-center">
              Perusahaan
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Galeri</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Harga</a></li>
            </ul>
          </div>

          {/* Kolom 4: Custom Animated Logo Container */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center group">
              
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-md animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-blue-400/30" />
              
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#0a0624] via-[#110c3b] to-[#1e104f] border border-blue-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col items-center justify-center px-4 text-center">
                  <img 
                    src="mudapedia-logo.png" 
                    alt="Logo Utama" 
                    className="w-12 h-12 md:w-14 md:h-14 object-contain mb-2" 
                  />
                  <span className="text-[10px] font-semibold tracking-widest text-blue-300 uppercase leading-tight">
                    Mudapedia Digital<br />Indonesia
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© 2026 MudaPedia. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.42c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-transparent transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)]"
    >
      {children}
    </a>
  );
}