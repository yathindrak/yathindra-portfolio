import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ThemeProvider from "../src/context/themeContext";
import { NavBar } from "../src/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
        <NavBar />
        {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
