import { useTheme } from "@/app/contexts";
import React from "react";
import classNames from "classnames";

const CardsProjects = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div
      className={classNames(
        " projects w-56 bg-cover h-52 xl:h-80 mb-4 mr-5 bg-center rounded-3xl z-10 overflow-hidden",
        {
          "bg-[url('/assets/images/Rectangle.png')]": dark,
        }
      )}
    >
      {children}
    </div>
  );
};

export default CardsProjects;
