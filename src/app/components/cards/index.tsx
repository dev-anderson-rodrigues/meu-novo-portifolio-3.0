import React, { ReactNode } from "react";

const ContainerCard = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="rounded-lg bg-gradient-to-t from-black opacity-90 w-56 max-h-full flex flex-col gap-2 cards m-4 p-2">
    //   {children}
    // </div>
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
