import Header from "./Header";
import Hero from "./Hero";
import Equipa from "./Equipa";
import Footer from "./Footer";
import Servicos from "./Servicos";

export default function Home() {
  return (
    <div
      className="
        flex flex-col
        p-6 md:p-10
        min-h-screen max-w-screen-2xl
        mx-auto
        bg-background
        relative
      "
    >
      <Header />
      <section id="home">
        <Hero />
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
