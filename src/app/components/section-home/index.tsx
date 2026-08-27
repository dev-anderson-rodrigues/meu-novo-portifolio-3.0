import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts";

const SectionHome = () => {
  const { language } = useLanguage();
  return (
    <section
      className="max-w-screen min-h-screen flex items-center relative "
      id="home"
    >
      <div className="absolute inset-0 bg-no-repeat backgroundSection hero-veil">
        <Image
          src={"/assets/images/montanhas.webp"}
          alt="Montanhas"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
          className="max-h-screen min-h-96 pt-16"
        />
      </div>

      <div className="macbookBg z-40 flex flex-col m-auto items-center  gap-7">
        <div className="flex flex-col text-center mt-16">
          <h3 className=" text-xl md:text-6xl">
            {language === "Portuguese"
              ? "Desenvolvendo Ideias"
              : "Developing insights"}
          </h3>
          <h4 className="text-base md:text-4xl">
            {language === "Portuguese"
              ? "Solucionando Desafios"
              : "Solving Challenges"}
          </h4>
        </div>
        <div className="p-4">
          <a
            href="https://api.whatsapp.com/send?phone=5548988563774"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="lg:flex justify-center text-center items-center w-full h-full buttonContact">
              {language === "Portuguese" ? "Me Contate" : "Contact me"}
            </button>
          </a>
        </div>
        <div className="w-screen relative flex items-center justify-center container-3">
          <Image
            src="/assets/images/macbook.webp"
            alt="Notebook exibindo um editor de código"
            width={1009}
            height={372}
            sizes="(max-width: 1024px) 100vw, 1009px"
            quality={90}
            priority
            className="absoute object-cover bottom-0 z-50 p-10 pb-0 macbook"
          />
          {/* A máscara era um WebP de 92 KB. O contorno é literalmente
              duas retas, então virou um path de 5 pontos: 213 bytes,
              nítido em qualquer resolução, e a cor vem do tema — antes
              o modo claro dependia de um filtro invert() sobre a
              imagem escura. */}
          <svg
            viewBox="0 0 1920 666"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
            className="object-cover w-screen absolute bottom-0 -z-10 hero-mask"
          >
            <path d="M0 145 L762 490 L1920 70 L1920 666 L0 666 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
