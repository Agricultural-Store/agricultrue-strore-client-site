import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ProductDetailRelatedItem from "./ProductDetailRelatedItem";
import { Product } from "@/types/product";

type Props = {
  products?: Product[];
};

const ProductDetailRelated = ({ products }: Props) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  const renderItem = () => {
    if (matchesLg) {
      return (
        <>
          {products?.slice(0, 3).map((product) => (
            <ProductDetailRelatedItem
              key={product.id}
              product={product}
            />
          ))}
        </>
      );
    }
    if (matchesMd) {
      return (
        <>
          {products?.slice(0, 2).map((product) => (
            <ProductDetailRelatedItem
              key={product.id}
              product={product}
            />
          ))}
        </>
      );
    }
    return (
      <>
        {products?.slice(0, 1).map((product) => (
          <ProductDetailRelatedItem
            key={product.id}
            product={product}
          />
        ))}
      </>
    );
  };

  return (
    <Box px="48px">
      <Typography
        fontSize="28px"
        fontWeight={500}
        px="30px"
      >
        Sản phẩm liên quan
      </Typography>
      <Grid
        container
        py="48px"
        justifyContent="space-evenly"
      >
        {renderItem()}
      </Grid>
      <Box height="98px"></Box>
    </Box>
  );
};

export default ProductDetailRelated;
