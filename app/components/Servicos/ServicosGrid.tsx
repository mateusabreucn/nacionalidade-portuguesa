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
    <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-y-14 lg:gap-y-16 justify-items-center">
      {servicos.map((servico) => (
        <div key={servico.id} className="relative z-20">
          {/* Versão para telas grandes (lg+) - com troca de ícone para X */}
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
          {/* Versão para telas menores (até md) - sem troca de ícone */}
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
