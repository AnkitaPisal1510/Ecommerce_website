"use client"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    
    

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
      </Carousel>
    );
  }

  const slides = [
    {
      src: "/flip1.webp",
      alt: "Image Description 1",
    },
    {
      src: "/flip2.webp",
      alt: "Image Description 2",
      
    },
    {
      src: "/flip3.webp",
      alt: "Image Description 3",
    },
    {
      src: "/flip4.webp",
      alt: "Image Description 3",
    },
  ];

  return (
    <div className='slider'>
      <ControlledCarousel />
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div>
              <img src={slide.src} alt={slide.alt} width="1600" height="265.39" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
