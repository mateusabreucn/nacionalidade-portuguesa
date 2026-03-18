import WhatsAppLink from "../WhatsAppLink";

export default function HeroText() {
  return (
    <div className="flex flex-col w-full flex-1 min-w-0 @container mx-auto text-text-primary text-center lg:text-left">
      <div className="font-josefin leading-tight">
        <h2 className="font-normal text-[clamp(1.25rem,6cqw,4.5rem)] whitespace-nowrap">
          Solicite sua
        </h2>

        <h1
          className="
            font-medium
            text-[clamp(1.4rem,8.2cqw,5.5rem)]
            whitespace-nowrap
          "
        >
          Nacionalidade Portuguesa
        </h1>
      </div>

      <p className="mt-[clamp(0.5rem,2cqw,1rem)] text-[clamp(0.6rem,3.2cqw,2rem)]">
        Apoio jurídico em processos de nacionalidade e imigração.
      </p>

      <WhatsAppLink
        className="
          inline-block text-center
          mt-[clamp(0.5rem,2.5vh,1.5rem)]
          py-[clamp(0.25rem,1vh,1rem)]
          px-[clamp(2rem,2.5vw,6rem)]
          w-fit mx-auto lg:mx-0
          bg-btn-light rounded-lg
          border border-border-default
          text-[clamp(0.875rem,3cqw,2.25rem)]
          cursor-pointer
          hover:brightness-80 hover:scale-105
          transition-all duration-300
        "
      >
        Faça um Orçamento
      </WhatsAppLink>
    </div>
  );
}
