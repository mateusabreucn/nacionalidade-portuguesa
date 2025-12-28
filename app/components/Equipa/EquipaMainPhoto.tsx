"use client";

import { NomeEquipa } from "../../enums/NomeEquipa";
import CardFoto from "./CardFoto";
import IconBadgeEquipa from "./IconBadgeEquipa";

interface EquipaMainPhotoProps {
  activeModal: "feedback" | "bio" | null;
  setActiveModal: (modal: "feedback" | "bio" | null) => void;
  handleClose: () => void;
}

export default function EquipaMainPhoto({
  activeModal,
  setActiveModal,
  handleClose,
}: EquipaMainPhotoProps) {
  return (
    <div className="relative w-[90%] lg:w-[50%] order-1">
      <CardFoto
        src={`/Equipa - ${NomeEquipa.AmandaCDantas}.png`}
        nome={NomeEquipa.AmandaCDantas}
        bigger
      />

      {/* IconBadge: Troféu / Sobre Nós / Fechar */}
      <div className="absolute bottom-4 md:bottom-8 lg:-bottom-6 xl:-bottom-10 -right-4 sm:-right-6 md:-right-8 lg:-right-10 xl:-right-16 z-50">
        <IconBadgeEquipa
          icon={
            activeModal === "bio"
              ? "/Icons/Close.svg"
              : "/Icons/Equipa/Trofeu.svg"
          }
          altText={activeModal === "bio" ? "Fechar" : "Ícone de Troféu"}
          swapText="Sobre nós"
          onClick={() =>
            activeModal === "bio" ? handleClose() : setActiveModal("bio")
          }
          isActive={activeModal === "bio"}
          size="w-14 sm:w-24 xl:w-32 2xl:w-36"
        />
      </div>
    </div>
  );
}
