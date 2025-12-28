import Image from "next/image";

export default function ServicosBackground() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-3/4 h-3/4 opacity-80">
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
