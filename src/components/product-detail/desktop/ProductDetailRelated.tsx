import ProductItem from "@/components/product/ProductItem";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProductDetailRelated = () => {
  return (
    <Box px="48px">
      <Typography
        fontSize="28px"
        fontWeight={700}
        px="30px"
      >
        Sản phẩm liên quan
      </Typography>
      <Grid
        container
        py="48px"
      >
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
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
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
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
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
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
        <Grid
          item
          xs={3}
        >
          <Box
            sx={{
              width: "80%",
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
      </Grid>
    </Box>
  );
};

export default ProductDetailRelated;
