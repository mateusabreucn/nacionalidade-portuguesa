"use client";

import Image from "next/image";
import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";
import EquipaDesktopModal from "./EquipaDesktopModal";

interface EquipaCentralContentProps {
  activeModal: "feedback" | "bio" | null;
  onModalMouseEnter: () => void;
  onModalMouseLeave: () => void;
  handleClose: () => void;
}

export default function EquipaCentralContent({
  activeModal,
  onModalMouseEnter,
  onModalMouseLeave,
  handleClose,
}: EquipaCentralContentProps) {
  const showModal = !!activeModal;

  return (
    <div
      className="
        relative
        order-3 lg:order-2
        flex flex-col items-center
        w-full
        lg:justify-center
        max-w-[900px]
        2xl:max-w-[1200px]
        3xl:max-w-[2000px]
      "
    >
      <div className="relative @container flex flex-col items-center justify-center w-[96%] aspect-1114/359">
        <div className="absolute inset-0 w-full h-full transition-opacity duration-500">
          <Image
            src="/Icons/Ellipse.svg"
            fill
            alt="Fundo decorativo"
            className="object-contain"
            priority
          />
        </div>

        <div
          className={`
            relative
            flex items-center justify-center
            w-[88%] h-full
            px-[4%] pb-[2%]
            transition-opacity duration-500
            ${showModal ? "pointer-events-none" : ""}
          `}
        >
          <p
            className="
              font-josefin
              text-[clamp(0.65rem,4cqw,4rem)]
              text-center lg:text-left
              leading-tight sm:leading-snug
              text-text-secondary
            "
          >
            Há mais de sete anos, ajudamos brasileiros a transformarem o sonho
            da cidadania portuguesa em realidade.
          </p>
        </div>
      </div>

      <EquipaDesktopModal
        activeModal={activeModal}
        handleClose={handleClose}
        onMouseEnter={onModalMouseEnter}
        onMouseLeave={onModalMouseLeave}
      />
    </div>
  );
}
