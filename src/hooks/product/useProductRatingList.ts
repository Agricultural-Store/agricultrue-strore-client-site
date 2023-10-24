import { productApi } from "@/config/api-path";
import { ProductRating } from "@/types/product-rating";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useProductRatingList = (id?: number) => {
  return useSWR<
    ApiResponse<ProductRating[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    !id
      ? null
      : {
          path: productApi.productRating(id),
        },
    {
      keepPreviousData: true,
    },
  );
};

export default useProductRatingList;
