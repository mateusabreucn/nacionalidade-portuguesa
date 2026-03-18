"use client";

import ModalBackground from "../../ModalBackground";
import BioItem from "./BioItem";
import { bioData } from "./biosData";

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
  if (!isActive) return null;

  const heightClass = isMobile ? "h-auto sm:max-h-[260px]" : "h-auto";

  return (
    <div className="w-full flex items-start justify-center">
      <ModalBackground onClose={onClose} className={heightClass}>
        <BioItem {...bioData} isMobile={isMobile} />
      </ModalBackground>
    </div>
  );
}
