import { userApi } from "@/config/api-path";
import { ApiResponse, ErrorResponse, FetchOptions } from "@/types/shared";
import { UserOrder, UserOrderFilterParams } from "@/types/user";
import useSWR from "swr";

const useUserOrderList = (params?: UserOrderFilterParams) => {
  return useSWR<
    ApiResponse<UserOrder[]>,
    ErrorResponse<UserOrderFilterParams>,
    FetchOptions<UserOrderFilterParams>
  >(
    {
      path: userApi.order,
      params,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useUserOrderList;
