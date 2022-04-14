import Image from "next/image";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import Row from "../common/row";
import c from "./index.module.css";

const ArticlesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 68vw;
`;

const ArticlesMobileTitle = styled(Box)`
  align-self: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

interface ArticleCardsContainerProps {
  // space evenly when only two cards are available
  readonly shouldSpaceEvenly: boolean;
}

const ArticleCardsContainer = styled(Row)<ArticleCardsContainerProps>`
  justify-content: ${(props) =>
    props.shouldSpaceEvenly ? "space-evenly" : "space-between"};
  flex-wrap: wrap;
`;

const ArticleCardContainer = styled(Row)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

const ArticleCard = styled(Row)`
  position: relative;
  cursor: pointer;
  height: 25rem;
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

interface IArticleProps {
  article: any;
}

export const Article: React.FC<IArticleProps> = ({ article }) => {
  const convertNodeToText = (node: any) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  console.log(article);

  return (
    <ArticlesContainer>
      <ArticlesMobileTitle>My Articles</ArticlesMobileTitle>

      <div
        className={c.content}
        dangerouslySetInnerHTML={{ __html: article?.content }}
      ></div>
    </ArticlesContainer>
  );
};
