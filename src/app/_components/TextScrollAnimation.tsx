"use client"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
} from "framer-motion";

import { wrap } from "@motionone/utils";
import Image from "next/image" ;

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 50 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  // Update the position based on scroll velocity
  smoothVelocity.onChange(() => {
    let moveBy = directionFactor.current * baseVelocity * velocityFactor.get();

    if (moveBy !== 0) {
      baseX.set(baseX.get() + moveBy * 0.2); // Reduced multiplier to slow down the movement
    }
  });
  const images = ["/chrome-gallery-1.webp","/chrome-gallery-4.webp","/chrome-gallery-3.webp","/chrome-gallery-2.webp","/chrome-gallery-5.webp"] ;
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span><Image src={images[3]} alt="" /> </span>
        <span><Image src={images[1]} alt="" /></span>
        <span><Image src={images[4]} alt="" /> </span>
        <span><Image src={images[2]} alt="" /> </span>
        <span><Image src={images[0]} alt="" /> </span>
      </motion.div>
    </div>
  );
}

export default function TextScrollAnimation() {
  return (
    <section>
      <ParallaxText baseVelocity={-2}>Framer Motion</ParallaxText>
    </section>
  );
}