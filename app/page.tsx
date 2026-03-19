import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import Equipa from "@components/Equipa/Equipa";
import Footer from "@components/Footer/Footer";
import Servicos from "@components/Servicos/Servicos";
import ScrollDownArrow from "@components/ScrollDownArrow";

export default function Home() {
  return (
    <div
      className="
        flex flex-col
        p-6 md:p-10
        min-h-screen max-w-4xl
        mx-auto
        bg-bg-primary
        relative
      "
    >
      <Header />
      <ScrollDownArrow />
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
