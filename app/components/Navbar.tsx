"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Users, Info, DollarSign, Image as ImageIcon, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../TranslationContext";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  // Daftar menu dengan href galeri yang diarahkan ke id yang benar (misal: #galeri-section)
  const navLinks = [
    { name: locale === "en" ? "Team" : "Tim", href: "#tim", icon: Users },
    { name: t.navbar.about, href: "#about", icon: Info },
    { name: locale === "en" ? "Pricing" : "Harga", href: "#harga", icon: DollarSign },
    { name: locale === "en" ? "Gallery" : "Galeri", href: "#galeri-section", icon: ImageIcon },
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#030014]/70 border-b border-white/5"
      >
        <div className="flex items-center gap-4 md:gap-6">
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

          <div className="hidden md:flex items-center gap-2 relative">
            <div className="relative">
              <button 
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-white hover:bg-white/10 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{locale === "id" ? "ID Indonesia" : "EN English"}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {showLangDropdown && (
                <div className="absolute left-0 mt-2 w-32 bg-[#0a0524] border border-white/10 rounded-xl shadow-xl py-1 z-50">
                  <button 
                    onClick={() => { setLocale("id"); setShowLangDropdown(false); }} 
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/10 text-gray-300"
                  >
                    ID Indonesia
                  </button>
                  <button 
                    onClick={() => { setLocale("en"); setShowLangDropdown(false); }} 
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/10 text-gray-300"
                  >
                    EN English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="hover:text-white transition-colors relative group">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-2 relative">
          <div className="relative">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-xl text-xs text-white"
            >
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{locale.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-28 bg-[#0a0524] border border-white/10 rounded-xl shadow-xl py-1 z-50">
                <button onClick={() => { setLocale("id"); setShowLangDropdown(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/10 text-gray-300">Indonesia</button>
                <button onClick={() => { setLocale("en"); setShowLangDropdown(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-white/10 text-gray-300">English</button>
              </div>
            )}
          </div>

          <button 
            className="text-white p-1.5 bg-white/5 border border-white/10 rounded-xl ml-1" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[75%] max-w-sm bg-[#0a0524] border-l border-white/10 md:hidden flex flex-col justify-between py-6 px-6"
            >
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-gray-300 hover:text-white text-base font-medium transition-colors border-b border-white/5 pb-3"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="text-center text-xs text-gray-500 pb-4">
                Mudapedia Digital © 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#030014]/90 backdrop-blur-lg border-t border-white/10 py-2 px-4 md:hidden flex items-center justify-around">
        {navLinks.map((link, i) => {
          const IconComponent = link.icon;
          return (
            <a 
              key={i} 
              href={link.href} 
              className="flex flex-col items-center justify-center text-gray-400 hover:text-blue-400 transition-colors py-1 px-1"
            >
              <IconComponent className="w-5 h-5 mb-1" />
              <span className="text-[9px] tracking-tight">{link.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}