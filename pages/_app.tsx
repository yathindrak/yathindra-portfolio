import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ThemeProvider from "../src/context/themeContext";
import { NavBar } from "../src/components/header";
import ContentfulProvider, {
  IContentfulConfig,
} from "../src/context/contentfulContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  const contentfulConfig: IContentfulConfig = {
    accessToken: "XMOyYSdW8ekvt-GynzL_cDZzGrO22-nSOPjALAD0Nzc",
    space: "ikp3o42mvfzz",
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <ContentfulProvider config={contentfulConfig}>
        <NavBar />
        {isMounted && <Component {...pageProps} />}
      </ContentfulProvider>
    </ThemeProvider>
  );
}

export default MyApp;
