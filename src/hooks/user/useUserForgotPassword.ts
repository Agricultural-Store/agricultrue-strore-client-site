import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";
import { userApi } from "@/config/api-path";
import { ForgotPasswordInput } from "@/types/user";

const useUserForgotPassword = () => {
  return useMutation<ApiResponse<never>, ForgotPasswordInput>({
    path: userApi.forgotPassword,
    method: "POST",
  });
};

export default useUserForgotPassword;
