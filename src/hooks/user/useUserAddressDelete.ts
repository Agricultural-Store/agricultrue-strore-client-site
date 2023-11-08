import { userApi } from "@/config/api-path";
import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";

const useUserAddressDelete = (id?: number) => {
  return useMutation<ApiResponse<never>>({
    path: userApi.deleteAddress(id),
    method: "DELETE",
    mutateRelatedDataList: {
      mutatePath: userApi.address,
      shouldRevalidate: true,
    },
  });
};

export default useUserAddressDelete;
