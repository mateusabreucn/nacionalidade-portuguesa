import CardBranco from "../CardBranco";

export default function EmpresasContent() {
  const paragraphClass = "text-base leading-relaxed mb-4";
  const listClass = "list-disc pl-6 space-y-2 mb-4";

  return (
    <CardBranco titulo="Empresas" showBackButton>
      <div className="text-font-secondary text-left mx-auto max-w-4xl">
        <p className={paragraphClass}>
          Prestamos também todos os serviços relacionados, a saber:
        </p>
        <div></div>

        <ul className={listClass}>
          <li className={paragraphClass}>
            Prática de atos notariais (procurações, certificação de documentos,
            certificação de traduções, autenticação de documentos, etc.);
          </li>
          <li className={paragraphClass}>
            Análise e certificação dos documentos necessários à emissão do
            número de contribuinte fiscal (NIF);
          </li>
          <li className={paragraphClass}>
            Deslocação ao Serviço de Finanças para obtenção do NIF e
            representação fiscal;
          </li>
          <li className={paragraphClass}>
            Manutenção da representação fiscal;
          </li>
          <li className={paragraphClass}>
            Abertura de conta bancária e reunião na instituição bancária
            escolhida em representação do futuro titular da conta bancária para
            validação prévia dos documentos e acompanhamento presencial no
            momento da abertura da conta bancária;
          </li>
          <li className={paragraphClass}>
            Registo na Segurança Social e outras entidades obrigatórias;
          </li>
          <li className={paragraphClass}>
            Representação junto de várias empresas de serviços para ativação dos
            mesmos (eletricidade, gás, água, telefone, televisão, correios); e
          </li>
          <li className={paragraphClass}>
            Sede e domicílio fiscal dos nossos clientes.
          </li>
        </ul>
      </div>
    </CardBranco>
  );
}
