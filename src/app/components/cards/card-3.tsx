import React from "react";
import ContainerCard from ".";
import Image from "next/image";

const Card3 = () => {
  return (
    <ContainerCard>
      <div className="flex items-center text-center justify-center ml-4 gap-2 mt-16">
        <Image
          src="/assets/images/railway.png"
          alt="tecnology"
          width={150}
          height={90}
          quality={100}
        />
      </div>
      <div className="flex items-center text-center justify-center mt-16 p-4 gap-6">
        <Image
          src="/assets/images/vercel.png"
          alt="tecnology"
          width={150}
          height={50}
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center mt-12 p-6 gap-8 pb-0">
        <Image
          src="/assets/images/netlify.png"
          alt="tecnology"
          width={150}
          height={50}
          quality={100}
        />
      </div>
    </ContainerCard>
  );
};

export default Card3;
