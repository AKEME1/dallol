import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const Hero = () => {
  return (
    <section
      id="Home"
      className="max-w-[1200px] mx-auto h-screen max-lg:mt-24  flex flex-col items-center  lg:flex-row lg:justify-between"
    >
      <div className=" flex flex-col lg:mx-4">
        <div>
          <h1 className="text-center lg:text-start text-4xl lg:text-6xl text-orange-300 mb-3">
            Dallol Tech
          </h1>
        </div>
        <div className=" max-sm:max-w-[516px] max-md:max-w-[696px] lg:max-w-xl max-lg:mx-4 ">
          <h2 className="text-center  lg:text-start   text-2xl lg:text-3xl text-gray-400">
            Empowered By Innovation
          </h2>
          <p className="w-full text-justify">
            Dallol Tech helps our clients by providing enterprise-related
            technologies in various industry sectors. We modernize IT,
            streamline data architecture, and deliver it all securely, scalable,
            and integrated across public, private, and hybrid clouds.
          </p>
        </div>
      </div>
      <div className="xs:w-[360px] md:w-[768px] lg:w-[600px] max-lg:mt-12 lg:mx-4">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={8000} // Change the interval as needed (in milliseconds)
          transitionTime={1000}
        >
          <div className="w-full h-[400px]">
            <img
              className="w-full h-full"
              src="https://www.dalloltech.com/assets/front/img/hero-img.png"
              alt="pic-1"
            />
          </div>
          <div className="w-full h-[400px]">
            <img
              className="w-full h-full"
              src="https://www.dalloltech.com/assets/front/img/tech.jpeg"
              alt="pic-2"
            />
          </div>
          <div className="w-full h-[400px]">
            <img
              className="w-full h-full"
              src="https://www.dalloltech.com/assets/front/img/nlr_traction_plus_10_0.jpg"
              alt="pic-3"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
