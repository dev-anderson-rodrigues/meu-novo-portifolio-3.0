import React from "react";
import Component_Nav from "../component-nav";
import { useLanguage } from "@/app/contexts";

const Header = () => {
  const { language } = useLanguage();
  return (
    <header className="w-screen fixed top-0 items-center flex justify-center z-50">
      <div className="flex justify-between items-center gap-4 px-4 md:px-6 py-2 w-full max-w-screen-xl">
        <h1 className="site-name">
          {language === "Portuguese" ? (
            <>
              <span>Anderson Rodrigues</span>
              <span>Desenvolvedor Full Stack</span>
            </>
          ) : (
            <>
              <span>Anderson Rodrigues</span>
              <span>Full Stack Developer</span>
            </>
          )}
        </h1>
        <Component_Nav />
      </div>
    </header>
  );
};

export default Header;
