"use client";

import Image from "next/image";
import CustomLink from "./components/CustomLink";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-fit flex justify-between items-center py-0 md:py-4 relative">
      <a
        href="#"
        className="w-[55%] md:w-[50%] lg:w-[22%] h-auto mx-auto lg:mx-0 hover:scale-105 duration-300"
      >
        <Image src="/logo.png" alt="Logo" width={400} height={90} />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:gap-6 xl:gap-10 2xl:gap-12">
        <CustomLink name="Home" href="" />
        <CustomLink name="Equipa" href="equipa" />
        <CustomLink name="Serviços" href="servicos" />
        <CustomLink name="Contato" href="contato" />
      </nav>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <button
          className="
            bg-button-dark text-white rounded-xl p-3 xl:p-4
            border border-border-button cursor-pointer
            hover:brightness-80 transition-all
            hover:scale-105 duration-300
            text-xs xl:text-sm 2xl:text-base
          "
        >
          Fale com um Especialista
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden absolute right-0 flex flex-col gap-1.5 w-8 h-8 md:w-12 md:h-12 justify-center items-center z-50"
        aria-label="Menu"
      >
        <Image src="/Icons/Header/Menu.svg" alt="Menu" fill />
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
        className={`lg:hidden fixed top-0 right-0 h-full w-[65%] max-w-[300px] bg-card-branco text-font-secondary shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          {/* Menu Title */}
          <h2 className="font-josefin text-5xl text-center mt-4 mb-8">Menu</h2>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center text-center text-xl">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Home
            </a>

            <div className="w-28 border-t border-black" />

            <a
              href="#equipa"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Equipa
            </a>

            <div className="w-28 border-t border-black" />

            <a
              href="#servicos"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Serviços
            </a>

            <div className="w-28 border-t border-black" />

            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="py-9 hover:text-gray-600 transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
