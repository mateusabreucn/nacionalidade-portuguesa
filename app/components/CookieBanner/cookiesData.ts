// ✅ É possível editar esse arquivo — Consulte o GUIA_EDICAO.md na raiz do projeto.

export interface OpcaoCookieData {
  id: "essential" | "dataProcessing" | "marketing";
  tituloDaOpcao: string;
  textoDescritivo: string;
  sempreAtivoObrigatorio?: boolean;
}

export const dadosDosCookies = {
  textoPrincipalDoBanner:
    "O nosso site utiliza cookies para analisar o tráfego e melhorar a sua experiência de navegação. Utilizamos ferramentas como Google Ads e Meta Ads para medir o desempenho das nossas campanhas. Pode gerir as suas preferências a qualquer momento.",
  urlDoLinkDaPolitica: "/politica-privacidade",
  textoDoLinkDaPolitica: "Política de Privacidade e Cookies",
  
  textosDosBotoes: {
    gerirCookies: "Gerir Cookies",
    fecharGerenciamento: "Fechar",
    aceitarTodos: "Aceitar Todos",
    salvarPreferencias: "Salvar Preferências",
    recusarTodos: "Recusar Todos (manter apenas essenciais)",
  },

  tituloDoGerenciamento: "Gerir as suas preferências de cookies",
  
  opcoesDeCookies: [
    {
      id: "essential",
      tituloDaOpcao: "Cookies essenciais (sempre ativos)",
      textoDescritivo:
        "Autorizo o tratamento de dados pessoais mínimos necessários para navegar no site e aceder às páginas públicas, sem envio de documentos. Inclui dados como endereço IP, cookies essenciais, preferências de idioma e outras informações de navegação.",
      sempreAtivoObrigatorio: true,
    },
    {
      id: "dataProcessing",
      tituloDaOpcao: "Tratamento de dados e documentos",
      textoDescritivo:
        "Autorizo o tratamento dos meus dados pessoais e dos documentos enviados, incluindo certidões e outros documentos necessários, para análise do meu pedido e prestação dos serviços solicitados. Inclui dados pessoais e documentos enviados pelo utilizador para emissão de certidões ou outros serviços administrativos.",
    },
    {
      id: "marketing",
      tituloDaOpcao: "Marketing e publicidade personalizada",
      textoDescritivo:
        "Autorizo a utilização dos meus dados para envio de comunicações informativas e promocionais, bem como para personalização de publicidade através de plataformas digitais, incluindo serviços da Meta Platforms e da Google. Este consentimento é totalmente opcional e pode ser retirado a qualquer momento.",
    },
  ] as OpcaoCookieData[],

  secaoAvancada: {
    textoBotaoMostrar: "Ver mais preferências de cookies",
    textoBotaoOcultar: "Ocultar preferências avançadas",
    avisoDeRecusa: {
      tituloDoAviso: "Recusar todos os cookies opcionais",
      paragrafoExplicativo:
        "Ao clicar em “Recusar todos”, você poderá navegar normalmente no site, mas alguns recursos permanecerão desativados: envio de formulários e marketing.",
      subtituloDosEssenciais: "Dados que ainda serão recolhidos (essenciais):",
      listaDeDadosEssenciais: [
        {
          nomeDoDado: "Cookies essenciais:",
          explicacaoDoDado:
            "necessários para que o site funcione corretamente, como manutenção de sessão, carregamento de páginas e preferências de idioma.",
        },
        {
          nomeDoDado: "Dados técnicos de navegação:",
          explicacaoDoDado:
            "endereço IP, tipo de navegador, resolução de ecrã, tempo de acesso às páginas — utilizados apenas para fins de segurança e funcionamento do site.",
        },
      ],
      notaImportanteNoFinal:
        "Sem consentimento adicional, você não poderá enviar formulários ou fazer upload de documentos, nem receber comunicações de marketing ou publicidade personalizada.",
    },
  },
};
