"use client";

import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";

interface EquipaDesktopModalProps {
  activeModal: "feedback" | "bio" | null;
  handleClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function EquipaDesktopModal({
  activeModal,
  handleClose,
  onMouseEnter,
  onMouseLeave,
}: EquipaDesktopModalProps) {
  const showModal = !!activeModal;

  return (
    <div
      className={`
        absolute
        hidden lg:flex
        top-0 left-0
        w-full
        max-h-[95%]
        transition-all duration-500 ease-in-out
        z-60
        ${showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {activeModal === "feedback" && (
        <ModalFeedback isActive onClose={handleClose} />
      )}
      {activeModal === "bio" && <ModalBio isActive onClose={handleClose} />}
    </div>
  );
}
