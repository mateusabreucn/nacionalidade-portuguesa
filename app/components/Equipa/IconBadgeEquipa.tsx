"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface IconBadgeEquipaProps {
  icon: string;
  altText: string;
  swapText?: string;
  size?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function IconBadgeEquipa({
  icon,
  altText,
  swapText,
  size,
  onClick,
  isActive = false,
}: IconBadgeEquipaProps) {
  // 0: Texto (Esquerda), 1: Ícone (Centro), 2: Texto (Direita)
  const [slideIndex, setSlideIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Lógica de alternância (Swipe Infinito: Direita -> Esquerda)
  useEffect(() => {
    if (!swapText || isActive) {
      setSlideIndex(1);
      return;
    }

    let timeout: NodeJS.Timeout;

    if (slideIndex === 1) {
      // 1 -> 2: Ícone -> Texto (Direita)
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(2);
      }, 2000);
    } else if (slideIndex === 2) {
      // 2 -> 0: Texto (Direita) -> Texto (Esquerda) [Reset Silencioso]
      // Aguarda o tempo de leitura (2s) antes de resetar
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
      }, 2000);
    } else if (slideIndex === 0) {
      // 0 -> 1: Texto (Esquerda) -> Ícone
      // Pequeno delay para garantir que o reset (2->0) foi renderizado sem transição
      timeout = setTimeout(() => {
        setIsTransitioning(true);
        setSlideIndex(1);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [slideIndex, swapText, isActive]);

  return (
    <div
      onClick={onClick}
      className={`
        flex flex-col items-center cursor-pointer
        w-full max-w-[200px]
        gap-2 sm:gap-4
        transition-all duration-500
        ${isActive ? "rotate-180" : "hover:scale-110"}
      `}
    >
      <div
        className={`
        relative flex items-center justify-center
        bg-bg-badge rounded-full shrink-0
        aspect-square z-10 overflow-hidden shadow-lg
        ${size ? size : "w-14 sm:w-24 lg:w-24 xl:w-36 2xl:w-40 3xl:w-44 4xl:w-48"}
      `}
      >
        {/* Container que desliza Horizontalmente */}
        <div
          className={`
            relative w-full h-full flex flex-row items-center
            ${
              isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }
          `}
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {/* 0: Texto (Esquerda) */}
          <div className="relative w-full h-full shrink-0 flex items-center justify-center p-2">
            <span className="font-josefin font-bold text-text-accent text-center whitespace-break-spaces uppercase text-[8px] sm:text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
              {swapText}
            </span>
          </div>

          {/* 1: Ícone (Centro) */}
          <div className="relative w-full h-full shrink-0 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image src={icon} alt={altText} fill className="object-contain" />
            </div>
          </div>

          {/* 2: Texto (Direita) */}
          <div className="relative w-full h-full shrink-0 flex items-center justify-center p-2">
            <span className="font-josefin font-bold text-text-accent text-center whitespace-break-spaces uppercase text-[8px] sm:text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
              {swapText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
