"use client";

import { useState } from "react";
import CardBranco from "./components/CardBranco";
import ModalServico from "./components/Servicos/ModalServico";
import { servicosData } from "./components/Servicos/servicosData";
import MobileModalServico from "./components/Servicos/MobileModalServico";
import ServicosGrid from "./components/Servicos/ServicosGrid";
import ServicosBackground from "./components/Servicos/ServicosBackground";

export default function Servicos() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lockedId, setLockedId] = useState<string | null>(null);
  const [ignoreHover, setIgnoreHover] = useState(false);

  const activeId = lockedId || hoveredId;

  const handleMouseEnter = (id: string) => {
    if (!ignoreHover) {
      setHoveredId(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setIgnoreHover(false);
  };

  const handleIconClick = (id: string) => {
    if (lockedId === id) {
      // Se clicar no mesmo ícone que está aberto, fecha
      setLockedId(null);
      setIgnoreHover(true);
      setHoveredId(null);
    } else {
      // Abre o modal deste ícone (fecha qualquer outro que esteja aberto)
      setLockedId(id);
      setIgnoreHover(false);
    }
  };

  const handleCloseModal = () => {
    setLockedId(null);
    setHoveredId(null);
    setIgnoreHover(true);
  };

  // Primeira linha: índices 0, 1, 2 (nacionalidade, imigracao, sentenca)
  // Segunda linha: índices 3, 4, 5 (familia, imoveis, empresas)
  const getModalPosition = (index: number): "top" | "bottom" => {
    return index < 3 ? "bottom" : "top";
  };

  const activeServico = activeId
    ? servicosData.find((s) => s.id === activeId)
    : null;
  const activeIndex = activeId
    ? servicosData.findIndex((s) => s.id === activeId)
    : -1;

  return (
    <div className="relative mt-8">
      {/* Modal mobile - sobrepõe todo o CardBranco */}
      <MobileModalServico
        activeServico={activeServico ?? null}
        isOpen={!!lockedId}
        onClose={handleCloseModal}
      />

      <CardBranco titulo="Serviços">
        <div className="relative w-full mx-auto">
          <ServicosBackground />

          <div className="relative z-10">
            {/* Grid de ícones */}
            <ServicosGrid
              servicos={servicosData}
              lockedId={lockedId}
              onIconClick={handleIconClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />

            {/* Modal centralizado - aparece entre as linhas */}
            {activeServico && (
              <ModalServico
                servico={activeServico}
                position={getModalPosition(activeIndex)}
                isActive={!!activeId}
                onMouseEnter={() => {
                  if (activeId && !ignoreHover) {
                    setHoveredId(activeId);
                  }
                }}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        </div>
      </CardBranco>
    </div>
  );
}
