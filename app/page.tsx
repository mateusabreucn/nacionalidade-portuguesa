import Header from "./Header";
import Intro from "./Intro";
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
      "
    >
      {/* <div
      className="
        flex flex-col
        p-6 md:p-10
        min-h-screen max-w-screen-2xl
        mx-auto
        bg-blue-200 sm:bg-amber-200 md:bg-red-200 lg:bg-green-200 xl:bg-fuchsia-200 2xl:bg-orange-200"
    > */}
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
