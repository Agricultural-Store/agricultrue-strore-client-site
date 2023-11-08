import { NewsContextType } from "@/types/news";
import { createContext } from "react";

export const NewsContext = createContext<NewsContextType>({
  news: [],
  setNews: () => null
});
