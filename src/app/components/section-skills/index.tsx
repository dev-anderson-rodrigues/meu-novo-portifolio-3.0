import React from "react";
// import Image from "next/image";
import CustomCarousel from "../carrousel";
import Card1 from "../cards-skills/card-1";
import Card2 from "../cards-skills/card-2";
import Card3 from "../cards-skills/card-3";
import Card4 from "../cards-skills/card-4";
import classNames from "classnames";
import { useTheme } from "@/app/contexts";

const SectionSkills = () => {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <section
      className={classNames(
        "w-full min-h-screen  items-center flex justify-center pt-16 bg-no-repeat bg-cover bg-center opacity-90",
        {
          "bg-[url('/assets/images/bg-background.png')]": dark,
        }
      )}
      id="skills"
    >
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-4 w-full h-screen xl:max-w-screen-xl">
        <div className="w-full h-1/5 items-center flex justify-center text-3xl text-center">
          <h3>Habilidades</h3>
        </div>
        <div className="h-4/5 flex items-center justify-center w-full slide">
          <CustomCarousel>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
