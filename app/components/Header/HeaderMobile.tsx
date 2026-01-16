"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden absolute right-0 flex flex-col gap-1.5 w-8 h-8 md:w-12 md:h-12 justify-center items-center z-50"
        aria-label="Menu"
      >
        <Image src="/Icons/Header/Menu.png" alt="Menu" fill />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[65%] max-w-[300px] bg-bg-card text-text-secondary shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          {/* Menu Title */}
          <h2 className="font-josefin text-5xl text-center mt-4 mb-8">Menu</h2>

          {/* Navigation Links */}
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
