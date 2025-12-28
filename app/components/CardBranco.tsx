interface CardBrancoProps {
  titulo: string;
  children?: React.ReactNode;
}

export default function CardBranco({ titulo, children }: CardBrancoProps) {
  return (
    <section
      className="
      relative bg-bg-card
      rounded-[30px] md:rounded-[56px]
      mx-auto max-w-[11/12]
      py-8 sm:py-10 md:py-12 lg:py-20 xl:py-16
      px-6 md:px-14
      mt-8 shadow-sm
    "
    >
      <h2
        className="
        font-josefin text-text-secondary
        text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.8rem] 2xl:text-5xl
        leading-tight text-center
        mb-4 sm:mb-8
      "
      >
        {titulo}
      </h2>
      {children}
    </section>
  );
}
