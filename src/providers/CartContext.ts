import { CartContextType } from "@/types/order";
import { createContext } from "react";

export const CartContext = createContext<CartContextType>({
  product: undefined,
  setProduct: () => null,
});
