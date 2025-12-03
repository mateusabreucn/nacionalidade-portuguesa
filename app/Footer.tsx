import InfoFooter from "./components/InfoFooter";

export default function Footer() {
  return (
    <footer
      className="
      mt-16 lg:mt-20 xl:mt-24
      mb-4 lg:mb-8 xl:mb-12
      flex justify-center items-center
      gap-x-14 lg:gap-x-36 xl:gap-x-48 2xl:gap-x-64
    "
    >
      <InfoFooter icon="/Icons/Footer/Loc.svg" altText="Ícone de Localização">
        <p>Avenida Mouzinho de Albuquerque</p>
        <p>102, 1º andar, sala 3</p>
        <p>4490-409 Póvoa de Varzim</p>
        <p>Portugal</p>
      </InfoFooter>

      <InfoFooter icon="/Icons/Footer/Contato.svg" altText="Ícone de Contato">
        <p>Contatos</p>
        <p>+351 927417601</p>
        <p>(Chamada para a rede móvel nacional)</p>
        <p>7135@solicitador.net</p>
      </InfoFooter>
    </footer>
  );
}
