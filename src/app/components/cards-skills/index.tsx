import React, { ReactNode } from "react";

const ContainerCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="
    w-60
    bg-cover 
    bg-center 
    bg-no-repeat 
    rounded-t-lg 
    rounded-b-2xl
    pb-5 
    pt-5 cards"
      style={{ backgroundImage: "url('/assets/images/Rectangle.png')" }}
    >
      {children}
    </div>
  );
};

export default ContainerCard;
