import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import EmptyStarIcon from "../shared/icons/EmptyStarIcon";
import YellowStarIcon from "../shared/icons/YellowStarIcon";
import { ProductRatingInput } from "@/types/product-rating";
import CustomizedInput from "../shared/CustomizedInput";

function renderStarItem(length: number, value: number) {
  if (length == value)
    return Array.apply(null, Array(length)).map((_v, index) => (
      <YellowStarIcon key={index} />
    ));
  return Array.apply(null, Array(length)).map((_v, index) => (
    <EmptyStarIcon key={index} />
  ));
}

const ProductDetailRatingForm = () => {
  const [rating, setRating] = useState<ProductRatingInput>({
    feedback: "",
    mail: "",
    productRating: 0,
    username: "",
  });

  const handleClick = (value: number) => {
    setRating((pre) => ({
      ...pre,
      productRating: value,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRating((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography
        fontSize="16rem"
        fontWeight={700}
        mb="10rem"
      >
        Chất lượng sản phẩm
      </Typography>
      <Box display="flex">
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(1)}
        >
          {renderStarItem(1, rating.productRating)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10rem" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(2)}
        >
          {renderStarItem(2, rating.productRating)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10rem" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(3)}
        >
          {renderStarItem(3, rating.productRating)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10rem" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(4)}
        >
          {renderStarItem(4, rating.productRating)}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: "10rem" }}
        ></Divider>
        <Box
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => handleClick(5)}
        >
          {renderStarItem(5, rating.productRating)}
        </Box>
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "20rem", my: "30rem" }}
      >
        <CustomizedInput
          fullWidth
          label="Tên của bạn"
          placeholder="Nhập tên của bạn"
          name="username"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Địa chỉ email"
          placeholder="Nhập địa chỉ email"
          name="mail"
          onChange={handleChange}
        />
        <CustomizedInput
          fullWidth
          label="Đánh giá"
          placeholder="Viết đánh giá..."
          rows={4}
          multiline
          name="feedback"
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        type="submit"
      >
        Đánh giá ngay
      </Button>
    </Box>
  );
};

export default ProductDetailRatingForm;
