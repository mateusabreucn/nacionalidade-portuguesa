"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Perfil", href: "/#perfil" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Contacto", href: "/#contato" },
];

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
        <Image src="/Icons/Header/Menu.png" alt="Menu" fill sizes="3rem" />
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

          <nav className="flex flex-col items-center text-center text-[clamp(1rem,4vw,1.25rem)]">
            {NAV_LINKS.map((link, index) => (
              <div
                key={link.name}
                className="flex flex-col items-center w-full"
              >
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-9 hover:text-gray-600 transition-colors"
                >
                  {link.name}
                </a>
                {index < NAV_LINKS.length - 1 && (
                  <div className="w-28 border-t border-black" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
