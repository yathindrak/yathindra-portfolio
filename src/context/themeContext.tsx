import React, { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../theme/themeConfig";

type themeOptions = "LIGHT" | "DARK";

export interface IThemeContext {
  theme: themeOptions;
  changeTheme(theme: themeOptions): void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as any);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = usePersistedState<themeOptions>(
    "@yathindra/theme",
    "LIGHT"
  );

  return (
    <ThemeContext.Provider value={{ changeTheme: setTheme, theme }}>
      <StyledThemeProvider theme={theme === "DARK" ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
