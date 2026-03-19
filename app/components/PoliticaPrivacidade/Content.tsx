import RenderizadorDeConteudo from "@components/ConteudoPagina/RenderizadorDeConteudo";
import { dadosPoliticaPrivacidade } from "./dadosPoliticaPrivacidade";

export default function PoliticaPrivacidadeContent() {
  return <RenderizadorDeConteudo dados={dadosPoliticaPrivacidade} />;
}
