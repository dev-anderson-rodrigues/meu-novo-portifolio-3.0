import React from "react";
import Image from "next/image";

const SectionAboutMe = () => {
  return (
    <section
      className="w-full min-h-screen items-center flex flex-col justify-between about-me z-20"
      id="about-me"
    >
      <div className="flex flex-col lg:flex-row mt-20 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pl-4 pr-4 w-full h-full xl:max-w-screen-xl items-center z-10 justify-around ">
        <div className="pl-4 pr-4 flex cite">
          <p className="flex flex-col gap-10 m-0 ">
            <strong className="text-center text-base md:text-2xl">
              Citação
            </strong>
            <q className=" text-base md:text-2xl max-w-lg">
              <em>
                O segredo para um grande projeto é não se deixar levar pela
                complexidade.
              </em>
            </q>
            <cite className="text-end text-base md:text-2xl">
              - Scott Berkun
            </cite>
          </p>
        </div>
        <Image
          src={"/assets/images/minha-imagem.png"}
          alt="Minha imagem"
          width={350}
          height={350}
          quality={100}
          className="rounded-full shadow-lg border-2 border-solid img"
        />
      </div>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pl-6 pr-6 w-full h-full pb-10 ">
        <strong className="text-3xl">Olá</strong>,{" "}
        <article className="text-lg font-extralight pt-2">
          Sou Anderson Rodrigues, Desenvolvedor Full Stack em Ascenção. Após uma
          carreira bem-sucedida em instalação, manutenção e suporte em redes de
          internet, decidi seguir minha verdadeira paixão por tecnologia e
          mergulhar no universo do desenvolvimento web. Com uma sólida base em
          suporte de redes e uma abordagem criativa para a solução de problemas,
          trago uma perspectiva única para o desenvolvimento de soluções
          digitais que impactam positivamente negócios e usuários.
        </article>
        <article className="text-lg font-extralight pt-2">
          Residente do interior de São Paulo e vindo de uma família humilde,
          minha vontade de deixar um legado significativo só cresce. Sempre fui
          um sonhador próximo das tecnologias atuais e, com 12 anos, já
          formatava meu primeiro PC. Minha visão de um futuro melhor me levou a
          ingressar em uma escola de programação fullstack, onde conquistei meu
          certificado de Desenvolvedor Fullstack e adquiri expertise em
          tecnologias como JavaScript e Node.js, além de frameworks front-end
          como React.js e back-end como NestJS.
        </article>
        <article className="text-lg font-extralight pt-2">
          Atualmente, estou complementando minha formação com a faculdade de
          Análise e Desenvolvimento de Sistemas, o que me proporciona uma base
          acadêmica sólida e um conhecimento mais amplo sobre sistemas. Tenho
          experiência com bancos de dados relacionais e não relacionais,
          incluindo MongoDB e PostgreSQL.
        </article>
      </div>
    </section>
  );
};

export default SectionAboutMe;
