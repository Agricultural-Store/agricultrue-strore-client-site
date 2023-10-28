import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ProductDetailRelatedItem from "./ProductDetailRelatedItem";

const ProductDetailRelated = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  const renderItem = () => {
    if (matchesLg) {
      return (
        <>
          <ProductDetailRelatedItem />
          <ProductDetailRelatedItem />
          <ProductDetailRelatedItem />
          <ProductDetailRelatedItem />
        </>
      );
    }
    if (matchesMd) {
      return (
        <>
          <ProductDetailRelatedItem />
          <ProductDetailRelatedItem />
          <ProductDetailRelatedItem />
        </>
      );
    }
    if (matchesSm) {
      <>
        <ProductDetailRelatedItem />
        <ProductDetailRelatedItem />
      </>;
    }
    return (
      <>
        <ProductDetailRelatedItem />
        <ProductDetailRelatedItem />
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
      >
        {renderItem()}
      </Grid>
      <Box height="98px"></Box>
    </Box>
  );
};

export default ProductDetailRelated;
