import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Article } from "../src/components/article";
import { Footer } from "../src/components/footer";
import { IThemeContext, ThemeContext } from "../src/context/themeContext";

interface BlogPageProps {
  posts: any;
}

interface Blog {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: any;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

const Blog: NextPage<BlogPageProps> = () => {
  const { changeTheme, theme } = useContext(
    ThemeContext
  ) as unknown as IThemeContext;
  const [article, setArticle] = useState();
  const router = useRouter();
  const { blogId } = router.query;
  // d2eedacc5f3e

  const fetchArticle = async () => {
    const data = await fetch("/articles-feed.json");
    const articlesData = await data.json();
    const articleList = articlesData?.items;
    const result = articleList.find((item: any) => {
      return item?.guid?.split("/p/")[1] === blogId;
    });

    if (!result) {
      router.push("/404");
    }

    setArticle(result);
  };

  useEffect(() => {
    if (!router.isReady) return;
    fetchArticle();
  }, [router.isReady]);

  return (
    <>
      <NextSeo title="Yathindra" description="Brings ideas to life with code" />
      <Article article={article} />
      <Footer />
    </>
  );
};

export default Blog;
