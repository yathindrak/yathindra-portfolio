import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Articles } from "../src/components/articles";
import { Footer } from "../src/components/footer";
import { IThemeContext, ThemeContext } from "../src/context/themeContext";
// import articles from "articles-feed.json";

interface IBlogProps {
  posts: any;
}

const Blog: NextPage<IBlogProps> = ({ posts }) => {
  const { changeTheme, theme } = useContext(
    ThemeContext
  ) as unknown as IThemeContext;
  const [articles, setArticles] = useState();

  const fetchArticles = async () => {
    const data = await fetch("/articles-feed.json");
    const articlesData = await data.json();
    const articleList = articlesData?.items;
    setArticles(articleList);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <NextSeo title="Yathindra" description="Brings ideas to life with code" />
      <Articles articles={articles} />
      <Footer />
    </>
  );
};

export default Blog;
