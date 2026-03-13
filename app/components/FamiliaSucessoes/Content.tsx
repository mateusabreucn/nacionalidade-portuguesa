import CardBranco from "../CardBranco";

export default function FamiliaSucessoesContent() {
  const sectionTitleClass = "font-josefin text-xl md:text-2xl mt-8 mb-4";
  const paragraphClass = "text-base leading-relaxed mb-4";
  const listClass = "list-disc pl-6 space-y-2 mb-4";
  const separatorClass = "my-8 border-border-accent";

  return (
    <CardBranco titulo="Família e Sucessões" showBackButton>
      <div className="text-font-secondary text-left mx-auto max-w-4xl">
        <h3 className={sectionTitleClass}>Sucessões</h3>
        <p className={paragraphClass}>
          Após o óbito surgem uma série de obrigações para os herdeiros, não
          apenas de natureza jurídica, mas também administrativa e fiscal, que
          importa satisfazer, assumindo o solicitador nestes casos um papel
          preponderante no processo de planeamento sucessório, habilitação de
          herdeiros e no esclarecimento de outras questões que se levantam,
          designadamente na assistência ao cabeça de casal no desempenho do
          cargo e no cumprimento das obrigações administrativas e fiscais.
        </p>

        <hr className={separatorClass} />

        <p className={paragraphClass}>
          Temos ampla experiência na assessoria a clientes estrangeiros no
          exercício do cargo de cabeça de casal, cumprindo em nome daqueles
          todos os passos necessários desde o óbito até ao registo dos bens da
          herança em nome dos herdeiros.
        </p>

        <ul className={listClass}>
          <li className={paragraphClass}>Abertura da sucessão;</li>
          <li className={paragraphClass}>Herança;</li>
          <li className={paragraphClass}>Inventário e partilhas.</li>
        </ul>
      </div>
    </CardBranco>
  );
}
