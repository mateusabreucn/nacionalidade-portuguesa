export const GA_MEASUREMENT_ID = "G-VZW6C7WSHL";

export interface CookieConsent {
  essential: boolean;
  dataProcessing: boolean;
  marketing: boolean;
  timestamp?: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function getCookieConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem("cookie_consent");
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(consent?: CookieConsent | null): boolean {
  const prefs = consent ?? getCookieConsent();
  return prefs?.marketing === true;
}

/** Loads Google Analytics only after marketing cookie consent. */
export function initGoogleAnalytics(consent?: CookieConsent | null): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent(consent)) return;
  if (document.getElementById("ga-gtag")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the Arguments object, not a rest-args array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.id = "ga-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
