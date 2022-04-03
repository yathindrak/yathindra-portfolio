import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Box from "../src/components/common/box";
import Row from "../src/components/common/row";
import { ContactSection } from "../src/components/contact";
import { Footer } from "../src/components/footer";
import { HeroSection } from "../src/components/hero";
import { Portfolio } from "../src/components/portfolio";
import { IThemeContext, ThemeContext } from "../src/context/themeContext";

const Home: NextPage = () => {
  const { changeTheme, theme } = useContext(
    ThemeContext
  ) as unknown as IThemeContext;
  return (
    <>
      <Head>
        <title>Yathindra</title>
        <meta name="description" content="Brings ideas to life with code" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSection
        mainTitleText="Yathindra"
        mainTitleSubText="Kodithuwakku"
        subtitleText="Brings ideas to life with code"
      />

      <Portfolio />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
