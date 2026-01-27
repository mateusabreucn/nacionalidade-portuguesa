export default function HeroText() {
  return (
    <div className="flex flex-col mx-auto text-text-primary text-center lg:text-left">
      <div className="font-josefin leading-tight">
        <h2 className="font-normal text-xl sm:text-3xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
          Solicite sua
        </h2>

        <h1
          className="
            font-medium
            text-2xl sm:text-[2.6rem] lg:text-[2.2rem]
            xl:text-[2.8rem] 2xl:text-[3.2rem] 3xl:text-[4rem] 4xl:text-7xl
          "
        >
          Nacionalidade Portuguesa
        </h1>
      </div>

      <p className="mt-2 text-xs sm:text-base lg:text-sm xl:text-lg 2xl:text-xl 3xl:text-[1.4rem] 4xl:text-2xl">
        Apoio jurídico em processos de nacionalidade e imigração.
      </p>

      <button
        className="
          mt-4 sm:mt-6 md:mt-8 xl:mt-10
          py-1.5 lg:py-2 3xl:py-4 4xl:py-6
          px-8 xl:px-10 3xl:px-12 4xl:px-16
          w-fit mx-auto lg:mx-0
          bg-btn-light rounded
          border border-border-default
          text-base lg:text-lg 2xl:text-xl 3xl:text-[1.4rem] 4xl:text-3xl
          cursor-pointer
          hover:brightness-80 hover:scale-105
          transition-all duration-300
        "
      >
        Faça um Orçamento
      </button>
    </div>
  );
}
