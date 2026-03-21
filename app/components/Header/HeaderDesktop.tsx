import CustomLink from "./CustomLink";

export default function HeaderDesktop() {
  return (
    <nav className="hidden lg:flex gap-[clamp(1.5rem,3vw,4rem)]">
      <CustomLink name="Home" href="" />
      <CustomLink name="Perfil" href="perfil" />
      <CustomLink name="Serviços" href="servicos" />
      <CustomLink name="Contato" href="contato" />
    </nav>
  );
}
