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
            bigger
          />

          <div className="absolute bottom-36 xl:bottom-20 2xl:bottom-10 -right-16">
            <IconBadge
              icon="/Icons/Equipa/Trofeu.svg"
              altText="Ícone de Troféu"
            />
          </div>
        </div>

        <div
          className="relative flex-1 h-[478px] min-w-0 flex items-center justify-center px-12 sm:px-16 md:px-20 lg:px-16 xl:px-20 2xl:px-24 py-12"
          style={{
            backgroundImage: "url('/Icons/Ellipse.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="font-josefin text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center leading-snug">
            Há mais de sete anos, ajudamos brasileiros a transformarem o sonho
            da cidadania portuguesa em realidade.
          </p>
        </div>
      </div>

      <div className="mt-14 xl:mt-28 2xl:mt-40 flex flex-col lg:flex-row justify-center gap-x-16 xl:gap-x-20 2xl:gap-x-28">
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
