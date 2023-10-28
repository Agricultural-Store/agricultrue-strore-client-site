import React, { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { ProductInCart } from "@/types/cart";

type Props = {
  children: ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [product, setProduct] = useState<ProductInCart>();

  return (
    <CartContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
