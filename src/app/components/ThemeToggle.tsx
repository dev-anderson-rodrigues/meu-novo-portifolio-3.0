// import { useTheme } from "../Contexts/Theme/ThemeContext";
"use client";
import { useTheme } from "@/app/contexts";

// import { useTheme } from "@/app/contexts/theme/ThemeContext";

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  // const { toggleTheme, theme } = useContext(AppThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded transition duration-300 ease-in-out"
      // aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Switch to {theme === "dark" ? "light" : "dark"} mode ggaeg */}
    </button>
  );
};
