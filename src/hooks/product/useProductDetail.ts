import { productApi } from "@/config/api-path";
import { Product } from "@/types/product";
import { ProductDetail } from "@/types/product-detail";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useProductDetail = (id?: number) => {
  return useSWR<
    ApiResponse<Product>,
    ErrorResponse<ListOptions<ProductDetail>>,
    FetchOptions<ListOptions<ProductDetail>>
  >(
    !id
      ? null
      : {
          path: productApi.detail(id),
          method: "GET",
        },
  );
};

export default useProductDetail;
