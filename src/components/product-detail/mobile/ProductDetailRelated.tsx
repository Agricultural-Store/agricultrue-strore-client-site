import ProductItem from "@/components/product/ProductItem";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProductDetailRelated = () => {
  return (
    <Box
      px="16px"
      py="48px"
    >
      <Typography
        fontSize="20px"
        fontWeight={700}
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
        <Grid
          item
          xs={12}
        >
          <Box
            sx={{
              m: "0 auto",
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
          xs={12}
        >
          <Box
            sx={{
              m: "0 auto",
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
          xs={12}
        >
          <Box
            sx={{
              m: "0 auto",
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
          xs={12}
        >
          <Box
            sx={{
              m: "0 auto",
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
