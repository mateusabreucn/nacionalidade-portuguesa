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
      gap-y-8 w-full"
    >
      <div
        className={`
          relative aspect-square w-full img-shadow
          rounded-4xl md:rounded-[48px] lg:rounded-[64px]
          overflow-hidden
          ${
            bigger
              ? "w-[280px] md:w-[360px] lg:w-[300px] xl:w-[360px] 2xl:w-[420px]"
              : "w-[180px] md:w-[210px] lg:w-[210px] xl:w-[250px]"
          }
        `}
      >
        <Image
          src={src}
          alt={`Foto de ${nome}`}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-base md:text-xl lg:text-2xl text-center font-medium">
        {nome}
      </h3>
    </div>
  );
}
