"use client";

import { useEffect } from "react";
import { initGoogleAnalytics } from "./analytics";

/** Restores analytics on revisit when marketing consent was already saved. */
export default function GoogleAnalytics() {
  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  return null;
}
