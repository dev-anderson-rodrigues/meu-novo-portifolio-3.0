import Link from "next/link";
import { useState } from "react";
import { useLanguage, useProject } from "@/app/contexts";
import { useMediaQuery } from "react-responsive";
import { LanguageToggle } from "../language-toggle";
import AppearanceMenu from "../appearance-menu";

const Component_Nav = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSelectedProject } = useProject();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMobile) {
      setSelectedProject("");
    }
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-3xl lg:hidden p-2 bg-gray-800 text-white rounded"
        aria-label="Toggle Navigation"
      >
        ☰
      </button>
      <div
        className={`flex-col fixed top-0 left-0 gap-8 menu-cortina w-screen h-screen justify-center lg:w-auto lg:h-full lg:bg-inherit lg:justify-end lg:static lg:flex-row items-center lg:gap-4 ${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        <button
          className="text-3xl w-3 lg:hidden fixed top-4 right-11"
          onClick={toggleMenu}
        >
          X
        </button>

        <Link onClick={toggleMenu} href="#home" className="text-2xl lg:text-sm">
          <span>#</span>
          {language === "Portuguese" ? "Início" : "Home"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#about-me"
          className="text-2xl lg:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Sobre mim" : "About me"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#skills"
          className="text-2xl lg:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Habilidades" : "Skills"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#projects"
          className="text-2xl lg:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Projetos" : "Projects"}
        </Link>
        <Link
          onClick={toggleMenu}
          href="#contact"
          className="text-2xl lg:text-sm"
        >
          <span>#</span>
          {language === "Portuguese" ? "Contato" : "Contact"}
        </Link>
        <div className="lg:hidden flex justify-center pt-4 appearance--stacked">
          <AppearanceMenu language={language} />
        </div>
        <button
          className="fixed lg:hidden top-5 left-12"
          onClick={toggleLanguage}
          aria-label={
            language === "Portuguese"
              ? "Mudar para inglês"
              : "Switch to Portuguese"
          }
        >
          <span className="border-b-2 border-solid w-18 pl-0 p-2 flex justify-center items-center text-center text-lg language">
            {language === "Portuguese" ? "pt-BR" : "en-US"}
          </span>
        </button>
        <div className="hidden lg:flex justify-center text-center h-auto items-center gap-3">
          <LanguageToggle />
          <AppearanceMenu language={language} />
        </div>
      </div>
    </>
  );
};
export default Component_Nav;
