import InfoFooter from "@components/Footer/InfoFooter";

export default function Footer() {
  return (
    <footer
      className="
        w-full mx-auto
        flex flex-col lg:flex-row justify-center items-center
        mt-8 sm:mt-12 md:mt-18 lg:mt-20 xl:mt-24
        mb-10 xl:mb-12
        gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-x-20 xl:gap-x-48
      "
    >
      <InfoFooter
        icon="/Icons/Footer/Loc.png"
        altText="Ícone de Localização"
        link="https://share.google/89NLuQfppCx3EsEH4"
      >
        <p>Avenida Mouzinho de Albuquerque</p>
        <p>102, 1º andar, sala 3</p>
        <p>4490-409 Póvoa de Varzim</p>
        <p>Portugal</p>
      </InfoFooter>

      <InfoFooter
        icon="/Icons/Footer/Contato.png"
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
