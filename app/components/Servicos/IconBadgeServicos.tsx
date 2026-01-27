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
        gap-2 sm:gap-4
        cursor-pointer
        transition-all duration-500
        ${isActive ? "rotate-180" : "hover:scale-110"}
      `}
    >
      <div
        className="
          relative
          flex items-center justify-center
          w-14 sm:w-24 lg:w-24 xl:w-32 2xl:w-40 3xl:w-44 4xl:w-48
          aspect-square
          bg-bg-badge rounded-full
          shrink-0 z-10
        "
      >
        <div className="relative aspect-square w-3/4 z-30">
          <Image src={icon} alt={altText} fill className="object-contain" />
        </div>
      </div>

      {titulo && (
        <h3
          className={`
            text-center font-medium
            text-xs sm:text-lg lg:text-xl xl:text-2xl
            ${isActive ? "rotate-180" : ""}
          `}
        >
          {titulo}
        </h3>
      )}
    </div>
  );
}
