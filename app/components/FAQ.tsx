"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "../TranslationContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = t.faq.items;

  return (
    <section id="faq" className="relative py-28 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto relative z-10">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-neutral-800 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            {t.faq.badge}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t.faq.title} <span className="text-blue-500">{t.faq.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((faq: any, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-black border border-neutral-800 hover:border-blue-500 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 rounded-full bg-black border border-neutral-800 flex items-center justify-center text-blue-400">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                  </div>

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
                          {faq.answer ? (
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                              {faq.answer}
                            </p>
                          ) : (
                            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                              {faq.answerList?.map((item: string, iIdx: number) => (
                                <li key={iIdx}>{item}</li>
                              ))}
                            </ul>
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