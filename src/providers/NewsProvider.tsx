import React, { ReactNode, useEffect, useState } from "react";
import { News } from "@/types/news";
import { NewsContext } from "./NewsContext";
import useNewsList from "@/hooks/news/useNewsList";

type Props = {
  children: ReactNode;
};

const NewsProvider = ({ children }: Props) => {
  const [news, setNews] = useState<News[]>([]);

  const { data } = useNewsList();

  useEffect(() => {
    setNews(data?.data || []);
  }, [data?.data]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
