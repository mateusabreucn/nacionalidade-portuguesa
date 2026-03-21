// ✅ É possível editar esse arquivo — Consulte o GUIA_EDICAO.md na raiz do projeto.

export interface FeedbackData {
  name: string;
  city: string;
  text: string;
  avatarSrc: string;
}

export const feedbacksData: FeedbackData[] = [
  {
    name: "Pedro Fernandez",
    city: "Lisboa",
    text: "Quando procurei a doutora Amanda, eu estava completamente perdido com a minha documentação em Portugal e com todos os processos extremamente complicados envolvidos. Fui atendido de forma muito clara; ela me explicou todos os prazos e toda a burocracia que eu enfrentaria no meu pedido de visto.\n\nPara minha surpresa, em pouquíssimo tempo conseguimos resolver tudo, e hoje estou com o meu cartão de residência em mãos. Nada é mais importante do que nossa liberdade de ir e vir, e a doutora Amanda foi a grande responsável por isso.",
    avatarSrc: "/Icons/Feedback/ProfileMan.png",
  },
  {
    name: "Ivanete Oliveira",
    city: "Nova York",
    text: "Dra. Amanda, é uma querida. Uma pessoa que não só fez a minha aplicação para o meu cartão de residência, devo dizer, ela é extremamente competente em várias áreas. Residência e de todos os trâmites para a abertura da minha sociedade de vinhos na Ilha da Madeira...\n\nComo posso afirmar: Ela é pau de todas as obras. FABULOSA!!!",
    avatarSrc: "/Icons/Feedback/ProfileWoman.png",
  },
  {
    name: "Dr. Miguel Quintana e família",
    city: "Pelotas Rio Grande do Sul",
    text: "Tive a oportunidade de contar com o excelente atendimento da Dra. Amanda durante todo o processo de obtenção da nacionalidade portuguesa de meus familiares uma experiência verdadeiramente marcante. Desde o início, impressionou-me a profundidade e o rigor da pesquisa realizada, o cuidado no levantamento de registros e a forma clara e organizada com que cada etapa foi conduzida. O trabalho minucioso da Dra. Amanda permitiu que documentos esquecidos no tempo fossem encontrados, que vínculos familiares fossem reconstruídos e que todo o processo seguisse de forma fluida e segura.\n\nO resultado não poderia ter sido melhor: a cidadania portuguesa dos netos, dos filhos e da minha esposa, coroando um percurso feito com profissionalismo, competência e dedicação. A Dra. Amanda demonstrou, em cada detalhe, a marca de uma grande profissional: precisão técnica, sensibilidade humana e compromisso absoluto com o cliente. Sou profundamente grato e recomendo seu trabalho com total confiança.",
    avatarSrc: "/Icons/Feedback/ProfileMan.png",
  },
  {
    name: "Renata Paes Vidal",
    city: "Porto",
    text: "Gostaria de deixar registrado o quanto estou satisfeita e profundamente grata por todo o apoio e dedicação que demonstrou ao longo do meu processo de imigração. Passei por um momento de grande apreensão devido a um deferimento inesperado, e confesso que me senti perdida e insegura sobre o que poderia acontecer. No entanto, graças à competência da Dra Amanda, tranquilidade e profissionalismo, tudo foi esclarecido, resolvido e encaminhado da melhor forma possível. Hoje tenho o meu cartão de residência em mãos, algo que só foi possível graças ao seu excelente trabalho.\n\nAgradeço de coração por me devolver a paz, a tranquilidade e a segurança que eu tanto precisava. Ficarei eternamente grata pela sua ajuda e por ter conduzido tudo com tanta eficiência e humanidade.",
    avatarSrc: "/Icons/Feedback/ProfileWoman.png",
  },
];
