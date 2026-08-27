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
  /** Trabalho profissional e projetos próprios recentes vêm primeiro. */
  destaque?: boolean;
  tec: string;
  pt: { title: string; desc: string };
  en: { title: string; desc: string };
};

/**
 * A grade mostrava oito projetos de 2024, todos do mesmo período de
 * formação, e três deles anunciavam na própria descrição que eram
 * trabalho de curso. Quem lia o "Sobre mim" logo acima — anos de
 * atuação, produtos em produção — e descia até aqui encontrava outra
 * pessoa.
 *
 * Os quatro primeiros são o trabalho que sustenta essa conversa. O
 * resto continua acessível, mas separado, porque formação é contexto
 * e não deve competir com produto rodando.
 *
 * O título é a chave que o contexto usa para achar o projeto, então
 * precisa bater exatamente com o de utils/index.ts.
 */
const PROJETOS: Projeto[] = [
  {
    mono: "MA",
    seed: 0,
    destaque: true,
    tec: "IA, NODE.JS, TYPESCRIPT, REACT",
    pt: {
      title: "Maestro",
      desc: "Atendimento automatizado com múltiplos agentes de IA, em produção em provedores de grande porte.",
    },
    en: {
      title: "Maestro",
      desc: "Automated service with multiple AI agents, running in production at large providers.",
    },
  },
  {
    mono: "CV",
    seed: 1,
    destaque: true,
    tec: "NESTJS, POSTGRESQL, REDIS, REACT",
    pt: {
      title: "Coraxy | Vital",
      desc: "SaaS multi-tenant de cobrança automatizada via WhatsApp para provedores de internet.",
    },
    en: {
      title: "Coraxy | Vital",
      desc: "Multi-tenant SaaS for automated billing over WhatsApp for internet providers.",
    },
  },
  {
    mono: "NX",
    seed: 2,
    destaque: true,
    tec: "TYPESCRIPT, REACT, MULTI-TENANT",
    pt: {
      title: "Nexora",
      desc: "Plataforma que reúne CRM, projetos, contratos e análises assistidas por IA.",
    },
    en: {
      title: "Nexora",
      desc: "Platform bringing together CRM, projects, contracts and AI-assisted analytics.",
    },
  },
  {
    mono: "U+",
    seed: 3,
    destaque: true,
    tec: "NODE.JS, TYPESCRIPT, INTEGRAÇÕES",
    pt: {
      title: "Unifica +",
      desc: "Centraliza e automatiza a abertura de chamados em vários ERPs a partir de um ponto só.",
    },
    en: {
      title: "Unifica +",
      desc: "Centralises and automates ticket creation across several ERPs from a single place.",
    },
  },
  {
    src: "/assets/images/portifolio3.0.webp",
    tec: "NEXT, TAILWIND, TYPESCRIPT",
    pt: {
      title: "Portifólio 3.0",
      desc: "Este site: Next 16, sistema de tokens e cinco temas de cor.",
    },
    en: {
      title: "Portfolio 3.0",
      desc: "This site: Next 16, a token system and five colour themes.",
    },
  },
  {
    src: "/assets/images/w3-erp.webp",
    tec: "REACT, MATERIAL UI, AXIOS",
    pt: {
      title: "W3 ERP - Gestão Empresarial",
      desc: "Gestão empresarial com predição de compras a partir do histórico.",
    },
    en: {
      title: "W3 ERP - Business Management",
      desc: "Business management with purchase prediction from historical data.",
    },
  },
  {
    src: "/assets/images/metavagas1.webp",
    tec: "REACT, AXIOS, REACT ROUTER",
    pt: {
      title: "Metavagas – Projeto Fullstack",
      desc: "Plataforma de vagas inspirada no LinkedIn.",
    },
    en: {
      title: "Metavagas – Fullstack Project",
      desc: "Job platform inspired by LinkedIn.",
    },
  },
  {
    mono: "MV",
    seed: 4,
    tec: "NEST, JWT, JEST, TYPESCRIPT",
    pt: { title: "API - Metavagas", desc: "API para a plataforma de vagas" },
    en: { title: "API - Metavagas", desc: "API for the vacancies platform" },
  },
  {
    mono: "CP",
    seed: 5,
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
    mono: "PE",
    seed: 6,
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
    seed: 7,
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
  const gridDestaques = useReveal<HTMLUListElement>();
  const gridOutros = useReveal<HTMLUListElement>();

  const destaques = PROJETOS.filter((p) => p.destaque);
  const outros = PROJETOS.filter((p) => !p.destaque);

  /**
   * A mesma célula da grade, com ou sem o painel aberto. Duas listas
   * usam isto, então o índice entra na chave para os itens não
   * colidirem entre elas.
   */
  const celula = (p: Projeto, i: number, grupo: string) => {
    const t = pt ? p.pt : p.en;
    const aberto = t.title === project[0]?.title;
    return (
      <li
        key={`${grupo}-${t.title}-${i}`}
        className={`pgrid__item${aberto ? " pgrid__item--aberto" : ""}`}
      >
        {aberto ? (
          <ContentProject key={t.title} />
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
  };

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
              ? "Produtos em produção, projetos próprios e o caminho até aqui. Toque em qualquer um para ver os detalhes."
              : "Products in production, personal projects and the road here. Tap any of them for the details."}
          </p>
        </div>

        {/* A grade nunca sai de cena. Antes ela era trocada pelo painel
            de detalhe, o que tirava o contexto de quem estava
            comparando projetos e ainda desmontava a lista inteira a
            cada abertura. Agora o card escolhido ocupa a largura toda
            e se abre ali mesmo; os outros continuam em volta. */}
        <ul className="pgrid" ref={gridDestaques}>
          {destaques.map((p, i) => celula(p, i, "destaque"))}
        </ul>

        <div className="pgrid__divisor">
          <span>{pt ? "Formação e projetos anteriores" : "Training and earlier projects"}</span>
        </div>

        <ul className="pgrid pgrid--secundaria" ref={gridOutros}>
          {outros.map((p, i) => celula(p, i, "outro"))}
        </ul>

      </div>
    </section>
  );
};

export default SectionProjects;
