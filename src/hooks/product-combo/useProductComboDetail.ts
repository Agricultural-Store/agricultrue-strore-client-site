import { productComboApi } from "@/config/api-path";
import { ProductComboDetail } from "@/types/product-combo-detail";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useProductComboDetail = (id?: number) => {
  return useSWR<
    ApiResponse<ProductComboDetail>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >({
    path: productComboApi.detail(id),
  });
};

export default useProductComboDetail;
