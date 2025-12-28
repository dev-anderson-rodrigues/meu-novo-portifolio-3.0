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
          src={"/assets/images/nv-foto.png"}
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
              Sou Anderson Rodrigues, desenvolvedor Full Stack com mais de
              2 anos de experiência. Atuo há mais de 1 ano desenvolvendo
              soluções para provedores de internet, trabalhando diretamente com
              análise e automação de processos, integrações entre sistemas ERP e
              desenvolvimento de soluções inteligentes utilizando n8n,
              low-code/no-code e Inteligência Artificial. Tenho forte atuação na
              construção de fluxos automatizados que reduzem erros operacionais,
              aceleram atendimentos e melhoram a organização interna das
              equipes. Atualmente, atuo como desenvolvedor CLT, participando de
              projetos de grande impacto e relevância estratégica para a
              empresa.
            </>
          ) : (
            <>
              I'm Anderson Rodrigues, a Full Stack developer with over 2
              years of experience. For the past year, I've been developing
              solutions for internet service providers, working directly with
              process analysis and automation, ERP system integrations, and
              developing intelligent solutions using n8n, low-code/no-code, and
              Artificial Intelligence. I have a strong track record in building
              automated workflows that reduce operational errors, accelerate
              service, and improve internal team organization. Currently, I work
              as a full-time developer, participating in high-impact and
              strategically relevant projects for the company.
            </>
          )}
        </article>
        <article className="text-lg font-extralight pt-2">
          {language === "Portuguese" ? (
            <>
              Nos últimos projetos, meu foco principal tem sido automação e IA,
              criando soluções que atendem áreas como suporte, comercial,
              vendas, financeiro e cobrança, incluindo o desenvolvimento de
              chats inteligentes com múltiplos agentes de IA, hoje utilizados em
              produção e em constante evolução. Esse produto foi idealizado e
              encabeçado por mim, desde a concepção da solução até sua
              implementação, tornando-se um produto interno oficial da empresa,
              utilizado diariamente no ambiente corporativo. Além do
              desenvolvimento técnico, atuo como responsável pela evolução do
              produto, criando novas funcionalidades, definindo melhorias
              contínuas, administrando a manutenção da solução e orientando
              equipes sobre seu funcionamento, garantindo estabilidade,
              escalabilidade e alinhamento com as necessidades do negócio.
            </>
          ) : (
            <>
              In recent projects, my main focus has been automation and AI,
              creating solutions that serve areas such as support, sales,
              finance, and collections, including the development of intelligent
              chats with multiple AI agents, currently used in production and
              constantly evolving. This product was conceived and spearheaded by
              me, from the solution's conception to its implementation, becoming
              an official internal company product used daily in the corporate
              environment. In addition to technical development, I am
              responsible for the product's evolution, creating new
              functionalities, defining continuous improvements, managing the
              solution's maintenance, and guiding teams on its operation,
              ensuring stability, scalability, and alignment with business
              needs.
            </>
          )}
        </article>
        <article className="text-lg font-extralight pt-2">
          {language === "Portuguese" ? (
            <>
              Mesmo com forte atuação em low-code e no-code, mantenho minha base
              Full Stack ativa, estudando e desenvolvendo projetos com
              JavaScript, Node.js, APIs, React, Next.js e NestJS, além de
              trabalhar com bancos de dados relacionais e não relacionais como
              PostgreSQL e MongoDB. Acredito que essa combinação entre
              fundamentos sólidos de programação, automação inteligente e visão
              de produto é o que me permite criar soluções escaláveis, bem
              estruturadas e com impacto real.
            </>
          ) : (
            <>
              Even with a strong focus on low-code and no-code, I maintain an
              active Full Stack foundation, studying and developing projects
              with JavaScript, Node.js, APIs, React, Next.js, and NestJS, as
              well as working with relational and non-relational databases like
              PostgreSQL and MongoDB. I believe that this combination of solid
              programming fundamentals, intelligent automation, and product
              vision is what allows me to create scalable, well-structured
              solutions with real impact.
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export default SectionAboutMe;
