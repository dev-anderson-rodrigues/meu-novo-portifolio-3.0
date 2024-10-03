import React, { ReactNode } from "react";
import Slider from "react-slick";
import "./style.css";

const CustomCarousel = ({ children }: { children: ReactNode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar 4 cards por padrão
    slidesToScroll: 1, // Avançar apenas 1 card por vez
    responsive: [
      {
        breakpoint: 1200, // Largura de desktop grande
        settings: {
          slidesToShow: 3, // Mostrar 3 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // Largura de tablets
        settings: {
          slidesToShow: 2, // Mostrar 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Dispositivos móveis maiores
        settings: {
          slidesToShow: 1, // Mostrar 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className=" m-0
    "
    >
      <Slider {...settings} className="max-h- m-0 carousel">
        {children}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
