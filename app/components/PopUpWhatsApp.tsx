"use client";

import { useState, useEffect } from "react";
import { WhatsAppIcon } from "./Icons/WhatsAppIcons";

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

  return (
    <a
      href="https://wa.me/SEU_NUMERO_AQUI"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-bg-card p-3 img-shadow cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <WhatsAppIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16" />
    </a>
  );
}
