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
    <div className="flex flex-col gap-[clamp(0.5rem,1vw,1.5rem)] w-full h-full">
      <div className="flex items-center gap-[clamp(0.75rem,1.5vw,1.25rem)]">
        <div
          className="
            relative shrink-0
            w-[clamp(3.5rem,5vw,6rem)] h-[clamp(3.5rem,5vw,6rem)]
            bg-bg-badge rounded-full
            overflow-hidden
          "
        >
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-cover scale-150 object-center translate-x-1"
          />
        </div>

        <div className="flex-1 flex flex-col gap-0.5">
          <h4
            className="
              font-josefin font-bold
              text-[clamp(0.875rem,2vw,1.5rem)]
              text-text-accent
            "
          >
            {name}
          </h4>
          <p className="font-josefin text-[clamp(0.75rem,1.5vw,1rem)] text-text-muted">
            {role}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-auto pr-2 min-h-0">
        <p className="font-josefin font-bold text-[clamp(0.75rem,1.5vw,1rem)] text-text-accent mb-1">
          Áreas de atuação
        </p>
        <ul className="list-disc list-inside mb-2">
          {areas.map((area, index) => (
            <li
              key={index}
              className="text-[clamp(0.75rem,1.5vw,1rem)] text-text-accent leading-relaxed"
            >
              {area}
            </li>
          ))}
        </ul>

        {text.split("\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-[clamp(0.75rem,1.5vw,1rem)] text-text-accent leading-relaxed mb-1"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
