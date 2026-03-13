"use client";

import CardFoto from "./CardFoto";
import IconBadgeEquipa from "./IconBadgeEquipa";

interface EquipaMainPhotoProps {
  isLocked: boolean;
  onModalClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function EquipaMainPhoto({
  isLocked,
  onModalClick,
  onMouseEnter,
  onMouseLeave,
}: EquipaMainPhotoProps) {
  return (
    <div className="relative w-[90%] lg:w-[50%] order-1">
      <CardFoto
        src={`/Equipa - Amanda.jpeg`}
        nome="Amanda C. Dantas"
        bigger
      />

      <div
        className="
          absolute z-50
          bottom-4 md:bottom-8 lg:-bottom-6 xl:-bottom-10
          -right-4 sm:-right-6 md:-right-8 lg:-right-10 xl:-right-10 2xl:-right-14
        "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <IconBadgeEquipa
          icon={isLocked ? "/Icons/Close.svg" : "/Icons/Equipa/Trofeu.png"}
          altText={isLocked ? "Fechar" : "Ícone de Troféu"}
          swapText={"Conheça\nAmanda"}
          onClick={onModalClick}
          isActive={isLocked}
        />
      </div>
    </div>
  );
}
