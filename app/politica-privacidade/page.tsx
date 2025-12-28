import Header from "../Header";
import Footer from "../Footer";
import PoliticaPrivacidadeContent from "../components/PoliticaPrivacidade/Content";

export default function PoliticaPrivacidadePage() {
  return (
    <div
      className="
        flex flex-col
        p-6 md:p-10
        min-h-screen max-w-screen-2xl
        mx-auto
        bg-background
      "
    >
      <Header showNavLinks={false} />
      <main>
        <PoliticaPrivacidadeContent />
      </main>
      <Footer />
    </div>
  );
}
