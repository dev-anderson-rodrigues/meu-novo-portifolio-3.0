import React from "react";
import CustomCarousel from "../carrousel";
import Card1 from "../cards-skills/card-1";
import Card2 from "../cards-skills/card-2";
import Card3 from "../cards-skills/card-3";
import Card4 from "../cards-skills/card-4";
import classNames from "classnames";
import { useLanguage, useTheme } from "@/app/contexts";

const SectionSkills = () => {
  const { language } = useLanguage();
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
      <div className="w-full h-screen min-h-screen flex flex-col justify-center items-center">
        <div className="pt-4 w-full h-17 items-end flex justify-center text-4xl text-end font-semibold">
          <h3>{language === "Portuguese" ? "Habilidades" : "Skills"}</h3>
        </div>
        <div className="h-5/6 -mt-4 flex items-center justify-center w-full slide">
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
