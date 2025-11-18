import { Josefin_Sans } from "next/font/google";

interface CardBrancoProps {
  titulo: string;
  children?: React.ReactNode;
}

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export default function CardBranco({ titulo, children }: CardBrancoProps) {
  return (
    <div className="bg-card-branco rounded-[56px] mx-10 py-28 px-14">
      <div className={`${josefin.className} text-6xl text-center mb-16`}>
        {titulo}
      </div>
      {children}
    </div>
  );
}
