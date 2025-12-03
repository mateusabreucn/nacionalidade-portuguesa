interface CardBrancoProps {
  titulo: string;
  children?: React.ReactNode;
}

export default function CardBranco({ titulo, children }: CardBrancoProps) {
  return (
    <section
      className="
      relative bg-card-branco
      rounded-[30px] md:rounded-[56px]
      mx-auto max-w-[11/12]
      py-12 md:py-20 xl:py-16
      px-6 md:px-14
      mt-8 shadow-sm
    "
    >
      <h2
        className="
        font-josefin text-3xl lg:text-[2rem] xl:text-[2.8rem] 2xl:text-5xl
        leading-tight text-center mb-12 md:mb-16 font-bold
      "
      >
        {titulo}
      </h2>
      {children}
    </section>
  );
}
