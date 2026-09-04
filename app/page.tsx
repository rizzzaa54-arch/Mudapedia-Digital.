"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Keunggulan from "./components/Keunggulan";
import PaketToken from "./components/PaketToken";
import Gallery from "./components/Gallery"; 
import FAQ from "./components/FAQ"; 
import AboutSection from "./components/AboutSection"; 
import Footer from "./components/Footer"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-[#030014] text-white font-sans overflow-x-hidden pb-16 md:pb-0">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Navbar menggunakan sistem useLanguage() secara global */}
            <Navbar />
            <Hero />
            <Keunggulan /> 

            <div id="harga">
              <PaketToken />
            </div>

            {/* Komponen Galeri diletakkan di bawah Paket Token dengan ID galeri-section */}
            <div id="galeri-section">
              <Gallery />
            </div>

            <div id="about">
              <AboutSection /> 
            </div>
            
            <div id="faq">
              <FAQ />
            </div>

            <Footer /> 
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}