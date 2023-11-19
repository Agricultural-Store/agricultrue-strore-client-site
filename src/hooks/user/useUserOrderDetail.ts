import { userApi } from "@/config/api-path";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import { UserOrder } from "@/types/user";
import useSWR from "swr";

const useUserOrderDetail = (id?: number) => {
  return useSWR<
    ApiResponse<UserOrder>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions> | null
  >(
    id
      ? {
          path: userApi.orderDetail(id),
        }
      : null,
    {
      keepPreviousData: true,
    },
  );
};

export default useUserOrderDetail;
