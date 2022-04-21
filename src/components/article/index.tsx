import React from "react";
import styled from "styled-components";
import Box from "../common/box";
import Container from "../common/container";
import c from "./index.module.css";

const ArticleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 68vw;
  min-height: 100vh;
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

interface IArticleProps {
  article: any;
}

export const Article: React.FC<IArticleProps> = ({ article }) => {
  return (
    <ArticleContainer>
      <ArticlesMobileTitle>My Articles</ArticlesMobileTitle>

      <div
        className={c.content}
        dangerouslySetInnerHTML={{ __html: article?.content }}
      ></div>
    </ArticleContainer>
  );
};

export default React.memo(Article);
