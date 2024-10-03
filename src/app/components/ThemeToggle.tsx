// import { useTheme } from "../Contexts/Theme/ThemeContext";
"use client";
import { useTheme } from "@/app/contexts";
import Image from "next/image";

// import { useTheme } from "@/app/contexts/theme/ThemeContext";

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  const dark = theme === "dark";
  // const { toggleTheme, theme } = useContext(AppThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-block p-1 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 btn-theme"
      // aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {dark ? (
        <span className="w-6 h-4 pb-1 flex justify-center items-center text-center rounded-md">
          <Image
            src={"/assets/images/icons8-lua-brilhante-16.png"}
            alt="lua"
            width={16}
            height={16}
            quality={100}
          />
        </span>
      ) : (
        <span className="w-6 h-4 flex justify-center items-center text-center rounded-md">
          <Image
            src={"/assets/images/icons8-sol-16.png"}
            alt="sol"
            width={16}
            height={16}
            quality={100}
          />
        </span>
      )}
      {/* Switch to {theme === "dark" ? "light" : "dark"} mode ggaeg */}
    </button>
  );
};
