export default function HeroText() {
  return (
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
  );
}
