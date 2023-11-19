import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { userApi } from "@/config/api-path";

const useUserFavoriteCreate = (id?: number) => {
  return useMutation<ApiResponse<never>>({
    path: userApi.addFavorite(id),
    method: "POST",
    mutateRelatedDataList: {
      mutatePath: [userApi.favorite],
      shouldRevalidate: true,
    },
  });
};

export default useUserFavoriteCreate;
