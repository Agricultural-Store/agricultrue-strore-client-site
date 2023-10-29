import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";
import { userApi } from "@/config/api-path";
import { OTP, OTPInput } from "@/types/user";

const useUserOTP = () => {
  return useMutation<ApiResponse<OTP & { id: "otp" }>, OTPInput>({
    path: userApi.otp,
    method: "POST",
  });
};

export default useUserOTP;
