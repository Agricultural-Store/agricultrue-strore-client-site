import { userApi } from "@/config/api-path";
import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";

const useUserCartUpdate = (id?: number) => {
  return useMutation<ApiResponse<never>>({
    path: userApi.changeCart(id),
    method: "PUT",
    mutateRelatedDataList: {
      mutatePath: userApi.addToCart,
      shouldRevalidate: true,
    },
  });
};

export default useUserCartUpdate;
