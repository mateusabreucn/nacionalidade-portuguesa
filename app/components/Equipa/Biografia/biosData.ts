// ✅ É possível editar esse arquivo — Consulte o GUIA_EDICAO.md na raiz do projeto.

export interface BioData {
  name: string;
  role: string;
  areas: string[];
  text: string;
  avatarSrc: string;
}

export const bioData: BioData = {
  name: "Amanda Cecília Dantas",
  role: "Solicitadora",
  areas: [
    "Direito dos Estrangeiros e Nacionalidade",
    "Direito Imobiliário",
    "Direito Comercial e Societário",
    "Direito Civil",
  ],
  text: "No nosso escritório, acreditamos que um bom acompanhamento jurídico começa pela escuta atenta e pela orientação clara. Por isso, trabalhamos lado a lado com os nossos clientes, explicando cada passo e apoiando na tomada de decisões informadas e seguras.\nA nossa atuação baseia-se em transparência, responsabilidade e ética profissional, princípios que orientam todas as relações com os clientes e o desenvolvimento de cada processo.\nComprometemo-nos a prestar um serviço sério, eficiente e personalizado, sempre com foco nas necessidades de quem nos procura e no estrito respeito pela lei e pelas normas deontológicas da profissão.",
  avatarSrc: "/Hero - Amanda.png",
};
