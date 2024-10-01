import React from "react";
// import Image from "next/image";
import CustomCarousel from "../carrousel";

const SectionSkills = () => {
  return (
    <section
      className=" w-full min-h-screen  items-center flex justify-center pt-16 bg-gradient-to-b from-black opacity-90"
      id="skills"
    >
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-4 w-full h-screen xl:max-w-screen-xl">
        <div className="w-full h-1/4 items-center flex justify-center text-3xl text-center">
          <h3>Habilidades</h3>
        </div>
        <div className="h-3/4 flex items-center justify-center w-full slide">
          <CustomCarousel />
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
