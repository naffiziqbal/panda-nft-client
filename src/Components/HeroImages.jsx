import React from "react";
import { SwiperSlide } from "swiper/react";

const HeroImages = ({ image }) => {
  const { Himage } = image;
  return <img src={image.image} alt="img"  className="w-96 h-[300px] rounded-lg"/>;
};

export default HeroImages;
