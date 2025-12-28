import Image from "next/image";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";

export default function Header() {
  return (
    <header className="h-fit flex justify-between items-center py-0 md:py-4 relative">
      <a
        href="#"
        className="w-[55%] md:w-[50%] lg:w-[22%] h-auto mx-auto lg:mx-0 hover:scale-105 duration-300"
      >
        <Image src="/logo.png" alt="Logo" width={400} height={90} />
      </a>

      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}
