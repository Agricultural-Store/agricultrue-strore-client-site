import { ProductInCart } from "@/types/cart";
import React, { useContext } from "react";
import ProductInCartItem from "./ProductInCartItem";
import { Box } from "@mui/material";
import { CartContext } from "@/providers/CartContext";

type Props = {
  products?: ProductInCart[];
  isBuyNow?: boolean;
};

const ProductInCartList = ({ products, isBuyNow }: Props) => {
  const { setProduct, product } = useContext(CartContext);
  const handleChangeCount = (value: number, id?: number) => {
    const index = products?.findIndex((product) => product.id === id) || -1;
    if (isBuyNow) {
      if (product)
        setProduct?.({
          ...product,
          productCount: value,
        });
    } else {
      console.log(index);
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
