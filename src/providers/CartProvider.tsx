import React, { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { ComboInCart, ProductInCart } from "@/types/cart";

type Props = {
  children: ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [product, setProduct] = useState<ProductInCart>();
  const [combo, setCombo] = useState<ComboInCart>();

  return (
    <CartContext.Provider
      value={{
        product,
        setProduct,
        setCombo,
        combo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
