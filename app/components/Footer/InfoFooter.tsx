"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface InfoFooterProps {
  icon: string;
  altText: string;
  link: string;
  linkMobile?: string;
  children: React.ReactNode;
}

export default function InfoFooter({
  icon,
  altText,
  link,
  linkMobile,
  children,
}: InfoFooterProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="
        flex items-center justify-center
        w-full
        gap-x-4 sm:gap-x-8 lg:gap-x-2
        truncate
      "
    >
      <a
        href={isMobile ? linkMobile : link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-square w-16 sm:w-28 lg:w-32 2xl:w-44 3xl:w-52"
      >
        <Image src={icon} alt={altText} fill className="object-cover" />
      </a>

      <div className="truncate text-[0.6rem] sm:text-lg lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl">
        {children}
      </div>
    </div>
  );
}
