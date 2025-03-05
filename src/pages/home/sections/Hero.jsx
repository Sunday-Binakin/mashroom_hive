import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mushroom1 from '../../../../public/images/mushroom (1).jpg'
import mushroom2 from '../../../../public/images/mushroom (2).jpg'
import mushroom3 from '../../../../public/images/mushroom (3).jpg'
import mushroom4 from '../../../../public/images/mushroom (4).jpg'
 

const Hero = () => {
  // console.log('Image imports:', { mushroom1, mushroom2, mushroom3, mushroom4 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    focusOnSelect: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: true,
    ariaLive: "polite",
  };

  const slides = [
    {
      image: mushroom1,
      title: "Fresh Organic Mushrooms",
      description: "Locally sourced and naturally grown",
    },
    {
      image: mushroom2,
      title: "Premium Quality",
      description: "Hand-picked for the best flavor",
    },
    {
      image: mushroom3,
      title: "Sustainable Farming",
      description: "Environmentally conscious cultivation",
    },
    {
      image: mushroom4,
      title: "Farm to Table",
      description: "Direct from our farms to your plate",
    },
  ];

  return (
    <div className="relative h-[50vh] md:h-[80vh] overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="relative h-[50vh] md:h-[80vh]"
            role="tabpanel"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#E17100]">{slide.title}</h1>
              <p className="text-lg md:text-xl text-[#E17100]">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
