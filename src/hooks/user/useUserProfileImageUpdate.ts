import { userApi } from "@/config/api-path";
import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";
import { UserProfile, UserUpdateInput } from "@/types/user";

const useUserProfileImageUpdate = () => {
  return useMutation<ApiResponse<UserProfile & { id: number }>, UserUpdateInput>({
    path: userApi.updateProfileImage,
    method: "PUT",
    mutateRelatedDataList: {
      mutatePath: userApi.profile,
      shouldRevalidate: true,
    },
  });
};

export default useUserProfileImageUpdate;
