import type { NextPage } from "next";
import { useContext } from "react";
import Row from "../src/components/common/row";
import { HeroSection } from "../src/components/hero";
import { IThemeContext, ThemeContext } from "../src/context/themeContext";

const Home: NextPage = () => {
  const { changeTheme, theme } = useContext(
    ThemeContext
  ) as unknown as IThemeContext;
  return (
    <>
      <HeroSection
        mainTitleText="Yathindra"
        mainTitleSubText="Kodithuwakku"
        subtitleText="Brings ideas to life with code"
      />
    </>
  );
};

export default Home;
