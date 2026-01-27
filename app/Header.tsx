import Image from "next/image";
import Link from "next/link";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";

interface HeaderProps {
  showNavLinks?: boolean;
}

export default function Header({ showNavLinks = true }: HeaderProps) {
  return (
    <header className="h-fit flex justify-between items-center py-0 md:py-4 relative lg:gap-x-10 2xl:mx-8 3xl:mx-12">
      <Link
        href="/"
        className="
          w-[55%] md:w-[50%] lg:w-[22%]
          h-auto mx-auto lg:mx-0
          hover:scale-105 duration-300"
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
        <button
          className="
            bg-btn-dark text-white rounded-xl p-3 xl:p-4 3xl:p-5 4xl:p-6
            border border-border-default cursor-pointer
            hover:brightness-80 transition-all
            hover:scale-105 duration-300
            text-xs xl:text-sm 2xl:text-lg 3xl:text-xl 4xl:text-3xl
          "
        >
          Fale com um Especialista
        </button>
      </div>
    </header>
  );
}
