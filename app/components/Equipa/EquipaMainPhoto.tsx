import CardFotoEquipa from "./CardFoto";
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
    <div className="relative w-[80%] lg:w-[50%] order-1">
      <CardFotoEquipa />

      <div
        className="
          absolute z-50
          bottom-[clamp(1rem,4vw,2rem)]
          lg:bottom-[clamp(-3rem,-2.5vw,-1.5rem)]
          right-[clamp(-2.5rem,-4vw,-1rem)]
          lg:right-[clamp(-4.5rem,-3.5vw,-2.5rem)]
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
