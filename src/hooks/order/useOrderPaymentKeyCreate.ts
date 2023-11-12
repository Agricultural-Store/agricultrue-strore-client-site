import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";
import { PaymentCreateKey, PaymentCreateKeyInput } from "@/types/order";
import { paymentApi } from "@/config/api-path";

const useOrderPaymentKeyCreate = () => {
  return useMutation<
    ApiResponse<
      PaymentCreateKey & {
        id?: string;
      }
    >,
    PaymentCreateKeyInput
  >({
    path: paymentApi.createPaymentKey,
    method: "POST",
  });
};

export default useOrderPaymentKeyCreate;
