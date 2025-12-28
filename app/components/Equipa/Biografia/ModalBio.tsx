"use client";

import { useState } from "react";
import ModalBackground from "../../ModalBackground";
import BioItem from "./BioItem";

const bios = [
  {
    name: "Amanda C. Dantas",
    role: "Advogada Especialista",
    text: "Amanda lidera a equipe com mais de 7 anos de experiência em processos de nacionalidade portuguesa. Sua dedicação é o pilar que sustenta o sonho de centenas de famílias brasileiras.",
    avatarSrc: "/Equipa - Amanda C. Dantas.png",
  },
  {
    name: "Thaysa B. Barbosa",
    role: "Consultora Jurídica",
    text: "Thaysa é especialista em análise documental e genealogia. Com um olhar clínico, ela identifica as melhores vias para a obtenção da cidadania, garantindo segurança em cada etapa.",
    avatarSrc: "/Equipa - Thaysa B. Barbosa.jpg",
  },
  {
    name: "Luciana F. Alvarino",
    role: "Gestão de Processos",
    text: "Luciana coordena o fluxo administrativo e o relacionamento com as conservatórias em Portugal, agilizando os trâmites e mantendo nossos clientes sempre informados.",
    avatarSrc: "/Equipa - Luciana F. Alvarino.jpg",
  },
  {
    name: "Margareth Leith",
    role: "Atendimento ao Cliente",
    text: "Margareth é o primeiro contato de muitos de nossos clientes. Com empatia e clareza, ela orienta sobre os primeiros passos e organiza toda a jornada inicial do processo.",
    avatarSrc: "/Equipa - Margareth Leith.jpg",
  },
];

interface ModalBioProps {
  isActive?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function ModalBio({
  isActive = false,
  onClose,
  isMobile = false,
}: ModalBioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextBio = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % bios.length);
      setIsFading(false);
    }, 300);
  };

  const currentBio = bios[currentIndex];

  return (
    <div className="w-full h-full">
      <ModalBackground>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-btn-close hover:bg-btn-close-hover transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <div
          className={`w-full h-full transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <BioItem {...currentBio} onNext={nextBio} isMobile={isMobile} />
        </div>
      </ModalBackground>
    </div>
  );
}
