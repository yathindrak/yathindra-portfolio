import { useState, useEffect, useContext } from "react";
import { ContentfulContext } from "../context/contentfulContext";

export interface IPortofolioData {
  title: string;
  description: string;
  image: any;
  tag: string[];
  url: string;
}

const useContentful = () => {
  const contentful = useContext(ContentfulContext);
  const [data, setData] = useState<IPortofolioData[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(!!data);

  const requestPortfolioData = async () => {
    setLoading(true);

    const { client } = contentful;

    try {
      const entries = await client.getEntries({
        content_type: "ppwPortfolio",
        locale: "en-US",
        include: 10,
      });

      const data: IPortofolioData[] = entries?.items?.map(
        (entry: any, i: number) => entry?.fields
      );
      setData(data);
    } catch (error) {
      console.log("Error occured when retrieving portfolio data", error);
    }
    setLoading(false);
    setFetched(true);
  };

  useEffect(() => {
    if (fetched) {
      setFetched(false);
    }

    requestPortfolioData();
  }, []);

  const finish = () => ({ data, error, fetched, loading });

  return finish();
};

export default useContentful;
