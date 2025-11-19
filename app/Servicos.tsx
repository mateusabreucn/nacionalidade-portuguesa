import Image from "next/image";
import CardBranco from "./components/CardBranco";
import IconBadge from "./components/IconBagde";

export default function Servicos() {
  return (
    <CardBranco titulo="Serviços">
      <div className="w-full grid grid-cols-3 gap-y-40 gap-x-60 justify-items-center relative">
        <Image
          src="/Icons/Servicos/Ellipse.svg"
          alt="Detalhe fundo"
          fill
          className="object-fill z-0"
        />

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
    </CardBranco>
  );
}
