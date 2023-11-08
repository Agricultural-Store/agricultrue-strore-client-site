import { Product } from "@/types/product";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductDetailRelatedItem from "./ProductDetailRelatedItem";

type Props = {
  products?: Product[];
};
const ProductDetailRelated = ({ products }: Props) => {
  return (
    <Box
      px="16px"
      py="48px"
    >
      <Typography
        fontSize="20px"
        fontWeight={500}
        px="30px"
        textAlign="center"
      >
        Sản phẩm liên quan
      </Typography>
      <Grid
        container
        py="48px"
        rowGap="10px"
      >
        {products?.slice(0, 3).map((product) => (
          <ProductDetailRelatedItem
            key={product.id}
            product={product}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductDetailRelated;
