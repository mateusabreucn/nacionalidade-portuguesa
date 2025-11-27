import Image from "next/image";

export default function Intro() {
  return (
    <div className="my-[75px] mx-20 flex flex-col lg:flex-row justify-between items-center gap-6 gap-y-14">
      <div className="flex flex-col text-font-main mx-auto text-center lg:text-left">
        <div className="font-josefin font-bold text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          <h1>Solicite sua</h1>
          <h1>Nacionalidade Portuguesa</h1>
        </div>

        <p className="text-2xl mt-8">
          Apoio jurídico em processos de nacionalidade e imigração.
        </p>

        <button
          className="
            bg-button-white rounded px-6 lg:px-10 py-4
            mt-6 md:mt-8 lg:mt-10 w-fit border border-border-button
            cursor-pointer hover:brightness-80 transition-all
            text-lg 2xl:text-xl mx-auto lg:mx-0
          "
        >
          Faça um Orçamento
        </button>
      </div>

      <div className="relative w-full aspect-square shrink-0 max-w-[90%] lg:max-w-[45%] xl:max-w-[48%] 2xl:max-w-[48%]">
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
