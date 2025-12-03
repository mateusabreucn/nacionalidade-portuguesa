import Image from "next/image";
import CardBranco from "./components/CardBranco";
import IconBadge from "./components/IconBadge";

export default function Servicos() {
  return (
    <CardBranco titulo="Serviços">
      <div className="relative w-full mx-auto">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-3/4 h-3/4 opacity-60 lg:opacity-100">
            <Image
              src="/Icons/Servicos/Ellipse.svg"
              alt="Detalhe fundo"
              fill
              className="object-contain hidden md:block"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-14 lg:gap-y-16 justify-items-center">
          <IconBadge
            icon="/Icons/Servicos/Nacionalidade.svg"
            altText="Ícone de Nacionalidade"
            titulo="Nacionalidade"
          />

          <IconBadge
            icon="/Icons/Servicos/Imigracao.svg"
            altText="Ícone de Imigração"
            titulo="Imigração"
          />

          <IconBadge
            icon="/Icons/Servicos/Sentenca.svg"
            altText="Ícone de Sentença Estrangeira"
            titulo="Sentença Estrangeira"
          />

          <IconBadge
            icon="/Icons/Servicos/Familia.svg"
            altText="Ícone de Família e Sucessões"
            titulo="Família e Sucessões"
          />

          <IconBadge
            icon="/Icons/Servicos/Imoveis.svg"
            altText="Ícone de Imóveis"
            titulo="Imóveis"
          />

          <IconBadge
            icon="/Icons/Servicos/Empresas.svg"
            altText="Ícone de Empresas"
            titulo="Empresas"
          />
        </div>
      </div>
    </CardBranco>
  );
}
