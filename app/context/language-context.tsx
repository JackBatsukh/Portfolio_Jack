"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "MN";
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "MN" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage нь LanguageProvider дотор ашиглагдах ёстой");
  }
  return context;
}
