import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { Articles } from "../src/components/articles";
import { Footer } from "../src/components/footer";
import { IThemeContext, ThemeContext } from "../src/context/themeContext";

interface IBlogProps {
  posts: any;
}

const Blog: NextPage<IBlogProps> = ({ posts }) => {
  const { changeTheme, theme } = useContext(
    ThemeContext
  ) as unknown as IThemeContext;

  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <>
      <NextSeo title="Yathindra" description="Brings ideas to life with code" />
      <Articles articles={posts} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yathindra"
  );
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: data?.items,
    },
  };
}

export default Blog;
