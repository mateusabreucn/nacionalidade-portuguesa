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
      gap-y-4 xl:gap-y-8
      w-full"
    >
      <div
        className="
          relative
          aspect-477/235 lg:aspect-square
          w-full
          img-shadow
          rounded-[3.2rem]
          lg:rounded-4xl
          overflow-hidden"
      >
        <Image
          src={src}
          alt={`Foto de ${nome}`}
          fill
          className={`object-cover ${bigger ? "" : ""}`}
          style={{
            objectPosition: "50% 23%",
          }}
        />
      </div>

      <h3
        className={`
          text-center font-medium
          text-base lg:text-xl xl:text-2xl
          whitespace-nowrap
          ${
            bigger ? "xl:text-3xl lg:absolute lg:-bottom-12 xl:-bottom-16" : ""
          }`}
      >
        {nome}
      </h3>
    </div>
  );
}
