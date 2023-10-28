import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { OrderCreateInput } from "@/types/order";
import { orderApi } from "@/config/api-path";

const useOrderCreate = () => {
  return useMutation<ApiResponse<never>, OrderCreateInput>({
    path: orderApi.create,
    method: "POST",
  });
};

export default useOrderCreate;
