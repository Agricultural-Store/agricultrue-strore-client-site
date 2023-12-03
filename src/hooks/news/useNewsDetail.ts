import { newsApi } from "@/config/api-path";
import { News } from "@/types/news";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";

import useSWR from "swr";

const useNewsDetail = (id?: number) => {
  return useSWR<
    ApiResponse<News>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions> | null
  >(
    id
      ? {
          path: newsApi.detail(id),
        }
      : null,
  );
};

export default useNewsDetail;
