import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import PopUpWhatsApp from "./components/PopUpWhatsApp";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: {
    default: "Nacionalidade Portuguesa | Amanda Dantas",
    template: "%s | Nacionalidade Portuguesa",
  },
  description:
    "Assessoria jurídica especializada em Nacionalidade Portuguesa, Vistos e Imigração. Transforme seu sonho de viver na Europa em realidade com segurança e agilidade.",
  keywords: [
    "Nacionalidade Portuguesa",
    "Cidadania Portuguesa",
    "Advogado Portugal",
    "Imigração Portugal",
    "Vistos Portugal",
    "Amanda Dantas",
  ],
  authors: [{ name: "Amanda Dantas" }],
  creator: "Mateus",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://nacionalidade-portuguesa-swart.vercel.app/",
    title: "Nacionalidade Portuguesa | Amanda Dantas",
    description:
      "Assessoria jurídica especializada em Nacionalidade Portuguesa e Imigração.",
    siteName: "Amanda Dantas Advocacia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${josefin.variable}`}>
      <body className={inter.className}>
        {children}
        <PopUpWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
