import React from "react";
import Slider from "react-slick";
import Card1 from "../cards/card-1";
import Card2 from "../cards/card-2";
import Card3 from "../cards/card-3";
import Card4 from "../cards/card-4";

const CustomCarousel = () => {
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
      className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg max-w-screen-xl m-auto
    "
    >
      <Slider
        {...settings}
        className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg max-w-screen-xl gap-4 h-full p-6"
      >
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </Slider>
    </div>
  );
};

export default CustomCarousel;
