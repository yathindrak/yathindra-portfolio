import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useContext } from "react";
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
      <NextSeo title="Yathindra" description="Brings ideas to life with code" />
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
