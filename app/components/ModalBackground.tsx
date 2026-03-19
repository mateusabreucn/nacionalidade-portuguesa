"use client";

import CloseIcon from "./Icons/CloseIcon";

interface ModalBackgroundProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function ModalBackground({
  children,
  className = "",
  onClose,
  showCloseButton = true,
}: ModalBackgroundProps) {
  return (
    <div
      className={`
        relative w-full h-full
        flex items-center justify-center
        pt-12 p-6 md:p-8 xl:p-8
        bg-bg-modal rounded-[3rem] shadow-xl
        ${className}
      `}
    >
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 sm:top-6 sm:right-6 2xl:top-8 2xl:right-8 4xl:top-12 4xl:right-12
            flex items-center justify-center
            w-8 h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14
            rounded-full bg-btn-close
            cursor-pointer z-20
            hover:bg-btn-close-hover transition-colors
          "
          aria-label="Fechar modal"
        >
          <CloseIcon className="w-5 h-5 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 text-text-primary" />
        </button>
      )}
      {children}
    </div>
  );
}
