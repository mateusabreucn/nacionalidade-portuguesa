"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CookieIcon } from "./Icons/CookieIcon";

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
          <div className="p-4 sm:p-6">
            {/* Linha 1: Ícone + Texto */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 mt-0.5">
                <CookieIcon className="w-8 h-8 sm:w-10 sm:h-10 text-text-accent" />
              </div>
              <p className="text-xs sm:text-sm text-text-accent leading-relaxed">
                O nosso site utiliza cookies para analisar o tráfego e melhorar
                a sua experiência de navegação. Utilizamos ferramentas como
                Google Ads e Meta Ads para medir o desempenho das nossas
                campanhas. Pode gerir as suas preferências a qualquer momento.
              </p>
            </div>

            {/* Linha 2: Botões */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <Link
                href="/politica-privacidade"
                className="
              text-xs sm:text-sm font-medium text-text-accent
              underline underline-offset-2
              hover:brightness-75 transition-all
              shrink-0
            "
              >
                Política de Privacidade e Cookies
              </Link>

              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => {
                    setShowPreferences(!showPreferences);
                    if (showPreferences) setShowAdvanced(false);
                  }}
                  className="
                px-4 sm:px-6 py-2
                text-xs sm:text-sm font-medium text-text-accent
                bg-transparent border border-border-accent rounded-lg
                cursor-pointer
                hover:bg-bg-modal transition-all
              "
                >
                  Gerir Cookies
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="
                px-4 sm:px-6 py-2
                text-xs sm:text-sm font-medium text-white
                bg-btn-accent rounded-lg
                cursor-pointer
                hover:brightness-110 transition-all
              "
                >
                  Aceitar Todos
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border-accent/30">
              <h4 className="font-josefin text-sm sm:text-base font-semibold text-text-secondary mt-4 mb-3">
                Gerir as suas preferências de cookies
              </h4>

              {/* Opção 1: Essenciais (sempre ativo) */}
              <div className="mb-4 p-3 rounded-xl bg-bg-modal/50">
                <label className="flex items-start gap-3 cursor-default">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 w-4 h-4 accent-btn-accent shrink-0"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-text-secondary block">
                      Cookies essenciais (sempre ativos)
                    </span>
                    <span className="text-[10px] sm:text-xs text-text-muted leading-relaxed block mt-1">
                      Autorizo o tratamento de dados pessoais mínimos
                      necessários para navegar no site e aceder às páginas
                      públicas, sem envio de documentos. Inclui dados como
                      endereço IP, cookies essenciais, preferências de idioma e
                      outras informações de navegação.
                    </span>
                  </div>
                </label>
              </div>

              {/* Opção 2: Tratamento de dados e documentos */}
              <div className="mb-4 p-3 rounded-xl bg-bg-modal/50">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.dataProcessing}
                    onChange={() => togglePreference("dataProcessing")}
                    className="mt-1 w-4 h-4 accent-btn-accent shrink-0 cursor-pointer"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-text-secondary block">
                      Tratamento de dados e documentos
                    </span>
                    <span className="text-[10px] sm:text-xs text-text-muted leading-relaxed block mt-1">
                      Autorizo o tratamento dos meus dados pessoais e dos
                      documentos enviados, incluindo certidões e outros
                      documentos necessários, para análise do meu pedido e
                      prestação dos serviços solicitados. Inclui dados pessoais
                      e documentos enviados pelo utilizador para emissão de
                      certidões ou outros serviços administrativos.
                    </span>
                  </div>
                </label>
              </div>

              {/* Opção 3: Marketing e publicidade */}
              <div className="mb-4 p-3 rounded-xl bg-bg-modal/50">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference("marketing")}
                    className="mt-1 w-4 h-4 accent-btn-accent shrink-0 cursor-pointer"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-text-secondary block">
                      Marketing e publicidade personalizada
                    </span>
                    <span className="text-[10px] sm:text-xs text-text-muted leading-relaxed block mt-1">
                      Autorizo a utilização dos meus dados para envio de
                      comunicações informativas e promocionais, bem como para
                      personalização de publicidade através de plataformas
                      digitais, incluindo serviços da Meta Platforms e da
                      Google. Este consentimento é totalmente opcional e pode
                      ser retirado a qualquer momento.
                    </span>
                  </div>
                </label>
              </div>

              {/* Ver mais preferências */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="
              text-xs sm:text-sm font-medium text-text-accent
              underline underline-offset-2
              cursor-pointer
              hover:brightness-75 transition-all
              mb-4
            "
              >
                {showAdvanced
                  ? "Ocultar preferências avançadas"
                  : "Ver mais preferências de cookies"}
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
                <div className="p-3 sm:p-4 rounded-xl bg-bg-modal/70 border border-border-accent/20 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-600 text-base sm:text-lg mt-0.5 shrink-0">
                      ⚠️
                    </span>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-text-secondary block mb-2">
                        Recusar todos os cookies opcionais
                      </span>
                      <span className="text-[10px] sm:text-xs text-text-muted leading-relaxed block">
                        Ao clicar em &ldquo;Recusar todos&rdquo;, você poderá
                        navegar normalmente no site, mas alguns recursos
                        permanecerão desativados: envio de formulários e
                        marketing.
                      </span>

                      <span className="text-[10px] sm:text-xs font-semibold text-text-secondary block mt-3 mb-1">
                        Dados que ainda serão recolhidos (essenciais):
                      </span>
                      <ul className="text-[10px] sm:text-xs text-text-muted leading-relaxed list-disc pl-4 space-y-1">
                        <li>
                          <strong>Cookies essenciais:</strong> necessários para
                          que o site funcione corretamente, como manutenção de
                          sessão, carregamento de páginas e preferências de
                          idioma.
                        </li>
                        <li>
                          <strong>Dados técnicos de navegação:</strong> endereço
                          IP, tipo de navegador, resolução de ecrã, tempo de
                          acesso às páginas — utilizados apenas para fins de
                          segurança e funcionamento do site.
                        </li>
                      </ul>

                      <div className="mt-3 p-2 rounded-lg bg-amber-50/50 border border-amber-200/50">
                        <span className="text-[10px] sm:text-xs text-text-accent leading-relaxed block">
                          <strong>⚠️ Importante:</strong> Sem consentimento
                          adicional, você não poderá enviar formulários ou fazer
                          upload de documentos, nem receber comunicações de
                          marketing ou publicidade personalizada.
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleRejectAll}
                    className="
                  mt-4 w-full
                  px-4 py-2
                  text-xs sm:text-sm font-medium text-text-accent
                  bg-transparent border border-border-accent rounded-lg
                  cursor-pointer
                  hover:bg-bg-modal transition-all
                "
                  >
                    Recusar Todos (manter apenas essenciais)
                  </button>
                </div>
              </div>

              {/* Botão Salvar Preferências */}
              <button
                onClick={handleSavePreferences}
                className="
              w-full
              px-6 py-2.5
              text-xs sm:text-sm font-medium text-white
              bg-btn-accent rounded-lg
              cursor-pointer
              hover:brightness-110 transition-all
            "
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
