"use client";

import Image from "next/image";
import Link from "next/link";
import ModalBackground from "../ModalBackground";

export interface ServicoData {
  id: string;
  titulo: string;
  icon: string;
  altText: string;
  descricao?: string;
  topicos: string[];
  link?: {
    href: string;
    label: string;
  };
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
        w-full max-w-[clamp(900px,60vw,1400px)]
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
                w-[clamp(3rem,4vw,6rem)] h-[clamp(3rem,4vw,6rem)]
                bg-bg-badge rounded-full
              "
            >
              <div className="relative w-3/5 h-3/5">
                <Image
                  src={servico.icon}
                  alt={servico.altText}
                  fill
                  sizes="6rem"
                  className="object-contain"
                />
              </div>
            </div>
            <h3
              className="
                font-josefin font-medium
                text-[clamp(1.25rem,2.5vw,3rem)]
                text-text-accent
              "
            >
              {servico.titulo}
            </h3>
          </div>

          <div className="flex flex-col gap-2 pl-2">
            {servico.descricao && (
              <p className="text-[clamp(0.875rem,1.2vw,1.5rem)] text-text-accent leading-relaxed mb-1 whitespace-pre-line">
                {servico.descricao}
              </p>
            )}
            <ul className="list-disc list-inside space-y-1 md:space-y-2">
              {servico.topicos.map((topico, index) => (
                <li
                  key={index}
                  className="text-[clamp(0.875rem,1.2vw,1.5rem)] text-text-accent leading-relaxed"
                >
                  {topico}
                </li>
              ))}
            </ul>

            {servico.link && (
              <div className="flex justify-center mt-4">
                <Link
                  href={servico.link.href}
                  className="
                    inline-block
                    py-2 px-6
                    bg-btn-accent rounded-lg
                    font-medium
                    text-[clamp(0.75rem,1vw,1.125rem)]
                    text-white text-center
                    hover:brightness-110 hover:scale-105
                    transition-all duration-300
                  "
                >
                  {servico.link.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </ModalBackground>
    </div>
  );
}
