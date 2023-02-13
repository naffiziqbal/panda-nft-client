import React from "react";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import HeroImages from "../HeroImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  // const url = 'http://localhost:5000/products'
  const products = useData("http://localhost:5000/products");
  console.log(";,", products);

  return (
    <div>
      <div className="flex">
        <h1>Discover a New Era of Crypto Currency</h1>
        <div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Link>Get Started</Link>
        </div>
      </div>

      <Swiper
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {products.map((image) => (
          <SwiperSlide>
            <HeroImages key={image._id} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Hero;
