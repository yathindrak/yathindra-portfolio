import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ThemeProvider from "../src/context/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
        {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
