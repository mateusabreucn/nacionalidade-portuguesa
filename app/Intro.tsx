import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export default function Intro() {
  return (
    <div className="my-[75px] mx-32 flex justify-between items-center">
      <div className="flex flex-col text-font-main">
        <div className={`${josefin.className} text-6xl`}>
          <h6>Solicite sua</h6>
          <h6>Nacionalidade Portuguesa</h6>
        </div>

        <p className="text-2xl mt-8">
          Apoio jurídico em processos de nacionalidade e imigração.
        </p>

        <button
          className="
          bg-button-white rounded px-6 py-4
            mt-10 w-fit border border-border-button
            cursor-pointer hover:brightness-80 transition-all"
        >
          Faça um Orçamento
        </button>
      </div>

      <Image
        src="/Foto 1.png"
        alt="Imagem de Amanda Dantas"
        className="rounded-[86px] shadow-2xl"
        width={800}
        height={800}
      />
    </div>
  );
}
