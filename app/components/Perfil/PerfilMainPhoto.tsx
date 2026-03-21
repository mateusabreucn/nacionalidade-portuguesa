import CardFotoPerfil from "./CardFoto";
import IconBadgePerfil from "./IconBadgePerfil";

interface PerfilMainPhotoProps {
  isLocked: boolean;
  onModalClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function PerfilMainPhoto({
  isLocked,
  onModalClick,
  onMouseEnter,
  onMouseLeave,
}: PerfilMainPhotoProps) {
  return (
    <div className="relative w-[80%] lg:w-[50%] order-1">
      <CardFotoPerfil />

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
        <IconBadgePerfil
          icon={isLocked ? "/Icons/Close.svg" : "/Icons/Perfil/Trofeu.png"}
          altText={isLocked ? "Fechar" : "Ícone de Troféu"}
          swapText={"Conheça\nAmanda"}
          onClick={onModalClick}
          isActive={isLocked}
        />
      </div>
    </div>
  );
}
