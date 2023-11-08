import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { ProductRating, ProductRatingInput } from "@/types/product-rating";
import { productApi } from "@/config/api-path";

const useProductRatingCreate = (id?: number) => {
  return useMutation<
    ApiResponse<
      ProductRating & {
        id: number;
      }
    >,
    ProductRatingInput
  >({
    path: productApi.productRatingCreate(id),
    method: "POST",
    mutateRelatedDataList: {
      mutatePath: productApi.productRating(id),
      shouldRevalidate: true,
    },
  });
};

export default useProductRatingCreate;
