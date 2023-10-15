import useMutation from "../useMutation";
import { ApiResponse } from "@/types/shared";
import { SignUpInput } from "@/types/auth";
import { authApi } from "@/config/api-path";

const useSignUp = () => {
  return useMutation<ApiResponse<never>, SignUpInput>({
    path: authApi.signUp,
    method: "POST",
  });
};

export default useSignUp;
