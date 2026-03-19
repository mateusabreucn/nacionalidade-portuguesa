import RenderizadorDeConteudo from "@components/ConteudoPagina/RenderizadorDeConteudo";
import TallyEmbed from "@components/Servicos/Nacionalidade/TallyEmbed";
import { dadosNacionalidade } from "./dadosNacionalidade";

export default function NacionalidadeContent() {
  return (
    <RenderizadorDeConteudo
      dados={dadosNacionalidade}
      componentes={{ tallyEmbed: <TallyEmbed /> }}
    />
  );
}
