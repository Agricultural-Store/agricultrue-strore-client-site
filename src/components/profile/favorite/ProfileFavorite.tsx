"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import { useRouter } from "next-intl/client";
import ProductItem from "@/components/product/ProductItem";
import CustomizedInput from "@/components/shared/CustomizedInput";
import SearchGrayIcon from "@/components/shared/icons/SearchGrayIcon";

const ProfileFavorite = () => {
  const [products] = useState([
    {
      productImage: "/images/image.png",
      productName: "Lua",
      productPrice: 2000,
      productDiscount: 10,
      id: 1,
    },
    {
      productImage: "/images/image.png",
      productName: "Lua",
      productPrice: 2000,
      productDiscount: 10,
      id: 2,
    },
    {
      productImage: "/images/image.png",
      productName: "Lua",
      productPrice: 2000,
      productDiscount: 10,
      id: 3,
    },
    {
      productImage: "/images/image.png",
      productName: "Lua",
      productPrice: 2000,
      productDiscount: 10,
      id: 4,
    },
    {
      productImage: "/images/image.png",
      productName: "Lua",
      productPrice: 2000,
      productDiscount: 10,
      id: 5,
    },
    {
      productImage: "/images/image.png",
      productName: "Lua",
      productPrice: 2000,
      productDiscount: 10,
      id: 5,
    },
  ]);

  const router = useRouter();

  const handleClick = (id?: number) => {
    console.log(id);
    router.push(`/product/${id}`);
  };

  return (
    <Box
      width="calc(100% - 250px)"
      pr="24px"
      pl="48px"
    >
      <Box
        bgcolor="color.bgWhite"
        p="24px"
      >
        <Box
          sx={{
            mb: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>Gạo Dẻo</Typography>
          <Box>
            <CustomizedInput
              size="small"
              sx={{ width: "203px" }}
              endAdornment={<SearchGrayIcon />}
              placeholder="Tìm kiếm"
            />
          </Box>
        </Box>
        <Grid
          container
          spacing={3}
        >
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <ProductItem
                product={product}
                onClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
        <CustomizedPagination
          sx={{ mt: "48px" }}
          itemCount={products.length}
          rowPerPage={3}
        />
      </Box>
    </Box>
  );
};

export default ProfileFavorite;
