import { useContext } from "react";
import { AppThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
