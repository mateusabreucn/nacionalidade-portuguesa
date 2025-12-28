"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className="fixed bottom-4 left-4 right-4 z-[100] p-4 sm:p-6 bg-card-branco rounded-2xl img-shadow max-w-4xl mx-auto animate-slide-up">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Ícone */}
        <div className="shrink-0">
          <CookieIcon className="w-12 h-12 sm:w-16 sm:h-16 text-[#4A3B32]" />
        </div>

        {/* Texto */}
        <div className="text-sm sm:text-base text-center sm:text-left text-[#4A3B32]">
          <p>
            O nosso site utiliza cookies para analisar tráfego e apresentar
            anúncios relevantes. Ao clicar em "Aceitar", você concorda com o uso
            de cookies para essas finalidades.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 mt-2 sm:mt-0">
          <Link
            href="/politica-privacidade"
            className="
              text-center bg-transparent border border-[#4A3B32] text-[#4A3B32] rounded-lg px-5 py-2
              text-sm font-medium hover:bg-[#EFEBE9] transition-colors w-28"
          >
            Ler mais
          </Link>

          <button
            onClick={handleAccept}
            className="
              bg-[#4A3B32] text-white rounded-lg px-5 py-2 w-28
              text-sm font-medium hover:brightness-110 transition-all cursor-pointer"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
