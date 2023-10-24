import { userApi } from "@/config/api-path";
import { Address } from "@/types/address";
import { ApiResponse, ErrorResponse, ListOptions, FetchOptions } from "@/types/shared";
import useSWR from "swr";

const useUserAddress = () => {
  return useSWR<
    ApiResponse<Address[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    {
      path: userApi.address,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useUserAddress;
