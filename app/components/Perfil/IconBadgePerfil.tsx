"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface IconBadgePerfilProps {
  icon: string;
  altText: string;
  swapText?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function IconBadgePerfil({
  icon,
  altText,
  swapText,
  onClick,
  isActive = false,
}: IconBadgePerfilProps) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (!swapText || isActive) {
      setSlideIndex(1);
      return;
    }

    let timeout: NodeJS.Timeout;

    if (slideIndex === 1) {
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(2);
      }, 3000);
    } else if (slideIndex === 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
      }, 3000);
    } else if (slideIndex === 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(1);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [slideIndex, swapText, isActive]);

  const textClasses = `
    font-josefin font-bold
    text-text-accent text-center
    whitespace-break-spaces uppercase
    text-[clamp(0.4rem,14cqw,1.5rem)]
    mb-1
  `;

  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center
        w-full max-w-[clamp(3rem,10vw,12rem)]
        cursor-pointer
        transition-all duration-500
        ${isActive ? "rotate-180" : "hover:scale-110"}
      `}
    >
      <div
        className="
          @container
          relative
          flex items-center justify-center
          w-[clamp(3rem,14vw,8rem)]
          lg:w-[clamp(5rem,8vw,12rem)]
          aspect-square
          bg-bg-badge rounded-full
          shrink-0 overflow-hidden
          shadow-lg z-10
        "
      >
        <div
          className={`
            relative
            flex flex-row items-center
            w-full h-full
            ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}
          `}
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          <div className="relative flex flex-col items-center justify-center w-full h-full shrink-0 p-2">
            <span className={textClasses}>{swapText}</span>
            {swapText && !isActive && (
              <span className="absolute bottom-[clamp(0.3rem,7cqw,2rem)] text-[clamp(0.5rem,15cqw,3rem)] text-text-accent animate-bounce">
                👆
              </span>
            )}
          </div>

          <div className="relative flex items-center justify-center w-full h-full shrink-0">
            <div className="relative w-3/4 h-3/4">
              <Image
                src={icon}
                alt={altText}
                fill
                sizes="(max-width: 1024px) 8rem, 12rem"
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center w-full h-full shrink-0 p-2">
            <span className={textClasses}>{swapText}</span>
            {swapText && !isActive && (
              <span className="absolute bottom-[clamp(0.3rem,7cqw,2rem)] text-[clamp(0.5rem,15cqw,3rem)] text-text-accent animate-bounce">
                👆
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
