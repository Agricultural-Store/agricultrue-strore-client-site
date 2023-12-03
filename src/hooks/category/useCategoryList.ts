import { categoryApi } from "@/config/api-path";
import { Category } from "@/types/category";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useCategoryList = (params?: ListOptions) => {
  return useSWR<
    ApiResponse<Category[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    {
      path: categoryApi.list,
      params,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useCategoryList;
