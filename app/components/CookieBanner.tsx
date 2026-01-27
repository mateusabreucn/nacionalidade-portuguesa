"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CookieIcon } from "./Icons/CookieIcon";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        setShowBanner(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className="
        fixed bottom-4 left-4 right-4 z-100
        max-w-4xl mx-auto
        p-4 sm:p-6
        bg-bg-card rounded-2xl img-shadow
        animate-slide-up
      "
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="shrink-0">
          <CookieIcon className="w-12 h-12 sm:w-16 sm:h-16 text-text-accent" />
        </div>

        <div className="text-sm sm:text-base text-center sm:text-left text-text-accent">
          <p>
            O nosso site utiliza cookies para analisar tráfego e apresentar
            anúncios relevantes. Ao clicar em "Aceitar", você concorda com o uso
            de cookies para essas finalidades.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 mt-2 sm:mt-0">
          <Link
            href="/politica-privacidade"
            className="
              w-28 px-5 py-2
              text-center text-sm font-medium text-text-accent
              bg-transparent border border-border-accent rounded-lg
              hover:bg-bg-modal transition-colors
            "
          >
            Ler mais
          </Link>

          <button
            onClick={handleAccept}
            className="
              w-28 px-5 py-2
              text-sm font-medium text-white
              bg-btn-accent rounded-lg
              cursor-pointer
              hover:brightness-110 transition-all
            "
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
