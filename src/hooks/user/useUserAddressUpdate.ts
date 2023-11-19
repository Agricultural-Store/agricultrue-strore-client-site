import { userApi } from "@/config/api-path";
import { Address, AddressUpdateInput } from "@/types/address";
import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";

const useUserAddressUpdate = (id?: number) => {
  return useMutation<ApiResponse<Address>, AddressUpdateInput>({
    path: userApi.updateAddress(id),
    method: "PATCH",
    mutateRelatedDataList: {
      mutatePath: userApi.address,
      shouldRevalidate: true,
    },
  });
};

export default useUserAddressUpdate;
