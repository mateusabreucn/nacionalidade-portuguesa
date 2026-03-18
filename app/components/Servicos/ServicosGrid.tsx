import IconBadgeServicos from "./IconBadgeServicos";
import { ServicoData } from "./ModalServico";

interface ServicosGridProps {
  servicos: ServicoData[];
  lockedId: string | null;
  onIconClick: (id: string) => void;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

export default function ServicosGrid({
  servicos,
  lockedId,
  onIconClick,
  onMouseEnter,
  onMouseLeave,
}: ServicosGridProps) {
  return (
    <div
      className="
        grid grid-cols-3
        w-full max-w-[1800px] mx-auto
        gap-x-[clamp(0rem,0.5vw,1rem)]
        gap-y-[clamp(2rem,10vw,13rem)]
        justify-items-center
      "
    >
      {servicos.map((servico) => (
        <div key={servico.id} className="relative z-20">
          <div className="hidden lg:block">
            <IconBadgeServicos
              icon={lockedId === servico.id ? "/Icons/Close.svg" : servico.icon}
              altText={
                lockedId === servico.id ? "Fechar modal" : servico.altText
              }
              titulo={servico.titulo}
              onClick={() => onIconClick(servico.id)}
              isActive={lockedId === servico.id}
              onMouseEnter={() => onMouseEnter(servico.id)}
              onMouseLeave={onMouseLeave}
            />
          </div>

          <div className="lg:hidden">
            <IconBadgeServicos
              icon={servico.icon}
              altText={servico.altText}
              titulo={servico.titulo}
              onClick={() => onIconClick(servico.id)}
              isActive={lockedId === servico.id}
              onMouseEnter={() => onMouseEnter(servico.id)}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
