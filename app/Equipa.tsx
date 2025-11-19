import Image from "next/image";
import CardBranco from "./components/CardBranco";
import CardFoto from "./components/CardFoto";
import { NomeEquipa } from "./enums/NomeEquipa";
import IconBadge from "./components/IconBagde";

export default function Equipa() {
  return (
    <CardBranco titulo="Quem somos nós">
      <div className="w-full flex justify-between gap-x-20">
        <div className="relative">
          <CardFoto
            src={`/Equipa - ${NomeEquipa.AmandaCDantas}.jpg`}
            nome={NomeEquipa.AmandaCDantas}
            width={510}
            height={478}
          />

          <div className="absolute bottom-10 -right-16">
            <IconBadge
              icon="/Icons/Equipa/Trofeu.svg"
              altText="Ícone de Troféu"
            />
          </div>
        </div>

        <div className="relative flex-1 h-[478px]">
          <Image
            src="/Icons/Ellipse.svg"
            fill
            alt="Detalhe Fundo"
            className="object-fill"
          />

          <div className="absolute inset-0 flex items-center pl-24 pr-20 mb-10 z-10">
            <div className="font-josefin text-5xl leading-16">
              Há mais de sete anos, ajudamos brasileiros a transformarem o sonho
              da cidadania portuguesa em realidade.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 flex justify-center gap-x-28">
        <CardFoto
          src={`/Equipa - ${NomeEquipa.ThaysaBBarbosa}.jpg`}
          nome={NomeEquipa.ThaysaBBarbosa}
        />

        <CardFoto
          src={`/Equipa - ${NomeEquipa.LucianaFAlvarino}.jpg`}
          nome={NomeEquipa.LucianaFAlvarino}
        />

        <CardFoto
          src={`/Equipa - ${NomeEquipa.MargarethLeith}.jpg`}
          nome={NomeEquipa.MargarethLeith}
        />
      </div>
    </CardBranco>
  );
}
