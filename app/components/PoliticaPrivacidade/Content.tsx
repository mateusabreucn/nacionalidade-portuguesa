import CardBranco from "../CardBranco";

export default function PoliticaPrivacidadeContent() {
  const sectionTitleClass = "font-josefin text-xl md:text-2xl mt-8 mb-2";
  const subSectionTitleClass = "font-josefin text-lg md:text-xl mt-6 mb-2";
  const paragraphClass = "text-base leading-relaxed mb-4";
  const listClass = "list-disc pl-6 space-y-2";

  return (
    <CardBranco titulo="Política de Privacidade e Cookies" showBackButton>
      <div className="text-font-secondary text-left mx-auto max-w-4xl">
        <p className={paragraphClass}>
          O <strong>nacionalidade-portuguesa</strong> valoriza a privacidade e a
          proteção dos dados pessoais dos seus utilizadores. Cumprimos o
          Regulamento Geral sobre a Proteção de Dados e a Lei n.º 58/2019,
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
            andar, sala 3, 4490-409, Póvoa de Varzim
          </li>
          <li>
            <strong>E-mail:</strong> amandadantas7135@gmail.com
          </li>
        </ul>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>2. Dados que Recolhemos</h3>
        <p className={paragraphClass}>
          Podemos recolher os seguintes dados pessoais:
        </p>
        <h4 className={subSectionTitleClass}>
          Dados fornecidos diretamente pelo utilizador
        </h4>
        <ul className={listClass}>
          <li>Nome completo</li>
          <li>Endereço de email</li>
          <li>Número de telefone</li>
          <li>Nacionalidade</li>
          <li>
            Outras informações fornecidas voluntariamente através de formulários
            no website
          </li>
        </ul>
        <h4 className={subSectionTitleClass}>Dados de navegação</h4>
        <ul className={listClass}>
          <li>Endereço IP</li>
          <li>Tipo de navegador</li>
          <li>Dispositivo utilizado</li>
          <li>Páginas visitadas e tempo de navegação</li>
        </ul>
        <h4 className={subSectionTitleClass}>
          Dados e documentos enviados pelo utilizador
        </h4>
        <p className={paragraphClass}>
          No âmbito da prestação de serviços relacionados com processos
          administrativos e jurídicos, poderão ser solicitados documentos
          pessoais, tais como:
        </p>
        <ul className={listClass}>
          <li>Certidões de nascimento</li>
          <li>Documentos de identificação</li>
          <li>Registos civis</li>
          <li>
            Outros documentos necessários à análise ou instrução de processos
          </li>
        </ul>
        <p className={paragraphClass}>
          Estes documentos poderão conter dados pessoais e dados sensíveis,
          sendo tratados exclusivamente para as finalidades relacionadas com o
          serviço solicitado.
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>3. Finalidade do Tratamento</h3>
        <p className={paragraphClass}>
          Os dados pessoais recolhidos são utilizados para:
        </p>
        <ul className={listClass}>
          <li>Fornecer e gerir os serviços solicitados pelo utilizador</li>
          <li>
            Analisar pedidos relacionados com processos de nacionalidade ou
            serviços administrativos
          </li>
          <li>
            Comunicar com o utilizador sobre o estado do serviço ou pedido
          </li>
          <li>Cumprir obrigações legais</li>
          <li>Melhorar o funcionamento e desempenho do website</li>
          <li>
            Realizar campanhas de marketing digital e análise de desempenho
            publicitário
          </li>
        </ul>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>4. Base Legal</h3>
        <p className={paragraphClass}>
          O tratamento dos dados pessoais baseia-se em:
        </p>
        <ul className={listClass}>
          <li>Consentimento do titular dos dados</li>
          <li>
            Execução de contrato ou diligências pré-contratuais solicitadas pelo
            titular
          </li>
          <li>Cumprimento de obrigações legais</li>
          <li>
            Interesse legítimo do responsável pelo tratamento, nomeadamente para
            melhoria dos serviços e análise de desempenho do website
          </li>
        </ul>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>5. Partilha de Dados</h3>
        <p className={paragraphClass}>
          Os dados pessoais poderão ser partilhados com:
        </p>
        <ul className={listClass}>
          <li>
            Prestadores de serviços tecnológicos e plataformas digitais
            utilizadas para a gestão do website
          </li>
          <li>
            Prestadores de serviços de marketing e publicidade online
          </li>
          <li>
            Entidades públicas ou autoridades competentes, quando exigido por
            lei
          </li>
        </ul>
        <p className={paragraphClass}>
          Alguns destes prestadores podem incluir plataformas de publicidade
          digital como:
        </p>
        <ul className={listClass}>
          <li>Meta Platforms (Facebook e Instagram Ads)</li>
          <li>Google (Google Ads e Google Analytics)</li>
        </ul>
        <p className={paragraphClass}>
          Estas plataformas podem recolher dados de navegação através de cookies
          ou tecnologias semelhantes para fins de análise de tráfego, medição de
          campanhas publicitárias e personalização de anúncios.
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>
          6. Transferência Internacional de Dados
        </h3>
        <p className={paragraphClass}>
          Alguns dos prestadores de serviços utilizados pelo website podem estar
          localizados fora do Espaço Económico Europeu. Nesses casos, garantimos
          que a transferência de dados pessoais é realizada em conformidade com o
          Regulamento Geral sobre a Proteção de Dados, através de mecanismos
          adequados de proteção, como:
        </p>
        <ul className={listClass}>
          <li>
            Cláusulas contratuais padrão aprovadas pela Comissão Europeia
          </li>
          <li>Decisões de adequação da Comissão Europeia</li>
          <li>Outras garantias legais aplicáveis</li>
        </ul>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>7. Conservação dos Dados</h3>
        <p className={paragraphClass}>
          Os dados pessoais serão conservados apenas durante o período necessário
          para cumprir as finalidades para as quais foram recolhidos,
          nomeadamente:
        </p>
        <ul className={listClass}>
          <li>Durante a prestação do serviço solicitado</li>
          <li>Durante o período exigido por obrigações legais</li>
          <li>Pelo tempo necessário para defesa de direitos legais</li>
        </ul>
        <p className={paragraphClass}>
          Após esse período, os dados serão eliminados ou anonimizados.
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>8. Direitos do Titular dos Dados</h3>
        <p className={paragraphClass}>
          Nos termos do RGPD, o titular dos dados tem direito a:
        </p>
        <ul className={listClass}>
          <li>Aceder aos seus dados pessoais</li>
          <li>Solicitar a retificação de dados incorretos ou incompletos</li>
          <li>
            Solicitar a eliminação dos dados (&ldquo;direito ao
            esquecimento&rdquo;)
          </li>
          <li>Limitar ou opor-se ao tratamento</li>
          <li>Solicitar a portabilidade dos dados</li>
          <li>Retirar o consentimento a qualquer momento</li>
        </ul>
        <p className={paragraphClass}>
          O titular pode ainda apresentar reclamação junto da Comissão Nacional
          de Proteção de Dados.
        </p>
        <p className={paragraphClass}>
          Para exercer os seus direitos, contacte:{" "}
          <a
            href="mailto:amandadantas7135@gmail.com"
            className="text-blue-600 hover:underline"
          >
            amandadantas7135@gmail.com
          </a>
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>9. Cookies</h3>
        <h4 className={subSectionTitleClass}>9.1 O que são cookies</h4>
        <p className={paragraphClass}>
          Cookies são pequenos ficheiros armazenados no dispositivo do utilizador
          que permitem reconhecer o navegador e guardar determinadas informações
          sobre a navegação.
        </p>

        <h4 className={subSectionTitleClass}>
          9.2 Tipos de cookies utilizados
        </h4>
        <p className={paragraphClass}>
          <strong>Cookies essenciais</strong>
          <br />
          Necessários para o funcionamento básico do website.
        </p>
        <p className={paragraphClass}>
          <strong>Cookies de desempenho e análise</strong>
          <br />
          Permitem analisar a forma como os visitantes utilizam o website, por
          exemplo através de ferramentas como o Google Analytics.
        </p>
        <p className={paragraphClass}>
          <strong>Cookies de funcionalidade</strong>
          <br />
          Permitem guardar preferências do utilizador.
        </p>
        <p className={paragraphClass}>
          <strong>Cookies de marketing e publicidade</strong>
          <br />
          Utilizados para apresentar anúncios relevantes aos utilizadores e
          medir a eficácia das campanhas publicitárias.
        </p>

        <h4 className={subSectionTitleClass}>9.3 Cookies de terceiros</h4>
        <p className={paragraphClass}>
          O website pode utilizar cookies de terceiros, nomeadamente das
          seguintes plataformas:
        </p>
        <ul className={listClass}>
          <li>Google (Google Ads, Google Analytics)</li>
          <li>Meta Platforms (Facebook Pixel e Instagram Ads)</li>
        </ul>
        <p className={paragraphClass}>
          Estes cookies permitem analisar o comportamento de navegação dos
          utilizadores, medir conversões publicitárias e apresentar anúncios
          personalizados.
        </p>

        <h4 className={subSectionTitleClass}>9.4 Consentimento</h4>
        <p className={paragraphClass}>
          Ao visitar o website pela primeira vez, será apresentado um banner de
          consentimento de cookies, onde poderá aceitar, recusar ou configurar as
          suas preferências.
        </p>

        <h4 className={subSectionTitleClass}>9.5 Gestão de Cookies</h4>
        <p className={paragraphClass}>
          O utilizador pode, a qualquer momento, alterar as definições de cookies
          através do seu navegador ou do gestor de preferências disponível no
          website.
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>10. Segurança</h3>
        <p className={paragraphClass}>
          São implementadas medidas técnicas e organizacionais adequadas para
          proteger os dados pessoais contra perda, acesso não autorizado,
          divulgação ou alteração.
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>
          11. Contacto através do WhatsApp
        </h3>
        <p className={paragraphClass}>
          O website poderá disponibilizar um botão ou link de contacto direto
          através da aplicação WhatsApp para facilitar a comunicação entre o
          utilizador e o responsável pelo serviço.
        </p>
        <p className={paragraphClass}>
          Ao optar por iniciar uma conversa através desta plataforma, o
          utilizador está a comunicar voluntariamente os seus dados pessoais,
          incluindo número de telefone, nome de perfil e o conteúdo das
          mensagens enviadas. Estes dados poderão ser tratados exclusivamente
          para responder a pedidos de informação, prestar esclarecimentos ou dar
          seguimento aos serviços solicitados.
        </p>
        <p className={paragraphClass}>
          A comunicação realizada através do WhatsApp é efetuada por meio de uma
          plataforma externa operada pela Meta Platforms, podendo os dados estar
          sujeitos às políticas de privacidade e aos termos de utilização dessa
          empresa.
        </p>
        <p className={paragraphClass}>
          Recomenda-se que os utilizadores evitem o envio de documentos sensíveis
          ou informações pessoais confidenciais através desta plataforma, salvo
          quando expressamente solicitado e quando existam garantias adequadas de
          segurança.
        </p>

        <hr className="my-8 border-border-accent" />

        <h3 className={sectionTitleClass}>12. Alterações a esta Política</h3>
        <p className={paragraphClass}>
          Esta Política de Privacidade e Cookies poderá ser atualizada
          periodicamente. A versão mais recente estará sempre disponível neste
          website.
        </p>
      </div>
    </CardBranco>
  );
}

