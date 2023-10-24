import { productComboApi } from "@/config/api-path";
import { ProductCombo, ProductComboFilterParams } from "@/types/product-combo";
import { ApiResponse, ErrorResponse, FetchOptions } from "@/types/shared";
import useSWR from "swr";

const useProductComboList = (params?: ProductComboFilterParams) => {
  return useSWR<
    ApiResponse<ProductCombo[]>,
    ErrorResponse<ProductComboFilterParams>,
    FetchOptions<ProductComboFilterParams>
  >(
    {
      path: productComboApi.list,
      params,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useProductComboList;
