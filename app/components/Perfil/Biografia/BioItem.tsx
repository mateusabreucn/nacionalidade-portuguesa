import Image from "next/image";

interface BioItemProps {
  avatarSrc: string;
  name: string;
  role: string;
  areas: string[];
  text: string;
  footnote?: string;
}

export default function BioItem({
  avatarSrc,
  name,
  role,
  areas,
  text,
  footnote,
}: BioItemProps) {
  return (
    <div className="@container flex flex-col gap-[clamp(0.5rem,1.5cqw,2rem)] w-full h-full">
      <div className="flex items-center gap-[clamp(0.75rem,3cqw,2rem)]">
        <div
          className="
            relative shrink-0
            w-[clamp(3.5rem,9cqw,6.5rem)] h-[clamp(3.5rem,9cqw,6.5rem)]
            bg-bg-badge rounded-full
            overflow-hidden
          "
        >
          <Image
            src={avatarSrc}
            alt={name}
            fill
            sizes="6.5rem"
            className="object-cover scale-150 object-center translate-x-1"
          />
        </div>

        <div className="flex-1 flex flex-col gap-0.5 pr-[clamp(3rem,8cqw,5rem)]">
          <h4
            className="
              font-josefin font-bold
              text-[clamp(0.875rem,3cqw,1.75rem)]
              text-text-accent
            "
          >
            {name}
          </h4>
          <p className="font-josefin text-[clamp(0.8rem,2.5cqw,1.25rem)] text-text-muted">
            {role}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-auto pr-2 min-h-0 max-h-60 sm:max-h-full">
        <p className="font-josefin font-bold text-[clamp(0.875rem,2cqw,1.5rem)] text-text-accent mb-1">
          Áreas de atuação
        </p>
        <ul className="list-disc list-inside mb-2">
          {areas.map((area, index) => (
            <li
              key={index}
              className="text-[clamp(0.875rem,2cqw,1.5rem)] text-text-accent leading-relaxed"
            >
              {area}
            </li>
          ))}
        </ul>

        {text.split("\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-[clamp(0.875rem,2cqw,1.5rem)] text-text-accent leading-relaxed mb-1"
          >
            {paragraph}
          </p>
        ))}

        {footnote && (
          <div className="mt-6 pt-4 border-t border-text-accent/20">
            <div className="text-[clamp(0.75rem,1.6cqw,1.25rem)] text-text-muted whitespace-pre-wrap leading-tight">
              {footnote}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
