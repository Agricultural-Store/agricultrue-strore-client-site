import { userApi } from "@/config/api-path";
import { ApiResponse } from "@/types/shared";
import { ChangePasswordInput } from "@/types/user";
import useMutation from "../useMutation";

const useUserChangePassword = () => {
  return useMutation<ApiResponse<never>, ChangePasswordInput>({
    path: userApi.changePassword,
    method: "POST",
  });
};

export default useUserChangePassword;
