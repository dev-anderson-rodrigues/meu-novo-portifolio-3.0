import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/contexts";

const SectionHome = () => {
  const { theme } = useTheme();
  const light = "light";

  return (
    <section
      className="max-w-screen min-h-screen flex items-center relative "
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
          className="max-h-screen min-h-96 pt-16"
        />
      </div>

      <div className="macbookBg z-40 flex flex-col m-auto items-center  gap-7">
        <div className="flex flex-col text-center mt-16">
          <h3 className=" text-xl md:text-6xl">Desenvolvendo Ideias</h3>
          <h4 className="text-base md:text-4xl">Solucionando Desafios</h4>
        </div>
        <div className="p-4">
          <a
            href="https://api.whatsapp.com/send?phone=5548988563774&text=SUA_MENSAGEM"
            target="true"
          >
            <button className="lg:flex justify-center text-center items-center w-full h-full buttonContact">
              Me Contate
            </button>
          </a>
        </div>
        <div className="w-screen relative flex items-center justify-center container-3">
          <Image
            src={"/assets/images/macbook.png"}
            alt="macbook"
            width={1009}
            height={372}
            quality={100}
            className="absoute object-cover bottom-0 z-50 p-10 pb-0 macbook"
          />
          <Image
            src={"/assets/images/mask-banner.png"}
            alt="mask-banner"
            width={1920}
            height={666}
            quality={100}
            className="object-cover w-screen absolute bottom-0 -z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
