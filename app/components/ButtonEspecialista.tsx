import React from "react";
import WhatsAppLink from "./WhatsAppLink";

interface ButtonEspecialistaProps {
  className?: string;
  onClick?: () => void;
}

export default function ButtonEspecialista({
  className = "",
  onClick,
}: ButtonEspecialistaProps) {
  return (
    <WhatsAppLink
      onClick={onClick}
      className={`
        inline-block text-center
        p-[clamp(0.5rem,0.75vw,1rem)]
        lg:p-[clamp(0.75rem,0.75vw,1.2rem)]
        text-[clamp(0.75rem,1vw,1.2rem)]
        lg:text-[clamp(0.8rem,1vw,1.5rem)]
        bg-btn-dark rounded-lg
        border border-border-default
        text-white
        cursor-pointer
        hover:brightness-80 hover:scale-105
        transition-all duration-300
        ${className}
      `}
    >
      Fale com um Especialista
    </WhatsAppLink>
  );
}
