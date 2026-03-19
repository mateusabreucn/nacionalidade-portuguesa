"use client";

import { useState, useEffect } from "react";
import { WhatsAppIcon } from "./Icons/WhatsAppIcons";
import WhatsAppLink from "./WhatsAppLink";

export default function PopUpWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const isMdScreenOrLarger = window.innerWidth >= 768;
      const hasScrolledEnough = window.pageYOffset > 110;

      if (isMdScreenOrLarger) {
        setIsVisible(hasScrolledEnough);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const visibilityClasses = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0 pointer-events-none";

  return (
    <WhatsAppLink
      className={`
        fixed bottom-[clamp(1rem,1.5vw,3rem)] right-[clamp(1rem,2vw,3rem)] z-80
        flex items-center justify-center
        w-[clamp(3rem,5.5vw,9rem)] h-[clamp(3rem,5.5vw,9rem)]
        rounded-full bg-bg-card img-shadow
        cursor-pointer
        transition-all duration-300 ease-in-out hover:scale-110
        ${visibilityClasses}
      `}
    >
      <WhatsAppIcon className="w-3/5" />
    </WhatsAppLink>
  );
}
