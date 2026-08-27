import React from "react";
import Cards from "../cards-projects/cards";
import ContentProject from "./content-project";
import { useLanguage, useProject } from "@/app/contexts";
import { useReveal } from "@/app/hooks/useReveal";

/**
 * Os oito projetos ficavam num carrossel do react-slick, dois por
 * slide. Duas coisas pesavam contra: as setas e os dots eram os
 * defaults da biblioteca, e quem avaliava precisava de quatro
 * cliques para ver tudo — justamente no conteúdo que decide a visita.
 *
 * Em grade, os oito aparecem de uma vez. O título continua sendo a
 * chave que o contexto usa para achar o projeto, então precisa bater
 * exatamente com o de utils/index.ts.
 */
type Projeto = {
  src?: string;
  mono?: string;
  seed?: number;
  tec: string;
  pt: { title: string; desc: string };
  en: { title: string; desc: string };
};

const PROJETOS: Projeto[] = [
  {
    src: "/assets/images/w3-erp.webp",
    tec: "REACT, MATERIAL UI, AXIOS",
    pt: {
      title: "W3 ERP - Gestão Empresarial",
      desc: "Sistema Integrado de Gestão Empresarial",
    },
    en: {
      title: "W3 ERP - Business Management",
      desc: "Integrated Business Management System",
    },
  },
  {
    src: "/assets/images/portifolio3.0.webp",
    tec: "NEXT, TAILWIND, JAVASCRIPT",
    pt: {
      title: "Portifólio 3.0",
      desc: "Desenvolvido em Next js e resposividade com Tailwind",
    },
    en: {
      title: "Portfolio 3.0",
      desc: "Developed in Next js and responsive with Tailwind",
    },
  },
  {
    src: "/assets/images/Img_LinkNaBio.webp",
    tec: "HTML, CSS, JAVASCRIPT",
    pt: { title: "LINK NA BIO", desc: "Repositório de links para redes socias" },
    en: { title: "LINK IN BIO", desc: "Repository of links to social networks" },
  },
  {
    src: "/assets/images/metavagas1.webp",
    tec: "REACT, AXIOS, REACT ROUTER",
    pt: { title: "Metavagas – Projeto Fullstack", desc: "Inspirado no Linkedin" },
    en: { title: "Metavagas – Fullstack Project", desc: "Inspired by Linkedin" },
  },
  {
    mono: "CP",
    seed: 0,
    tec: "NODE.JS, EXPRESS, JWT",
    pt: {
      title: "Culture Power API",
      desc: "O Culture Power é uma API de gamificação.",
    },
    en: {
      title: "Culture Power API",
      desc: "Culture Power is a gamification API.",
    },
  },
  {
    mono: "MV",
    seed: 1,
    tec: "NEST, JWT, JEST, TYPESCRIPT",
    pt: { title: "API - Metavagas", desc: "API para a plataforma de vagas" },
    en: { title: "API - Metavagas", desc: "API for the vacancies platform" },
  },
  {
    mono: "PE",
    seed: 2,
    tec: "NEST, MULTER, JEST",
    pt: {
      title: "API - Pet & Events Management",
      desc: "Pet Events é uma API desenvolvida em Nest js",
    },
    en: {
      title: "API - Pet & Events Management",
      desc: "Pet Events is an API developed in Nest js",
    },
  },
  {
    mono: "CM",
    seed: 3,
    tec: "NEST, TYPESCRIPT, JEST",
    pt: {
      title: "API - Customers Management",
      desc: "Customers é uma API desenvolvida em Nest js",
    },
    en: {
      title: "API - Customers Management",
      desc: "Customers is an API developed in Nest js",
    },
  },
];

const SectionProjects = () => {
  const { language } = useLanguage();
  const { project } = useProject();
  const pt = language === "Portuguese";
  const gridRef = useReveal<HTMLUListElement>();

  return (
    <section
      className="w-full flex items-center justify-center py-16"
      id="projects"
    >
      <div className="w-full max-w-screen-xl px-4 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <h3 className="section-title">{pt ? "Projetos" : "Projects"}</h3>
          <p className="section-lede">
            {pt
              ? "Oito projetos entre aplicações fullstack e APIs. Toque em qualquer um para ver os detalhes."
              : "Eight projects across fullstack apps and APIs. Tap any of them for the details."}
          </p>
        </div>

        {/* A grade nunca sai de cena. Antes ela era trocada pelo painel
            de detalhe, o que tirava o contexto de quem estava
            comparando projetos e ainda desmontava a lista inteira a
            cada abertura. Agora o card escolhido ocupa a largura toda
            e se abre ali mesmo; os outros continuam em volta. */}
        <ul className="pgrid" ref={gridRef}>
          {PROJETOS.map((p, i) => {
            const t = pt ? p.pt : p.en;
            const aberto = t.title === project[0]?.title;
            return (
              <li
                key={`${t.title}-${i}`}
                className={`pgrid__item${aberto ? " pgrid__item--aberto" : ""}`}
              >
                {aberto ? (
                  <ContentProject />
                ) : (
                  <Cards
                    src={p.src}
                    mono={p.mono}
                    seed={p.seed}
                    tecnologies={p.tec}
                    title={t.title}
                    description={t.desc}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionProjects;
