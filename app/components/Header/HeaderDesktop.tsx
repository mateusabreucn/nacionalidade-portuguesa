import CustomLink from "./CustomLink";

export default function HeaderDesktop() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:gap-6 xl:gap-10 2xl:gap-12">
        <CustomLink name="Home" href="" />
        <CustomLink name="Equipa" href="equipa" />
        <CustomLink name="Serviços" href="servicos" />
        <CustomLink name="Contato" href="contato" />
      </nav>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <button
          className="
            bg-button-dark text-white rounded-xl p-3 xl:p-4
            border border-border-button cursor-pointer
            hover:brightness-80 transition-all
            hover:scale-105 duration-300
            text-xs xl:text-sm 2xl:text-base
          "
        >
          Fale com um Especialista
        </button>
      </div>
    </>
  );
}
