import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { OrderCreateInput } from "@/types/order";
import { orderApi, userApi } from "@/config/api-path";

const useOrderCreate = () => {
  return useMutation<ApiResponse<never>, OrderCreateInput>({
    path: orderApi.create,
    method: "POST",
    mutateRelatedDataList: {
      mutatePath: userApi.cart,
      shouldRevalidate: true,
    },
  });
};

export default useOrderCreate;
