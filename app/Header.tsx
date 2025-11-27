"use client";

import Image from "next/image";
import CustomLink from "./components/CustomLink";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-fit flex justify-between items-center py-4 relative">
      <Image
        src="/logo.png"
        alt="Logo"
        width={400}
        height={90}
        className="w-[400px] lg:w-[300px] 2xl:w-[400px] h-auto mx-auto lg:mx-0"
      />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:gap-6 xl:gap-12 2xl:gap-16 text-xl font-medium">
        <CustomLink name="Home" href="#home" />
        <CustomLink name="Equipa" href="#equipa" />
        <CustomLink name="Serviços" href="#servicos" />
        <CustomLink name="Contato" href="#contato" />
      </nav>

      {/* Desktop Button */}
      <div className="hidden lg:block lg:text-base xl:text-lg 2xl:text-xl">
        <button
          className="
            bg-button-dark text-white rounded-xl px-6 py-4
            border border-border-button cursor-pointer
            hover:brightness-80 transition-all
          "
        >
          Fale com um Especialista
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
        aria-label="Menu"
      >
        <span
          className={`w-6 h-0.5 bg-button-dark transition-all ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-button-dark transition-all ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-button-dark transition-all ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg rounded-b-2xl mt-4 py-6 px-4 flex flex-col gap-4 z-50">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <CustomLink name="Home" href="#home" />
            <CustomLink name="Equipa" href="#equipa" />
            <CustomLink name="Serviços" href="#servicos" />
            <CustomLink name="Contato" href="#contato" />
          </nav>

          <button
            className="
              bg-button-dark text-white rounded-xl px-6 py-4
              border border-border-button cursor-pointer
              hover:brightness-80 transition-all
              mt-2
            "
          >
            Fale com um Especialista
          </button>
        </div>
      )}
    </header>
  );
}
