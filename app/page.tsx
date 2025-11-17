import Header from "./Header";
import Intro from "./Intro";

export default function Home() {
  return (
    <div className="flex flex-col p-10 min-h-screen bg-background">
      <Header />
      <Intro />
    </div>
  );
}
