import { productComboApi } from "@/config/api-path";
import { ComboRating } from "@/types/combo-rating";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useComboRatingList = (id?: number) => {
  return useSWR<
    ApiResponse<ComboRating[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    !id
      ? null
      : {
          path: productComboApi.comboRating(id),
        },
    {
      keepPreviousData: true,
    },
  );
};

export default useComboRatingList;
