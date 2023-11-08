import { userApi } from "@/config/api-path";
import { ProductInCart } from "@/types/cart";
import { ApiResponse, ErrorResponse, FetchOptions, ListOptions } from "@/types/shared";
import useSWR from "swr";

const useUserCart = () => {
  return useSWR<
    ApiResponse<ProductInCart[]>,
    ErrorResponse<ListOptions>,
    FetchOptions<ListOptions>
  >(
    {
      path: userApi.cart,
    },
    {
      keepPreviousData: true,
    },
  );
};

export default useUserCart;
