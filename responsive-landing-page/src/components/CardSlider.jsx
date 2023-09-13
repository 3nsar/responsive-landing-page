import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards'; // Import the Card component
 // Import the CSS file for CardSlider

const CardSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Adjust the number of slides to show
    slidesToScroll: 2, // Adjust the number of slides to scroll
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-container">
        <Slider {...sliderSettings}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          {/* Add more Card components as needed */}
        </Slider>
    </div>

  );
};

export default CardSlider;
