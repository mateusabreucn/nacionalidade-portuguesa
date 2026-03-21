"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkVisibility = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const handleScrollDown = () => {
    const perfilSection = document.getElementById("perfil");
    if (perfilSection) {
      perfilSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`
        hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40
        lg:flex items-center justify-center
        transition-opacity duration-500 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={handleScrollDown}
        className="cursor-pointer animate-bounce"
        aria-label="Rolar para baixo"
      >
        <Image
          src="/Icons/Feedback/ArrowRight.svg"
          alt="Scroll Down"
          width={64}
          height={64}
          className="rotate-90 w-[clamp(2rem,4vw,5rem)] h-[clamp(2rem,4vw,5rem)]"
        />
      </button>
    </div>
  );
}
