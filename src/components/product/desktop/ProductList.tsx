import SearchBox from "@/components/shared/SearchBox";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductItem from "../ProductItem";
import CustomizedSelect from "@/components/shared/CustomizedSelect";
import { OptionType } from "@/types/shared";
import CustomizedPagination from "@/components/shared/CustomizedPagination";
import CustomizedCheckbox from "@/components/shared/CustomizedCheckbox";
import { useRouter } from "next-intl/client";

const menuItems: OptionType[] = [
  {
    value: 1,
    label: "Sản phẩm phổ biến",
  },
  {
    value: 2,
    label: "Giá từ thấp đến cao",
  },
];

const ProductList = () => {
  const [categories] = useState([
    {
      categoryName: "Gạo Tấm",
      id: 1,
    },
    {
      categoryName: "Gạo Lứt",
      id: 2,
    },
    {
      categoryName: "Gạo Dẻo",
      id: 3,
    },
    {
      categoryName: "Gạo Khô",
      id: 4,
    },
    {
      categoryName: "Gạo Nấu Cơm",
      id: 5,
    },
    {
      categoryName: "Gạo Nấu Xôi, Chè",
      id: 6,
    },
    {
      categoryName: "Gạo Làm Bánh",
      id: 7,
    },
  ]);
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
    <Box sx={{ p: "64px 48px", display: "flex" }}>
      <Box sx={{ mr: "48px", width: "300px" }}>
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: "24px" }}>
            Tìm kiếm
          </Typography>
          <SearchBox placeholder="Điền yêu cầu của bạn" />
        </Box>
        <Divider sx={{ my: "24px" }} />
        <Box>
          <Typography
            mb="24px"
            fontSize="20px"
            fontWeight={600}
          >
            Loại sản phẩm
          </Typography>
          <Box>
            {categories.map((category) => (
              <Box
                mb="8px"
                key={category.id}
              >
                <CustomizedCheckbox
                  label={category.categoryName}
                  value={category.id}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "calc(100% - 300px)" }}>
        <Box
          sx={{
            mb: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>Gạo Dẻo</Typography>
          <CustomizedSelect menuItems={menuItems} />
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

export default ProductList;
