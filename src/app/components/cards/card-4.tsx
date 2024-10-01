import React from "react";
import ContainerCard from ".";
import Image from "next/image";

const Card4 = () => {
  return (
    <ContainerCard>
      <div className="flex items-center text-center justify-center ml-4 gap-2 mt-5">
        <Image
          src="/assets/images/git.png"
          alt="tecnology"
          width={90}
          height={90}
          quality={100}
        />
        <Image
          src="/assets/images/github.png"
          alt="tecnology"
          width={80}
          height={100}
          quality={100}
          className="p-2"
        />
      </div>
      <div className="flex items-center text-center justify-center mt-5 p-4 gap-6">
        <Image
          src="/assets/images/eslint.png"
          alt="tecnology"
          width={120}
          height={50}
          quality={100}
        />
        <Image
          src="/assets/images/jest.png"
          alt="tecnology"
          width={110}
          height={120}
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center mt-1 p-6 gap-8 pb-0">
        <Image
          src="/assets/images/insominia.png"
          alt="tecnology"
          width={120}
          height={50}
          quality={100}
        />
        <Image
          src="/assets/images/vscode.png"
          alt="tecnology"
          width={110}
          height={120}
          quality={100}
        />
      </div>
      <div className="flex items-center mt-5 pl-6 justify-center ">
        <Image
          src="/assets/images/materialui.png"
          alt="tecnology"
          width={80}
          height={20}
          quality={100}
        />
      </div>
    </ContainerCard>
  );
};

export default Card4;
