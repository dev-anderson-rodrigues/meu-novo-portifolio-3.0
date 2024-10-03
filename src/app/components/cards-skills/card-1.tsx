import React from "react";
import Image from "next/image";
import ContainerCard from "./index";

function Card1() {
  return (
    <ContainerCard>
      <div className="flex items-center ml-6 gap-2 pt-2">
        <Image
          src="/assets/images/html.png"
          alt="tecnology"
          width={90}
          height={90}
          quality={100}
        />
        <Image
          src="/assets/images/css.png"
          alt="tecnology"
          width={135}
          height={100}
          quality={100}
        />
      </div>
      <div className="flex items-center p-4 gap-6">
        <Image
          src="/assets/images/vite.png"
          alt="tecnology"
          width={120}
          height={50}
          quality={100}
        />
        <Image
          src="/assets/images/ts.png"
          alt="tecnology"
          width={110}
          height={120}
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center p-4 gap-2 pb-0">
        <Image
          src="/assets/images/tailwindcss.png"
          alt="tecnology"
          width={120}
          height={50}
          quality={100}
        />
        <Image
          src="/assets/images/axios.png"
          alt="tecnology"
          width={110}
          height={120}
          quality={100}
        />
      </div>
      <div className="flex items-center pl-6 justify-center mt-4">
        <Image
          src="/assets/images/next.png"
          alt="tecnology"
          width={120}
          height={20}
          quality={100}
          className="mt-6"
        />
        <Image
          src="/assets/images/react.png"
          alt="tecnology"
          width={80}
          height={120}
          quality={100}
        />
      </div>
    </ContainerCard>
  );
}

export default Card1;
