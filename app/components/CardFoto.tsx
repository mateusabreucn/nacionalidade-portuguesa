import Image from "next/image";

interface CardFotoProps {
  src: string;
  nome: string;
  width?: number;
  height?: number;
}

export default function CardFoto({ src, nome, width, height }: CardFotoProps) {
  return (
    <div className="flex flex-col items-center gap-y-10 shrink-0">
      <Image
        src={src}
        alt={`Foto de ${nome}`}
        className="rounded-[86px] shadow-2xl"
        width={width ?? 326}
        height={height ?? 306}
      />

      <div className="text-4xl w-full text-center">{nome}</div>
    </div>
  );
}
