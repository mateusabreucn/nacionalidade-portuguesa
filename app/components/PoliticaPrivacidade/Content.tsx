import CardBranco from "../CardBranco";

export default function PoliticaPrivacidadeContent() {
  const sectionTitleClass = "font-josefin text-xl md:text-2xl mt-8 mb-2";
  const subSectionTitleClass = "font-josefin text-lg md:text-xl mt-6 mb-2";
  const paragraphClass = "text-base leading-relaxed mb-4";
  const listClass = "list-disc pl-6 space-y-2";

  return (
    <CardBranco titulo="Política de Privacidade e Cookies">
      <div className="text-font-secondary text-left mx-auto max-w-4xl">
        <p className="text-sm text-gray-500 mb-6">
          Última atualização: 08/08/2025
        </p>
        <p className={paragraphClass}>
          O <strong>nacionalidade-portuguesa</strong> valoriza a privacidade e a
          proteção dos dados pessoais dos seus utilizadores. Cumprimos o
          Regulamento Geral de Proteção de Dados (RGPD) e a Lei n.º 58/2019,
          garantindo que o tratamento de dados é lícito, leal e transparente.
        </p>

        <h3 className={sectionTitleClass}>
          1. Responsável pelo Tratamento de Dados
        </h3>
        <p className={paragraphClass}>
          O responsável pelo tratamento dos dados é:
        </p>
        <ul className="list-none pl-0 space-y-1">
          <li>
            <strong>Nome:</strong> AMANDA CECILIA DANTAS
          </li>
          <li>
            <strong>Morada:</strong> Avenida Mouzinho de Albuquerque 102, 1º
            andar, sala 3 4490-409, Póvoa de Varzim
          </li>
          <li>
            <strong>E-mail:</strong> amandadantas7135@gmail.com
          </li>
        </ul>

        <h3 className={sectionTitleClass}>2. Dados que Recolhemos</h3>
        <p className={paragraphClass}>Podemos recolher:</p>
        <ul className={listClass}>
          <li>
            Informações fornecidas diretamente por si (nome, e-mail, telefone,
            etc.)
          </li>
          <li>
            Dados de navegação (endereço IP, tipo de navegador, páginas
            visitadas)
          </li>
          <li>
            Cookies e tecnologias similares (para melhorar a experiência de
            utilização)
          </li>
        </ul>

        <h3 className={sectionTitleClass}>3. Finalidade do Tratamento</h3>
        <p className={paragraphClass}>Os seus dados são recolhidos para:</p>
        <ul className={listClass}>
          <li>Fornecer e melhorar os nossos serviços</li>
          <li>Comunicar consigo</li>
          <li>Cumprir obrigações legais</li>
          <li>Personalizar a sua experiência no site</li>
        </ul>

        <h3 className={sectionTitleClass}>4. Base Legal</h3>
        <p className={paragraphClass}>
          O tratamento dos seus dados pessoais é baseado em:
        </p>
        <ul className={listClass}>
          <li>O seu consentimento</li>
          <li>Execução de contrato ou diligências pré-contratuais</li>
          <li>Cumprimento de obrigações legais</li>
          <li>Interesses legítimos do responsável pelo tratamento</li>
        </ul>

        <h3 className={sectionTitleClass}>5. Partilha de Dados</h3>
        <p className={paragraphClass}>
          Não vendemos nem partilhamos os seus dados com terceiros, exceto
          quando necessário para:
        </p>
        <ul className={listClass}>
          <li>Cumprimento de obrigações legais</li>
          <li>
            Prestadores de serviços que atuam em nosso nome (com garantias de
            proteção de dados)
          </li>
        </ul>

        <h3 className={sectionTitleClass}>6. Conservação dos Dados</h3>
        <p className={paragraphClass}>
          Os dados serão conservados apenas pelo período necessário para cumprir
          as finalidades acima ou conforme exigido por lei. Após esse período,
          são eliminados ou mantidos no anonimato.
        </p>

        <h3 className={sectionTitleClass}>7. Direitos do Titular dos Dados</h3>
        <p className={paragraphClass}>De acordo com o RGPD, tem direito a:</p>
        <ul className={listClass}>
          <li>Aceder, retificar ou apagar os seus dados</li>
          <li>Limitar ou opor-se ao tratamento</li>
          <li>Portabilidade dos dados</li>
          <li>Retirar o consentimento a qualquer momento</li>
          <li>
            Apresentar reclamação à Comissão Nacional de Proteção de Dados
            (CNPD)
          </li>
        </ul>
        <p className={paragraphClass + " mt-4"}>
          Para exercer os seus direitos, contacte:{" "}
          <a
            href="mailto:amandadantas7135@gmail.com"
            className="text-blue-600 hover:underline"
          >
            amandadantas7135@gmail.com
          </a>
          .
        </p>

        <h3 className={sectionTitleClass}>8. Cookies</h3>
        <h4 className={subSectionTitleClass}>8.1 O que são cookies?</h4>
        <p className={paragraphClass}>
          Pequenos ficheiros armazenados no seu dispositivo que guardam
          informações sobre a sua navegação.
        </p>
        <h4 className={subSectionTitleClass}>8.2 Tipos utilizados</h4>
        <ul className={listClass}>
          <li>
            <strong>Essenciais:</strong> necessários ao funcionamento do site
          </li>
          <li>
            <strong>Desempenho/análise:</strong> como Google Analytics
          </li>
          <li>
            <strong>Funcionalidade:</strong> guardar preferências
          </li>
          <li>
            <strong>Marketing/publicidade:</strong> anúncios personalizados
          </li>
        </ul>
        <h4 className={subSectionTitleClass}>8.3 Cookies de terceiros</h4>
        <p className={paragraphClass}>
          Poderão ser utilizados serviços como Google, Facebook ou outros que
          instalam cookies próprios.
        </p>
        <h4 className={subSectionTitleClass}>8.4 Consentimento</h4>
        <p className={paragraphClass}>
          Ao visitar o site, poderá aceitar todos os cookies ou configurar
          preferências no banner de consentimento.
        </p>
        <h4 className={subSectionTitleClass}>8.5 Gestão de cookies</h4>
        <p className={paragraphClass}>
          Pode desativar cookies nas definições do seu navegador.
        </p>

        <h3 className={sectionTitleClass}>9. Segurança</h3>
        <p className={paragraphClass}>
          Implementamos medidas técnicas e organizacionais para proteger os
          dados contra perda, uso indevido ou acesso não autorizado.
        </p>

        <h3 className={sectionTitleClass}>10. Alterações</h3>
        <p className={paragraphClass}>
          Podemos atualizar esta política a qualquer momento. A versão mais
          recente estará sempre disponível no site.
        </p>
      </div>
    </CardBranco>
  );
}
