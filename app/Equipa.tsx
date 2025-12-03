import Image from "next/image";
import CardBranco from "./components/CardBranco";
import CardFoto from "./components/CardFoto";
import { NomeEquipa } from "./enums/NomeEquipa";
import IconBadge from "./components/IconBadge";

export default function Equipa() {
  return (
    <CardBranco titulo="Quem somos nós">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-16 gap-x-10 xl:gap-x-18 w-full">
        <div className="relative z-10">
          <CardFoto
            src={`/Equipa - ${NomeEquipa.AmandaCDantas}.jpg`}
            nome={NomeEquipa.AmandaCDantas}
            bigger
          />

          <div
            className="
            absolute
            -bottom-4 md:bottom-8 lg:bottom-10
            -right-4 md:-right-10 lg:-right-16

          "
          >
            <IconBadge
              icon="/Icons/Equipa/Trofeu.svg"
              altText="Ícone de Troféu"
            />
          </div>
        </div>

        <div
          className="
          relative w-full
          max-w-[900px] aspect-video md:aspect-2/1
          flex items-center justify-center
        "
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Icons/Ellipse.svg"
              fill
              alt="Fundo decorativo"
              className="object-contain"
              priority
            />
          </div>

          <div className="relative z-10 px-[10%] py-[15%] text-start flex items-center justify-center h-full">
            <p
              className="font-josefin
              text-sm
              sm:text-base
              md:text-xl
              lg:text-2xl
              xl:text-[2rem]
              2xl:text-4xl
              leading-tight md:leading-snug
            "
            >
              Há mais de sete anos, ajudamos brasileiros a transformarem o sonho
              da cidadania portuguesa em realidade.
            </p>
          </div>
        </div>
      </div>

      <div
        className="
        mt-18 md:mt-24 lg:mt-32 mx-auto
        w-full flex flex-col md:flex-row
        gap-y-10 md:gap-y-0
        items-center justify-center"
      >
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
