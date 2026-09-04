"use client";

import React, { createContext, useContext, useState } from "react";
import id from "./locales/id.json";
import en from "./locales/en.json";

const dictionaries = { id, en };

interface TranslationContextType {
  locale: string;
  setLocale: (lang: string) => void;
  t: any;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("id");

  const t = dictionaries[locale as keyof typeof dictionaries] || id;

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useLanguage must be used within a TranslationProvider");
  }
  return context;
}