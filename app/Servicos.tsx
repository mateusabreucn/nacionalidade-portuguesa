"use client";

import Image from "next/image";
import { useState } from "react";
import CardBranco from "./components/CardBranco";
import IconBadge from "./components/IconBadge";
import ModalServico from "./components/Servicos/ModalServico";
import { servicosData } from "./components/Servicos/servicosData";

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
    <CardBranco titulo="Serviços">
      <div className="relative w-full mx-auto">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-3/4 h-3/4 opacity-60 lg:opacity-100">
            <Image
              src="/Icons/Servicos/Ellipse.svg"
              alt="Detalhe fundo"
              fill
              className="object-contain hidden md:block"
              priority
            />
          </div>
        </div>

        <div className="relative z-10">
          {/* Grid de ícones */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-14 lg:gap-y-16 justify-items-center">
            {servicosData.map((servico, index) => (
              <div key={servico.id} className="relative z-20">
                <IconBadge
                  icon={
                    lockedId === servico.id ? "/Icons/Close.svg" : servico.icon
                  }
                  altText={
                    lockedId === servico.id ? "Fechar modal" : servico.altText
                  }
                  titulo={servico.titulo}
                  onClick={() => handleIconClick(servico.id)}
                  isActive={lockedId === servico.id}
                  onMouseEnter={() => handleMouseEnter(servico.id)}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            ))}
          </div>

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
  );
}
