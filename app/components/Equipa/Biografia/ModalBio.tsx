"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ModalBackground from "../../ModalBackground";
import BioItem from "./BioItem";
import { biosData } from "./biosData";

interface ModalBioProps {
  isActive?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function ModalBio({
  isActive = false,
  onClose,
  isMobile = false,
}: ModalBioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const isTransitioning = useRef(false);

  const changeBio = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % biosData.length);
      setIsFading(false);
      isTransitioning.current = false;
    }, 300);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(changeBio, 7000);
    return () => clearInterval(interval);
  }, [isActive, changeBio]);

  const currentBio = biosData[currentIndex];

  // Altura fixa: modal de bio é menor que feedback
  const heightClass = isMobile ? "h-full sm:max-h-64" : "lg:h-[260px]";

  return (
    <div className="w-full flex items-start justify-center">
      <ModalBackground onClose={onClose} className={heightClass}>
        <div
          className={`w-full h-full transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <BioItem {...currentBio} onNext={changeBio} isMobile={isMobile} />
        </div>
      </ModalBackground>
    </div>
  );
}
