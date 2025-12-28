"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ServicoData } from "./ModalServico";

interface MobileModalServicoProps {
  activeServico: ServicoData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileModalServico({
  activeServico,
  isOpen,
  onClose,
}: MobileModalServicoProps) {
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    setSwipeOffset(diff);
  };

  const handleTouchEnd = () => {
    const threshold = 100; // pixels necessários para fechar
    if (Math.abs(swipeOffset) > threshold) {
      // Anima para fora da tela
      setIsClosing(true);
      setSwipeOffset(swipeOffset > 0 ? 500 : -500);
      setTimeout(() => {
        onClose();
        setSwipeOffset(0);
        setIsClosing(false);
      }, 300);
    } else {
      // Volta para posição original
      setSwipeOffset(0);
    }
  };

  if (!activeServico) return null;

  return (
    <div
      className={`
        lg:hidden
        absolute inset-0
        z-50
        transition-all ease-out
        ${
          isClosing
            ? "duration-300"
            : swipeOffset !== 0
            ? "duration-0"
            : "duration-500"
        }
        ${
          isOpen && !isClosing
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      style={{
        transform: `translateX(${swipeOffset}px) ${
          isOpen && !isClosing && swipeOffset === 0
            ? "scale(1)"
            : isClosing
            ? "scale(0.95)"
            : "scale(1)"
        }`,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bg-card-branco rounded-[30px] md:rounded-[56px] h-full w-full flex flex-col py-8 sm:py-10 md:py-12 px-6 md:px-14 relative shadow-sm">
        {/* Botão X para fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#D7CCC8] hover:bg-[#BCAAA4] transition-colors z-10"
          aria-label="Fechar modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#4A3B32]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Indicador de swipe */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#BCAAA4] rounded-full" />

        {/* Título centralizado */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 justify-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 bg-icon-badge rounded-full flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={activeServico.icon}
                  alt={activeServico.altText}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <h2 className="font-josefin text-font-secondary text-xl sm:text-2xl md:text-3xl leading-tight text-center">
            {activeServico.titulo}
          </h2>
        </div>

        {/* Conteúdo com scroll */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-3">
          <div className="flex flex-col gap-4 w-full">
            {/* Body: Lista de tópicos */}
            <div className="flex flex-col gap-2 pl-2">
              <ul className="list-disc list-inside space-y-1 md:space-y-2">
                {activeServico.topicos.map((topico, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm md:text-base text-[#4A3B32] leading-relaxed"
                  >
                    {topico}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
