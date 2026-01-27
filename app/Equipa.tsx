"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CardBranco from "./components/CardBranco";
import EquipaMainPhoto from "./components/Equipa/EquipaMainPhoto";
import EquipaCentralContent from "./components/Equipa/EquipaCentralContent";
import EquipaMembersMobile from "./components/Equipa/EquipaMembersMobile";
import EquipaMobileModal from "./components/Equipa/EquipaMobileModal";
import EquipaMembersDesktop from "./components/Equipa/EquipaMembersDesktop";

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

  const handleModalClick = useCallback((modal: ModalType) => {
    setActiveModal((prev) => {
      if (prev === modal) {
        setIsLocked(false);
        return null;
      }
      setIsLocked(true);
      return modal;
    });
  }, []);

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
      <div className="flex flex-col w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          <EquipaMainPhoto
            isLocked={isLocked && activeModal === "bio"}
            onModalClick={() => handleModalClick("bio")}
            onMouseEnter={handleBioHover}
            onMouseLeave={handleBioLeave}
          />

          <EquipaCentralContent
            activeModal={activeModal}
            onModalClick={() => handleModalClick("feedback")}
            onModalMouseEnter={clearHoverTimeout}
            onModalMouseLeave={handleBioLeave}
            handleClose={handleClose}
          />

          <EquipaMembersMobile />
        </div>

        <EquipaMobileModal
          activeModal={activeModal}
          handleClose={handleClose}
          isMobile={isMobile}
        />

        <EquipaMembersDesktop />
      </div>
    </CardBranco>
  );
}
