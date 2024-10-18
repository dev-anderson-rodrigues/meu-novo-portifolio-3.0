import React from "react";
import CardsProjects from "../cards-projects";
import CustomCarousel from "../carrousel";
import Cards from "../cards-projects/cards";
import ContentProject from "./content-project";
import { useLanguage, useProject } from "@/app/contexts";

const SectionProjects = () => {
  const { language } = useLanguage();
  const { project } = useProject();
  const currentProject = project.length > 0;

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center pt-4 opacity-90 bg-cover bg-center bg-no-repeat"
      id="projects"
    >
      <div className="w-full pt-12 ">
        <div className="flex w-full h-full items-center justify-center text-3xl text-center m-0 xl:pt-5">
          <h3 className="text-4xl h-full justify-center items-center flex m-0 pt-4 font-semibold">
            {language === "Portuguese" ? "Projetos" : "Projects"}
          </h3>
        </div>
        {currentProject ? (
          <div className="w-full h-full xl:h-4/5 max-w-7xl m-auto flex justify-center containerProjects xl:pt-10">
            <ContentProject />
          </div>
        ) : (
          <div className="flex gap-6 items-center justify-center w-full slide containerProjects">
            <CustomCarousel>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/w3-erp.png"
                    tecnologies="REACT, MATERIAL UI, AXIOS"
                    title={
                      language === "Portuguese"
                        ? "W3 ERP - Gestão Empresarial"
                        : "W3 ERP - Business Management"
                    }
                    description={
                      language === "Portuguese"
                        ? "Sistema Integrado de Gestão Empresarial"
                        : "Integrated Business Management System"
                    }
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/portifolio3.0.png"
                    tecnologies="NEXT, TAILWIND, JAVASCRIPT"
                    title={
                      language === "Portuguese"
                        ? "Portifólio 3.0"
                        : "Portfolio 3.0"
                    }
                    description={
                      language === "Portuguese"
                        ? "Desenvolvido em Next js e resposividade com Tailwind"
                        : "Developed in Next js and responsive with Tailwind"
                    }
                  />
                </CardsProjects>
              </div>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/Img_LinkNaBio.png"
                    tecnologies="HTML, CSS, JAVASCRIPT"
                    title={
                      language === "Portuguese" ? "LINK NA BIO" : "LINK IN BIO"
                    }
                    description={
                      language === "Portuguese"
                        ? "Repositório de links para redes socias"
                        : "Repository of links to social networks"
                    }
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/metavagas1.jpeg"
                    tecnologies="REACT, AXIOS, REACT ROUTER"
                    title={
                      language === "Portuguese"
                        ? "Metavagas – Projeto Fullstack"
                        : "Metavagas - Fullstack Project"
                    }
                    description={
                      language === "Portuguese"
                        ? "Inspirado no Linkedin"
                        : "Inspired by Linkedin"
                    }
                  />
                </CardsProjects>
              </div>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NODE.JS, EXPRESS, JWT"
                    title="Culture Power API"
                    description={
                      language === "Portuguese"
                        ? "O Culture Power é uma API de gamificação."
                        : "Culture Power is a gamification API."
                    }
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NEST, JWT, JEST, TYPESCRIPT"
                    title="API - Metavagas"
                    description={
                      language === "Portuguese"
                        ? "API para a plataforma de vagas"
                        : "API for the vacancies platform"
                    }
                  />
                </CardsProjects>
              </div>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NEST, MULTER, JEST"
                    title="API - Pet & Events Management"
                    description={
                      language === "Portuguese"
                        ? "Pet Events é uma API desenvolvida em Nest js"
                        : "Pet Events is an API developed in Nest js"
                    }
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NEST, TYPESCRIPT, JEST"
                    title="API - Customers Management"
                    description={
                      language === "Portuguese"
                        ? "Customers é uma API desenvolvida em Nest js"
                        : "Customers is an API developed in Nest js"
                    }
                  />
                </CardsProjects>
              </div>
            </CustomCarousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionProjects;
