import { BlocoDeConteudo, DadosDaPagina } from "./tipos";
import CardBranco from "../CardBranco";

interface RenderizadorDeConteudoProps {
  dados: DadosDaPagina;
  componentes?: Record<string, React.ReactNode>;
}

const estilos = {
  titulo: "font-josefin text-xl md:text-2xl mt-8 mb-2",
  subtitulo: "font-josefin text-lg md:text-xl mt-6 mb-2",
  paragrafo: "text-base leading-relaxed mb-4",
  lista: "list-disc pl-6 space-y-2 mb-4",
  separador: "my-8 border-border-accent",
  link: "text-blue-600 hover:underline",
};

function RenderizarBloco({
  bloco,
  componentes,
}: {
  bloco: BlocoDeConteudo;
  componentes?: Record<string, React.ReactNode>;
}) {
  switch (bloco.tipo) {
    case "titulo":
      return <h3 className={estilos.titulo}>{bloco.texto}</h3>;

    case "subtitulo":
      return <h4 className={estilos.subtitulo}>{bloco.texto}</h4>;

    case "paragrafo":
      return <p className={estilos.paragrafo}>{bloco.texto}</p>;

    case "lista":
      return (
        <ul className={estilos.lista}>
          {bloco.itens.map((item, i) => (
            <li key={i} className={estilos.paragrafo}>
              {item}
            </li>
          ))}
        </ul>
      );

    case "listaComIntro":
      return (
        <>
          <p className={estilos.paragrafo}>{bloco.intro}</p>
          <ul className={estilos.lista}>
            {bloco.itens.map((item, i) => (
              <li key={i} className={estilos.paragrafo}>
                {item}
              </li>
            ))}
          </ul>
        </>
      );

    case "listaSemMarcador":
      return (
        <ul className="list-none pl-0 space-y-1">
          {bloco.itens.map((item, i) => (
            <li key={i}>
              <strong>{item.rotulo}</strong> {item.valor}
            </li>
          ))}
        </ul>
      );

    case "separador":
      return <hr className={estilos.separador} />;

    case "paragrafoComLink":
      return (
        <p className={estilos.paragrafo}>
          {bloco.textoAntes}
          <a href={bloco.link.url} className={estilos.link}>
            {bloco.link.texto}
          </a>
          {bloco.textoDepois ?? ""}
        </p>
      );

    case "cookieTipo":
      return (
        <p className={estilos.paragrafo}>
          <strong>{bloco.nome}</strong>
          <br />
          {bloco.descricao}
        </p>
      );

    case "componente":
      return <>{componentes?.[bloco.id] ?? null}</>;

    default:
      return null;
  }
}

export default function RenderizadorDeConteudo({
  dados,
  componentes,
}: RenderizadorDeConteudoProps) {
  return (
    <CardBranco titulo={dados.tituloDaPagina} showBackButton>
      <div className="text-font-secondary text-left mx-auto max-w-4xl">
        {dados.blocos.map((bloco, index) => (
          <RenderizarBloco key={index} bloco={bloco} componentes={componentes} />
        ))}
      </div>
    </CardBranco>
  );
}
