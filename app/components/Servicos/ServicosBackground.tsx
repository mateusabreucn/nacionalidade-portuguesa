import Image from "next/image";

export default function ServicosBackground() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div
        className="
          relative opacity-80
          w-[75%] h-[75%] lg:w-[85%] lg:h-[85%] 2xl:w-[90%] 2xl:h-[90%] 4xl:w-[85%] 4xl:h-[85%]
        "
      >
        <Image
          src="/Icons/Servicos/Ellipse.svg"
          alt="Detalhe fundo"
          fill
          className="object-contain hidden lg:block"
          priority
        />
      </div>
    </div>
  );
}
