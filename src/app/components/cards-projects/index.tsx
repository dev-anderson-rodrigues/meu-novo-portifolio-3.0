import { useTheme } from "@/app/contexts";
import React from "react";
import classNames from "classnames";

const CardsProjects = () => {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div
      className={classNames(
        "projects w-56 bg-cover min-h-72 mb-1 mr-2 bg-center rounded-3xl",
        {
          "bg-[url('/assets/images/Rectangle.png')]": dark, // Aplica o background apenas no tema light
        }
      )}
    ></div>
  );
};

export default CardsProjects;
