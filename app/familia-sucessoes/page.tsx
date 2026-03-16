import Header from "../Header";
import Footer from "../Footer";
import FamiliaSucessoesContent from "@components/Servicos/FamiliaSucessoes/Content";

export default function FamiliaSucessoesPage() {
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
        <FamiliaSucessoesContent />
      </main>
      <Footer />
    </div>
  );
}
