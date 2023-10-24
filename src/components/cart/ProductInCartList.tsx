import { ProductInCart } from "@/types/cart";
import React from "react";
import ProductInCartItem from "./ProductInCartItem";
import { Box } from "@mui/material";

type Props = {
  products?: ProductInCart[];
};

const ProductInCartList = ({ products }: Props) => {
  return (
    <Box>
      {products?.map((product) => (
        <ProductInCartItem
          product={product}
          key={product.id}
        />
      ))}
    </Box>
  );
};

export default ProductInCartList;
