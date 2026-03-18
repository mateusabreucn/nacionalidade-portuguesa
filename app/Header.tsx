import Image from "next/image";
import Link from "next/link";
import HeaderDesktop from "@components/Header/HeaderDesktop";
import HeaderMobile from "@components/Header/HeaderMobile";
import ButtonEspecialista from "@components/ButtonEspecialista";

interface HeaderProps {
  showNavLinks?: boolean;
}

export default function Header({ showNavLinks = true }: HeaderProps) {
  return (
    <header
      className="
        relative
        flex justify-between items-center
        h-fit
        py-0 md:py-4
        lg:gap-x-10 2xl:mx-8 3xl:mx-12
      "
    >
      <Link
        href="/"
        className="
          w-[55%] md:w-[50%] lg:w-[22%]
          h-auto mx-auto lg:mx-0
        "
      >
        <Image src="/logo.png" alt="Logo" width={600} height={120} />
      </Link>

      {showNavLinks && (
        <>
          <HeaderDesktop />
          <HeaderMobile />
        </>
      )}

      <div className="hidden lg:block">
        <ButtonEspecialista />
      </div>
    </header>
  );
}
