import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { userApi } from "@/config/api-path";

const useUserFavoriteDelete = (id?: number) => {
  return useMutation<ApiResponse<never>>({
    path: userApi.deleteFavorite(id),
    method: "DELETE",
  });
};

export default useUserFavoriteDelete;
