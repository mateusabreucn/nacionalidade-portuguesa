"use client";

import Image from "next/image";
import { useState } from "react";
import CardBranco from "./components/CardBranco";
import CardFoto from "./components/CardFoto";
import { NomeEquipa } from "./enums/NomeEquipa";
import IconBadge from "./components/IconBadge";
import ModalFeedback from "./components/Feedback/ModalFeedback";

export default function Equipa() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [ignoreHover, setIgnoreHover] = useState(false);

  const showModal = isHovered || isLocked;

  const handleMouseEnter = () => {
    if (!ignoreHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIgnoreHover(false);
  };

  const handleIconClick = () => {
    if (isLocked) {
      setIsLocked(false);
      setIgnoreHover(true);
      setIsHovered(false);
    } else {
      setIsLocked(true);
      setIgnoreHover(false);
    }
  };

  return (
    <CardBranco titulo="Quem somos nós">
      {/* Container principal com ordenação flexível */}
      <div className="flex flex-col w-full">
        {/* Seção superior: Amanda + Texto/Modal */}
        <div
          className="
          flex flex-col lg:flex-row
          items-center justify-between
          gap-y-8 lg:gap-y-16 gap-x-10 xl:gap-x-18
          w-full"
        >
          {/* Foto Amanda - sempre primeiro */}
          <div className="relative w-[90%] lg:w-[50%] order-1">
            <CardFoto
              src={`/Equipa - ${NomeEquipa.AmandaCDantas}.png`}
              nome={NomeEquipa.AmandaCDantas}
              bigger
            />

            <div
              className="
              absolute
              bottom-4 md:bottom-8 lg:-bottom-6 xl:-bottom-10
              right-0 md:-right-8 lg:-right-10 xl:-right-16
            "
            >
              <IconBadge
                icon={
                  isLocked ? "/Icons/Close.svg" : "/Icons/Equipa/Trofeu.svg"
                }
                altText={isLocked ? "Fechar Feedback" : "Ícone de Troféu"}
                onClick={handleIconClick}
                isActive={isLocked}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                size="sm:w-24 md:w-24 xl:w-32 2xl:w-36"
              />
            </div>
          </div>

          {/* Texto/Modal - terceiro no mobile, segundo no desktop */}
          <div
            className="
            relative
            w-full max-w-[900px]
            aspect-video md:aspect-2/1
            flex items-center justify-center
            order-3 lg:order-2"
          >
            <div
              className={`
                absolute inset-0
                w-full h-full
                transition-opacity duration-500 ${
                  showModal ? "opacity-0" : "opacity-100"
                }`}
            >
              <Image
                src="/Icons/Ellipse.svg"
                fill
                alt="Fundo decorativo"
                className="object-contain"
                priority
              />
            </div>

            <div
              className={`
                relative
                px-[11%] pb-[3%]
                text-start h-full
                flex items-center justify-center
                transition-opacity duration-500 ${
                  showModal ? "opacity-0 pointer-events-none" : "opacity-100"
                }
              `}
            >
              <p
                className="font-josefin
                text-xl
                md:text-2xl
                xl:text-[2rem]
                2xl:text-4xl
                leading-tight md:leading-snug
              "
              >
                Há mais de sete anos, ajudamos brasileiros a transformarem o
                sonho da cidadania portuguesa em realidade.
              </p>
            </div>

            <div
              className={`
                absolute
                inset-0
                -left-6
                transition-all duration-500 ease-in-out
                ${
                  showModal
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
              `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ModalFeedback isActive={showModal} />
            </div>
          </div>

          {/* Três fotos - segundo no mobile, terceiro no desktop */}
          <div
            className="
            w-full
            flex flex-row
            gap-x-4 md:gap-x-8
            items-center justify-center
            order-2 lg:hidden"
          >
            <div className="w-1/4">
              <CardFoto
                src={`/Equipa - ${NomeEquipa.ThaysaBBarbosa}.jpg`}
                nome={NomeEquipa.ThaysaBBarbosa}
              />
            </div>

            <div className="w-1/4">
              <CardFoto
                src={`/Equipa - ${NomeEquipa.LucianaFAlvarino}.jpg`}
                nome={NomeEquipa.LucianaFAlvarino}
              />
            </div>

            <div className="w-1/4">
              <CardFoto
                src={`/Equipa - ${NomeEquipa.MargarethLeith}.jpg`}
                nome={NomeEquipa.MargarethLeith}
              />
            </div>
          </div>
        </div>

        {/* Três fotos - versão desktop (embaixo) */}
        <div
          className="
          hidden lg:flex
          relative
          mx-auto
          mt-18 md:mt-24 lg:mt-36
          flex-row
          md:gap-x-20
          items-center justify-center"
        >
          <div className="w-1/2 md:w-1/4 lg:w-1/5">
            <CardFoto
              src={`/Equipa - ${NomeEquipa.ThaysaBBarbosa}.jpg`}
              nome={NomeEquipa.ThaysaBBarbosa}
            />
          </div>

          <div className="w-1/2 md:w-1/4 lg:w-1/5">
            <CardFoto
              src={`/Equipa - ${NomeEquipa.LucianaFAlvarino}.jpg`}
              nome={NomeEquipa.LucianaFAlvarino}
            />
          </div>

          <div className="w-1/2 md:w-1/4 lg:w-1/5">
            <CardFoto
              src={`/Equipa - ${NomeEquipa.MargarethLeith}.jpg`}
              nome={NomeEquipa.MargarethLeith}
            />
          </div>
        </div>
      </div>
    </CardBranco>
  );
}
