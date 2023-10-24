import ProductItem from "@/components/product/ProductItem";
import { Grid, Box } from "@mui/material";
import React from "react";

const ProductDetailRelatedItem = () => {
  return (
    <Grid
      item
      md={4}
      lg={3}
      sm={6}
    >
      <Box
        sx={{
          width: "90%",
          m: "0 auto",
          height: "320px",
          borderRadius: "5px",
        }}
      >
        <ProductItem
          product={{
            productImage: "/images/image.png",
            productName: "Lua",
            productPrice: 2000,
            productDiscount: 10,
            id: 1,
          }}
        />
      </Box>
    </Grid>
  );
};

export default ProductDetailRelatedItem;
