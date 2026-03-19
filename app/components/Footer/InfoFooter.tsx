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
        @container
        flex items-center justify-start lg:justify-center
        w-full
        gap-[clamp(0.25rem,2cqw,2rem)]
        truncate
      "
    >
      <a
        href={isMobile ? linkMobile : link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative shrink-0 aspect-square w-[clamp(4rem,20cqw,14rem)]"
      >
        <Image src={icon} alt={altText} fill sizes="14rem" className="object-cover" />
      </a>

      <div className="truncate text-[clamp(0.5rem,4cqw,2rem)]">{children}</div>
    </div>
  );
}
