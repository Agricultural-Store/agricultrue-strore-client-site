import { ProductInCart } from "@/types/cart";
import React, { useContext } from "react";
import ProductInCartItem from "./ProductInCartItem";
import { Box } from "@mui/material";
import { CartContext } from "@/providers/CartContext";
import useUserCartUpdate from "@/hooks/user/useUserCartUpdate";
import { userApi } from "@/config/api-path";

type Props = {
  products?: ProductInCart[];
  isBuyNow?: boolean;
};

const ProductInCartList = ({ products, isBuyNow }: Props) => {
  const { setProduct, product } = useContext(CartContext);

  const { trigger } = useUserCartUpdate();
  const handleChangeCount = (value: number, id?: number) => {
    if (isBuyNow) {
      if (product)
        setProduct?.({
          ...product,
          productCount: value,
        });
    } else {
      trigger({
        path: userApi.changeCart(id),
        body: {
          productCount: value,
        },
      });
    }
  };

  return (
    <Box>
      {products?.map((product) => (
        <ProductInCartItem
          product={product}
          key={product.id}
          onChangeCount={handleChangeCount}
        />
      ))}
    </Box>
  );
};

export default ProductInCartList;
