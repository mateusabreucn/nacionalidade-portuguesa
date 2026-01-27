"use client";

import Image from "next/image";
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
  isLocked?: boolean;
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ModalServico({
  servico,
  position,
  isActive = false,
  isLocked = false,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ModalServicoProps) {
  const positionClasses =
    position === "bottom" ? "top-[40%]" : "top-[55%] -translate-y-full";

  return (
    <div
      className={`
        hidden lg:block
        absolute left-1/2 -translate-x-1/2
        ${positionClasses}
        w-full max-w-[900px] 2xl:max-w-[1000px] 4xl:max-w-[1400px]
        z-30
        transition-all duration-500 ease-in-out
        ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ModalBackground onClose={onClose} showCloseButton={isLocked}>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-4">
            <div
              className="
                relative shrink-0
                flex items-center justify-center
                w-12 h-12 md:w-16 md:h-16 2xl:w-18 2xl:h-18 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24
                bg-bg-badge rounded-full
              "
            >
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={servico.icon}
                  alt={servico.altText}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3
              className="
                font-josefin font-medium
                text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-[2.5rem] 4xl:text-5xl
                text-text-accent
              "
            >
              {servico.titulo}
            </h3>
          </div>

          <div className="flex flex-col gap-2 pl-2">
            <ul className="list-disc list-inside space-y-1 md:space-y-2">
              {servico.topicos.map((topico, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base lg:text-lg 2xl:text-xl 4xl:text-2xl text-text-accent leading-relaxed"
                >
                  {topico}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ModalBackground>
    </div>
  );
}
