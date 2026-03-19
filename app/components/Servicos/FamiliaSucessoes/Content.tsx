import RenderizadorDeConteudo from "@components/ConteudoPagina/RenderizadorDeConteudo";
import { dadosFamiliaSucessoes } from "./dadosFamiliaSucessoes";

export default function FamiliaSucessoesContent() {
  return <RenderizadorDeConteudo dados={dadosFamiliaSucessoes} />;
}
