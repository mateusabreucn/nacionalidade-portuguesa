import Image from "next/image";

interface CardFotoProps {
  src: string;
  nome: string;
  bigger?: boolean; // Prop para diferenciar a foto da Amanda das outras
}

export default function CardFoto({ src, nome, bigger }: CardFotoProps) {
  return (
    <div
      className="
      flex flex-col items-center
      gap-y-2 md:gap-y-4 xl:gap-y-8
      w-full"
    >
      <div
        className={`
          ${bigger ? "aspect-2/1" : "aspect-square rounded-full"}
          lg:aspect-square
          rounded-[2.5rem]
          lg:rounded-4xl
          relative
          w-full
          img-shadow
          overflow-hidden
        `}
      >
        <Image
          src={src}
          alt={`Foto de ${nome}`}
          fill
          className={`object-cover ${
            bigger ? "object-[50%_23%] lg:origin-[50%_35%] lg:scale-150" : ""
          }`}
        />
      </div>

      <h3
        className={`
          text-center
          whitespace-nowrap
          ${
            bigger
              ? "text-sm sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[2.5rem] 4xl:text-5xl lg:absolute lg:-bottom-12 xl:-bottom-16"
              : "text-[0.5rem] sm:text-base md:text-xl 2xl:text-3xl 3xl:text-4xl"
          }`}
      >
        {nome}
      </h3>
    </div>
  );
}
