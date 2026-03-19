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
        fixed bottom-6 right-6 z-80
        flex items-center justify-center
        h-12 w-12
        sm:h-14 sm:w-14
        lg:h-16 lg:w-16
        xl:h-20 xl:w-20
        2xl:w-22 2xl:h-22
        3xl:h-30 3xl:w-30
        4xl:h-36 4xl:w-36
        p-3
        rounded-full bg-bg-card img-shadow
        cursor-pointer
        transition-all duration-300 ease-in-out hover:scale-110
        ${visibilityClasses}
      `}
    >
      <WhatsAppIcon className="
      h-6 w-6
      sm:h-8 sm:w-8
      lg:h-120lg:w-10
      xl:w-14 xl:h-14
      3xl:h-20 3xl:w-20
      4xl:h-24 4xl:w-24" />
    </WhatsAppLink>
  );
}
