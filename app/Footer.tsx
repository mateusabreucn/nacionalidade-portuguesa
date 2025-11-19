import InfoFooter from "./components/InfoFooter";

export default function Footer() {
  return (
    <footer className="mt-28 mb-16 flex justify-center items-center gap-x-80">
      <InfoFooter icon="/Icons/Footer/Loc.svg" altText="Ícone de Localização">
        Avenida Mouzinho de Albuquerque
        <br />
        102, 1º andar, sala 3
        <br />
        4490-409 Póvoa de Varzim
        <br />
        Portugal
      </InfoFooter>

      <InfoFooter icon="/Icons/Footer/Contato.svg" altText="Ícone de Contato">
        Contatos
        <br />
        +351 927417601
        <br />
        (Chamada para a rede móvel nacional)
        <br />
        7135@solicitador.net
      </InfoFooter>
    </footer>
  );
}
