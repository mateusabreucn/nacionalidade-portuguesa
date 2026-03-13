"use client";

import { useRouter } from "next/navigation";

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
        py-8 sm:py-10 md:py-12 lg:py-20 xl:py-16
        px-4 sm:px-6 md:px-14
        mt-8
        bg-bg-card rounded-[30px] md:rounded-[56px] shadow-sm
      "
    >
      {showBackButton && (
        <button
          onClick={() => router.back()}
          className="
            absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-14
            flex items-center gap-1.5
            px-4 py-1.5 sm:px-5 sm:py-2
            bg-btn-accent rounded-lg
            text-white text-xs sm:text-sm font-medium
            cursor-pointer
            hover:brightness-110 hover:scale-105
            transition-all duration-300
            z-10
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Voltar
        </button>
      )}

      <h2
        className="
          font-josefin
          text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.8rem] 2xl:text-5xl leading-tight
          text-text-secondary text-center
          mb-4 sm:mb-8
        "
      >
        {titulo}
      </h2>
      {children}
    </section>
  );
}

