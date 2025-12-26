import Image from "next/image";

export default function Intro() {
  return (
    <div className="my-6 mx-0 xl:mx-16 2xl:mx-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-x-6 xl:gap-x-8 gap-y-8 xl:gap-y-16">
      <div className="flex flex-col text-font-main mx-auto text-center lg:text-left">
        <div className="font-josefin leading-tight">
          <h2 className="font-normal text-xl lg:text-3xl">Solicite sua</h2>

          <h1 className="font-medium text-2xl lg:text-[2rem] xl:text-[2.8rem] 2xl:text-5xl">
            Nacionalidade Portuguesa
          </h1>
        </div>

        <p className="text-xs xl:text-lg 2xl:text-xl mt-2">
          Apoio jurídico em processos de nacionalidade e imigração.
        </p>

        <button
          className="
            bg-button-white rounded px-8 lg:px-10 py-1.5 lg:py-4
            mt-10 w-fit border border-border-button
            cursor-pointer hover:brightness-80 transition-all
            hover:scale-105 duration-300
            text-base lg:text-lg 2xl:text-xl
            mx-auto lg:mx-0
          "
        >
          Faça um Orçamento
        </button>
      </div>

      <div
        className="
          relative w-full shrink-0
          aspect-2/1 lg:aspect-21/20
          overflow-hidden
          rounded-[2.8rem] lg:rounded-4xl
          img-shadow
          max-w-[98%] lg:max-w-[42%] xl:max-w-[44%] 2xl:max-w-[45%]"
      >
        <Image
          src="/Intro - Amanda.png"
          alt="Imagem de Amanda Dantas"
          fill
          className="
            object-cover
            scale-108 lg:scale-100

          "
          style={{
            objectPosition: "50% 60%",
          }}
          priority
        />
      </div>
    </div>
  );
}
