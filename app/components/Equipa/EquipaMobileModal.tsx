"use client";

import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";

interface EquipaMobileModalProps {
  activeModal: "feedback" | "bio" | null;
  handleClose: () => void;
  showModal: boolean;
  isMobile: boolean;
}

export default function EquipaMobileModal({
  activeModal,
  handleClose,
  showModal,
  isMobile,
}: EquipaMobileModalProps) {
  return (
    <div
      className={`
        absolute inset-0 z-60 lg:hidden
        transition-all duration-500 ease-in-out
        img-shadow rounded-[3rem]
        top-[38%] -left-8 -right-8 -bottom-12
        ${
          showModal
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      {activeModal === "feedback" && (
        <ModalFeedback isActive onClose={handleClose} isMobile={isMobile} />
      )}
      {activeModal === "bio" && (
        <ModalBio isActive onClose={handleClose} isMobile={isMobile} />
      )}
    </div>
  );
}
