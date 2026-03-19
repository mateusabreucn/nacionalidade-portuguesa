// ✅ É possível editar esse arquivo — Consulte o GUIA_EDICAO.md na raiz do projeto.

import { DadosDaPagina } from "@components/ConteudoPagina/tipos";

export const dadosPoliticaPrivacidade: DadosDaPagina = {
  tituloDaPagina: "Política de Privacidade e Cookies",
  blocos: [
    {
      tipo: "paragrafo",
      texto:
        "O nacionalidade-portuguesa valoriza a privacidade e a proteção dos dados pessoais dos seus utilizadores. Cumprimos o Regulamento Geral sobre a Proteção de Dados e a Lei n.º 58/2019, garantindo que o tratamento de dados é lícito, leal e transparente.",
    },

    // ── 1. Responsável pelo Tratamento ──
    { tipo: "titulo", texto: "1. Responsável pelo Tratamento de Dados" },
    { tipo: "paragrafo", texto: "O responsável pelo tratamento dos dados é:" },
    {
      tipo: "listaSemMarcador",
      itens: [
        { rotulo: "Nome:", valor: "AMANDA CECILIA DANTAS" },
        {
          rotulo: "Morada:",
          valor:
            "Avenida Mouzinho de Albuquerque 102, 1º andar, sala 3, 4490-409, Póvoa de Varzim",
        },
        { rotulo: "E-mail:", valor: "amandadantas7135@gmail.com" },
      ],
    },
    { tipo: "separador" },

    // ── 2. Dados que Recolhemos ──
    { tipo: "titulo", texto: "2. Dados que Recolhemos" },
    {
      tipo: "paragrafo",
      texto: "Podemos recolher os seguintes dados pessoais:",
    },

    {
      tipo: "subtitulo",
      texto: "Dados fornecidos diretamente pelo utilizador",
    },
    {
      tipo: "lista",
      itens: [
        "Nome completo",
        "Endereço de email",
        "Número de telefone",
        "Nacionalidade",
        "Outras informações fornecidas voluntariamente através de formulários no website",
      ],
    },

    { tipo: "subtitulo", texto: "Dados de navegação" },
    {
      tipo: "lista",
      itens: [
        "Endereço IP",
        "Tipo de navegador",
        "Dispositivo utilizado",
        "Páginas visitadas e tempo de navegação",
      ],
    },

    { tipo: "subtitulo", texto: "Dados e documentos enviados pelo utilizador" },
    {
      tipo: "listaComIntro",
      intro:
        "No âmbito da prestação de serviços relacionados com processos administrativos e jurídicos, poderão ser solicitados documentos pessoais, tais como:",
      itens: [
        "Certidões de nascimento",
        "Documentos de identificação",
        "Registos civis",
        "Outros documentos necessários à análise ou instrução de processos",
      ],
    },
    {
      tipo: "paragrafo",
      texto:
        "Estes documentos poderão conter dados pessoais e dados sensíveis, sendo tratados exclusivamente para as finalidades relacionadas com o serviço solicitado.",
    },
    { tipo: "separador" },

    // ── 3. Finalidade do Tratamento ──
    { tipo: "titulo", texto: "3. Finalidade do Tratamento" },
    {
      tipo: "listaComIntro",
      intro: "Os dados pessoais recolhidos são utilizados para:",
      itens: [
        "Fornecer e gerir os serviços solicitados pelo utilizador",
        "Analisar pedidos relacionados com processos de nacionalidade ou serviços administrativos",
        "Comunicar com o utilizador sobre o estado do serviço ou pedido",
        "Cumprir obrigações legais",
        "Melhorar o funcionamento e desempenho do website",
        "Realizar campanhas de marketing digital e análise de desempenho publicitário",
      ],
    },
    { tipo: "separador" },

    // ── 4. Base Legal ──
    { tipo: "titulo", texto: "4. Base Legal" },
    {
      tipo: "listaComIntro",
      intro: "O tratamento dos dados pessoais baseia-se em:",
      itens: [
        "Consentimento do titular dos dados",
        "Execução de contrato ou diligências pré-contratuais solicitadas pelo titular",
        "Cumprimento de obrigações legais",
        "Interesse legítimo do responsável pelo tratamento, nomeadamente para melhoria dos serviços e análise de desempenho do website",
      ],
    },
    { tipo: "separador" },

    // ── 5. Partilha de Dados ──
    { tipo: "titulo", texto: "5. Partilha de Dados" },
    {
      tipo: "listaComIntro",
      intro: "Os dados pessoais poderão ser partilhados com:",
      itens: [
        "Prestadores de serviços tecnológicos e plataformas digitais utilizadas para a gestão do website",
        "Prestadores de serviços de marketing e publicidade online",
        "Entidades públicas ou autoridades competentes, quando exigido por lei",
      ],
    },
    {
      tipo: "listaComIntro",
      intro:
        "Alguns destes prestadores podem incluir plataformas de publicidade digital como:",
      itens: [
        "Meta Platforms (Facebook e Instagram Ads)",
        "Google (Google Ads e Google Analytics)",
      ],
    },
    {
      tipo: "paragrafo",
      texto:
        "Estas plataformas podem recolher dados de navegação através de cookies ou tecnologias semelhantes para fins de análise de tráfego, medição de campanhas publicitárias e personalização de anúncios.",
    },
    { tipo: "separador" },

    // ── 6. Transferência Internacional de Dados ──
    { tipo: "titulo", texto: "6. Transferência Internacional de Dados" },
    {
      tipo: "listaComIntro",
      intro:
        "Alguns dos prestadores de serviços utilizados pelo website podem estar localizados fora do Espaço Económico Europeu. Nesses casos, garantimos que a transferência de dados pessoais é realizada em conformidade com o Regulamento Geral sobre a Proteção de Dados, através de mecanismos adequados de proteção, como:",
      itens: [
        "Cláusulas contratuais padrão aprovadas pela Comissão Europeia",
        "Decisões de adequação da Comissão Europeia",
        "Outras garantias legais aplicáveis",
      ],
    },
    { tipo: "separador" },

    // ── 7. Conservação dos Dados ──
    { tipo: "titulo", texto: "7. Conservação dos Dados" },
    {
      tipo: "listaComIntro",
      intro:
        "Os dados pessoais serão conservados apenas durante o período necessário para cumprir as finalidades para as quais foram recolhidos, nomeadamente:",
      itens: [
        "Durante a prestação do serviço solicitado",
        "Durante o período exigido por obrigações legais",
        "Pelo tempo necessário para defesa de direitos legais",
      ],
    },
    {
      tipo: "paragrafo",
      texto: "Após esse período, os dados serão eliminados ou anonimizados.",
    },
    { tipo: "separador" },

    // ── 8. Direitos do Titular ──
    { tipo: "titulo", texto: "8. Direitos do Titular dos Dados" },
    {
      tipo: "listaComIntro",
      intro: "Nos termos do RGPD, o titular dos dados tem direito a:",
      itens: [
        "Aceder aos seus dados pessoais",
        "Solicitar a retificação de dados incorretos ou incompletos",
        'Solicitar a eliminação dos dados ("direito ao esquecimento")',
        "Limitar ou opor-se ao tratamento",
        "Solicitar a portabilidade dos dados",
        "Retirar o consentimento a qualquer momento",
      ],
    },
    {
      tipo: "paragrafo",
      texto:
        "O titular pode ainda apresentar reclamação junto da Comissão Nacional de Proteção de Dados.",
    },
    {
      tipo: "paragrafoComLink",
      textoAntes: "Para exercer os seus direitos, contacte: ",
      link: {
        url: "mailto:amandadantas7135@gmail.com",
        texto: "amandadantas7135@gmail.com",
      },
    },
    { tipo: "separador" },

    // ── 9. Cookies ──
    { tipo: "titulo", texto: "9. Cookies" },

    { tipo: "subtitulo", texto: "9.1 O que são cookies" },
    {
      tipo: "paragrafo",
      texto:
        "Cookies são pequenos ficheiros armazenados no dispositivo do utilizador que permitem reconhecer o navegador e guardar determinadas informações sobre a navegação.",
    },

    { tipo: "subtitulo", texto: "9.2 Tipos de cookies utilizados" },
    {
      tipo: "cookieTipo",
      nome: "Cookies essenciais",
      descricao: "Necessários para o funcionamento básico do website.",
    },
    {
      tipo: "cookieTipo",
      nome: "Cookies de desempenho e análise",
      descricao:
        "Permitem analisar a forma como os visitantes utilizam o website, por exemplo através de ferramentas como o Google Analytics.",
    },
    {
      tipo: "cookieTipo",
      nome: "Cookies de funcionalidade",
      descricao: "Permitem guardar preferências do utilizador.",
    },
    {
      tipo: "cookieTipo",
      nome: "Cookies de marketing e publicidade",
      descricao:
        "Utilizados para apresentar anúncios relevantes aos utilizadores e medir a eficácia das campanhas publicitárias.",
    },

    { tipo: "subtitulo", texto: "9.3 Cookies de terceiros" },
    {
      tipo: "listaComIntro",
      intro:
        "O website pode utilizar cookies de terceiros, nomeadamente das seguintes plataformas:",
      itens: [
        "Google (Google Ads, Google Analytics)",
        "Meta Platforms (Facebook Pixel e Instagram Ads)",
      ],
    },
    {
      tipo: "paragrafo",
      texto:
        "Estes cookies permitem analisar o comportamento de navegação dos utilizadores, medir conversões publicitárias e apresentar anúncios personalizados.",
    },

    { tipo: "subtitulo", texto: "9.4 Consentimento" },
    {
      tipo: "paragrafo",
      texto:
        "Ao visitar o website pela primeira vez, será apresentado um banner de consentimento de cookies, onde poderá aceitar, recusar ou configurar as suas preferências.",
    },

    { tipo: "subtitulo", texto: "9.5 Gestão de Cookies" },
    {
      tipo: "paragrafo",
      texto:
        "O utilizador pode, a qualquer momento, alterar as definições de cookies através do seu navegador ou do gestor de preferências disponível no website.",
    },
    { tipo: "separador" },

    // ── 10. Segurança ──
    { tipo: "titulo", texto: "10. Segurança" },
    {
      tipo: "paragrafo",
      texto:
        "São implementadas medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra perda, acesso não autorizado, divulgação ou alteração.",
    },
    { tipo: "separador" },

    // ── 11. Contacto WhatsApp ──
    { tipo: "titulo", texto: "11. Contacto através do WhatsApp" },
    {
      tipo: "paragrafo",
      texto:
        "O website poderá disponibilizar um botão ou link de contacto direto através da aplicação WhatsApp para facilitar a comunicação entre o utilizador e o responsável pelo serviço.",
    },
    {
      tipo: "paragrafo",
      texto:
        "Ao optar por iniciar uma conversa através desta plataforma, o utilizador está a comunicar voluntariamente os seus dados pessoais, incluindo número de telefone, nome de perfil e o conteúdo das mensagens enviadas. Estes dados poderão ser tratados exclusivamente para responder a pedidos de informação, prestar esclarecimentos ou dar seguimento aos serviços solicitados.",
    },
    {
      tipo: "paragrafo",
      texto:
        "A comunicação realizada através do WhatsApp é efetuada por meio de uma plataforma externa operada pela Meta Platforms, podendo os dados estar sujeitos às políticas de privacidade e aos termos de utilização dessa empresa.",
    },
    {
      tipo: "paragrafo",
      texto:
        "Recomenda-se que os utilizadores evitem o envio de documentos sensíveis ou informações pessoais confidenciais através desta plataforma, salvo quando expressamente solicitado e quando existam garantias adequadas de segurança.",
    },
    { tipo: "separador" },

    // ── 12. Alterações ──
    { tipo: "titulo", texto: "12. Alterações a esta Política" },
    {
      tipo: "paragrafo",
      texto:
        "Esta Política de Privacidade e Cookies poderá ser atualizada periodicamente. A versão mais recente estará sempre disponível neste website.",
    },
  ],
};
