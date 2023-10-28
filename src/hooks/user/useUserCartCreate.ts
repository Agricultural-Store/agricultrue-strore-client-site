import { ProductInCart, ProductInCartCreateInput } from "@/types/cart";
import { ApiResponse } from "@/types/shared";
import useMutation from "../useMutation";
import { userApi } from "@/config/api-path";

const useUserCartCreate = () => {
  return useMutation<ApiResponse<ProductInCart>, ProductInCartCreateInput>({
    path: userApi.addToCart,
    method: "POST",
    mutateRelatedDataList: {
      mutatePath: userApi.cart,
      shouldRevalidate: true,
    },
  });
};

export default useUserCartCreate;
