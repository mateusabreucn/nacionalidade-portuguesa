import React, { ReactNode } from "react";
import Link from "next/link";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  phoneNumber?: string;
  message?: string;
  onClick?: () => void;
}

export function getWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppLink({
  children,
  className = "",
  phoneNumber = "351927417601",
  message = "Olá Amanda, vim pelo seu site e gostaria de entender mais sobre seus serviços! 👋",
  onClick,
}: WhatsAppLinkProps) {
  const waLink = getWhatsAppUrl(phoneNumber, message);

  return (
    <Link
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
