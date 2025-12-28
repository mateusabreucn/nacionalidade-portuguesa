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
    <div className="flex flex-col gap-4 w-full h-full justify-center">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-22 xl:h-22 shrink-0 bg-bg-badge rounded-full flex items-center justify-center">
          <div className="w-full h-full">
            <Image
              src={avatarSrc}
              alt={name}
              fill
              className="object-contain rounded-full scale-125"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <h4 className="font-josefin text-lg sm:text-2xl lg:text-xl xl:text-2xl text-text-accent font-bold">
            {name}
          </h4>
          <p className="font-josefin text-sm sm:text-lg text-text-muted">
            {role}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex items-center md:gap-1 xl:gap-4 justify-between min-h-[60px]">
        <div className="flex flex-col gap-2 max-w-full max-h-full overflow-auto custom-scrollbar pr-3">
          {text.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-xs sm:text-sm md:text-base xl:text-lg text-text-accent leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {!isMobile && (
          <button
            onClick={onNext}
            className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer lg:pl-2 xl:pl-4"
          >
            <div className="relative w-16 h-16 md:w-18 md:h-18 xl:w-20 xl:h-20">
              <Image
                src="/Icons/Feedback/ArrowRight.svg"
                alt="Próximo"
                fill
                className="object-contain"
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
