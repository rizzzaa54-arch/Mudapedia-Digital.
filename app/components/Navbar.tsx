"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Beranda", "Tentang Kami", "Layanan", "Tim Kami", "Galeri", "Kontak"];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#030014]/50 border-b border-white/5"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a href="#" className="relative flex items-center">
          <Image 
            src="/mudapedia-logo.png"
            alt="Logo Perusahaan"
            width={160}
            height={40}
            className="w-auto h-8 md:h-10 object-contain"
            priority
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        {navLinks.map((link, i) => (
          <a key={i} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors relative group">
            {link}
            {link === "Beranda" && (
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500" />
            )}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-[100%] left-0 right-0 p-4 bg-[#0a0524] border-b border-white/10 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link, i) => (
            <a key={i} href="#" className="text-gray-300 hover:text-white px-4 py-2 bg-white/5 rounded-lg">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}