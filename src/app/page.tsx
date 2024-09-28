"use client";

import Image from "next/image";
import Header from "./components/header";
import { useTheme } from "./contexts";

export default function Home() {
  const { theme } = useTheme();
  const light = "light";

  return (
    <>
      <Header />
      <main>
        <section
          className="w-full items-center min-h-screen flex justify-center overflow-hidden"
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
            />
          </div>
          <div className="mask absolute z-10">
            <Image
              src={"/assets/images/mask-banner.png"}
              alt="mask-banner"
              objectFit="cover"
              width={1920}
              height={666}
              quality={100}
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
          <div className="hidden xl:flex absolute w-full h-60 -bottom-40 z-0 divComplement"></div>
          <div className="containerPrimary">
            <h3 className="text-xl md:text-6xl">Desenvolvendo Ideias</h3>
            <h4 className="text-base md:text-4xl">Solucionando Desafios</h4>
          </div>
          <div className="botao">
            <a
              href="https://api.whatsapp.com/send?phone=5548988563774&text=SUA_MENSAGEM"
              target="true"
            >
              <button className="hidden lg:flex justify-center text-center items-center w-full h-full buttonContact">
                Me Contate
              </button>
            </a>
          </div>
        </section>
        <section
          className="w-full min-h-screen items-center flex flex-col justify-between about-me"
          id="about-me"
        >
          <div className="pt-40 pl-4 pr-4 w-full h-full max-w-screen-xl flex items-center z-10 justify-around ">
            <div className="pl-4 pr-4 absolute top-96 sm:top-2/4 md:top-3/4 lg:relative lg:top-0 flex cite">
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
              className="rounded-full"
            />
          </div>
          <div className="pl-6 pr-6 w-full max-w-screen-xl h-full pb-10 ">
            <strong className="text-3xl">Olá</strong>,{" "}
            <article className="text-lg font-extralight pt-2">
              Sou Anderson Rodrigues, Desenvolvedor Full Stack em Ascenção. Após
              uma carreira bem-sucedida em instalação, manutenção e suporte em
              redes de internet, decidi seguir minha verdadeira paixão por
              tecnologia e mergulhar no universo do desenvolvimento web. Com uma
              sólida base em suporte de redes e uma abordagem criativa para a
              solução de problemas, trago uma perspectiva única para o
              desenvolvimento de soluções digitais que impactam positivamente
              negócios e usuários.
            </article>
            <article className="text-lg font-extralight pt-2">
              Residente do interior de São Paulo e vindo de uma família humilde,
              minha vontade de deixar um legado significativo só cresce. Sempre
              fui um sonhador próximo das tecnologias atuais e, com 12 anos, já
              formatava meu primeiro PC. Minha visão de um futuro melhor me
              levou a ingressar em uma escola de programação fullstack, onde
              conquistei meu certificado de Desenvolvedor Fullstack e adquiri
              expertise em tecnologias como JavaScript e Node.js, além de
              frameworks front-end como React.js e back-end como NestJS.
            </article>
            <article className="text-lg font-extralight pt-2">
              Atualmente, estou complementando minha formação com a faculdade de
              Análise e Desenvolvimento de Sistemas, o que me proporciona uma
              base acadêmica sólida e um conhecimento mais amplo sobre sistemas.
              Tenho experiência com bancos de dados relacionais e não
              relacionais, incluindo MongoDB e PostgreSQL.
            </article>
          </div>
        </section>
        <section
          className=" w-full min-h-screen  items-center flex justify-center pt-16 bg-gradient-to-b from-black opacity-90"
          id="skills"
        >
          <div className="p-4 w-full h-screen max-w-screen-xl">
            <div className="w-full items-center flex justify-center text-3xl pt-2">
              <h3>Habilidades</h3>
            </div>
            <div className="h-full justify-center items-center flex">
              <div className="rounded-lg shadow-2xl bg-gradient-to-t from-black opacity-90 max-w-80 max-h-full flex flex-col gap-2 items-center justify-center cards">
                <div className="flex p-2 pl-6 gap-2">
                  <Image
                    src="/assets/images/html.png" // Verifique se o caminho da imagem está correto (assets e não assts)
                    alt="tecnology"
                    width={90}
                    height={90}
                    quality={100}
                  />
                  <Image
                    src="/assets/images/css.png"
                    alt="tecnology"
                    width={135}
                    height={100}
                    quality={100}
                  />
                </div>
                <div className="flex pl-10 pr-12 gap-8">
                  <Image
                    src="/assets/images/vite.png"
                    alt="tecnology"
                    width={120}
                    height={50}
                    quality={100}
                  />
                  <Image
                    src="/assets/images/ts.png"
                    alt="tecnology"
                    width={110}
                    height={120}
                    quality={100}
                  />
                </div>
                <div className="flex pl-10 pr-12 pt-4 gap-8">
                  <Image
                    src="/assets/images/tailwindcss.png"
                    alt="tecnology"
                    width={120}
                    height={50}
                    quality={100}
                  />
                  <Image
                    src="/assets/images/axios.png"
                    alt="tecnology"
                    width={110}
                    height={120}
                    quality={100}
                  />
                </div>
                <div className="flex pl-10 pr-16 pt-2 gap-4 items-center">
                  <Image
                    src="/assets/images/next.png"
                    alt="tecnology"
                    width={120}
                    height={20}
                    quality={100}
                    className="pt-4"
                  />
                  <Image
                    src="/assets/images/react.png"
                    alt="tecnology"
                    width={120}
                    height={120}
                    quality={100}
                    className="p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" w-full min-h-screen  items-center flex justify-center pt-16 bg-gradient-to-b from-black opacity-90"
          id="projects"
        >
          <div className="p-4 w-full h-screen max-w-screen-xl">projetos</div>
        </section>
      </main>
      <footer
        className=" w-full min-h-52  items-center flex justify-center"
        id="contact"
      >
        <div className=" p-4 w-full max-w-screen-xl">contato</div>
      </footer>
    </>
  );
}
