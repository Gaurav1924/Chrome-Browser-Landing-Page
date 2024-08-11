"use client"
import React, { useRef, useEffect } from 'react';

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollTop = window.scrollY;
        const sliderHeight = sliderRef.current.offsetHeight;
        const scrollThreshold = sliderHeight * 0.5; // Start auto-scrolling when reaching 50% of the slider height

        if (scrollTop > scrollThreshold) {
          sliderRef.current.scrollBy({
            left: 300, // Adjust this value to control scroll amount
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="flex overflow-x-auto snap-x snap-mandatory"
    >
      {images.map((src, index) => (
        <div key={index} className="flex-shrink-0 snap-center">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-[450px] h-[600px] border border-gray-300 rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
