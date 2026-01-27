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
      }, 2000);
    } else if (slideIndex === 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
      }, 2000);
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
    text-[8px] sm:text-sm lg:text-base
    xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl
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
          w-14 sm:w-24 xl:w-32 2xl:w-40 3xl:w-48 4xl:w-56
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
