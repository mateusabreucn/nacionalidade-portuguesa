"use client";

import { useEffect } from "react";

export default function TallyEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]'
    );

    if (existingScript) {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="
        w-full
        max-[1165px]:w-[986px] max-[1158px]:w-full
        max-[1090px]:w-[576px] max-[678px]:w-full
        mx-auto
        transition-all duration-300
      "
    >
      <iframe
        data-tally-src="https://tally.so/embed/b5Oey0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        className="w-full border-0"
        title="Formulário de Solicitação de Nacionalidade"
      />
    </div>
  );
}
