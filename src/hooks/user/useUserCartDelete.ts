import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { userApi } from "@/config/api-path";

const useUserCartDelete = () => {
  return useMutation<ApiResponse<never>>({
    path: userApi.deleteCart(),
    method: "DELETE",
    mutateRelatedDataList: {
      mutatePath: userApi.addToCart,
      shouldRevalidate: true,
    },
  });
};

export default useUserCartDelete;
