// ✅ É possível editar esse arquivo — Consulte o GUIA_EDICAO.md na raiz do projeto.

import { ServicoData } from "./tipos";

export const servicosData: ServicoData[] = [
  {
    id: "nacionalidade",
    titulo: "Nacionalidade",
    icon: "/Icons/Servicos/Nacionalidade.png",
    altText: "Ícone de Nacionalidade",
    topicos: [
      "Os processos de cidadania, vistos, reagrupamento familiar e naturalização, são orientados de forma a oferecer um acompanhamento completo para assegurar a regularização em Portugal e no Brasil;",
      "Cada processo é conduzido com rigor técnico, clareza e proximidade, garantindo confiança em todas as etapas dos processos de nacionalidade portuguesa ou brasileira;",
      "A avaliação prévia da viabilidade do seu processo é gratuita.",
      "Trabalho conjunto com cartórios, genealogistas e tradutores para processos mais ágeis e seguros;",
      "Representação junto a Conservatórias, Bancos, Autoridade Tributária, AIMA, Instituto da Segurança Social, entre outros.",
    ],
    link: {
      href: "/nacionalidade",
      label: "Ler Mais e Preencher Formulário",
    },
  },
  {
    id: "imigracao",
    titulo: "Vistos e Imigração",
    icon: "/Icons/Servicos/Imigracao.png",
    altText: "Ícone de Vistos e Imigração",
    topicos: [
      "Autorização de Residência – Apoio na obtenção e renovação de autorizações de residência para trabalho, estudo ou reagrupamento familiar;",
      "Vistos de Curta e Longa Duração – Assistência na obtenção de vistos Schengen e nacionais para diferentes finalidades;",
      "Nacionalidade Portuguesa – Acompanhamento em processos de atribuição da nacionalidade por descendência e aquisição por casamento, união estável ou tempo de residência;",
      "Recursos e Impugnações – Representação em casos de recusa de vistos ou autorizações de residência junto das autoridades competentes.",
    ],
  },
  {
    id: "sentenca",
    titulo: "Sentença Estrangeira",
    icon: "/Icons/Servicos/Sentenca.png",
    altText: "Ícone de Sentença Estrangeira",
    topicos: [
      "Revisão e confirmação de sentenças estrangeiras;",
      "As sentenças judiciais estrangeiras, para serem válidas em Portugal, devem ser revistas e confirmadas por tribunal português;",
      "São exemplos: as sentenças de divórcio, de adoção, de reconhecimento de união estável e de investigação de paternidade;",
      "O processo de revisão de sentença estrangeira é judicial, obriga ao acompanhamento por advogado e apenas pode ser feito em Portugal.",
    ],
  },
  {
    id: "familia",
    titulo: "Família e Sucessões",
    icon: "/Icons/Servicos/Familia.png",
    altText: "Ícone de Família e Sucessões",
    descricao:
      "Ampla experiência na assessoria a clientes estrangeiros e portugueses no que diz respeito a processos de casamento em Portugal. São alguns dos serviços do escritório:",
    topicos: [
      "Preparação para casamento em âmbito nacional;",
      "Preparação para casamento em âmbito internacional;",
      "Elaboração de contrato pré-nupcial;",
      "Representação para casamento por procuração.",
    ],
    link: {
      href: "/familia-sucessoes",
      label: "Ler Mais",
    },
  },
  {
    id: "imoveis",
    titulo: "Imóveis",
    icon: "/Icons/Servicos/Imoveis.png",
    altText: "Ícone de Imóveis",
    descricao:
      "O escritório oferece um leque de serviços na área do Direito Imobiliário aos clientes que procuram comprar casa em Portugal.\nOs serviços prestados poderão incluir:",
    topicos: [
      "Assessoria em operações de compra e venda de casas em Portugal;",
      "Apoio no desenvolvimento de projetos de promoção do imóvel (construção/reabilitação do imóvel);",
      "Elaboração, negociação e execução de contratos;",
      "Outros Procedimentos Administrativos.",
    ],
  },
  {
    id: "empresas",
    titulo: "Empresas",
    icon: "/Icons/Servicos/Empresas.png",
    altText: "Ícone de Empresas",
    descricao:
      "Acompanhamos e lidamos com o processo de abrir um negócio em Portugal.\nOs serviços prestados poderão incluir:",
    topicos: [
      "Abertura de empresa em Portugal;",
      "A constituição, dissolução e liquidação de sociedades;",
      "Os inerentes ao desenvolvimento da atividade empresarial e à sua organização interna (alterações estatutárias, acordos entre sócios, etc.);",
      "A assessoria e aconselhamento legal na realização de investimentos estrangeiros em Portugal;",
      "A assessoria no exame, revisão e negociação de contratos internacionais.",
    ],
    link: {
      href: "/empresas",
      label: "Ler Mais",
    },
  },
];
