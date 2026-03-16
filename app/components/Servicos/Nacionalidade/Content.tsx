import CardBranco from "@components/CardBranco";
import TallyEmbed from "@components/Servicos/Nacionalidade/TallyEmbed";

export default function NacionalidadeContent() {
  const sectionTitleClass = "font-josefin text-xl md:text-2xl mt-8 mb-4";
  const paragraphClass = "text-base leading-relaxed mb-4";
  const listClass = "list-disc pl-6 space-y-2 mb-4";
  const separatorClass = "my-8 border-border-accent";

  return (
    <CardBranco titulo="Nacionalidade" showBackButton>
      <div className="text-font-secondary text-left mx-auto max-w-4xl">
        {/* Seção 1: Quem tem direito */}
        <h3 className={sectionTitleClass}>
          Quem tem direito à Cidadania Portuguesa?
        </h3>
        <ul className={listClass}>
          <li className={paragraphClass}>Filhos e Netos de português;</li>
          <li className={paragraphClass}>
            Bisnetos de português (se possui membro intermediário vivo);
          </li>
          <li className={paragraphClass}>
            Estrangeiros que vivem em Portugal após 5 anos de residência;
          </li>
          <li className={paragraphClass}>
            Casado ou com união estável com português;
          </li>
          <li className={paragraphClass}>
            Nascidos em Portugal, filhos de estrangeiros;
          </li>
          <li className={paragraphClass}>
            Filhos menores nascidos antes da naturalização dos pais;
          </li>
          <li className={paragraphClass}>
            Pais de filhos nascidos em Portugal.
          </li>
        </ul>

        <hr className={separatorClass} />

        {/* Seção 2: Vantagens passaporte português */}
        <h3 className={sectionTitleClass}>
          Vantagens de possuir o passaporte português:
        </h3>
        <ul className={listClass}>
          <li className={paragraphClass}>
            Morar em qualquer dos 27 países da Europa sem necessidade de visto;
          </li>
          <li className={paragraphClass}>
            Não necessitará de visto para visitar países como Canadá, EUA,
            Emirados Árabes e Japão;
          </li>
          <li className={paragraphClass}>Agilidade na imigração;</li>
          <li className={paragraphClass}>
            Acesso a serviços públicos: educação gratuita, sistema de saúde de
            qualidade e outros benefícios sociais;
          </li>
          <li className={paragraphClass}>
            Passar a nacionalidade para os seus filhos, noras, genros, netos e
            seguintes;
          </li>
          <li className={paragraphClass}>
            Estatuto é definitivo e vitalício. Estará protegido contra futuras
            alterações legais.
          </li>
        </ul>

        <hr className={separatorClass} />

        {/* Seção 3: Naturalização */}
        <h3 className={sectionTitleClass}>
          Quem pode solicitar a nacionalidade por naturalização:
        </h3>
        <p className={paragraphClass}>Qualquer pessoa que possua RNM e:</p>
        <ul className={listClass}>
          <li className={paragraphClass}>
            Resida há, pelo menos, 4 anos ininterruptos no país;
          </li>
          <li className={paragraphClass}>
            Possua filho ou cônjuge brasileiro, resida no país há, pelo menos, 1
            ano;
          </li>
          <li className={paragraphClass}>
            Comprovar proficiência na língua portuguesa através de histórico
            escolar, diploma, exame da CELPE-BRAS ou curso de português para
            estrangeiros.
          </li>
        </ul>

        <hr className={separatorClass} />

        {/* Seção 4: Vantagens passaporte brasileiro */}
        <h3 className={sectionTitleClass}>
          Vantagens de possuir passaporte brasileiro:
        </h3>
        <ul className={listClass}>
          <li className={paragraphClass}>
            Ter todos os documentos brasileiros;
          </li>
          <li className={paragraphClass}>
            Liberdade para empreender e investir no país;
          </li>
          <li className={paragraphClass}>
            Acesso amplo a créditos e subsídios no país;
          </li>
          <li className={paragraphClass}>
            Livre acesso aos países do MERCOSUL;
          </li>
          <li className={paragraphClass}>
            Viajar pela Europa sem precisar de visto prévio.
          </li>
        </ul>

        <hr className={separatorClass} />

        {/* Seção 5: Busca de documentos */}
        <h3 className={sectionTitleClass}>
          Busca e localização de documentos portugueses:
        </h3>
        <ul className={listClass}>
          <li className={paragraphClass}>
            A certidão de nascimento portuguesa (&ldquo;assento de
            nascimento&rdquo;) do familiar português é requisito indispensável
            para iniciar o processo de nacionalidade;
          </li>
          <li className={paragraphClass}>
            Realizamos a pesquisa e localização do assento de nascimento em
            Conservatórias, Arquivos Distritais, Arquivos Municipais e Arquivos
            Paroquiais, conforme a data e o local de nascimento;
          </li>
          <li className={paragraphClass}>
            Caso não disponha de todos os dados necessários, prestamos
            orientação e conduzimos a investigação até à identificação e
            obtenção do documento.
          </li>
        </ul>

        <hr className={separatorClass} />

        <TallyEmbed />
      </div>
    </CardBranco>
  );
}
