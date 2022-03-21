import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useContext, useEffect, useState } from "react";
import { GlobalStyle, lightTheme, darkTheme } from "../src/theme/themeConfig";
import ThemeProvider, { IThemeContext, ThemeContext } from "../src/context/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { changeTheme, theme } = useContext(ThemeContext) as unknown as IThemeContext;

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
// function IThemeContext(IThemeContext: any): TodoContextType {
//   throw new Error("Function not implemented.");
// }
