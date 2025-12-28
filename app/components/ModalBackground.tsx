import React from "react";

interface ModalBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function ModalBackground({
  children,
  className = "",
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
      {children}
    </div>
  );
}
