interface CardBrancoProps {
  titulo: string;
  children?: React.ReactNode;
}

export default function CardBranco({ titulo, children }: CardBrancoProps) {
  return (
    <div className="bg-card-branco rounded-[56px] mx-10 py-28 px-14">
      <div className="font-josefin text-6xl text-center mb-16">{titulo}</div>
      {children}
    </div>
  );
}
