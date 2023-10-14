import { ApiResponse, ErrorResponse, FetchOptions } from "@/types/shared";
import { Product, ProductFilterParams } from "@/types/product";
import { productApi } from "@/config/api-path";
import useSWR from "swr";

const useProductList = (params: ProductFilterParams) => {
  return useSWR<
    ApiResponse<Product[]>,
    ErrorResponse<ProductFilterParams>,
    FetchOptions<ProductFilterParams>
  >(
    {
      path: productApi.list,
      params,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useProductList;
