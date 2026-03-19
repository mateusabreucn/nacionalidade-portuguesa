"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CookieIcon } from "../Icons/CookieIcon";
import { dadosDosCookies } from "./cookiesData";

interface CookiePreferences {
  essential: boolean;
  dataProcessing: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const preferencesRef = useRef<HTMLDivElement>(null);
  const advancedRef = useRef<HTMLDivElement>(null);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    dataProcessing: false,
    marketing: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        setShowBanner(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(
      "cookie_consent",
      JSON.stringify({ ...prefs, timestamp: new Date().toISOString() })
    );
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, dataProcessing: true, marketing: true });
  };

  const handleRejectAll = () => {
    saveConsent({ essential: true, dataProcessing: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-90 transition-all duration-500 ease-in-out ${
          showPreferences
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div className="fixed inset-x-0 bottom-4 z-100 pointer-events-none flex justify-center px-4">
        <div className="w-full max-w-4xl flex justify-center">
          <div
            className="
            pointer-events-auto
            w-full max-w-[95%] sm:max-w-[80%]
            max-h-[80vh]
            bg-bg-card rounded-2xl img-shadow
            animate-slide-up
            overflow-hidden
            flex flex-col
          "
          >
            <div className="p-[clamp(1rem,3vw,1.5rem)]">
              {/* Linha 1: Ícone + Texto com Float para Wrap */}
              <div className="block mb-[clamp(0.75rem,2vw,1rem)] text-[clamp(0.75rem,1.5vw,0.875rem)] text-text-accent leading-relaxed text-left">
                <div className="float-left mr-[clamp(0.5rem,1.5vw,0.75rem)] mb-[clamp(0.1rem,0.5vw,0.25rem)]">
                  <CookieIcon className="w-[clamp(2.5rem,5vw,3.5rem)] h-[clamp(2.5rem,5vw,3.5rem)] text-text-accent" />
                </div>
                {dadosDosCookies.textoPrincipalDoBanner}
              </div>

              {/* Linha 2: Botões */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-[clamp(0.75rem,2vw,1rem)]">
                <Link
                  href={dadosDosCookies.urlDoLinkDaPolitica}
                  className="
                  text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-text-accent
                  underline underline-offset-2
                  hover:brightness-75 transition-all
                  shrink-0
                "
                >
                  {dadosDosCookies.textoDoLinkDaPolitica}
                </Link>

                <div className="flex gap-[clamp(0.5rem,1.5vw,0.75rem)] shrink-0">
                  <button
                    onClick={() => {
                      setShowPreferences(!showPreferences);
                      if (showPreferences) setShowAdvanced(false);
                    }}
                    className="
                    px-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.35rem,1.2vw,0.5rem)]
                    text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-text-accent
                    bg-transparent border border-border-accent rounded-lg
                    cursor-pointer
                    hover:bg-bg-modal transition-all
                  "
                  >
                    {showPreferences
                      ? dadosDosCookies.textosDosBotoes.fecharGerenciamento
                      : dadosDosCookies.textosDosBotoes.gerirCookies}
                  </button>

                  <button
                    onClick={handleAcceptAll}
                    className="
                    px-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.35rem,1.2vw,0.5rem)]
                    text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-white
                    bg-btn-accent rounded-lg
                    cursor-pointer
                    hover:brightness-110 transition-all
                  "
                  >
                    {dadosDosCookies.textosDosBotoes.aceitarTodos}
                  </button>
                </div>
              </div>
            </div>

            {/* Seção Expandível: Gerir Cookies */}
            <div
              ref={preferencesRef}
              className="overflow-y-auto scrollbar-auto transition-all duration-500 ease-in-out min-h-0"
              style={{
                maxHeight: showPreferences
                  ? `${(preferencesRef.current?.scrollHeight ?? 0) + 800}px`
                  : "0px",
                opacity: showPreferences ? 1 : 0,
              }}
            >
              <div className="px-[clamp(1rem,3vw,1.5rem)] pb-[clamp(1rem,3vw,1.5rem)] border-t border-border-accent/30">
                <h4 className="font-josefin text-[clamp(0.875rem,1.5vw,1.125rem)] font-semibold text-text-secondary mt-4 mb-3">
                  {dadosDosCookies.tituloDoGerenciamento}
                </h4>

                {/* Opções Dinâmicas */}
                {dadosDosCookies.opcoesDeCookies.map((opcao) => (
                  <div
                    key={opcao.id}
                    className="mb-[clamp(0.75rem,2vw,1rem)] p-[clamp(0.75rem,2vw,1rem)] rounded-xl bg-bg-modal/50"
                  >
                    <label
                      className={`flex items-start gap-[clamp(0.5rem,1.5vw,0.75rem)] ${opcao.sempreAtivoObrigatorio ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <input
                        type="checkbox"
                        checked={
                          opcao.sempreAtivoObrigatorio
                            ? true
                            : preferences[opcao.id]
                        }
                        onChange={() => togglePreference(opcao.id)}
                        disabled={opcao.sempreAtivoObrigatorio}
                        className={`mt-1 w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)] accent-btn-accent shrink-0 ${opcao.sempreAtivoObrigatorio ? "" : "cursor-pointer"}`}
                      />
                      <div>
                        <span className="text-[clamp(0.75rem,1.5vw,0.875rem)] font-semibold text-text-secondary block">
                          {opcao.tituloDaOpcao}
                        </span>
                        <span className="text-[clamp(0.625rem,1.2vw,0.75rem)] text-text-muted leading-relaxed block mt-1">
                          {opcao.textoDescritivo}
                        </span>
                      </div>
                    </label>
                  </div>
                ))}

                {/* Ver mais preferências */}
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="
                  text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-text-accent
                  underline underline-offset-2
                  cursor-pointer
                  hover:brightness-75 transition-all
                  mb-[clamp(0.75rem,2vw,1rem)]
                "
                >
                  {showAdvanced
                    ? dadosDosCookies.secaoAvancada.textoBotaoOcultar
                    : dadosDosCookies.secaoAvancada.textoBotaoMostrar}
                </button>

                {/* Seção Avançada Expandível */}
                <div
                  ref={advancedRef}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: showAdvanced
                      ? `${(advancedRef.current?.scrollHeight ?? 0) + 200}px`
                      : "0px",
                    opacity: showAdvanced ? 1 : 0,
                  }}
                >
                  <div className="p-[clamp(0.75rem,2vw,1rem)] rounded-xl bg-bg-modal/70 border border-border-accent/20 mb-[clamp(0.75rem,2vw,1rem)]">
                    <div className="flex items-start gap-[clamp(0.5rem,1vw,0.75rem)]">
                      <span className="text-amber-600 text-[clamp(1rem,2vw,1.125rem)] mt-0.5 shrink-0">
                        ⚠️
                      </span>
                      <div>
                        <span className="text-[clamp(0.75rem,1.5vw,0.875rem)] font-semibold text-text-secondary block mb-2">
                          {
                            dadosDosCookies.secaoAvancada.avisoDeRecusa
                              .tituloDoAviso
                          }
                        </span>
                        <span className="text-[clamp(0.625rem,1.2vw,0.75rem)] text-text-muted leading-relaxed block">
                          {
                            dadosDosCookies.secaoAvancada.avisoDeRecusa
                              .paragrafoExplicativo
                          }
                        </span>

                        <span className="text-[clamp(0.625rem,1.2vw,0.75rem)] font-semibold text-text-secondary block mt-3 mb-1">
                          {
                            dadosDosCookies.secaoAvancada.avisoDeRecusa
                              .subtituloDosEssenciais
                          }
                        </span>
                        <ul className="text-[clamp(0.625rem,1.2vw,0.75rem)] text-text-muted leading-relaxed list-disc pl-4 space-y-1">
                          {dadosDosCookies.secaoAvancada.avisoDeRecusa.listaDeDadosEssenciais.map(
                            (dado, index) => (
                              <li key={index}>
                                <strong>{dado.nomeDoDado}</strong>{" "}
                                {dado.explicacaoDoDado}
                              </li>
                            )
                          )}
                        </ul>

                        <div className="mt-3 p-2 rounded-lg bg-amber-50/50 border border-amber-200/50">
                          <span className="text-[clamp(0.625rem,1.2vw,0.75rem)] text-text-accent leading-relaxed block">
                            <strong>⚠️ Importante:</strong>{" "}
                            {
                              dadosDosCookies.secaoAvancada.avisoDeRecusa
                                .notaImportanteNoFinal
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleRejectAll}
                      className="
                      mt-[clamp(0.75rem,2vw,1rem)] w-full
                      px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.5rem,1.5vw,0.75rem)]
                      text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-text-accent
                      bg-transparent border border-border-accent rounded-lg
                      cursor-pointer
                      hover:bg-bg-modal transition-all
                    "
                    >
                      {dadosDosCookies.textosDosBotoes.recusarTodos}
                    </button>
                  </div>
                </div>

                {/* Botão Salvar Preferências */}
                <button
                  onClick={handleSavePreferences}
                  className="
                  w-full
                  px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.625rem,1.5vw,0.875rem)]
                  text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-white
                  bg-btn-accent rounded-lg
                  cursor-pointer
                  hover:brightness-110 transition-all
                "
                >
                  {dadosDosCookies.textosDosBotoes.salvarPreferencias}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
