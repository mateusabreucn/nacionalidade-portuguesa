interface CardBrancoProps {
  titulo: string;
  children?: React.ReactNode;
}

export default function CardBranco({ titulo, children }: CardBrancoProps) {
  return (
    <div className="bg-card-branco rounded-[56px] mx-0 xl:mx-2 2xl:mx-8 py-14 lg:py-20 xl:py-24 px-14 mt-8">
      <div className="font-josefin text-4xl lg:text-5xl xl:text-6xl text-center mb-16">
        {titulo}
      </div>
      {children}
    </div>
  );
}
