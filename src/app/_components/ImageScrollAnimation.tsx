"use client"
import React, { useState, useEffect, useRef } from "react";

interface ParallaxProps {
  images: string[];
}

function ParallaxImage({ images }: ParallaxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const newIndex = Math.floor((scrollY / maxScroll) * images.length);
            setCurrentIndex(newIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [images.length]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}

export default function ImageScrollAnimation() {
  const images = [
    "/chrome-gallery-4.webp",
    "/chrome-gallery-2.webp", 
    "/chrome-gallery-3.webp", 
    "/chrome-gallery-1.webp",
    
  ];

  return (
    <section style={{ height: "300vh" }}>
      <ParallaxImage images={images} />
    </section>
  );
}
