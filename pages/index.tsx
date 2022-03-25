import type { NextPage } from "next";
import { useContext } from "react";
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

      <div>
        <nav>
          <div>
            <span data-name="all">All</span>
            <span>Bag</span>
            <span>Shoe</span>
            <span>Watch</span>
            <span>Camera</span>
            <span>Headphone</span>
          </div>
        </nav>
        <div className="gallery">
          <div data-name="bag">
            <span>
              <img src="images/bag-1.jpg" alt="" />
            </span>
          </div>
          <div data-name="headphone">
            <span>
              <img src="images/headphone-1.jpg" alt="" />
            </span>
          </div>
          <div data-name="camera">
            <span>
              <img src="images/camera-1.jpg" alt="" />
            </span>
          </div>
          <div data-name="shoe">
            <span>
              <img src="images/shoe-1.jpg" alt="" />
            </span>
          </div>
          <div data-name="headphone">
            <span>
              <img src="images/headphone-2.jpg" alt="" />
            </span>
          </div>
          <div data-name="watch">
            <span>
              <img src="images/watch-1.jpg" alt="" />
            </span>
          </div>
          <div data-name="shoe">
            <span>
              <img src="images/shoe-2.jpg" alt="" />
            </span>
          </div>
          <div data-name="camera">
            <span>
              <img src="images/camera-2.jpg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
