import Image from "next/image";

interface FeedbackItemProps {
  avatarSrc: string;
  name: string;
  city: string;
  text: string;
  onNext: () => void;
}

export default function FeedbackItem({
  avatarSrc,
  name,
  city,
  text,
  onNext,
}: FeedbackItemProps) {
  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 md:w-22 md:h-22 shrink-0 bg-[#D9D9D9] rounded-full flex items-center justify-center">
          <div className="w-full h-full">
            <Image
              src={avatarSrc}
              alt={name}
              fill
              className="object-contain rounded-full scale-125"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-1 ">
          <div className="relative w-48 h-10 md:w-full md:h-">
            <Image
              src="/Icons/Feedback/Stars.svg"
              alt="5 estrelas"
              width={124}
              height={60}
            />
          </div>

          <h4 className="font-josefin text-2xl md:text-2xl text-[#4A3B32]">
            {name}, {city}
          </h4>
        </div>
      </div>

      {/* Body: Text + Arrow */}
      <div className="flex items-center gap-4 justify-between">
        <div className="flex flex-col gap-2 max-w-[85%]">
          {text.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base lg:text-lg text-[#4A3B32] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <button
          onClick={onNext}
          className="shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
          aria-label="Próximo feedback"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/Icons/Feedback/ArrowRight.svg"
              alt="Seta para direita"
              fill
              className="object-contain"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
