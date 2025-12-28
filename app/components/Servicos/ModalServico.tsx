"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import ModalBackground from "../ModalBackground";

export interface ServicoData {
  id: string;
  titulo: string;
  icon: string;
  altText: string;
  topicos: string[];
}

interface ModalServicoProps {
  servico: ServicoData;
  position: "top" | "bottom";
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ModalServico({
  servico,
  position,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}: ModalServicoProps) {
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  // Reset swipe state quando o modal abre/fecha
  useEffect(() => {
    if (isActive) {
      setSwipeOffset(0);
      setIsClosing(false);
    }
  }, [isActive]);

  // Posiciona o modal no centro entre as duas linhas de ícones (apenas lg+)
  const positionClasses =
    position === "bottom" ? "top-[45%]" : "top-[55%] -translate-y-full";

  // Conteúdo do modal (compartilhado entre as duas versões)
  const modalContent = (
    <div className="flex flex-col gap-4 w-full">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 bg-bg-badge rounded-full flex items-center justify-center">
          <div className="relative w-3/4 h-3/4">
            <Image
              src={servico.icon}
              alt={servico.altText}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="font-josefin text-xl md:text-2xl lg:text-3xl text-text-accent font-medium">
          {servico.titulo}
        </h3>
      </div>

      {/* Body: Lista de tópicos */}
      <div className="flex flex-col gap-2 pl-2">
        <ul className="list-disc list-inside space-y-1 md:space-y-2">
          {servico.topicos.map((topico, index) => (
            <li
              key={index}
              className="text-sm md:text-base lg:text-lg text-text-accent leading-relaxed"
            >
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Modal para telas grandes (lg+) - comportamento original */}
      <div
        className={`
          hidden lg:block
          absolute left-1/2 -translate-x-1/2
          ${positionClasses}
          w-full max-w-[900px]
          z-30
          transition-all duration-500 ease-in-out
          ${
            isActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ModalBackground className="p-6! md:p-8!">
          {modalContent}
        </ModalBackground>
      </div>
    </>
  );
}
