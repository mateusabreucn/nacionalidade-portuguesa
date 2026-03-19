import Link from "next/link";
import SecondaryPageLayout from "@components/SecondaryPageLayout";
import CardBranco from "@components/CardBranco";

export default function NotFound() {
  return (
    <SecondaryPageLayout>
      <CardBranco titulo="Página Não Encontrada">
        <div className="flex flex-col items-center justify-center py-[clamp(2rem,4vw,4rem)] px-[clamp(1rem,3vw,3.5rem)] gap-[clamp(1.5rem,5vw,8rem)] text-center">
          <p className="text-[clamp(0.75rem,3vw,2rem)] text-text-accent font-josefin leading-relaxed max-w-3xl">
            A página que você está procurando não existe, foi removida ou está
            temporariamente indisponível.
          </p>

          <Link
            href="/"
            className="
              inline-block text-center
              p-[clamp(0.5rem,1vw,2rem)]
              lg:px-[clamp(2rem,3vw,3rem)]
              text-[clamp(0.6rem,1.5vw,3rem)]
              bg-btn-dark rounded-lg
              border border-border-default
              text-white font-medium
              cursor-pointer
              hover:brightness-80 hover:scale-105
              shadow-lg shadow-black/20
              transition-all duration-300
            "
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </CardBranco>
    </SecondaryPageLayout>
  );
}
