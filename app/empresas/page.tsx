import Header from "../Header";
import Footer from "../Footer";
import EmpresasContent from "@components/Servicos/Empresas/Content";

export default function EmpresasPage() {
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
        <EmpresasContent />
      </main>
      <Footer />
    </div>
  );
}
