'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; 

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: 'LOREM IPSUM',
      description: 'Consectetur Adipiscing',
      buttonLabel: 'Contact Us',
      imageUrl: '/image.png' 
    },
    {
      id: 2,
      title: 'INNOVATIVE SOLUTIONS',
      description: 'Sed do eiusmod tempor incididunt',
      buttonLabel: 'Get a Quote',
      imageUrl: '/image.png' 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[calc(100vh-100px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Use the Image component */}
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            layout="fill" 
            objectFit="cover" 
            priority={index === 0} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-6">{slide.description}</p>
              <a href="#" className="bg-[#4a6480] hover:bg-[#3b5065] text-white font-bold py-3 px-6 rounded-full">
                {slide.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={handlePrev}
        className="slider-button absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hover:opacity-100"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="slider-button absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hover:opacity-100"
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSlider;
