import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../assets/logo.jpg";
const PhotoCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="flex flex-row justify-center items-center border-2 border-violet-500 bg-gray-700">
        <Carousel
          responsive={responsive}
          className="w-[1500px] h-[550px] flex flex-row items-center  px-10"
          arrows={true}
          showDots={true}
          transitionDuration={100}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PhotoCarousel;
