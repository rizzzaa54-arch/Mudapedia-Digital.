"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Keunggulan from "./components/Keunggulan";
import PaketToken from "./components/PaketToken";
import FAQ from "./components/FAQ"; 
import AboutTeamSection from "./components/AboutTeamSection"; 
import Footer from "./components/Footer"; 
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-[#030014] text-white font-sans overflow-x-hidden">
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
            <Navbar />
            <Hero />
            <Keunggulan /> 

            <div id="harga">
              <PaketToken />
            </div>

            {/* id diubah dari "Tentang kami" menjadi "about" */}
            <div id="about">
              <AboutTeamSection /> 
            </div>
            
            <div id="galeri">
              <FAQ />
            </div>

            <Footer /> 
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}