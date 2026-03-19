"use client";

import { useRouter } from "next/navigation";
import ArrowLeftIcon from "@components/Icons/ArrowLeftIcon";

interface CardBrancoProps {
  titulo: string;
  children?: React.ReactNode;
  showBackButton?: boolean;
}

export default function CardBranco({
  titulo,
  children,
  showBackButton = false,
}: CardBrancoProps) {
  const router = useRouter();

  return (
    <section
      className="
        relative
        mx-auto max-w-[11/12]
        py-[clamp(2rem,5vw,4rem)]
        px-[clamp(1rem,4vw,3.5rem)]
        mt-8
        bg-bg-card rounded-[clamp(1.875rem,4vw,3.5rem)] shadow-sm
      "
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full mb-[clamp(1rem,4vw,4rem)] gap-2 md:gap-4">
        <div className="flex justify-start">
          {showBackButton && (
            <button
              onClick={() => router.push("/")}
              className="
                relative
                flex items-center justify-center gap-1.5
                w-[clamp(1.5rem,8vw,2.5rem)] h-[clamp(1.5rem,8vw,2.5rem)] md:w-auto md:h-auto
                p-0 md:px-[clamp(1rem,2vw,1.25rem)] md:py-[clamp(0.375rem,1vw,0.5rem)]
                rounded-full md:rounded-lg
                border md:border-0 border-btn-accent
                bg-transparent md:bg-btn-accent
                text-btn-accent md:text-white
                text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium
                cursor-pointer
                hover:brightness-110 hover:scale-105
                transition-all duration-300
                z-10
              "
            >
              <ArrowLeftIcon className="w-[clamp(1rem,5vw,1.25rem)] h-[clamp(1rem,5vw,1.25rem)] md:w-[clamp(1rem,2vw,1.25rem)] md:h-[clamp(1rem,2vw,1.25rem)]" />
              <span className="hidden md:inline">Voltar</span>
            </button>
          )}
        </div>

        <h2
          className="
            font-josefin
            text-[clamp(1.25rem,5vw,3rem)]
            lg:text-[clamp(2rem,3vw,4rem)]
            leading-tight
            text-text-secondary text-center
          "
        >
          {titulo}
        </h2>
      </div>
      {children}
    </section>
  );
}
