"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface IconBadgeEquipaProps {
  icon: string;
  altText: string;
  swapText?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function IconBadgeEquipa({
  icon,
  altText,
  swapText,
  onClick,
  isActive = false,
}: IconBadgeEquipaProps) {
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
    text-[6px] sm:text-[10px] lg:text-xs
    xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl
  `;

  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center
        w-full max-w-[200px]
        gap-2 sm:gap-4
        cursor-pointer
        transition-all duration-500
        ${isActive ? "rotate-180" : "hover:scale-110"}
      `}
    >
      <div
        className="
          relative
          flex items-center justify-center
          w-10 sm:w-16 xl:w-22 2xl:w-28 3xl:w-34 4xl:w-40
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
          <div className="relative flex items-center justify-center w-full h-full shrink-0 p-2">
            <span className={textClasses}>{swapText}</span>
          </div>

          <div className="relative flex items-center justify-center w-full h-full shrink-0">
            <div className="relative w-3/4 h-3/4">
              <Image src={icon} alt={altText} fill className="object-contain" />
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full h-full shrink-0 p-2">
            <span className={textClasses}>{swapText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
