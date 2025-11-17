import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-fit flex justify-between items-center">
      <Image src="/logo.png" alt="Logo" width={407} height={90} />

      <nav className="flex gap-16">
        <a href="#" className="text-black">
          Home
        </a>

        <a href="#" className="text-black">
          Equipa
        </a>

        <a href="#" className="text-black">
          Serviços
        </a>

        <a href="#" className="text-black">
          Contato
        </a>
      </nav>

      <div>
        <button
          className="
            bg-button-dark text-white rounded px-6 py-4 
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
