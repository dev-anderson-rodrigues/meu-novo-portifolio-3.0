import { useContext } from "react";
import { AppLanguageToggle } from "./index";

export const useLanguage = () => {
  const context = useContext(AppLanguageToggle);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageToggleProvider");
  }
  return context;
};
