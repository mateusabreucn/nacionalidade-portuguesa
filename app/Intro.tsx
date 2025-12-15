import Image from "next/image";

export default function Intro() {
  return (
    <div className="my-6 mx-0 xl:mx-16 2xl:mx-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-x-6 xl:gap-x-8 gap-y-10 xl:gap-y-16">
      <div className="flex flex-col text-font-main mx-auto text-center lg:text-left">
        <div className="font-josefin leading-tight">
          <h2 className="font-normal text-xl lg:text-3xl">Solicite sua</h2>
          <h1 className="font-medium text-2xl lg:text-[2rem] xl:text-[2.8rem] 2xl:text-5xl">
            Nacionalidade Portuguesa
          </h1>
        </div>

        <p className="text-[0.6rem] xl:text-lg 2xl:text-xl mt-2">
          Apoio jurídico em processos de nacionalidade e imigração.
        </p>

        <button
          className="
            bg-button-white rounded px-6 lg:px-10 py-4
            lg:mt-10 w-fit border border-border-button
            cursor-pointer hover:brightness-80 transition-all
            hover:scale-105 duration-300
            text-lg 2xl:text-xl
            mx-auto lg:mx-0 mt-4
          "
        >
          Faça um Orçamento
        </button>
      </div>

      <div className="relative w-full aspect-video lg:aspect-21/20 shrink-0 max-w-[90%] lg:max-w-[42%] xl:max-w-[44%] 2xl:max-w-[45%]">
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
