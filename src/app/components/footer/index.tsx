import React from "react";
import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex items-start justify-center" id="contact">
      <div className="p-4 w-full max-w-screen-xl pl-12 pr-12 ctn">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="div-1 flex flex-col items-center w-full md:max-w-lg">
            <div className=" flex flex-col md:flex-row gap-4">
              <span className="flex gap-2 m-auto">
                <Image
                  src="/assets/images/logo.png"
                  width={20}
                  height={20}
                  alt="logo header inferior"
                  className="h-6 "
                />
                <p className="name ">Anderson Rodrigues</p>
              </span>
              <span className="email">andersoncassio2008@gmail.com</span>
            </div>
            <div className="p-2 text-2xl w-screen flex items-center justify-center">
              <p>Desenvolvedor full-stack</p>
            </div>
          </div>

          <div className="div2">
            <div className="midia flex flex-col m-auto items-center">
              <p>Mídias Sociais</p>
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
          <p>© Copyright 2024. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
