import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Blog: NextPage = () => {
  return (
    <>
      <NextSeo title="Yathindra" description="Brings ideas to life with code" />
      <div style={{ padding: "15px" }}>
        <span>404 - Page Not Found.</span>
      </div>
    </>
  );
};

export default Blog;
