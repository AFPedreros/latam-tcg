"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import React from "react";
import { cn } from "@/utils";

type FloatingCardProps = {
  src: string;
  alt: string;
  className: string;
  delay?: number;
  parallaxIntensity?: number;
};

export const FloatingCard = ({
  src,
  alt,
  className,
  delay = 0,
  parallaxIntensity = 30,
}: FloatingCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) / window.innerWidth;
      const distanceY = (e.clientY - centerY) / window.innerHeight;

      mouseX.set(distanceX * parallaxIntensity);
      mouseY.set(distanceY * parallaxIntensity);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    heroSection.addEventListener("mousemove", handleMouseMove);
    heroSection.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, parallaxIntensity]);

  return (
    <motion.div
      ref={cardRef}
      className={cn("overflow-hidden rounded-md", className)}
      initial={{ opacity: 0, y: 100, rotate: 0 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ x, y }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={320}
        height={447}
        className="h-auto w-full drop-shadow-2xl"
      />
    </motion.div>
  );
};
