import ModalBio from "./Biografia/ModalBio";
import ModalFeedback from "./Feedback/ModalFeedback";

interface PerfilMobileModalProps {
  activeModal: "feedback" | "bio" | null;
  handleClose: () => void;
  isMobile: boolean;
}

export default function PerfilMobileModal({
  activeModal,
  handleClose,
  isMobile,
}: PerfilMobileModalProps) {
  const showModal = !!activeModal;

  return (
    <div
      className={`
        absolute lg:hidden
        top-auto bottom-0 sm:bottom-[clamp(2rem,5vw,4rem)]
        left-0 right-0
        sm:left-[clamp(1rem,4vw,3.5rem)] sm:right-[clamp(1rem,4vw,3.5rem)]
        max-h-full sm:max-h-[calc(100%-clamp(4rem,10vw,8rem))]
        z-70
        transition-all duration-500 ease-in-out
        ${showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
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
