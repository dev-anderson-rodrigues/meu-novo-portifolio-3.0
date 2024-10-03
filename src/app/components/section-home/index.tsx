import React from "react";
import Image from "next/image";
import "./style.css";
import { useTheme } from "@/app/contexts";

const SectionHome = () => {
  const { theme } = useTheme();
  const light = "light";

  return (
    <section
      className="max-w-screen items-center min-h-screen flex justify-center"
      id="home"
    >
      <div
        className={`${
          theme === light ? "opacity-30" : "opacity-15"
        } absolute inset-0 bg-no-repeat backgroundSection`}
      >
        <Image
          src={"/assets/images/montanhas.png"}
          alt="Montanhas"
          width={1920}
          height={1080}
          quality={100}
          className="max-h-screen"
        />
      </div>
      <div className="mask absolute z-10">
        <Image
          src={"/assets/images/mask-banner.png"}
          alt="mask-banner"
          width={1920}
          height={666}
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="macbookBg  z-10 absolute">
        <Image
          src={"/assets/images/macbook.png"}
          alt="macbook"
          width={1009}
          height={372}
          quality={100}
        />
      </div>
      <div className="containerPrimary">
        <h3 className=" text-xl md:text-6xl">Desenvolvendo Ideias</h3>
        <h4 className="text-base md:text-4xl">Solucionando Desafios</h4>
      </div>
      <div className="btn">
        <a
          href="https://api.whatsapp.com/send?phone=5548988563774&text=SUA_MENSAGEM"
          target="true"
        >
          <button className="lg:flex justify-center text-center items-center w-full h-full buttonContact">
            Me Contate
          </button>
        </a>
      </div>
    </section>
  );
};

export default SectionHome;
