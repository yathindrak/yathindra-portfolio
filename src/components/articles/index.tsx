import Image from "next/image";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import Row from "../common/row";
import { useEffect, useState } from "react";
import Link from "next/link";

const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

const PortfolioMenuContainer = styled(Row)`
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface PortfolioMenuItemProps {
  readonly selected: boolean;
}

const PortfolioMenuItem = styled(Box)<PortfolioMenuItemProps>`
  margin-left: 4rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${(props) => (props.selected ? "purple" : "#000")};
  &:hover {
    color: purple;
    transition: all 0.3s;
  }
`;

const PortfolioMobileTitle = styled(Box)`
  align-self: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

interface ArticlesContainerProps {
  // space evenly when only two cards are available
  readonly shouldSpaceEvenly: boolean;
}

const ArticlesContainer = styled(Row)<ArticlesContainerProps>`
  justify-content: ${(props) =>
    props.shouldSpaceEvenly ? "space-evenly" : "space-between"};
  flex-wrap: wrap;
`;

const PortfolioCardContent = styled(Row)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PortfolioCardContainer = styled(Row)`
  position: relative;
  cursor: pointer;
  height: 26rem;
  width: 24rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%),
    0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
  border-radius: 0.4rem;
  @media screen and (max-width: 992px) {
    width: calc(50% - 1rem);
    margin-bottom: 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 0;
  } ;
`;

const ArticleHeading = styled(Row)`
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 6px;
  line-height: 1.8rem;
`;

const ArticleDescription = styled(Row)`
  font-size: 0.97rem;
  color: #5a6169;
  text-align: center;
  margin: 0 6px;
  line-height: 1.8rem;
`;

interface IArticlesProps {
  articles: any;
}

export const Articles: React.FC<IArticlesProps> = ({ articles }) => {
  const [filteredData, setFilteredData] = useState<any[]>();

  useEffect(() => {
    setFilteredData(articles);
  }, [articles]);

  const convertNodeToText = (node: any) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioMobileTitle>My Articles</PortfolioMobileTitle>

      <ArticlesContainer shouldSpaceEvenly={true}>
        {filteredData
          ? filteredData.map((item, i) => (
              /*         <Link href={item?.url} passHref key={i}> */
              <PortfolioCardContainer key={i}>
                <PortfolioCardContent>
                  <img style={{ width: "100%" }} src={item?.thumbnail} />
                  {/* <Image
                    src="https://cdn-images-1.medium.com/max/707/1*tD_k4VbQDq7HYb27EXK6FA.png"
                    layout="fill"
                    width={200}
                    objectFit="contain"
                    // placeholder="blur"
                    alt="Picture of the author"
                  /> */}
                  <ArticleHeading>{item?.title}</ArticleHeading>
                  <ArticleDescription>
                    {convertNodeToText(item.description.substring(0, 280))} . . .
                  </ArticleDescription>
                </PortfolioCardContent>
              </PortfolioCardContainer>
              /* </Link> */
            ))
          : null}
      </ArticlesContainer>
    </PortfolioContainer>
  );
};
