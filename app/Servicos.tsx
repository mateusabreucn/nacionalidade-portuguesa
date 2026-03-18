"use client";

import { useState } from "react";
import CardBranco from "@components/CardBranco";
import ModalServico from "@components/Servicos/ModalServico";
import { servicosData } from "@components/Servicos/servicosData";
import MobileModalServico from "@components/Servicos/MobileModalServico";
import ServicosGrid from "@components/Servicos/ServicosGrid";
import ServicosBackground from "@components/Servicos/ServicosBackground";
import ButtonEspecialista from "@components/ButtonEspecialista";

export default function Servicos() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lockedId, setLockedId] = useState<string | null>(null);

  const activeId = lockedId || hoveredId;

  const handleMouseEnter = (id: string) => {
    if (!lockedId) {
      setHoveredId(id);
    }
  };

  const handleMouseLeave = () => {
    if (!lockedId) {
      setHoveredId(null);
    }
  };

  const handleIconClick = (id: string) => {
    if (lockedId === id) {
      setLockedId(null);
      setHoveredId(null);
    } else {
      setLockedId(id);
      setHoveredId(null);
    }
  };

  const handleCloseModal = () => {
    setLockedId(null);
    setHoveredId(null);
  };

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
      <MobileModalServico
        activeServico={activeServico ?? null}
        isOpen={!!lockedId}
        onClose={handleCloseModal}
      />

      <CardBranco titulo="Serviços">
        <div className="relative w-full mx-auto">
          <ServicosBackground />

          <div className="relative z-10">
            <ServicosGrid
              servicos={servicosData}
              lockedId={lockedId}
              onIconClick={handleIconClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />

            {activeServico && (
              <ModalServico
                servico={activeServico}
                position={getModalPosition(activeIndex)}
                isActive={!!activeId}
                isLocked={!!lockedId}
                onClose={handleCloseModal}
                onMouseEnter={() => {
                  if (!lockedId && activeId) {
                    setHoveredId(activeId);
                  }
                }}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        </div>

        <div className="relative flex justify-center w-full mt-8 md:mt-14">
          <ButtonEspecialista className="px-8 shadow-lg shadow-black/20" />
        </div>
      </CardBranco>
    </div>
  );
}
