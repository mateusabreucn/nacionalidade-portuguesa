import Image from "next/image";

export default function Intro() {
  return (
    <div className="my-14 mx-14 xl:mx-16 2xl:mx-20 flex flex-col lg:flex-row justify-between items-center gap-x-6 xl:gap-x-8 gap-y-10 xl:gap-y-16">
      <div className="flex flex-col text-font-main mx-auto text-center lg:text-left">
        <div className="font-josefin font-bold text-5xl lg:text-[2rem] xl:text-[2.8rem] 2xl:text-5xl leading-tight">
          <h1>Solicite sua</h1>
          <h1>Nacionalidade Portuguesa</h1>
        </div>

        <p className="text-base xl:text-xl 2xl:text-2xl mt-">
          Apoio jurídico em processos de nacionalidade e imigração.
        </p>

        <button
          className="
            bg-button-white rounded px-6 lg:px-10 py-4
            lg:mt-10 w-fit border border-border-button
            cursor-pointer hover:brightness-80 transition-all
            hover:scale-105 duration-300
            text-lg 2xl:text-xl mx-auto lg:mx-0
          "
        >
          Faça um Orçamento
        </button>
      </div>

      <div className="relative w-full aspect-21/20 shrink-0 max-w-[90%] lg:max-w-[42%] xl:max-w-[44%] 2xl:max-w-[45%]">
        <Image
          src="/Intro - Amanda.png"
          alt="Imagem de Amanda Dantas"
          fill
          className="rounded-4xl object-cover img-shadow"
          priority
        />
      </div>
    </div>
  );
}
