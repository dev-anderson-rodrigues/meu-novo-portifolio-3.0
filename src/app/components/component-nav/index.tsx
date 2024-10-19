import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { useState } from "react";
import { useLanguage, useProject } from "@/app/contexts";
import { useMediaQuery } from "react-responsive";
import { LanguageToggle } from "../language-toggle";

const Component_Nav = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSelectedProject, setProject } = useProject();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMobile) {
      setSelectedProject("");
      setProject([]);
    }
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
        className={`flex-col fixed top-0 left-0 gap-8 bg-neutral-950 bg-opacity-80 backdrop-blur-sm w-screen h-screen justify-center md:w-auto md:h-full md:bg-inherit md:justify-end md:static md:flex-row items-center md:gap-4 ${
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
          <span>#</span>
          {language === "Portuguese" ? "Início" : "Home"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#about-me"
          className="text-2xl md:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Sobre mim" : "About me"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#skills"
          className="text-2xl md:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Habilidades" : "Skills"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#projects"
          className="text-2xl md:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Projetos" : "Projects"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#contact"
          className="text-2xl md:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Contato" : "Contact"}
        </Link>
        <button
          className="fixed md:hidden top-5 left-12"
          onClick={toggleLanguage}
        >
          {language === "Portuguese" ? (
            <span className="border-b-2 border-solid border-#000 w-18 pl-0 p-2 flex justify-center items-center text-center text-lg md:text-sm language">
              Portuguese
            </span>
          ) : (
            <span className="border-b-2 border-solid border-#000 w-18 pl-0 p-2 flex justify-center items-center text-center text-lg md:text-sm language">
              English
            </span>
          )}
        </button>
        <div className="hidden md:flex justify-center text-center h-auto items-center gap-4">
          <div>
            <LanguageToggle />
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
export default Component_Nav;
