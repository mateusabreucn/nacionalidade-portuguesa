import Image from "next/image";
import StarsIcon from "../../Icons/Feedback/StarsIcon";

interface FeedbackItemProps {
  avatarSrc: string;
  name: string;
  city: string;
  text: string;
  isMobile: boolean;
  onNext: () => void;
}

export default function FeedbackItem({
  avatarSrc,
  name,
  city,
  text,
  isMobile,
  onNext,
}: FeedbackItemProps) {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2 lg:gap-3 w-full h-full">
      {/* Header com Avatar e Info */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Avatar - maior e sem cortar */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 shrink-0 bg-bg-badge rounded-full">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-contain scale-[1.35] translate-y-1"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {/* Estrelas - usando novo componente */}
          <StarsIcon className="w-12 sm:w-16 md:w-18 lg:w-20 xl:w-24" />

          <div className="flex items-center gap-2">
            <h4 className="font-josefin text-xs sm:text-base lg:text-lg xl:text-xl text-text-accent font-medium">
              {name}, {city}
            </h4>
          </div>
        </div>
      </div>

      {/* Corpo: Texto + Seta */}
      <div className="flex items-center gap-3 flex-1 min-h-0 pt-4 sm:pt-8">
        <div className="flex-1 overflow-y-auto scrollbar-auto pr-2 max-h-full">
          {text.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-xs sm:text-sm lg:text-sm xl:text-base text-text-accent leading-relaxed mb-2 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {!isMobile && (
          <button
            onClick={onNext}
            className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
            aria-label="Próximo feedback"
          >
            <Image
              src="/Icons/Feedback/ArrowRight.svg"
              alt="Próximo"
              width={60}
              height={60}
              className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
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
