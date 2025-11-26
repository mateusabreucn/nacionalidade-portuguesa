import Image from "next/image";
import CustomLink from "./components/CustomLink";

export default function Header() {
  return (
    <header className="h-fit flex justify-between items-center mx-10">
      <Image src="/logo.png" alt="Logo" width={407} height={90} />

      <nav className="flex gap-16 text-xl font-medium">
        <CustomLink name="Home" href="home" />

        <CustomLink name="Equipa" href="equipa" />

        <CustomLink name="Serviços" href="servicos" />

        <CustomLink name="Contato" href="contato" />
      </nav>

      <div>
        <button
          className="
            bg-button-dark text-white rounded-xl px-6 py-4
            border border-border-button cursor-pointer
            hover:brightness-80 transition-all
          "
        >
          Fale com um Especialista
        </button>
      </div>
    </header>
  );
}
