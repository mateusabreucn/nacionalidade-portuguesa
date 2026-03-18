"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CardBranco from "@components/CardBranco";
import EquipaMainPhoto from "@components/Equipa/EquipaMainPhoto";
import EquipaCentralContent from "@components/Equipa/EquipaCentralContent";
import EquipaMobileModal from "@components/Equipa/EquipaMobileModal";
import EquipaDesktopModal from "@components/Equipa/EquipaDesktopModal";

type ModalType = "feedback" | "bio" | null;

export default function Equipa() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleClose = useCallback(() => {
    setActiveModal(null);
    setIsLocked(false);
  }, []);

  const handleModalClick = useCallback(
    (modal: ModalType) => {
      setActiveModal((prev) => {
        if (prev === modal && isLocked) {
          setIsLocked(false);
          return null;
        }
        setIsLocked(true);
        return modal;
      });
    },
    [isLocked]
  );

  const handleBioHover = useCallback(() => {
    if (isMobile) return;
    clearHoverTimeout();
    if (!isLocked) setActiveModal("bio");
  }, [isMobile, isLocked, clearHoverTimeout]);

  const handleBioLeave = useCallback(() => {
    if (isMobile || isLocked) return;
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveModal((prev) => (prev === "bio" ? null : prev));
    }, 150);
  }, [isMobile, isLocked, clearHoverTimeout]);

  return (
    <CardBranco titulo="Quem somos nós">
      <div className="flex flex-col items-center w-full relative gap-[clamp(1rem,2vw,2.5rem)]">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:items-stretch w-full gap-8">
          <EquipaMainPhoto
            isLocked={isLocked && activeModal === "bio"}
            onModalClick={() => handleModalClick("bio")}
            onMouseEnter={handleBioHover}
            onMouseLeave={handleBioLeave}
          />

          <EquipaCentralContent
            activeModal={activeModal}
            onModalMouseEnter={clearHoverTimeout}
            onModalMouseLeave={handleBioLeave}
            handleClose={handleClose}
          />
        </div>

        <button
          onClick={() => handleModalClick("feedback")}
          className="
            z-10
            mt-[clamp(0.5rem,2vw,3rem)]
            lg:mt-[clamp(4rem,7vw,6rem)]
            py-[clamp(0.25rem,0.75vw,1.2rem)]
            px-[clamp(1.8rem,5vw,5.5rem)]
            bg-bg-badge rounded-lg
            font-josefin
            text-[clamp(0.75rem,2vw,2.5rem)] font-medium
            cursor-pointer
            hover:brightness-90 transition-all
          "
        >
          Depoimentos
        </button>

        <EquipaMobileModal
          activeModal={activeModal}
          handleClose={handleClose}
          isMobile={isMobile}
        />
      </div>
    </CardBranco>
  );
}
