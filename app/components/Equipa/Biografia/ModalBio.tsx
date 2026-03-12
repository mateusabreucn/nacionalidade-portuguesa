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

  const heightClass = isMobile ? "h-full sm:max-h-[260px]" : "lg:h-[260px]";

  return (
    <div className="w-full flex items-start justify-center">
      <ModalBackground onClose={onClose} className={heightClass}>
        <BioItem {...bioData} isMobile={isMobile} />
      </ModalBackground>
    </div>
  );
}
