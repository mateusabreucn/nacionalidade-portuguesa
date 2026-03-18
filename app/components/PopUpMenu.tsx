"use client";

import { useState, useEffect } from "react";
import { WhatsAppIcon } from "./Icons/WhatsAppIcons";
import WhatsAppLink from "./WhatsAppLink";
import CloseIcon from "./Icons/CloseIcon";

const MenuIconSVG = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const FormIconSVG = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function PopUpMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const subBtnSizes = "w-[clamp(2.5rem,6vw,3.5rem)] h-[clamp(2.5rem,6vw,3.5rem)]";
  const mainBtnSizes = "w-[clamp(3rem,8vw,4rem)] h-[clamp(3rem,8vw,4rem)]";
  const iconSizes = "w-[clamp(1.2rem,4vw,1.5rem)] h-[clamp(1.2rem,4vw,1.5rem)]";
  const mainIconSizes = "w-[clamp(1.5rem,5vw,2rem)] h-[clamp(1.5rem,5vw,2rem)]";

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-80
        flex flex-col items-end gap-3
        transition-all duration-300 ease-in-out
        ${visibilityClasses}
      `}
    >
      {/* Menu Items */}
      <div
        className={`
          flex flex-col items-end gap-3
          transition-all duration-300 ease-out origin-bottom
          ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"}
        `}
      >
        <button
          data-tally-open="b5Oey0"
          data-tally-emoji-text="👋"
          data-tally-emoji-animation="wave"
          data-tally-auto-close="2000"
          data-tally-form-events-forwarding="1"
          className={`
            flex items-center gap-3
            cursor-pointer
            hover:scale-105 transition-transform duration-300
          `}
        >
          <span className="bg-bg-card shadow-md px-5 py-2 rounded-lg text-[clamp(0.75rem,2vw,0.875rem)] font-josefin font-medium text-text-accent">
            Formulário
          </span>
          <div className={`flex items-center justify-center ${subBtnSizes} rounded-full bg-bg-card img-shadow p-2`}>
            <FormIconSVG className={`${iconSizes} text-btn-accent`} />
          </div>
        </button>

        <WhatsAppLink
          className={`
            flex items-center gap-3
            cursor-pointer
            hover:scale-105 transition-transform duration-300
          `}
        >
          <span className="bg-bg-card shadow-md px-5 py-2 rounded-lg text-[clamp(0.75rem,2vw,0.875rem)] font-josefin font-medium text-text-accent">
            WhatsApp
          </span>
          <div className={`flex items-center justify-center ${subBtnSizes} rounded-full bg-bg-card img-shadow p-2`}>
            <WhatsAppIcon className={iconSizes} />
          </div>
        </WhatsAppLink>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center
          ${mainBtnSizes}
          rounded-full bg-btn-accent shadow-xl shadow-black/20
          cursor-pointer
          transition-transform duration-500 ease-in-out
          hover:brightness-110
          ${isOpen ? "rotate-90" : "rotate-0 hover:scale-105"}
        `}
      >
        {isOpen ? (
          <CloseIcon className={`${mainIconSizes} text-white transition-opacity`} />
        ) : (
          <MenuIconSVG className={`${mainIconSizes} text-white transition-opacity`} />
        )}
      </button>
    </div>
  );
}
