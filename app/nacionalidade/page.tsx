import Header from "../Header";
import Footer from "../Footer";
import NacionalidadeContent from "@components/Servicos/Nacionalidade/Content";

export default function NacionalidadePage() {
  return (
    <div
      className="
        flex flex-col
        p-6 md:p-10
        min-h-screen max-w-screen-2xl
        mx-auto
        bg-bg-primary
      "
    >
      <Header showNavLinks={false} />
      <main>
        <NacionalidadeContent />
      </main>
      <Footer />
    </div>
  );
}
