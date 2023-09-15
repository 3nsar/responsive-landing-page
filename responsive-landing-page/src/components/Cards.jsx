import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import robot from '../assets/robot1.jpg';


const Cards = () => {
  return (

    <div className='card'>

      <img src={robot} alt="Image Alt Text" />
      <p>This is the content of the card.</p>
      
    </div>
    
  );
};

export default Cards