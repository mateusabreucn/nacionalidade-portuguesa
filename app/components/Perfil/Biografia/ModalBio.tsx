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

  const heightClass = isMobile ? "h-auto max-h-full flex-col justify-start overflow-hidden rounded-[clamp(1.875rem,4vw,3.5rem)]! py-[clamp(1.5rem,3vh,2rem)]! px-[clamp(1.25rem,5vw,3.5rem)]!" : "h-auto";

  return (
    <div className={`w-full flex items-start justify-center ${isMobile ? "h-auto max-h-full min-h-0" : ""}`}>
      <ModalBackground onClose={onClose} className={heightClass}>
        <BioItem {...bioData} />
      </ModalBackground>
    </div>
  );
}
