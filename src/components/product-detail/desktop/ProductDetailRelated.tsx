import ProductItem from "@/components/product/ProductItem";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const ProductDetailRelated = () => {
  return (
    <Box px="48rem">
      <Typography
        fontSize="28rem"
        fontWeight={700}
        px="30rem"
      >
        Sản phẩm liên quan
      </Typography>
      <Grid
        container
        py="48rem"
      >
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              borderRadius: "5rem",
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
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              borderRadius: "5rem",
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
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              borderRadius: "5rem",
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
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
              m: "0 auto",
              height: "320rem",
              borderRadius: "5rem",
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
      </Grid>
      <Divider />
    </Box>
  );
};

export default ProductDetailRelated;
