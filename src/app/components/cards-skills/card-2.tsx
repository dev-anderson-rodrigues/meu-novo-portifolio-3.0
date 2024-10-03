import React from "react";
import Image from "next/image";
import ContainerCard from ".";

const Card2 = () => {
  return (
    <ContainerCard>
      <div className="flex items-center text-center justify-center ml-4 gap-2 mt-5">
        <Image
          src="/assets/images/node.png"
          alt="tecnology"
          width={90}
          height={90}
          quality={100}
        />
        <Image
          src="/assets/images/express.png"
          alt="tecnology"
          width={135}
          height={100}
          quality={100}
          className="p-2"
        />
      </div>
      <div className="flex items-center text-center justify-center mt-5 p-4 gap-6">
        <Image
          src="/assets/images/swagger.png"
          alt="tecnology"
          width={120}
          height={50}
          quality={100}
        />
        <Image
          src="/assets/images/mysql.png"
          alt="tecnology"
          width={110}
          height={120}
          quality={100}
        />
      </div>
      <div className="flex items-center justify-center mt-5 p-6 gap-8 pb-0">
        <Image
          src="/assets/images/postgres.png"
          alt="tecnology"
          width={120}
          height={50}
          quality={100}
        />
        <Image
          src="/assets/images/mongo.png"
          alt="tecnology"
          width={110}
          height={120}
          quality={100}
        />
      </div>
      <div className="flex items-center mt-5 pl-6 justify-center ">
        <Image
          src="/assets/images/nest.png"
          alt="tecnology"
          width={120}
          height={20}
          quality={100}
          className="mt-6"
        />
      </div>
    </ContainerCard>
  );
};

export default Card2;