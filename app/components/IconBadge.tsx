import Image from "next/image";

interface IconBadgeProps {
  icon: string;
  altText: string;
  titulo?: string;
  onClick?: () => void;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function IconBadge({
  icon,
  altText,
  titulo,
  onClick,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}: IconBadgeProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        flex flex-col items-center cursor-pointer
        w-full max-w-[200px] gap-4 z-20
        transition-all duration-500
        ${isActive ? "rotate-180" : "hover:scale-110"}
      `}
    >
      <div
        className="
        relative flex items-center justify-center
        bg-icon-badge rounded-full shrink-0
        aspect-square
        w-24 lg:w-32 xl:w-36
      "
      >
        <div className="relative aspect-square w-3/4">
          <Image src={icon} alt={altText} fill className="object-contain" />
        </div>
      </div>

      {titulo && (
        <h3
          className={`
          text-center font-medium
          text-lg lg:text-xl xl:text-2xl
          ${isActive ? "rotate-180" : ""}
        `}
        >
          {titulo}
        </h3>
      )}
    </div>
  );
}
