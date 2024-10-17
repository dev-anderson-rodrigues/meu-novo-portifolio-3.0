"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { LanguageToggleType } from "./types";

export const AppLanguageToggle = createContext<LanguageToggleType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"Portuguese" | "English">(
    "Portuguese"
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage as "Portuguese" | "English");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "Portuguese" ? "English" : "Portuguese"
    );
  };
  return (
    <AppLanguageToggle.Provider value={{ language, toggleLanguage }}>
      {children}
    </AppLanguageToggle.Provider>
  );
};
