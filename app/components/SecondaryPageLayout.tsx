import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

interface SecondaryPageLayoutProps {
  children: React.ReactNode;
}

export default function SecondaryPageLayout({
  children,
}: SecondaryPageLayoutProps) {
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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
