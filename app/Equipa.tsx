"use client";

import { useState, useEffect, useRef } from "react";
import CardBranco from "./components/CardBranco";
import EquipaMainPhoto from "./components/Equipa/EquipaMainPhoto";
import EquipaCentralContent from "./components/Equipa/EquipaCentralContent";
import EquipaMembersMobile from "./components/Equipa/EquipaMembersMobile";
import EquipaMobileModal from "./components/Equipa/EquipaMobileModal";
import EquipaMembersDesktop from "./components/Equipa/EquipaMembersDesktop";

export default function Equipa() {
  const [activeModal, setActiveModal] = useState<"feedback" | "bio" | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Determina se algum modal (Bio ou Feedback) deve estar visível
  const showModal = !!activeModal;

  // Detectar se é mobile para aplicar comportamentos específicos
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClose = () => setActiveModal(null);

  return (
    <CardBranco titulo="Quem somos nós">
      {/* Container principal */}
      <div ref={sectionRef} className="flex flex-col w-full relative">
        {/* Seção superior: Foto Amanda + Área Central de Conteúdo */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-y-16 gap-x-10 xl:gap-x-18 w-full">
          <EquipaMainPhoto
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            handleClose={handleClose}
          />

          <EquipaCentralContent
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            handleClose={handleClose}
            showModal={showModal}
          />

          <EquipaMembersMobile />
        </div>

        {/* MODAL MOBILE: Cobre a parte inferior da seção quando ativo */}
        <EquipaMobileModal
          activeModal={activeModal}
          handleClose={handleClose}
          showModal={showModal}
          isMobile={isMobile}
        />

        {/* Três fotos - Versão DESKTOP (Aparecem na linha de baixo) */}
        <EquipaMembersDesktop />
      </div>
    </CardBranco>
  );
}
