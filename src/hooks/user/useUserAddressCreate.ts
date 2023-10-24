import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { Address, AddressCreateInput } from "@/types/address";
import { userApi } from "@/config/api-path";

const useUserAddressCreate = () => {
  return useMutation<ApiResponse<Address>, AddressCreateInput>({
    path: userApi.createAddress,
    method: "POST",
    mutateRelatedDataList: {
      mutatePath: userApi.address,
      shouldRevalidate: true,
    },
  });
};

export default useUserAddressCreate;
