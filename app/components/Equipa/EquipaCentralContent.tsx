"use client";

import Image from "next/image";
import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";

interface EquipaCentralContentProps {
  activeModal: "feedback" | "bio" | null;
  setActiveModal: (modal: "feedback" | "bio" | null) => void;
  handleClose: () => void;
  showModal: boolean;
}

export default function EquipaCentralContent({
  activeModal,
  setActiveModal,
  handleClose,
  showModal,
}: EquipaCentralContentProps) {
  return (
    <div className="order-3 lg:order-2 w-full max-w-[900px] flex flex-col items-center">
      {/* Container Relativo para o Modal crescer e cobrir o botão abaixo */}
      <div className="relative aspect-13/4 sm:aspect-9/4 flex flex-col items-center justify-center w-full">
        {/* Background Decorativo (Ellipse) - Some quando modal abre */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            showModal ? "opacity-0" : "opacity-100"
          }`}
        >
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
          className={`relative px-[11%] pb-[3%] text-start h-full flex items-center justify-center transition-opacity duration-500 ${
            showModal ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <p className="font-josefin text-[0.7rem] sm:text-xl md:text-2xl xl:text-[2rem] 2xl:text-4xl text-center lg:text-left leading-tight md:leading-snug">
            Há mais de sete anos, ajudamos brasileiros a transformarem o sonho
            da cidadania portuguesa em realidade.
          </p>
        </div>

        {/* MODAIS DESKTOP: Posicionado absolutamente para ser maior e cobrir o botão */}
        <div
          className={`
            absolute
            -inset-x-8 -top-8 -bottom-32
            hidden lg:block
            transition-all duration-500 ease-in-out
            z-40
            ${
              showModal
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
          `}
        >
          {activeModal === "feedback" && (
            <ModalFeedback isActive onClose={handleClose} />
          )}
          {activeModal === "bio" && <ModalBio isActive onClose={handleClose} />}
        </div>
      </div>

      {/* Botão de Depoimentos - Fica visível apenas quando nenhum modal está aberto */}
      <button
        onClick={() => setActiveModal("feedback")}
        className="cursor-pointer mt-4 rounded-xl bg-icon-badge md:text-2xl xl:text-3xl font-family-josefin py-2 md:py-3 xl:py-4 px-24 xl:px-32 hover:brightness-90 transition-all z-10"
      >
        Depoimentos
      </button>
    </div>
  );
}
