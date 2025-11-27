import Image from "next/image";

interface CardFotoProps {
  src: string;
  nome: string;
  bigger?: boolean;
}

export default function CardFoto({ src, nome, bigger }: CardFotoProps) {
  return (
    <div
      className={`flex flex-col items-center gap-y-10 shrink-0 ${
        bigger
          ? `w-[300px] xl:w-[360px] 2xl:w-[500px]`
          : `w-[260px] xl:w-[300px] 2xl:w-[330px]`
      }`}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={src}
          alt={`Foto de ${nome}`}
          className="rounded-[64px] shadow-2xl aspect-square"
          objectFit="cover"
          fill
        />
      </div>

      <div className="text-2xl xl:text-3xl 2xl:text-4xl w-full text-center">
        {nome}
      </div>
    </div>
  );
}
