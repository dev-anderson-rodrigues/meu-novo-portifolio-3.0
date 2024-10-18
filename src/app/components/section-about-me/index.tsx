/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts";

const SectionAboutMe = () => {
  const { language } = useLanguage();
  return (
    <section
      className="w-full min-h-screen items-center flex flex-col justify-between about-me z-20"
      id="about-me"
    >
      <div className="flex flex-col lg:flex-row mt-20 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pl-4 pr-4 w-full h-full xl:max-w-screen-xl items-center z-10 justify-around ">
        <div className="pl-4 pr-4 flex cite">
          <p className="flex flex-col gap-10 m-0">
            <strong className="text-center text-base md:text-2xl">
              {language === "Portuguese" ? "Citação" : "Citation"}
            </strong>
            <q className=" text-base md:text-2xl max-w-lg">
              <em>
                {language === "Portuguese" ? (
                  <>
                    O segredo para um grande projeto é não se deixar levar pela
                    complexidade.
                  </>
                ) : (
                  <>
                    The secret to a great project is not to get carried away by
                    complexity.
                  </>
                )}
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
          className="rounded-3xl shadow-lg border-2 border-solid img"
        />
      </div>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pl-6 pr-6 w-full h-full mb-6 p-4 pb-10 contentB">
        <strong className="text-3xl">
          {language === "Portuguese" ? "Olá" : "Hello"}
        </strong>
        ,
        <article className="text-lg font-extralight pt-2">
          {language === "Portuguese" ? (
            <>
              Sou Anderson Rodrigues, Desenvolvedor Full Stack em Ascenção. Após
              uma carreira bem-sucedida em instalação, manutenção e suporte em
              redes de internet, decidi seguir minha verdadeira paixão por
              tecnologia e mergulhar no universo do desenvolvimento web. Com uma
              sólida base em suporte de redes e uma abordagem criativa para a
              solução de problemas, trago uma perspectiva única para o
              desenvolvimento de soluções digitais que impactam positivamente
              negócios e usuários.
            </>
          ) : (
            <>
              I'm Anderson Rodrigues, a Full Stack Developer on the rise. After
              a successful career in network installation, maintenance and
              support networks, I decided to follow my true passion for
              technology and into the world of web development. With a solid
              foundation in support and a creative approach to problem solving,
              I bring a unique perspective to the development of digital
              solutions that positively impact businesses and users.
            </>
          )}
        </article>
        <article className="text-lg font-extralight pt-2">
          {language === "Portuguese" ? (
            <>
              Residente do interior de São Paulo e vindo de uma família humilde,
              minha vontade de deixar um legado significativo só cresce. Sempre
              fui um sonhador próximo das tecnologias atuais e, com 12 anos, já
              formatava meu primeiro PC. Minha visão de um futuro melhor me
              levou a ingressar em uma escola de programação fullstack, onde
              conquistei meu certificado de Desenvolvedor Fullstack e adquiri
              expertise em tecnologias como JavaScript e Node.js, além de
              frameworks front-end como React.js e back-end como NestJS.
            </>
          ) : (
            <>
              I live in the interior of São Paulo and come from a humble family,
              my desire to leave a meaningful legacy only grows. I've always
              been a dreamer close to current technologies and, at the age of
              12, I was already my first PC. My vision of a better future led me
              to a fullstack programming school, where I earned my Fullstack
              Developer certificate and acquired expertise in technologies such
              as JavaScript and Node.js, as well as front-end frameworks
              frameworks like React.js and back-end frameworks like NestJS.
            </>
          )}
        </article>
        <article className="text-lg font-extralight pt-2">
          {language === "Portuguese" ? (
            <>
              Atualmente, estou complementando minha formação com a faculdade de
              Análise e Desenvolvimento de Sistemas, o que me proporciona uma
              base acadêmica sólida e um conhecimento mais amplo sobre sistemas.
              Tenho experiência com bancos de dados relacionais e não
              relacionais, incluindo MongoDB e PostgreSQL.
            </>
          ) : (
            <>
              I'm currently supplementing my education with a degree in Systems
              Analysis and Development, which gives me a solid academic base and
              a broader knowledge of systems. I have experience with relational
              and non-relational databases, including MongoDB and PostgreSQL.
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export default SectionAboutMe;
