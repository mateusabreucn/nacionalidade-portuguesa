export interface ServicoData {
  id: string;
  titulo: string;
  icon: string;
  altText: string;
  descricao?: string;
  topicos: string[];
  link?: {
    href: string;
    label: string;
  };
}
