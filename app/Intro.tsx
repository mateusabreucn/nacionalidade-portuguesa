import Image from "next/image";

export default function Intro() {
  return (
    <div className="my-[75px] mx-20 flex justify-between items-center">
      <div className="flex flex-col text-font-main ml-16">
        <div className="font-josefin text-6xl">
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

      <div className="relative w-full lg:max-w-[650px] xl:max-w-[500px] 2xl:max-w-[750px] aspect-square shrink-0">
        <Image
          src="/Intro - Amanda.png"
          alt="Imagem de Amanda Dantas"
          fill
          className="rounded-[86px] shadow-2xl object-cover"
          priority
        />
      </div>
    </div>
  );
}
