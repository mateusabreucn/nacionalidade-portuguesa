import { DadosDaPagina } from "@components/ConteudoPagina/tipos";

export const dadosNacionalidade: DadosDaPagina = {
  tituloDaPagina: "Nacionalidade",
  blocos: [
    // ── Quem tem direito ──
    { tipo: "titulo", texto: "Quem tem direito à Cidadania Portuguesa?" },
    {
      tipo: "lista",
      itens: [
        "Filhos e Netos de português;",
        "Bisnetos de português (se possui membro intermediário vivo);",
        "Estrangeiros que vivem em Portugal após 5 anos de residência;",
        "Casado ou com união estável com português;",
        "Nascidos em Portugal, filhos de estrangeiros;",
        "Filhos menores nascidos antes da naturalização dos pais;",
        "Pais de filhos nascidos em Portugal.",
      ],
    },
    { tipo: "separador" },

    // ── Vantagens passaporte português ──
    { tipo: "titulo", texto: "Vantagens de possuir o passaporte português:" },
    {
      tipo: "lista",
      itens: [
        "Morar em qualquer dos 27 países da Europa sem necessidade de visto;",
        "Não necessitará de visto para visitar países como Canadá, EUA, Emirados Árabes e Japão;",
        "Agilidade na imigração;",
        "Acesso a serviços públicos: educação gratuita, sistema de saúde de qualidade e outros benefícios sociais;",
        "Passar a nacionalidade para os seus filhos, noras, genros, netos e seguintes;",
        "Estatuto é definitivo e vitalício. Estará protegido contra futuras alterações legais.",
      ],
    },
    { tipo: "separador" },

    // ── Naturalização ──
    {
      tipo: "titulo",
      texto: "Quem pode solicitar a nacionalidade por naturalização:",
    },
    { tipo: "paragrafo", texto: "Qualquer pessoa que possua RNM e:" },
    {
      tipo: "lista",
      itens: [
        "Resida há, pelo menos, 4 anos ininterruptos no país;",
        "Possua filho ou cônjuge brasileiro, resida no país há, pelo menos, 1 ano;",
        "Comprovar proficiência na língua portuguesa através de histórico escolar, diploma, exame da CELPE-BRAS ou curso de português para estrangeiros.",
      ],
    },
    { tipo: "separador" },

    // ── Vantagens passaporte brasileiro ──
    { tipo: "titulo", texto: "Vantagens de possuir passaporte brasileiro:" },
    {
      tipo: "lista",
      itens: [
        "Ter todos os documentos brasileiros;",
        "Liberdade para empreender e investir no país;",
        "Acesso amplo a créditos e subsídios no país;",
        "Livre acesso aos países do MERCOSUL;",
        "Viajar pela Europa sem precisar de visto prévio.",
      ],
    },
    { tipo: "separador" },

    // ── Busca de documentos ──
    {
      tipo: "titulo",
      texto: "Busca e localização de documentos portugueses:",
    },
    {
      tipo: "lista",
      itens: [
        'A certidão de nascimento portuguesa ("assento de nascimento") do familiar português é requisito indispensável para iniciar o processo de nacionalidade;',
        "Realizamos a pesquisa e localização do assento de nascimento em Conservatórias, Arquivos Distritais, Arquivos Municipais e Arquivos Paroquiais, conforme a data e o local de nascimento;",
        "Caso não disponha de todos os dados necessários, prestamos orientação e conduzimos a investigação até à identificação e obtenção do documento.",
      ],
    },
    { tipo: "separador" },

    // ── Formulário Tally ──
    { tipo: "componente", id: "tallyEmbed" },
  ],
};
