import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { UserOrder } from "@/types/user";
import { userApi } from "@/config/api-path";

const useUserOrderStatusUpdate = (id?: number) => {
  return useMutation<ApiResponse<UserOrder>, { status: string }>({
    path: userApi.updateOrderStatus(),
    method: "PUT",
    mutateRelatedDataList: {
      mutatePath: [userApi.orderDetail(id), userApi.order],
    },
  });
};

export default useUserOrderStatusUpdate;
