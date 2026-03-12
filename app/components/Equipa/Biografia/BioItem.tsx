import Image from "next/image";

interface BioItemProps {
  avatarSrc: string;
  name: string;
  role: string;
  areas: string[];
  text: string;
  isMobile: boolean;
}

export default function BioItem({
  avatarSrc,
  name,
  role,
  areas,
  text,
  isMobile,
}: BioItemProps) {
  return (
    <div className="flex flex-col gap-2 lg:gap-3 w-full h-full">
      <div className="flex items-center gap-3 lg:gap-4">
        <div
          className="
            relative shrink-0
            w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20
            bg-bg-badge rounded-full
            overflow-hidden
          "
        >
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-0.5">
          <h4
            className="
              font-josefin font-bold
              text-sm sm:text-lg lg:text-xl xl:text-2xl
              text-text-accent
            "
          >
            {name}
          </h4>
          <p className="font-josefin text-xs sm:text-sm lg:text-base text-text-muted">
            {role}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-auto pr-2 min-h-0">
        <p className="font-josefin font-bold text-xs sm:text-sm lg:text-sm xl:text-base text-text-accent mb-1">
          Áreas de atuação
        </p>
        <ul className="list-disc list-inside mb-2">
          {areas.map((area, index) => (
            <li
              key={index}
              className="text-xs sm:text-sm lg:text-sm xl:text-base text-text-accent leading-relaxed"
            >
              {area}
            </li>
          ))}
        </ul>

        {text.split("\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-xs sm:text-sm lg:text-sm xl:text-base text-text-accent leading-relaxed mb-1"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
