import { userApi } from "@/config/api-path";
import { Product } from "@/types/product";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";

import useSWR from "swr";

const useUserFavoriteList = (params?: ListOptions) => {
  return useSWR<
    ApiResponse<Product[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    {
      path: userApi.favorite,
      params
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useUserFavoriteList;
