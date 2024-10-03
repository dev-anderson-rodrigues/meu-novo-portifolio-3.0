import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { useState } from "react";
import { useProject } from "@/app/contexts";

const Component_Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSelectedProject, setProject } = useProject();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setSelectedProject("");
    setProject([]);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-3xl md:hidden p-2 bg-gray-800 text-white rounded"
        aria-label="Toggle Navigation"
      >
        ☰
      </button>
      <div
        className={`flex-col fixed top-0 left-0 gap-8 bg-#282c33d2 opacity-99 backdrop-blur-sm w-screen h-screen justify-center md:w-auto md:h-full md:bg-inherit md:justify-end md:static md:flex-row items-center md:gap-4 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <button
          className="text-3xl w-3 md:hidden fixed top-4 right-11"
          onClick={toggleMenu}
        >
          X
        </button>

        <Link onClick={toggleMenu} href="#home" className="text-2xl md:text-sm">
          <span>#</span>Início
        </Link>
        <Link
          onClick={toggleMenu}
          href="#about-me"
          className="text-2xl md:text-sm"
        >
          <span>#</span>Sobre mim
        </Link>
        <Link
          onClick={toggleMenu}
          href="#skills"
          className="text-2xl md:text-sm"
        >
          <span>#</span>Habilidades
        </Link>
        <Link
          onClick={toggleMenu}
          href="#projects"
          className="text-2xl md:text-sm"
        >
          <span>#</span>Projetos
        </Link>
        <Link
          onClick={toggleMenu}
          href="#contact"
          className="text-2xl md:text-sm"
        >
          <span>#</span>Contato
        </Link>
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
export default Component_Nav;
