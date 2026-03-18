import Image from "next/image";

export default function ServicosBackground() {
  return (
    <div className="@container absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div
        className="
          relative opacity-80
          w-[clamp(75%,85cqw,90%)] h-[clamp(75%,85cqw,90%)]
          max-w-[1700px] max-h-[1700px]
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
