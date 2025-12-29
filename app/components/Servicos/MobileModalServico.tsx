"use client";

import Image from "next/image";
import { ServicoData } from "./ModalServico";
import ModalBackground from "../ModalBackground";

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
  if (!activeServico) return null;

  return (
    <div
      className={`
        lg:hidden
        absolute inset-0
        z-50
        transition-all duration-500 ease-out
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <ModalBackground
        onClose={onClose}
        className="rounded-[30px]! md:rounded-[56px]! py-8! sm:py-10! md:py-12! px-6! md:px-14!"
      >
        {/* Título centralizado */}
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-4 justify-center">
              <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0 bg-bg-badge rounded-full flex items-center justify-center">
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

            <h2 className="font-josefin text-text-secondary text-xl sm:text-2xl md:text-3xl leading-tight text-center">
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
                      className="text-xs sm:text-sm md:text-base text-text-accent leading-relaxed"
                    >
                      {topico}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ModalBackground>
    </div>
  );
}
