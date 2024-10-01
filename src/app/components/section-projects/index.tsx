import React from "react";
import CardsProjects from "../cards-projects";
import CustomCarousel from "../carrousel";

const SectionProjects = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center pt-16 opacity-90 bg-cover bg-center bg-no-repeat"
      id="projects"
    >
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-4 w-full h-screen xl:max-w-screen-xl">
        <div className="w-full h-1/5 items-center flex justify-center text-3xl text-center ">
          <h3 className="text-4xl">Projetos</h3>
        </div>
        <div className="h-auto flex gap-6 items-center justify-center w-full slide">
          <CustomCarousel>
            <div className="mx-4">
              <CardsProjects />
              <CardsProjects />
            </div>
            <div className="mx-4">
              <CardsProjects />
              <CardsProjects />
            </div>
            <div className="mx-4">
              <CardsProjects />
              <CardsProjects />
            </div>
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
