import InfoFooter from "@components/Footer/InfoFooter";
import WhatsAppLink, { getWhatsAppUrl } from "@components/WhatsAppLink";

export default function Footer() {
  return (
    <footer
      className="
        w-full mx-auto
        flex flex-col lg:flex-row
        justify-start items-start lg:justify-center lg:items-center
        mt-[clamp(2rem,6vw,6rem)]
        mb-[clamp(2.5rem,3vw,3rem)]
        gap-y-[clamp(2.5rem,5vw,4rem)] lg:gap-x-[clamp(5rem,10vw,12rem)]
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
        linkMobile={getWhatsAppUrl()}
        link="mailto:7135@solicitador.net"
      >
        <p>Contatos</p>
        <WhatsAppLink>+351 927417601</WhatsAppLink>
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
