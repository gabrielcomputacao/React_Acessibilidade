import "@/styles/globals.css";
import { axeAcessibilityReporter } from "@/utils/axeAcessibilityReporter";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  /* useEffect so é executado depois que a DOM está pronta */
  useEffect(() => {
    // o axe só pode ser executado quando a DOM for montada, porque usando next algumas paginas sao renderizadas pelo backend
    axeAcessibilityReporter();
  }, []);

  return <Component {...pageProps} />;
}
