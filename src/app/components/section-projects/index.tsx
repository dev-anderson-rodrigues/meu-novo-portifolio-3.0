import React from "react";
import CardsProjects from "../cards-projects";
import CustomCarousel from "../carrousel";
import Cards from "../cards-projects/cards";
import ContentProject from "./content-project";
import { useProject } from "@/app/contexts";

const SectionProjects = () => {
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
            Projetos
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
                    title="W3 ERP - Gestão Empresarial"
                    description="Sistema Integrado de Gestão Empresarial"
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/portifolio3.0.png"
                    tecnologies="NEXT, TAILWIND, JAVASCRIPT"
                    title="Portifólio 3.0"
                    description="Desenvolvido em Next js e resposividade com Tailwind"
                  />
                </CardsProjects>
              </div>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/Img_LinkNaBio.png"
                    tecnologies="HTML, CSS, JAVASCRIPT"
                    title="LINK NA BIO"
                    description="Repositório de links para redes socias"
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/metavagas1.jpeg"
                    tecnologies="REACT, AXIOS, REACT ROUTER"
                    title="Metavagas – Projeto Fullstack"
                    description="Inspirado no Linkedin"
                  />
                </CardsProjects>
              </div>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NODE.JS, EXPRESS, JWT"
                    title="Culture Power API"
                    description="O Culture Power é uma API de gamificação."
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NEST, JWT, JEST, TYPESCRIPT"
                    title="API - Metavagas"
                    description="API para a plataforma de vagas"
                  />
                </CardsProjects>
              </div>
              <div className="mx-4">
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NEST, MULTER, JEST"
                    title="API - Pet & Events Management"
                    description="Pet Events é uma API desenvolvida em Nest js"
                  />
                </CardsProjects>
                <CardsProjects>
                  <Cards
                    src="/assets/images/api.webp"
                    tecnologies="NEST, TYPESCRIPT, JEST"
                    title="API - Customers Management"
                    description="Customers é uma API desenvolvida em Nest js"
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
