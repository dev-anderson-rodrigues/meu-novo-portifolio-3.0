import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/app/contexts";

const Footer = () => {
  const { language } = useLanguage();
  // Estava fixo em 2024. O ano vem do relógio, e como é o mesmo no
  // servidor e no cliente na hora do render, não gera divergência de
  // hidratação.
  const ano = new Date().getFullYear();
  return (
    <footer
      className="w-full flex items-start sm:items-center justify-center"
      id="contact"
    >
      <div className="p-4 w-full max-w-screen-xl pl-12 pr-12 ctn">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="div-1 flex flex-col items-center w-full md:max-w-lg">
            <div className=" flex flex-col md:flex-row gap-4">
              <span className="flex gap-2 m-auto">
                {/* Era um bitmap de 16x17 px exibido a 20px — o ativo
                    mais grosseiro do site. Os 11 retângulos abaixo
                    reproduzem o desenho pixel a pixel, e agora escalam
                    sem limite e herdam a cor do tema. */}
                <svg
                  viewBox="0 0 16 17"
                  className="h-6 w-auto marca-svg"
                  fill="currentColor"
                  shapeRendering="crispEdges"
                  role="img"
                  aria-label="Marca de Anderson Rodrigues"
                >
                  <rect x="8" y="0" width="8" height="1" opacity="0.5" />
                  <rect x="8" y="1" width="8" height="3" />
                  <rect x="0" y="4" width="12" height="1" opacity="0.5" />
                  <rect x="12" y="4" width="4" height="8" />
                  <rect x="0" y="5" width="8" height="3" />
                  <rect x="0" y="8" width="1" height="1" />
                  <rect x="1" y="8" width="8" height="1" opacity="0.5" />
                  <rect x="0" y="9" width="4" height="3" />
                  <rect x="8" y="9" width="4" height="3" />
                  <rect x="0" y="12" width="1" height="1" />
                  <rect x="1" y="12" width="15" height="1" opacity="0.5" />
                  <rect x="0" y="13" width="8" height="3" />
                  <rect x="0" y="16" width="8" height="1" opacity="0.5" />
                </svg>
                <p className="name ">Anderson Rodrigues</p>
              </span>
              <span className="email">andersoncassio2008@gmail.com</span>
            </div>
            <div className="p-2 text-2xl w-screen flex items-center justify-center">
              <p>
                {language === "Portuguese"
                  ? "Desenvolvedor full-stack"
                  : "Full-stack developer"}
              </p>
            </div>
          </div>

          <div className="div2">
            <div className="midia flex flex-col m-auto items-center">
              <p>
                {language === "Portuguese" ? "Mídias Sociais" : "Social Media"}
              </p>
              <span className="flex m-auto items-center text-center justify-center gap-2">
                <a
                  href="https://github.com/dev-anderson-rodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.instagram.com/dev.anderson.rodrigues/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="copy pt-6">
          <p>
            {language === "Portuguese"
              ? `© ${ano}. Todos os direitos reservados.`
              : `© ${ano}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
