"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="
          lg:hidden absolute right-0
          flex flex-col justify-center items-center
          w-8 h-8 md:w-12 md:h-12
          gap-1.5 z-50
        "
        aria-label="Menu"
      >
        <Image src="/Icons/Header/Menu.png" alt="Menu" fill />
      </button>

      <div
        className={`
          lg:hidden fixed inset-0
          bg-black/30 z-40
          transition-opacity duration-300
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`
          lg:hidden fixed top-0 right-0
          w-[65%] max-w-[300px] h-full
          bg-bg-card text-text-secondary
          shadow-2xl z-90
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full py-8 px-6">
          <h2 className="font-josefin text-5xl text-center mt-4 mb-8">Menu</h2>

          <nav className="flex flex-col items-center text-center text-xl">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Home
            </a>

            <div className="w-28 border-t border-black" />

            <a
              href="/#equipa"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Equipa
            </a>

            <div className="w-28 border-t border-black" />

            <a
              href="/#servicos"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Serviços
            </a>

            <div className="w-28 border-t border-black" />

            <a
              href="/#contato"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
