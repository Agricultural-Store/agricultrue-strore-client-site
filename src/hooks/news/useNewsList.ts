import { newsApi } from "@/config/api-path";
import { News } from "@/types/news";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useNewsList = () => {
  return useSWR<ApiResponse<News[]>, ErrorResponse<ListOptions>, FetchOptions<ListOptions>>(
    {
      path: newsApi.list,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useNewsList;
