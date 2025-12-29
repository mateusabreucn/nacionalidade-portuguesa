"use client";

import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";

interface EquipaMobileModalProps {
  activeModal: "feedback" | "bio" | null;
  handleClose: () => void;
  isMobile: boolean;
}

export default function EquipaMobileModal({
  activeModal,
  handleClose,
  isMobile,
}: EquipaMobileModalProps) {
  const showModal = !!activeModal;

  return (
    <div
      className={`
        absolute z-60 lg:hidden
        transition-all duration-500 ease-in-out
        sm:top-[38%] left-0 right-0 bottom-0
        ${activeModal === "feedback" ? "top-0" : "top-[38%]"}
        ${
          showModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
