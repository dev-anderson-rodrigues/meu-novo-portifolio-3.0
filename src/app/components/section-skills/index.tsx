import React from "react";
import SkillsMarquee from "../skills-marquee";
import { useLanguage } from "@/app/contexts";

const SectionSkills = () => {
  const { language } = useLanguage();
  const pt = language === "Portuguese";

  return (
    <section
      className="w-full items-center flex justify-center bg-no-repeat bg-cover bg-center skills-section"
      id="skills"
    >
      <div className="w-full flex flex-col justify-center items-center gap-10 py-16">
        <div className="flex flex-col items-center text-center px-6 gap-3">
          <h3 className="section-title">{pt ? "Habilidades" : "Skills"}</h3>
          <p className="section-lede">
            {pt
              ? "As ferramentas com que eu construo, integro e automatizo no dia a dia."
              : "The tools I build, integrate and automate with every day."}
          </p>
        </div>

        <SkillsMarquee language={language} />
      </div>
    </section>
  );
};

export default SectionSkills;
