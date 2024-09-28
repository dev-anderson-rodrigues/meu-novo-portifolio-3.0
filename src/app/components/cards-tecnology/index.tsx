import React from "react";
import Image from "next/image"; // Certifique-se de estar importando o Image corretamente se estiver usando o Next.js

type Props = {
  children?: React.ReactNode;
};

const CardsTecnology = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default CardsTecnology;
