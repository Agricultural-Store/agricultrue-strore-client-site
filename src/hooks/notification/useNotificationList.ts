import { notificationApi } from "@/config/api-path";
import { Notification } from "@/types/notification";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useNotificationList = () => {
  return useSWR<
    ApiResponse<Notification[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    {
      path: notificationApi.list,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useNotificationList;
