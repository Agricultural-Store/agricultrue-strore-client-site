import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { productComboApi } from "@/config/api-path";
import { ComboRating, ComboRatingInput } from "@/types/combo-rating";

const useComboRatingCreate = (id?: number) => {
  return useMutation<ApiResponse<ComboRating>, ComboRatingInput>({
    path: productComboApi.comboRatingCreate(id),
    method: "POST",
    mutateRelatedDataList: {
      mutatePath: productComboApi.comboRating(id),
      shouldRevalidate: true,
    },
  });
};

export default useComboRatingCreate;
