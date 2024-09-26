"use client";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const AppThemeContext = createContext<ThemeContextType>(null!);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
