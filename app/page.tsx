import Header from "./Header";
import Intro from "./Intro";
import Equipa from "./Equipa";
import Footer from "./Footer";
import Servicos from "./Servicos";

export default function Home() {
  return (
    <div className="flex flex-col p-10 min-h-screen max-w-screen-2xl mx-auto bg-background">
      <Header />
      <section id="home">
        <Intro />
      </section>
      <section id="equipa">
        <Equipa />
      </section>
      <section id="servicos">
        <Servicos />
      </section>
      <section id="contato">
        <Footer />
      </section>
    </div>
  );
}
