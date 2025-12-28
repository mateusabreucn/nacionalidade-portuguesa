import InfoFooter from "./components/InfoFooter";

export default function Footer() {
  return (
    <footer
      className="
      w-full mx-auto
      flex justify-center items-center
      flex-col md:flex-row
      mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24
      mb-4 lg:mb-8 xl:mb-12
      gap-8 lg:gap-x-36 xl:gap-x-48
    "
    >
      <InfoFooter
        icon="/Icons/Footer/Loc.svg"
        altText="Ícone de Localização"
        link="https://share.google/89NLuQfppCx3EsEH4"
      >
        <p>Avenida Mouzinho de Albuquerque</p>
        <p>102, 1º andar, sala 3</p>
        <p>4490-409 Póvoa de Varzim</p>
        <p>Portugal</p>
      </InfoFooter>

      <InfoFooter
        icon="/Icons/Footer/Contato.svg"
        altText="Ícone de Contato"
        linkMobile="tel:+351 927417601"
        link="mailto:7135@solicitador.net"
      >
        <p>Contatos</p>
        <a href="tel:+351 927417601" target="_blank" rel="noopener noreferrer">
          +351 927417601
        </a>
        <p>(Chamada para a rede móvel nacional)</p>
        <a
          href="mailto:7135@solicitador.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          7135@solicitador.net
        </a>
      </InfoFooter>
    </footer>
  );
}
