import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import { UserProfile } from "@/types/user";
import { userApi } from "@/config/api-path";
import useSWR from "swr";

const useUserProfile = () => {
  return useSWR<
    ApiResponse<
      UserProfile & {
        id?: string;
      }
    >,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >({
    path: userApi.profile,
  });
};

export default useUserProfile;
