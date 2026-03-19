/**
 * Tipos genéricos para estrutura de conteúdo de páginas.
 * "tipo" define como o bloco será renderizado no componente.
 */

export type BlocoDeConteudo =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "titulo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "listaComIntro"; intro: string; itens: string[] }
  | { tipo: "listaSemMarcador"; itens: { rotulo: string; valor: string }[] }
  | { tipo: "separador" }
  | { tipo: "paragrafoComLink"; textoAntes: string; link: { url: string; texto: string }; textoDepois?: string }
  | { tipo: "cookieTipo"; nome: string; descricao: string }
  | { tipo: "componente"; id: string };

export interface DadosDaPagina {
  tituloDaPagina: string;
  blocos: BlocoDeConteudo[];
}
