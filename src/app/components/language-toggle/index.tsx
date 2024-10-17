"use client";
import { useLanguage } from "@/app/contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

export const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguage();
  const port = language === "Portuguese";

  console.log("Language:", language); // Debug log

  return (
    <button
      onClick={toggleLanguage}
      className="relative rounded-lg flex items-center"
    >
      <div className="hidden lg:flex">
        {port ? (
          <span className="w-16 pl-0 p-2 flex justify-center items-center text-center text-2xl md:text-sm language">
            pt-BR
          </span>
        ) : (
          <span className="w-16 pl-0 p-2 flex justify-center items-center text-center text-2xl md:text-sm language">
            en-US
          </span>
        )}
      </div>
      <div className="hidden lg:inline-block icon-lang rounded-lg">
        <FontAwesomeIcon icon={faGlobe} className="language" />
      </div>
    </button>
  );
};
