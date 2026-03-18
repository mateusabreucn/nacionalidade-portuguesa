"use client";

import Image from "next/image";
import Link from "next/link";
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
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <ModalBackground
        onClose={onClose}
        className="rounded-[clamp(1.875rem,4vw,3.5rem)] py-[clamp(1.5rem,3vh,2rem)]! px-[clamp(1.25rem,5vw,3.5rem)]!"
      >
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center justify-start sm:justify-center gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-4 justify-center">
              <div
                className="
                  relative shrink-0
                  flex items-center justify-center
                  w-[clamp(2.5rem,7vw,4rem)] h-[clamp(2.5rem,7vw,4rem)]
                  bg-bg-badge rounded-full
                "
              >
                <div className="relative w-3/5 h-3/5">
                  <Image
                    src={activeServico.icon}
                    alt={activeServico.altText}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <h2
              className="
                font-josefin
                text-[clamp(1.25rem,4vw,1.875rem)]
                text-text-secondary text-left
                leading-tight
              "
            >
              {activeServico.titulo}
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-3">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2 pl-2">
                {activeServico.descricao && (
                  <p className="text-[clamp(0.75rem,2.5vw,1rem)] text-text-accent leading-relaxed mb-1 whitespace-pre-line">
                    {activeServico.descricao}
                  </p>
                )}
                <ul className="list-disc list-inside space-y-1 md:space-y-2">
                  {activeServico.topicos.map((topico, index) => (
                    <li
                      key={index}
                      className="text-[clamp(0.75rem,2.5vw,1rem)] text-text-accent leading-relaxed"
                    >
                      {topico}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {activeServico.link && (
            <div className="flex justify-center mt-[clamp(0.75rem,1vh,1.5rem)] shrink-0">
              <Link
                href={activeServico.link.href}
                className="
                  inline-block
                  py-[clamp(0.25rem,1vh,0.75rem)] px-[clamp(1.5rem,4vw,2rem)]
                  bg-btn-accent rounded-lg
                  font-medium
                  text-[clamp(0.7rem,2vw,1rem)]
                  text-white text-center
                  hover:brightness-110 hover:scale-105
                  transition-all duration-300
                "
              >
                {activeServico.link.label}
              </Link>
            </div>
          )}
        </div>
      </ModalBackground>
    </div>
  );
}
