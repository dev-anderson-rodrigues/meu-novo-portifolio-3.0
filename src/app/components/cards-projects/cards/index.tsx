import React from "react";
import Image from "next/image";
import { useProject } from "@/app/contexts";
import { useMediaQuery } from "react-responsive";

type props = {
  children?: React.ReactNode;
  src: string;
  tecnologies: string;
  title: string;
  description: string;
};
const Cards = ({ src, children, tecnologies, title, description }: props) => {
  const { setSelectedProject } = useProject();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  const handleClick = () => {
    setSelectedProject(title);
  };

  return (
    <div
      onClick={isMobile ? handleClick : undefined}
      className="relative h-full"
    >
      <div className="w-54 border-b-2 border-b-#abb2bf cards">
        <Image
          src={src}
          alt={"Card " + title}
          width={240}
          height={50}
          quality={100}
          className="rounded-tl-2xl rounded-tr-2xl z-0 w-full h-20 xl:h-28"
        />
        <div className="pt-1 max-w-46 text-sm">{tecnologies}</div>
      </div>
      <div className="w-full h-full flex flex-col ">
        <div>
          <div className="h-10 font-semibold tracking-wide text-sm flex p-2 pt-1 pb-0 flex-wrap justify-center  items-center">
            {title}
          </div>
        </div>
        <div>
          <p className="h-16 p-2 pt-0 flex items-center xl:mt-2 flex-wrap justify-center">
            {description}
          </p>
        </div>

        <div>{children}</div>
      </div>
      <div
        onClick={handleClick}
        className="hidden xl:block absolute bottom-4 w-full items-center justify-center"
      >
        <button className="p-2 w-24 rounded btn-card-projects">Ver Mais</button>
      </div>
    </div>
  );
};

export default Cards;
