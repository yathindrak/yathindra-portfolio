import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import ThemeProvider from "../src/context/themeContext";
import ContentfulProvider, {
  IContentfulConfig,
} from "../src/context/contentfulContext";
import { Router } from "next/router";
import NavBar from "../src/components/header";

//Binding route events with nprogress. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

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
