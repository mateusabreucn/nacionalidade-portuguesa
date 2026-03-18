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
    <div className="@container flex flex-col w-full h-full">
      <div className="flex items-center gap-[clamp(0.75rem,3cqw,2rem)]">
        <div
          className="
            relative shrink-0
            w-[clamp(3.5rem,9cqw,6rem)] h-[clamp(3.5rem,9cqw,6rem)]
            bg-bg-badge rounded-full
          "
        >
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-contain scale-[1.2] translate-y-1"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 2xl:gap-3">
          <StarsIcon className="w-[clamp(4.5rem,8cqw,7rem)]" />

          <div className="flex items-center gap-2">
            <h4
              className="
                font-josefin font-medium
                text-[clamp(0.875rem,3cqw,1.75rem)]
                text-text-accent
                leading-tight
              "
            >
              {name}, {city}
            </h4>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 min-h-0 pt-[clamp(1rem,3.5cqw,2rem)] relative">
        <div className="flex-1 overflow-y-auto scrollbar-auto pr-2 pb-10 max-h-60 sm:max-h-full">
          {text.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="
                text-[clamp(0.875rem,2cqw,1.5rem)]
                text-text-accent leading-relaxed
                mb-2 last:mb-0
              "
            >
              {paragraph}
            </p>
          ))}
        </div>

        {!isMobile && (
          <button
            onClick={onNext}
            className="shrink-0 cursor-pointer"
            aria-label="Próximo feedback"
          >
            <Image
              src="/Icons/Feedback/ArrowRight.svg"
              alt="Próximo"
              width={60}
              height={60}
              className="w-[clamp(3.5rem,6cqw,4.5rem)] h-[clamp(3.5rem,6cqw,4.5rem)]"
            />
          </button>
        )}
      </div>

      {isMobile && (
        <button
          onClick={onNext}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-bg-primary rounded-full shadow-lg cursor-pointer"
        >
          <Image
            src="/Icons/Feedback/ArrowRight.svg"
            alt="Próximo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </button>
      )}
    </div>
  );
}
