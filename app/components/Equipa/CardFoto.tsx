import Image from "next/image";

interface CardFotoProps {
  src: string;
  nome: string;
  bigger?: boolean;
}

export default function CardFoto({ src, nome, bigger }: CardFotoProps) {
  const containerClasses = bigger
    ? "aspect-2/1 lg:aspect-square rounded-[2.5rem] lg:rounded-4xl"
    : "aspect-square rounded-full lg:aspect-square lg:rounded-4xl";

  const imageClasses = bigger
    ? "object-cover object-center"
    : "object-cover object-center";

  const nameClasses = bigger
    ? "text-sm sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[2.5rem] 4xl:text-5xl lg:absolute lg:-bottom-12 xl:-bottom-16"
    : "text-[0.5rem] sm:text-base md:text-xl 2xl:text-3xl 3xl:text-4xl";

  return (
    <div
      className="
        flex flex-col items-center
        gap-y-2 md:gap-y-4 xl:gap-y-8
        w-full
      "
    >
      <div
        className={`
          relative w-full
          ${containerClasses}
          img-shadow overflow-hidden
        `}
      >
        <Image
          src={src}
          alt={`Foto de ${nome}`}
          fill
          className={imageClasses}
        />
      </div>

      <h3
        className={`
          text-center whitespace-nowrap
          ${nameClasses}
        `}
      >
        {nome}
      </h3>
    </div>
  );
}
