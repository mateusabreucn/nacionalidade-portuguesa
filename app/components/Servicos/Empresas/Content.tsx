import RenderizadorDeConteudo from "@components/ConteudoPagina/RenderizadorDeConteudo";
import { dadosEmpresas } from "./dadosEmpresas";

export default function EmpresasContent() {
  return <RenderizadorDeConteudo dados={dadosEmpresas} />;
}
