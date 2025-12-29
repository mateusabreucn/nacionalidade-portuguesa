"use client";

import React from "react";
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
        bg-bg-modal
        rounded-[3rem]
        shadow-xl
        flex items-center justify-center
        p-6 md:p-8 xl:p-8
        ${className}
      `}
    >
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-btn-close hover:bg-btn-close-hover transition-colors z-20 cursor-pointer"
          aria-label="Fechar modal"
        >
          <CloseIcon className="w-5 h-5 text-text-primary" />
        </button>
      )}
      {children}
    </div>
  );
}
