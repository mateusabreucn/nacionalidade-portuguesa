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
    <div className="flex w-full items-center justify-center gap-x-1 truncate md:gap-x-2">
      <a
        href={isMobile ? linkMobile : link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-square w-16 sm:w-24 md:w-20 lg:w-32"
      >
        <Image src={icon} alt={altText} fill className="object-cover" />
      </a>

      <div className="truncate text-xs sm:text-lg lg:text-base xl:text-xl">
        {children}
      </div>
    </div>
  );
}
