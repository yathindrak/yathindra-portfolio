import type { NextPage } from "next";
import { useContext } from "react";
import { NavBar } from "../src/components/header";
import { IThemeContext, ThemeContext } from "../src/context/themeContext";

const Home: NextPage = () => {
  const { changeTheme, theme } = useContext(
    ThemeContext
  ) as unknown as IThemeContext;
  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
