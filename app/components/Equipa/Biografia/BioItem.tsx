import Image from "next/image";

interface BioItemProps {
  avatarSrc: string;
  name: string;
  role: string;
  text: string;
  isMobile: boolean;
  onNext: () => void;
}

export default function BioItem({
  avatarSrc,
  name,
  role,
  text,
  isMobile,
  onNext,
}: BioItemProps) {
  return (
    <div className="flex flex-col gap-2 lg:gap-3 w-full h-full">
      {/* Header com Avatar e Info */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Avatar - maior e sem cortar */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 shrink-0 bg-bg-badge rounded-full overflow-hidden">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <h4 className="font-josefin text-sm sm:text-lg lg:text-xl xl:text-2xl text-text-accent font-bold">
              {name}
            </h4>
          </div>
          <p className="font-josefin text-xs sm:text-sm lg:text-base text-text-muted">
            {role}
          </p>
        </div>
      </div>

      {/* Corpo: Texto + Seta */}
      <div className="flex items-center gap-3 flex-1 min-h-0">
        <div className="flex-1 overflow-y-auto scrollbar-auto pr-2 max-h-full">
          {text.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-xs sm:text-sm lg:text-sm xl:text-base text-text-accent leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {!isMobile && (
          <button
            onClick={onNext}
            className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
            aria-label="Próxima bio"
          >
            <Image
              src="/Icons/Feedback/ArrowRight.svg"
              alt="Próximo"
              width={60}
              height={60}
              className="lg:w-16 lg:h-16 xl:w-20 xl:h-20"
            />
          </button>
        )}
      </div>

      {isMobile && (
        <button
          onClick={onNext}
          className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer ml-auto"
          aria-label="Próxima bio"
        >
          <Image
            src="/Icons/Feedback/ArrowRight.svg"
            alt="Próximo"
            width={32}
            height={32}
            className="w-10 h-10 sm:w-16 sm:h-16"
          />
        </button>
      )}
    </div>
  );
}
