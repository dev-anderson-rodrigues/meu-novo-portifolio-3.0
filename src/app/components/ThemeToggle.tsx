"use client";
import { useTheme } from "@/app/contexts";
import Image from "next/image";

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-block p-1 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 btn-theme"
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
    </button>
  );
};
