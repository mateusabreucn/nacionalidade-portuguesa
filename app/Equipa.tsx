"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CardBranco from "@components/CardBranco";
import EquipaMainPhoto from "@components/Equipa/EquipaMainPhoto";
import EquipaCentralContent from "@components/Equipa/EquipaCentralContent";
import EquipaMobileModal from "@components/Equipa/EquipaMobileModal";

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
      if (prev === modal && isLocked) {
        setIsLocked(false);
        return null;
      }
      setIsLocked(true);
      return modal;
    });
  }, [isLocked]);

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
      <div className="flex flex-col items-center w-full relative gap-6 sm:gap-8 lg:gap-10">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
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
            mt-24
            py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-5 2xl:py-6
            px-10 sm:px-14 md:px-20 lg:px-28 xl:px-36
            bg-bg-badge rounded-xl
            font-family-josefin
            text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl
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
