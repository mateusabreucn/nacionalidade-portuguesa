"use client";

import Image from "next/image";
import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";

interface EquipaCentralContentProps {
  activeModal: "feedback" | "bio" | null;
  onModalClick: () => void;
  onModalMouseEnter: () => void;
  onModalMouseLeave: () => void;
  handleClose: () => void;
}

export default function EquipaCentralContent({
  activeModal,
  onModalClick,
  onModalMouseEnter,
  onModalMouseLeave,
  handleClose,
}: EquipaCentralContentProps) {
  const showModal = !!activeModal;

  return (
    <div className="order-3 lg:order-2 w-full max-w-[900px] 2xl:max-w-[1100px] 3xl:max-w-[2000px] flex flex-col items-center">
      {/* Container Relativo para o Modal */}
      <div className="relative aspect-13/4 sm:aspect-9/4 flex flex-col items-center justify-center w-full">
        {/* Background Decorativo (Ellipse) - Some quando modal abre */}

        <div className="absolute inset-0 w-[96%] place-self-end h-full transition-opacity duration-500">
          <Image
            src="/Icons/Ellipse.svg"
            fill
            alt="Fundo decorativo"
            className="object-contain"
            priority
          />
        </div>

        {/* Frase Institucional - Some quando modal abre */}
        <div
          className={`relative px-[11%] pb-[3%] w-[96%] place-self-end text-start h-full flex items-center justify-center transition-opacity duration-500 ${
            showModal ? "pointer-events-none" : ""
          }`}
        >
          <p className="font-josefin text-[0.7rem] sm:text-xl md:text-2xl xl:text-[2rem] 2xl:text-4xl 3xl:text-5xl text-center lg:text-left leading-tight md:leading-snug">
            Há mais de sete anos, ajudamos brasileiros a transformarem o sonho
            da cidadania portuguesa em realidade.
          </p>
        </div>

        {/* MODAIS DESKTOP - Posicionamento: inicia na linha da foto, termina na metade do badge */}
        <div
          className={`
            absolute hidden lg:flex inset-y-4
            transition-all duration-500 ease-in-out z-60
            ${
              showModal
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
          onMouseEnter={onModalMouseEnter}
          onMouseLeave={onModalMouseLeave}
        >
          {activeModal === "feedback" && (
            <ModalFeedback isActive onClose={handleClose} />
          )}
          {activeModal === "bio" && <ModalBio isActive onClose={handleClose} />}
        </div>
      </div>

      {/* Botão de Depoimentos */}
      <button
        onClick={onModalClick}
        className="
          cursor-pointer
          mt-4 rounded-xl
          bg-bg-badge
          text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl
          font-family-josefin
          py-1 sm:py-1.5 md:py-2 lg:py-3 xl:py-4 2xl:py-6
          px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32
          hover:brightness-90 transition-all
          z-10"
      >
        Depoimentos
      </button>
    </div>
  );
}
