"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CardBranco from "./components/CardBranco";
import CardFoto from "./components/CardFoto";
import { NomeEquipa } from "./enums/NomeEquipa";
import IconBadge from "./components/IconBadge";
import ModalFeedback from "./components/Feedback/ModalFeedback";

export default function Equipa() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [ignoreHover, setIgnoreHover] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const showModal = isHovered || isLocked || (isInView && isMobile);

  // Detectar se é mobile (< 1024px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Intersection Observer para detectar quando a seção está visível (apenas mobile)
  useEffect(() => {
    if (!isMobile) {
      setIsInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 50% da seção visível para ativar
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!ignoreHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIgnoreHover(false);
  };

  const handleClose = () => {
    setIsLocked(false);
    setIgnoreHover(true);
    setIsHovered(false);
  };

  const handleIconClick = () => {
    if (isLocked) {
      handleClose();
    } else {
      setIsLocked(true);
      setIgnoreHover(false);
    }
  };

  return (
    <CardBranco titulo="Quem somos nós">
      {/* Container principal com ordenação flexível */}
      <div ref={sectionRef} className="flex flex-col w-full relative">
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
              -right-4 sm:-right-6 md:-right-8 lg:-right-10 xl:-right-16
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
                size="w-14 sm:w-24 xl:w-32 2xl:w-36"
              />
            </div>
          </div>

          {/* Texto/Modal - terceiro no mobile, segundo no desktop */}
          <div
            className="
            relative
            w-full max-w-[900px]
            aspect-13/4 sm:aspect-3/1 lg:aspect-video
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
                text-[0.7rem]
                sm:text-xl
                md:text-2xl
                xl:text-[2rem]
                2xl:text-4xl
                text-center lg:text-left
                leading-tight md:leading-snug
              "
              >
                Há mais de sete anos, ajudamos brasileiros a transformarem o
                sonho da cidadania portuguesa em realidade.
              </p>
            </div>

            {/* Modal Desktop - dentro da div do texto */}
            <div
              className={`
                absolute
                inset-0
                -left-6
                hidden lg:block
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

          {/* Três fotos - versão mobile */}
          <div
            className="
            w-full
            flex flex-row
            sm:mt-6 md:mt-8
            sm:mb-4
            gap-x-6 sm:gap-x-10 md:gap-x-12
            items-center justify-evenly
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

        {/* Modal Mobile - posicionado absolutamente sobre o container */}
        <div
          className={`
            absolute
            inset-0
            z-10
            lg:hidden
            transition-all duration-500 ease-in-out
            img-shadow
            rounded-[3rem]
            top-[45%]
            -left-8 -right-8 -bottom-10
            md:-left-16 md:-right-18 md:-bottom-12
            ${
              showModal
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
          `}
        >
          <ModalFeedback isActive={showModal} onClose={handleClose} isMobile />
        </div>

        {/* Três fotos - versão desktop */}
        <div
          className="
          hidden lg:flex
          relative
          w-full
          lg:mt-32 xl:mt-40
          gap-14 xl:gap-20
          flex-row
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
