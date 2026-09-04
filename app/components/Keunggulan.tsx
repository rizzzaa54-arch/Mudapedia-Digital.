"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, ShieldCheck, Rocket, Puzzle, Headphones } from "lucide-react";
import { useLanguage } from "../TranslationContext";

const icons = [
  <Cpu className="w-10 h-10 text-blue-400" />,
  <ShieldCheck className="w-10 h-10 text-purple-400" />,
  <Rocket className="w-10 h-10 text-blue-400" />,
  <Puzzle className="w-10 h-10 text-purple-400" />,
  <Headphones className="w-10 h-10 text-blue-400" />,
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Keunggulan() {
  const { t } = useLanguage();

  const features = t.keunggulan.items.map((item: any, idx: number) => ({
    ...item,
    icon: icons[idx]
  }));

  return (
    <section className="relative py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t.keunggulan.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {t.keunggulan.highlight}
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            {t.keunggulan.subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full"
        >
          {features.map((item: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className="relative p-6 rounded-2xl cursor-pointer flex flex-col items-center text-center transition-all duration-300 bg-neutral-900/90 border border-neutral-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-blue-950/40 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group"
            >
              <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <div className="relative z-10">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}