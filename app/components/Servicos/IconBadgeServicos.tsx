import Image from "next/image";

interface IconBadgeServicosProps {
  icon: string;
  altText: string;
  titulo?: string;
  onClick?: () => void;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function IconBadgeServicos({
  icon,
  altText,
  titulo,
  onClick,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}: IconBadgeServicosProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        flex flex-col items-center
        w-full max-w-[200px]
        gap-[clamp(0.25rem,1.5vw,1rem)]
        cursor-pointer
        transition-all duration-500
        ${isActive ? "rotate-180" : "hover:scale-110"}
      `}
    >
      <div
        className="
          relative
          flex items-center justify-center
          w-[clamp(2.5rem,10vw,12rem)]
          aspect-square
          bg-bg-badge rounded-full
          shrink-0 z-10
        "
      >
        <div className="relative aspect-square w-3/5 sm:w-3/4 z-30">
          <Image src={icon} alt={altText} fill sizes="12rem" priority className="object-contain" />
        </div>
      </div>

      {titulo && (
        <h3
          className={`
            text-center font-medium
            text-[clamp(0.6rem,2vw,1.5rem)]
            ${isActive ? "rotate-180" : ""}
          `}
        >
          {titulo}
        </h3>
      )}
    </div>
  );
}
