import CustomLink from "./CustomLink";

export default function HeaderDesktop() {
  return (
    <nav className="hidden lg:flex lg:gap-6 xl:gap-10 2xl:gap-12">
      <CustomLink name="Home" href="" />
      <CustomLink name="Equipa" href="equipa" />
      <CustomLink name="Serviços" href="servicos" />
      <CustomLink name="Contato" href="contato" />
    </nav>
  );
}
