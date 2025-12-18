import Image from "next/image";
import { WhatsAppIcon } from "./Icons/WhatsAppIcons";

export default function PopUpWhatsApp() {
  return (
    <a
      href="https://wa.me/SEU_NUMERO_AQUI"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        flex items-center justify-center
        rounded-full
        z-50
        p-3
        w-14 h-14
        sm:w-16 sm:h-16
        lg:w-20 lg:h-20
        xl:w-24 xl:h-24
        bg-background border-2 border-amber-950
        bottom-4 right-4
        cursor-pointer
        animate-pulse-whatsapp
        hover:scale-110
        transition-transform"
    >
      <WhatsAppIcon
        className="
          w-8 h-8
          sm:w-10 sm:h-10
          lg:w-12 lg:h-12
          xl:w-16 xl:h-16
          text-[#25D366]"
      />
    </a>
  );
}
